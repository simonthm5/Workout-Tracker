var express = require("express");
var mongoose = require("mongoose");
var logger = require("morgan");
var PORT = process.env.PORT || 3306;
var app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

  app.use(require("./routes/api.js"));
  app.use(require(".routes/viewer.js"));
  app.listen(PORT, () => {
      console.log(`Now listening on port ${PORT}`);
  });