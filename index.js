const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.TOKEN)
const { messageHandler } = require('./src/controllers/messageHandler.controller')

bot.start((ctx) => ctx.reply('Olá! Vou te ajudar a fazer uma lista de compras! Envie qualquer produto para adicionar à lista.'))
bot.on('message', messageHandler)
bot.launch().then(console.log("Rodando! :)"))

//docker build -t telegrambot .
//docker run --publish 3000:3000 telegrambot