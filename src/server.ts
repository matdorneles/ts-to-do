import * as dotenv from 'dotenv'
import express from "express";
import "express-async-errors";
import cors from "cors";
import { router } from "./routes";

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(router);

const port = 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));
