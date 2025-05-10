import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Express + TSX!");
});

app.listen(PORT, () => {
    console.log(`Server started, listening on PORT: ${PORT}`);
});