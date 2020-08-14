const express = require('express')
const router = require('express').Router();

const uploadController = require('../controllers/upload.controller')

router.use("/", express.static('uploads/'))

router.post("/", uploadController.upload)

module.exports = router;