const express = require("express");

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, (res, err) => {
  console.log(`server listen on port ${PORT}`);
});
