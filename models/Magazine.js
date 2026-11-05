import mongoose from "mongoose";

const magazineShema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    issueNamber: {
        type: Namber,
        required: true,
    },
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pablisher",
        required: true,
    },


});

const Magazine = mongoose.model("Magazine", magazineShema);

export default Magazine;
