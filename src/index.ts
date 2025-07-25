import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dashboardRoutes from "./Routs/dashbordrouts";
import productRoutes from "./Routs/ProductsRout";
import userRoutes from "./Routs/userRout";
import expenseRoutes from "./Routs/expenseRoutes";
/* * Import  routes here*/


/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.use("/dashboard", dashboardRoutes); // http://localhost:8000/dashboard
app.use("/products", productRoutes); // http://localhost:8000/products
 app.use("/users", userRoutes); // http://localhost:8000/users
 app.use("/expenses", expenseRoutes); // http://localhost:8000/expenses




const port = Number(process.env.PORT) || 3001;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});