const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/asaddynamic")
.then(() => {
    console.log(`Connection Successful`);
}).catch((e) => {
    console.log(`No Connection`);
})