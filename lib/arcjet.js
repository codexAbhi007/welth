import {
  ARCJET_CAPACITY,
  ARCJET_INTERVAL,
  ARCJET_REFILL_RATE,
} from "@/constants/constants";
import arcjet, { tokenBucket } from "@arcjet/next";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["userId"],
  rules: [
    tokenBucket({
      mode: "LIVE",
      refillRate: ARCJET_REFILL_RATE,
      interval: ARCJET_INTERVAL,
      capacity: ARCJET_CAPACITY,
    }),
  ],
});

export default aj;
