import mongoose from "mongoose";

const ClickSchema = mongoose.Schema({
    insertedAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    ipAddress: {
        type: String,
        required: true,
        default: "0.0.0.0"
    },
    targetParamValue: {
        type: String,
        default: ""
    }
}, { _id: false });

const TargetValueSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
}, { _id: false });

const LinkSchema = mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
        default: ""
    },
    clicks: [ClickSchema],
    targetParamName: {
        type: String,
        required: true,
        default: "t"
    },
    targetValues: [TargetValueSchema]
});

export default mongoose.model("Link", LinkSchema);
