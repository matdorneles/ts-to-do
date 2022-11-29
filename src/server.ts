import * as dotenv from 'dotenv'
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import { router } from "./routes";

const app = express();

dotenv.config();
console.log(process.env);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return res.status(400).json({
            error: err.message
        });
    }
    
    return res.status(500).json({
        status: "error",
        messge: "Internal server error"
    });
});

app.use(express.json());
app.use(cors());
app.use(router);

const port = 8080;

app.listen(port, () => console.log(`Server running on port ${port}`))