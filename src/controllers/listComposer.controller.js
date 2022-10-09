const { connectDb } = require('../db/config')
const { updateList, getUserList, deleteUserList } = require('./user.controller')
const { printBotMessage } = require('../utils/string.utils')

connectDb()

async function addOnList(ctx) {
  try {
    const message = ctx.update.message.text
    await updateList(ctx, message)
    const botMessage = 'Adicionado!'
    ctx.reply(botMessage)
    printBotMessage(botMessage)
  } catch(err) {
    console.error(err.message)
  }
}

async function showList(ctx) {
  try {
    const formattedList = await getUserList(ctx)
    ctx.reply(formattedList)
    printBotMessage(formattedList)
  } catch(err) {
    console.error(err.message)
  }
}

async function deleteList(ctx) {
  try {
    await deleteUserList(ctx, 'all')
    const botMessage = "Lista apagada!"
    ctx.reply(botMessage)
    printBotMessage(botMessage)
  } catch(err) {
    console.error(err.message)
  }
}

// function ph() {
//   try {
        
//   } catch(err) {
//     console.error(err.message)
//   }
// }

module.exports = {
  addOnList,
  showList,
  deleteList
}