const { Thought } = require("../models");

const thoughtIndex = async (req, res, next) => {
    try {
        const foundThoughts = await Thought.find().sort({'createdAt': -1}).limit(20);
        return res.status(200).json({
            thoughts: foundThoughts,
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: error,
            msg: "Something went wrong. Please try again."
        });
    }
}

const thoughtShow = async (req, res, next) => {
    try {
        const foundThought = await Thought.findById(req.params.id);
        return res.status(200).json({
            thought: foundThought,
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: error,
            msg: "Something went wrong. Please try again."
        });
    }
}

const thoughtCreate = async (req, res, next) => {
    try {
        const content = req.body.content;
        const thinker = req.body.thinker;
        const nsfw = req.body.nsfw;
    
        const newThought = new Thought({
            content,
            thinker,
            nsfw,
        });

        await newThought.save();
        return res.status(201).json({
            msg: "Success - new shower thought added.",
            newThought, 
        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: error,
            msg: "Something went wrong. Please try again."
        });
    }
}

const thoughtUpdate = async (req, res, next) => {
    try {
        const foundThought = await Thought.findById(req.params.id);

        foundThought.content = req.body.content;
        foundThought.thinker = req.body.thinker;
        foundThought.nsfw = req.body.nsfw;
        await foundThought.save();

        return res.status(200).json({
            msg: "Success - shower thought updated.",
            foundThought, 
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: error,
            msg: "Something went wrong. Please try again."
        });
    }
}

const thoughtDestroy = async (req, res, next) => {
    try {
        await Thought.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            msg: "Success - shower thought deleted.", 
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: error,
            msg: "Something went wrong. Please try again."
        });
    }
}

module.exports = {
    thoughtIndex,
    thoughtShow,
    thoughtCreate,
    thoughtUpdate,
    thoughtDestroy,
}