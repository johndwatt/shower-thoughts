const { Thought } = require("../models");

const thoughtIndex = async (req, res, next) => {
    try {
        const foundThoughts = await Thought.find().limit(50);
        return res.status(200).json({
            thoughts: foundThoughts,
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json('Error:', error);
    }
}

const thoughtShow = (req, res, next) => {
    try {
        res.send(`thoughtShow works with id: ${req.params.id}`);
    } catch (error) {
        console.log(error);
        res.send(error);
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