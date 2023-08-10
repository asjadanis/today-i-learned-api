import express from "express";
import config from "./configs/config";

const app = express();

const PORT = config.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
