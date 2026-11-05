import mongoose from "mongoose";


const tagShema = new mongoose.Schema({
    name: {
        type: String
    },
    articles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article",

    }]
});

const Tag = mongoose.model("Tag", tagShema);
export default Tag;