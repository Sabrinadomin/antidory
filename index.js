require('dotenv').config()
const express = require('express')
const app = express()
const { Telegraf } = require('telegraf')
const mongoose = require('mongoose')
const bot = new Telegraf(process.env.TOKEN)
const { messageHandler } = require('./src/controllers/messageHandler.controller')
const { formatCurrentDate } = require('./src/utils/string.utils')
let bootTime

bot.start((ctx) => ctx.reply('Olá! Vou te ajudar a fazer uma lista de compras! Envie qualquer produto para adicionar à lista.'))
bot.on('message', messageHandler)

app.get('/', (req, res) => {
  if(bootTime) {
    res.status(200).json({
      success: true,
      message: `Antidory Bot is online since ${bootTime}`
    })
  } else {
    res.status(200).json({
      success: true,
      message: `Antidory is initializing.`
    })
  }
})

mongoose.connection.once('open', () => {
  console.info('Connected to MongoDB')
  bot.launch()
    .then(() => {
      console.log("🤖 Telegram bot online!")
      bootTime = formatCurrentDate()
    })
    .catch((err) => { console.error(err) })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})