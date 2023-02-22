
import { registerAs } from '@nestjs/config'
import * as Joi from 'joi'
import { ConfigType as ConfigTypeNest } from '@nestjs/config';

const config = registerAs('config', () => ({
  database: {
    name: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT,
  }
}))

export default config

export const environments = {
  development: '.env',
  production: '.env.prod',
  staging: '.env.staging',
}

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid(...Object.keys(environments)),
  DATABASE_NAME: Joi.string().required(),
  DATABASE_PORT: Joi.number().required(),
})

export type ConfigType = ConfigTypeNest<typeof config>