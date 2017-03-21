const router = require('express').Router()
const database = require('../database/imageAPI')

router.get('/', (req, res) => {
    database.getImage()
        .then((tenant) => {
            res.send(tenant)
        })
})

router.get('/:id', (req, res) => {
    database.getSingleImage(req.params.id).then((tenant) => {
        res.send(tenant)
    })
})

router.post('/', (req, res) => {
    database.createImage(req.body)
        .then(() => {
            res.sendStatus(201)
        })
})

router.patch('/:id', (req, res) => {
    database.editImage(req.params.id, req.body).then((id) => {
        res.json(id)
    })
})

router.delete('/:id', (req, res) => {
    database.deleteImage(req.params.id).then((id) => {
        res.json(id)
    })
})


module.exports = router
