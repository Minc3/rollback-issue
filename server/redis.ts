import Redis from 'ioredis';

let redisInstance: Redis | null = null;

export function getRedis() {
  if (!redisInstance) {
    const config = useRuntimeConfig();

    redisInstance = new Redis({
      port: parseInt(config.REDIS_PORT),
      host: config.REDIS_HOST,
      password: config.REDIS_PASSWORD,
      maxRetriesPerRequest: 3,
    });

    redisInstance.on('error', (error) => {
      console.error('Redis connection error:', error);
    });

    redisInstance.on('connect', () => {
      console.log('Redis connected successfully');
    });

    redisInstance.on('ready', () => {
      console.log('Redis ready to receive commands');
    });

    redisInstance.on('close', () => {
      console.log('Redis connection closed');
    });

    redisInstance.on('reconnecting', () => {
      console.log('Redis reconnecting...');
    });
  }

  return redisInstance;
}
