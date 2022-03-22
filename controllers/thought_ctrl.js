const { Thought } = require("../models");

const thoughtIndex = async (req, res, next) => {
    try {
        const foundThoughts = await Thought.find().sort({'createdAt': -1}).limit(1);
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

const thoughtUpdate = (req, res, next) => {
    try {
        res.send(`thoughtUpdate works with id: ${req.params.id}`);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

const thoughtDestroy = (req, res, next) => {
    try {
        res.send(`thoughtDestory works with id: ${req.params.id}`);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

module.exports = {
    thoughtIndex,
    thoughtShow,
    thoughtCreate,
    thoughtUpdate,
    thoughtDestroy,
}