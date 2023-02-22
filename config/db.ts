import mongoose from "npm:mongoose";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const env = config()
console.log(env);

await mongoose.connect(env.MONGO_DB);

mongoose.connection;