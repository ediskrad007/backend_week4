import express from 'express';
import userRoutes from "./routes/userRoutes.js";
import logger from "./middleware/logger.js";
const app = express();
app.use(logger);
app.use(express.json());
app.use("/users", userRoutes);
// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
