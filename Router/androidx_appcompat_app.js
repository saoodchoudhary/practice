const express = require('express');

const router = express.Router();

const {AppCompatViewInflater} = require('../Controllers/androidx_appcompat_app/class/class')
const {second} = require('../Controllers/androidx_appcompat_app/class/second')

router.route('/overview').get(AppCompatViewInflater)
router.route('/class').get(second)

module.exports = router;