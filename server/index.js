import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();

app.use(express.json());

// app.use(cors());

const URL =
  "mongodb+srv://hamzatasadaq:oymhs5U1ohk2JrKm@cluster0.dmnbu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

app.use("/posts", postRoutes);

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is Running on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });

mongoose.set("useFindAndModify", false);
