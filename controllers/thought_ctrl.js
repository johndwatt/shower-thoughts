const { Thought } = require("../models");

/**
 * Retrieves and returns 50 of the most recent shower thoughts.
 * @param {Object} req Express request.
 * @param {Object} res Express response.
 * @param {Function} next Express next.
 * @returns {Object} JSON response object with returned shower thoughts.
 */
const thoughtIndex = async (req, res, next) => {
    try {
        if (req.query.search) {
            query = {
                $or: [
                {
                    content: {
                        $regex: new RegExp(req.query.search),
                        $options: "i",
                    },
                },
                {
                    thinker: {
                        $regex: new RegExp(req.query.search),
                        $options: "i",
                    },
                }],
            };
            const searchThoughts = await Thought.find(query).sort({'createdAt': -1}).limit(50);
            return res.status(200).json({
                thoughts: searchThoughts,
            });
        } else {
            const foundThoughts = await Thought.find().sort({'createdAt': -1}).limit(50);
            return res.status(200).json({
                thoughts: foundThoughts,
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

/**
 * Retrieves and returns a single shower thought that matches the request URL id parameter.
 * @param {Object} req Express request.
 * @param {Object} res Express response.
 * @param {Function} next Express next.
 * @returns {Object} JSON response object with returned shower thought.
 */
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

/**
 * Creates a single shower thought using request body data.
 * @param {Object} req Express request.
 * @param {Object} res Express response.
 * @param {Function} next Express next.
 * @returns {Object} JSON response object with success message and new shower thought.
 */
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

/**
 * Updates a single shower thought that matches the request URL id parameter using request body data.
 * @param {Object} req Express request.
 * @param {Object} res Express response.
 * @param {Function} next Express next.
 * @returns {Object} JSON response object with success message and updated shower thought.
 */
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

/**
 * Destroys a single shower thought that matches the request URL id parameter.
 * @param {Object} req Express request.
 * @param {Object} res Express response.
 * @param {Function} next Express next.
 * @returns {Object} JSON response object with success message.
 */
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