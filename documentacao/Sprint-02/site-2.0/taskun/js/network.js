const express = require("express");
const { exec } = require("child_process");
const cors =  require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get('/network', (req, res) => {
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

app.listen(3000);