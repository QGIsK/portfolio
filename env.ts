/*
|--------------------------------------------------------------------------
| Validating Environment Variables
|--------------------------------------------------------------------------
|
| In this file we define the rules for validating environment variables.
| By performing validation we ensure that your application is running in
| a stable environment with correct configuration values.
|
| This file is read automatically by the framework during the boot lifecycle
| and hence do not rename or move this file to a different location.
|
*/

import Env from '@ioc:Adonis/Core/Env'

export default Env.rules({
  HOST: Env.schema.string.optional({ format: 'host' }),
  PORT: Env.schema.number.optional(),
  APP_KEY: Env.schema.string.optional(),
  APP_NAME: Env.schema.string.optional(),
  DRIVE_DISK: Env.schema.enum.optional(['local', 's3'] as const),
  NODE_ENV: Env.schema.enum.optional(['development', 'production', 'testing'] as const),

  MAIL_FROM: Env.schema.string.optional({ format: 'email' }),
  MAIL_TO: Env.schema.string.optional({ format: 'email' }),
  SMTP_HOST: Env.schema.string.optional({ format: 'host' }),
  SMTP_PORT: Env.schema.number.optional(),
  SMTP_USERNAME: Env.schema.string.optional(),
  SMTP_PASSWORD: Env.schema.string.optional(),

  PG_HOST: Env.schema.string.optional({ format: 'host' }),
  PG_PORT: Env.schema.number.optional(),
  PG_USER: Env.schema.string.optional(),
  PG_PASSWORD: Env.schema.string.optional(),
  PG_DB_NAME: Env.schema.string.optional(),

  S3_KEY: Env.schema.string.optional(),
  S3_SECRET: Env.schema.string.optional(),
  S3_BUCKET: Env.schema.string.optional(),
  S3_REGION: Env.schema.string.optional(),
  S3_ENDPOINT: Env.schema.string.optional({ format: 'url' }),
})
