const { env } = process as { env: { [key: string]: string } };

export const MONGO_URI = process.env.MONGO_URI;

export const  MAILTRAP_PASS = process.env.MAILTRAP_PASS;

export const  MAILTRAP_USER = process.env.MAILTRAP_USER;
