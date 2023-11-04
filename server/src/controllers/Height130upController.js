const { Height130up } = require('../models')

module.exports = {
    //get all
    async index(req, res) {
        try {
            const height130ups = await Height130up.findAll()
            res.send(height130ups)
        } catch (err) {
            res.status(500).send({
                error: 'the height130up information was incorrect'
            })
        }
    },


    // create
    async create(req, res) {
        try {
            const height130up = await Height130up.create(req.body)
            res.send(height130up.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create height130up incorrect'
            })
        }
    },

    // edit
    async put(req, res) {
        try {
            await Height130up.update(req.body, {
                where: {
                    id: req.params.height130upId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update height130up incorrect'
            })
        }
    },

    // delete
    async delete(req, res) {
        try {
            const height130up = await Height130up.findOne({
                where: {
                    id: req.params.height130upId
                }
            })
            if (!height130up) {
                return res.status(403).send({
                    error: 'The height130up information was incorrect'
                })
            }
            await height130up.destroy()
            res.send(height130up)
        } catch (err) {
            res.status(500).send({
                error: 'The height130up information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const height130up = await Height130up.findByPk(req.params.height130upId)
            res.send(height130up)
        } catch (err) {
            res.status(500).send({
                error: 'The height130up information was incorrect'
            })
        }
    },
}
