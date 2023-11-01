const express = require("express");
const { PORT } = require("./config/server");
const serverStart = async () => {
  const app = express();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

serverStart();
