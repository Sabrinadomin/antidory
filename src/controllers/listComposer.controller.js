const { connectDb } = require('../db/config')
const { updateList, getUserList } = require('./user.controller')

connectDb()

async function addOnList(ctx) {
  try {
    const message = ctx.update.message.text
    await updateList(ctx, message)
    list.push(message)
    ctx.reply('Adicionado!')
    
  } catch(err) {
    console.error(err.message)
  }
}

async function showList(ctx) {
  try {
    const formattedList = await getUserList(ctx)
    ctx.reply(formattedList)
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
  showList
}