import mongoose from "mongoose";

import { MONGODB_URI } from "../helper/config.js";

export const connectDB = async() => {
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.info({ 
      'ConnectedName': db.connection.name,
      'ConnectedHost': db.connection.host,
      'ConnectedPort': db.connection.port,
      'ConnectedUser': db.connection.user,
    });
  } catch (error) { 
    console.error(error)
  }
}