import dotenv from "dotenv";
dotenv.config();

export const {
  APP_PORT,
  DEBUG_MODE,
  JWT_SECRET,
  STRIPE_SECRET_KEY,
  STRIPE_PUBLISHABLE_KEY,
} = process.env;
