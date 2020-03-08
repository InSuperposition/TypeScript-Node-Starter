import { config } from "dotenv";
import express from "express";
import routes from "./routes";

// initialize .env files' variables
config();
const env = config();
if (env.error) {
	throw env.error;
}

// initialize app
const app = express();
app.use("/", routes);

const port = Number(process.env.PORT) || 8443;

app.listen(port, () => {
	console.log(`API server started on port: ${port}`);
});

export default app;
