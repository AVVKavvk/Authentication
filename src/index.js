const express = require("express");
const { PORT } = require("./config/server");
const apiRouter =require('./routes/index')
const serverStart = async () => {
  const app = express();
  app.use(express.json({ limit: "10mb" }));
  app.use('/api',apiRouter)
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

serverStart();
