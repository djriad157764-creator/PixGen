import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

let cachedClient = null;

const getMongoClient = () => {
  if (!cachedClient) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI environment variable is not set");
    }
    cachedClient = new MongoClient(uri);
  }
  return cachedClient;
};

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(getMongoClient(), {
    client: getMongoClient(),
  }),
});
