const { Height110up } = require('../models')

module.exports = {

    async index(req, res) {
        try {
            const height110ups = await Height110up.findAll()
            res.send(height110ups)
        } catch (err) {
            res.status(500).send({
                error: 'The Height110up information was incorrect'
            })
        }
    },

    async create(req, res) {
        try {
            const height110up = await Height110up.create(req.body)
            res.send(height110up.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create height110up incorrect'
            })
        }
    },

    async put(req, res) {
        try {
            await Height110up.update(req.body, {
                where: {
                    id: req.params.height110upId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update height110up incorrect'
            })
        }

    },

    async delete(req, res) {
        try {
            const height110up = await Height110up.findOne({
                where: {
                    id: req.params.height110upId
                }
            })
            if (!height110up) {
                return res.status(403).send({
                    error: 'The height110up information was incorrect'
                })
            }
            await height110up.destroy()
            res.send(height110up)
        } catch (err) {
            res.status(500).send({
                error: 'The height110up information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const height110up = await Height110up.findByPk(req.params.height110upId)
            res.send(height110up)
        } catch (err) {
            res.status(500).send({
                error: 'The height110up information was incorrect'
            })
        }
    },

    

}