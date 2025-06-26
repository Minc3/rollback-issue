import Redis from 'ioredis';

export const redis = new Redis({
  const CONFIG = useRuntimeConfig();
  port: parseInt(CONFIG.REDIS_PORT),
  host: CONFIG.REDIS_HOST,
  password: CONFIG.REDIS_PASSWORD,
  maxRetriesPerRequest: 3,
});

redis.on('error', (error) => {
  console.error('Redis connection error:', error);
});

redis.on('connect', () => {
  console.log('Redis connected successfully');
});

redis.on('ready', () => {
  console.log('Redis ready to receive commands');
});

redis.on('close', () => {
  console.log('Redis connection closed');
});

redis.on('reconnecting', () => {
  console.log('Redis reconnecting...');
});
