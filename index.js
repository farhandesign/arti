const express = require('express');
const bodyParser = require('body-parser');

const capabilities = require('./routes/capabilities');

const app = express();

//Saw someone do this with options inorder to to fix the problem i was getting
let options = {
  dotfiles: "ignore",
  etag: true,
  extensions: ["htm", "html"],
  index: false,
  maxAge: "7d",
  redirect: false,
  setHeaders: function(res, path, stat) {
      res.set("x-timestamp", Date.now());
  }
};

app.use(express.static('public', options));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(capabilities);

app.listen(3500, () => {
    console.log('listening');
});