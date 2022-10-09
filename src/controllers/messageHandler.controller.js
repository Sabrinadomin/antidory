const { addOnList, showList, deleteList } = require('./listComposer.controller')
const { userHandle } = require('./user.controller')
const { printBotMessage } = require('../utils/string.utils')

async function messageHandler (ctx) {
  try{
    console.log(`${ctx.update.message.chat.first_name} ${ctx.update.message.chat.last_name} message: "${ctx.update.message.text}"`)
    const userMessage = ctx.update.message.text.toLowerCase()
    const messageAnalise = expectedMessages[userMessage] ? await expectedMessages[userMessage].action(ctx) : { success: false, message: 'Mensagem não encontrada'}
    if(typeof messageAnalise === 'string') ctx.reply(messageAnalise)
    else if(messageAnalise && messageAnalise.success === false) await addOnList(ctx)
  } catch (err){
    console.error(err.message)
  }
}

const expectedMessages = {
  'oi': {
    action: async (ctx) => { 
      const username = ctx.update.message.chat.first_name
      await userHandle(ctx)
      const botMessage = `Olá ${username}! Sou a Antidory 🐠, vou te ajudar a fazer uma lista de compras.

Digite qualquer coisa para adicionar à lista. 

Para ver as coisas adicionadas na lista, digite "Ver lista".

Para apagar a lista digite "Apagar lista".`
      printBotMessage(botMessage)
      return botMessage
    }
  },
  'ver lista': {
    action: async (ctx) => {
      await showList(ctx)
      return null
    }
  },
  'apagar lista': {
    action: async (ctx) => {
      await deleteList(ctx)
      return null
    }
  },
}

module.exports = {
  messageHandler
}