const express = require('express')
const env = process.env.NODE_ENV || 'development'
const config = require('../config/config')[env]
const User = require('./user')
const Board = require('./board')

const Post = require('./post')
const Hashtag = require('./hashtag')

const { Sequelize } = require('sequelize')
const db = {}

const sequelize = new Sequelize(config.database, config.username, config.password, config)
db.sequelize = sequelize

db.User = User
db.Board = Board
db.Post = Post
db.Hashtag = Hashtag

User.init(sequelize)
Board.init(sequelize)
Post.init(sequelize)
Hashtag.init(sequelize)


User.associate(db)
Board.associate(db)
Post.associate(db)
Hashtag.associate(db)

module.exports = db