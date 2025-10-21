import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config();

// Connect to Redis using environment variables
const redis = Redis.fromEnv();

// Create a rate limiter: 10 requests per 10 seconds
export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(100, "20 s"),
  analytics: true,
});

export default ratelimit;
