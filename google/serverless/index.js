'use strict'

exports.addSettings = require('./addSettings').addSettings
exports.auth = require('./authorization').auth
exports.authCallback = require('./authorizationCallback').authCallback
exports.corsHandler = require('./corsHandler').corsHandler
exports.createWebhook = require('./webhook').createWebhook
exports.deleteNotifications = require('./deleteNotifications').deleteNotifications
exports.getSettings = require('./getSettings').getSettings
exports.getUser = require('./getUser').getUser
exports.logout = require('./logout').logout
exports.payload = require('./payload').payload
exports.workerHandler = require('./workerHandler').workerHandler
