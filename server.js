import express from "express";
import cors from "cors";
import { APP_PORT } from "./config";
import connectToMongo from "./db";
import errorHandler from "./middlewares/errorhandler";
import bodyParser from "body-parser";
const app = express();
connectToMongo();
import routes from "./routes";
app.use(cors());
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(express.json());
app.use("/api", routes);

app.use(errorHandler);
app.listen(APP_PORT, () => {
  console.log(`listening on port ${APP_PORT}`);
});
