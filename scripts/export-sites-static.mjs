import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const appOutput = path.join(projectRoot, ".next/server/app");
const staticOutput = path.join(projectRoot, ".next/static");
const publicDir = path.join(projectRoot, "public");
const distDir = path.join(projectRoot, "dist");

function copyDirectory(source, destination) {
  if (!fs.existsSync(source)) return;
  fs.mkdirSync(destination, { recursive: true });
  fs.cpSync(source, destination, { recursive: true });
}

function listFiles(directory) {
  if (!fs.existsSync(directory)) return [];

  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) return listFiles(absolute);
    return entry.isFile() ? [absolute] : [];
  });
}

function writeHtml(relativeFile) {
  const source = path.join(appOutput, relativeFile);
  const destination = path.join(distDir, relativeFile);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);

  if (relativeFile === "index.html") return;

  const routeName = relativeFile.slice(0, -".html".length);
  const routeIndex = path.join(distDir, routeName, "index.html");
  fs.mkdirSync(path.dirname(routeIndex), { recursive: true });
  fs.copyFileSync(source, routeIndex);
}

fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir, { recursive: true });

copyDirectory(publicDir, distDir);
copyDirectory(staticOutput, path.join(distDir, "_next/static"));

for (const file of listFiles(appOutput)) {
  const relative = path.relative(appOutput, file);
  if (relative.endsWith(".html")) writeHtml(relative);
}

const notFoundSource = path.join(distDir, "_not-found.html");
if (fs.existsSync(notFoundSource)) {
  fs.copyFileSync(notFoundSource, path.join(distDir, "404.html"));
}

console.log(`Exported static Sites build to ${distDir}`);
