const { addOnList, showList } = require('./listComposer.controller')
const { userHandle } = require('./user.controller')

async function messageHandler (ctx) {
  try{
    const userMessage = ctx.update.message.text
    const messageAnalise = expectedMessages[userMessage] ? await expectedMessages[userMessage].action(ctx) : { success: false, message: 'Mensagem não encontrada'}
    if(typeof messageAnalise === 'string') ctx.reply(messageAnalise)
    else if(messageAnalise && messageAnalise.success === false) await addOnList(ctx)
  } catch (err){
    console.error(err.message)
  }
}

const expectedMessages = {
  'Oi': {
    action: async (ctx) => { 
      const username = ctx.update.message.chat.first_name
      await userHandle(ctx)
      return `Olá ${username}! Vou te ajudar a fazer uma lista de compras! Digite qualquer coisa para adicionar à lista.`
    }
  },
  'Ver lista': {
    product: false,
    action: async (ctx) => {
      await showList(ctx)
      return null
    }
  }
}

module.exports = {
  messageHandler
}