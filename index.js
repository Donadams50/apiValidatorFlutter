
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());
const cors = require("cors");
app.use(cors()); 
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')));






//  require("./app/product/product.routes.js")(app)
//  require("./app/members/members.routes.js")(app)
//  require("./app/cart/cart.routes.js")(app)


app.get("/", (req, res) => {
    res.json({ message: "Welcome to api validator  application." });
  });


// Connect to port
const port = process.env.PORT || 8000     

app.listen(port, ()=> console.log(`listening on port ${port}...`)); 