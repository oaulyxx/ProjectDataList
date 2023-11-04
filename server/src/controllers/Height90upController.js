const { Height90up } = require('../models')

module.exports = {
    //get all
    async index(req, res) {
        try {
            const height90ups = await Height90up.findAll()
            res.send(height90ups)
        } catch (err) {
            res.status(500).send({
                error: 'the Height90up information was incorrect'
            })
        }
    },


    // create
    async create(req, res) {
        try {
            const height90up = await Height90up.create(req.body)
            res.send(height90up.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Height90up incorrect'
            })
        }
    },

    // edit
    async put(req, res) {
        try {
            await Height90up.update(req.body, {
                where: {
                    id: req.params.height90upId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Height90up incorrect'
            })
        }
    },

    async delete(req, res) {
        try {
            const height90up = await Height90up.findOne({
                where: {
                    id: req.params.height90upId
                }
            })
            if (!height90up) {
                return res.status(403).send({
                    error: 'The Height90up information was incorrect'
                })
            }
            await height90up.destroy()
            res.send(height90up)
        } catch (err) {
            res.status(500).send({
                error: 'The Height90up information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const height90up = await Height90up.findByPk(req.params.height90upId)
            res.send(height90up)
        } catch (err) {
            res.status(500).send({
                error: 'The Height90up information was incorrect'
            })
        }
    }, 
}
