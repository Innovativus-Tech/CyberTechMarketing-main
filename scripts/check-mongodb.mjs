import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI?.trim();

if (!uri) {
  console.error('MongoDB check failed: MONGODB_URI is not available in this runtime.');
  process.exit(1);
}

let parsed;
try {
  parsed = new URL(uri);
} catch {
  console.error('MongoDB check failed: MONGODB_URI is not a valid connection URI. Keep it on one line and URL-encode special characters in the username or password.');
  process.exit(1);
}

if (!['mongodb:', 'mongodb+srv:'].includes(parsed.protocol)) {
  console.error('MongoDB check failed: the URI must start with mongodb:// or mongodb+srv://.');
  process.exit(1);
}

console.log(`Checking MongoDB host ${parsed.hostname} and database ${parsed.pathname.slice(1) || '(default)'}...`);

try {
  await mongoose.connect(uri, {
    bufferCommands: false,
    serverSelectionTimeoutMS: 10000,
    connectTimeoutMS: 10000,
  });
  await mongoose.connection.db.admin().ping();
  console.log('MongoDB check passed: connection, authentication, TLS, and ping succeeded.');
} catch (error) {
  console.error('MongoDB check failed:', {
    name: error?.name || 'UnknownError',
    code: error?.code || 'unknown',
    message: error?.message || 'No error message',
  });
  process.exitCode = 1;
} finally {
  await mongoose.disconnect().catch(() => undefined);
}
