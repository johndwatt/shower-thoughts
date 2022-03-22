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

module.exports = {
    thoughtIndex,
    thoughtShow,
}