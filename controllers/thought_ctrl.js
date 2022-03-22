const { Thought } = require("../models");

const thoughtIndex = (req, res, next) => {
    try {
        res.send("thoughtIndex works");
    } catch (error) {
        console.log(error);
        res.send(error);
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