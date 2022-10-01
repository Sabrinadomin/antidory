const list = []
const { formatList } = require('../utils/string.utils')
const { connectDb } = require('../db/config')

connectDb()

function addOnList(ctx) {
  try {
    const message = ctx.update.message.text
    list.push(message)
    ctx.reply('Adicionado!')
    
  } catch(err) {
    console.error(err.message)
  }
}

function showList(ctx) {
  try {
    const formattedList = formatList(list)
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