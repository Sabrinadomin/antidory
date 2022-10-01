const { addOnList, showList } = require('./listComposer.controller')

async function messageHandler (ctx) {
  try{
    const username = ctx.update.message.chat.first_name
    const message = ctx.update.message.text
    if(message === 'Oi') ctx.reply(`Olá ${username}! Vou te ajudar a fazer uma lista de compras! Digite /adicionar para começar uma lista.`)
    else if(message === 'Ver lista') await showList(ctx)
    else addOnList(ctx)
  } catch (err){
    console.error(err.message)
  }
}

module.exports = {
  messageHandler
}