const { Thought } = require("../models");

const randomThought = async (req, res, next) => {     
    try {
        const thoughts = await Thought.find();
        const randomIndex = Math.floor(Math.random() * thoughts.length)
        const randomThought = thoughts.splice(randomIndex, 1)
        if (randomThought !== undefined) {
            return res.status(200).json({
                randomThought,
                msg: "Random thought found!",
            });
        } else {
            return res.status(200).json({
                msg: "No shower thoughts were found. Please try again later.",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: error,
            msg: "Something went wrong. Please try again."
        });
    }
}

module.exports = {
    randomThought,
}