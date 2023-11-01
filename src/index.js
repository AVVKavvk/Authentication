const express = require("express");
const { PORT, DB_SYNC } = require("./config/server");
const apiRouter = require("./routes/index");
const db = require("./models/index");
const {User,Role} = require('./models/index')
const serverStart = async () => {
  const app = express();
  app.use(express.json({ limit: "10mb" }));
  app.use("/api", apiRouter);

  app.listen(PORT,async () => {
    if (DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }
    // const user = await User.findByPk(9);
    // const role= await Role.findByPk(2);
    // role.addUser(user)
    console.log(`Server is running on port ${PORT}`);
  });
};

serverStart();
