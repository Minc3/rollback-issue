import Redis from 'ioredis';

const CONFIG = useRuntimeConfig();

export const redis = new Redis({
  port: parseInt(CONFIG.REDIS_PORT),
  host: CONFIG.REDIS_HOST,
  password: CONFIG.REDIS_PASSWORD,
  maxRetriesPerRequest: 3,
});
