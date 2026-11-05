import mongoose, { Schema } from "mongoose";

const articleShema = new mongoose.Schema ({
    title: {
        type: String,
    },
    content: {
        type: String,
    },
   tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tag"
   }]
});

const Article = mongoose.model("Article", articleShema);
