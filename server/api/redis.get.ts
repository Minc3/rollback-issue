import { redis } from '../redis';

export default defineEventHandler(async () => {
  try {
    await redis.get('nothing:');
    return 'redis is connected';
  } catch (error: unknown) {
    console.error('Redis connection error:', error);
    return 'redis is not connected: ' + error?.message;
  }
});
