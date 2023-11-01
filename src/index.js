const express = require("express");
const { PORT } = require("./config/server");
const apiRouter = require("./routes/index");
const UserService = require("./services/user-service");
const serverStart = async () => {
  const app = express();
  app.use(express.json({ limit: "10mb" }));
  app.use("/api", apiRouter);

  app.listen(PORT, () => {
    const repo = new UserService();
    // const token = repo.createToken({ email: "vipin@gmailcom", id: 1 });
    // console.log(token);
    // const response=repo.verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpcGluQGdtYWlsY29tIiwiaWQiOjEsImlhdCI6MTY5ODgzNDIwNiwiZXhwIjoxNzAxNDI2MjA2fQ.wfF6emaU3HBOXY4omxXxCqSavHOAQnaG_-ktKAJwE1Y')
    // console.log(response);
    console.log(`Server is running on port ${PORT}`);
  });
};

serverStart();
