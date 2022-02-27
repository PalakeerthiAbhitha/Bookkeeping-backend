const express= require('express');
const mongoose = require("mongoose");
const app = express();

const BookModel = require("./Books/book")

app.use(express.json());

mongoose.connect("mongodb+srv://user1:<abhitha>@cluster0.dslci.mongodb.net/BooksData?retryWrites=true&w=majority",
 {
    useNewurlParser: true,
 }

);

app.get("/",async(req, res) => {
const book = new bookModel({BookName:"THOMOS", daysSinceIate: 3});

try {
    await fook.save();
    res.send("inserted data");
} catch(err) {
    console.log(err);

}
});



app.listen(3001, () => {
    console.log("Server running on port 3001...");
});

