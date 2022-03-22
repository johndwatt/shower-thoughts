const mongoose = require("mongoose");

const thoughtSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: [true, "An empty shower thought is not worth sharing."]
        },
        thinker: {
            type: String,
            default: "Anonymous"
        },
        nsfw: {
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps: true,
    }
);

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;