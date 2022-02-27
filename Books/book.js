const mongoose = require("mongoose")

const BookSchema = new mongoose.Schema({
    BookName: {
        type: String,
        require: true,
    },
    daysSinceIAte: {
        type: Number,
        require:true,
    }, 
});

const Book = mongoose.model("BookData",BookSchema)
module.exports= Book
