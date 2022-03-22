const { Thought } = require("../models");

const thoughtIndex = async (req, res, next) => {
    try {
        const foundThoughts = await Thought.find().limit(50);
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

const thoughtShow = (req, res, next) => {
    try {
        const foundThought = Thought.findById(req.params.id);
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

const thoughtCreate = (req, res, next) => {
    try {
        res.send(`thoughtCreate works`);
    } catch (error) {
        console.log(error);
        res.send(error);
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