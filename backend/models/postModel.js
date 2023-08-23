const mongoose = require("mongoose");

const connectString = mongoose.Schema({
    PostType: {
        type: String,
        required: [true, " "]
    }
});

