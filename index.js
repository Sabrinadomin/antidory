require('dotenv').config()
const { Telegraf } = require('telegraf')
const mongoose = require('mongoose')
const bot = new Telegraf(process.env.TOKEN)
const { messageHandler } = require('./src/controllers/messageHandler.controller')

bot.start((ctx) => ctx.reply('Olá! Vou te ajudar a fazer uma lista de compras! Envie qualquer produto para adicionar à lista.'))
bot.on('message', messageHandler)

mongoose.connection.once('open', () => {
  console.info('Connected to MongoDB')
  bot.launch()
    .then(console.log("🤖 Telegram bot online!"))
    .catch((err) => { console.error(err) })
})