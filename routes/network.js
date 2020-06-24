// const express = require("express");
// const cors =  require("cors");
// const app = express();


// app.use(express.json());
// app.use(cors());
var express = require('express');
var { exec } = require("child_process");
var router = express.Router();

router.get('/', (req, res) => {
  exec("speed-test -j", (error, stdout, stderr) => {
      if (error) {
          console.log(`error: ${error.message}`);
          return;
      }
      if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
      }
	  res.json(JSON.parse(stdout));
  });
});

module.exports = router;