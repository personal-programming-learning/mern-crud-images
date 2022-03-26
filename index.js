import app from "./src/app.js";
import { PORT } from "./src/helper/config.js";
import { connectDB } from "./src/connection/db.js";

connectDB();


app.listen(PORT);
console.log('Server in running port', PORT)