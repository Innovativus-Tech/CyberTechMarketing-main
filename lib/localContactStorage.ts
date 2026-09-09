import { randomUUID } from 'node:crypto';
import { appendFile, chmod, mkdir } from 'node:fs/promises';
import path from 'node:path';

type LocalContactSubmission = {
  category: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  serviceInterest?: string;
  message: string;
};

export async function saveLocalContactSubmission(data: LocalContactSubmission) {
  const directory = path.join(process.cwd(), '.data');
  const file = path.join(directory, 'contact-submissions.jsonl');
  const id = randomUUID();

  await mkdir(directory, { recursive: true, mode: 0o700 });
  await appendFile(
    file,
    `${JSON.stringify({ id, ...data, createdAt: new Date().toISOString() })}\n`,
    { encoding: 'utf8', mode: 0o600 }
  );
  await chmod(file, 0o600);

  return id;
}
