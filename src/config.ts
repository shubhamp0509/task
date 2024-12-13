import dotenv from "dotenv";

dotenv.config();

export const config = {
  sleepTime: parseInt(process.env.SLEEP_TIME || "30000", 10), // 30 seconds
  requestPerBatch: parseInt(process.env.REQUEST_PER_BATCH || "300", 10),
  requestPerSecond: parseInt(process.env.REQUEST_PER_SECOND || "5", 10),
  batchSleep: parseInt(process.env.BATCH_SLEEP || "0", 10), // Adjust if needed
  apiUrl: process.env.API_URL || "https://randomuser.me/api/",
};
