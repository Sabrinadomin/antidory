const list = []

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

function formatList(list) {
  try {
    let formattedList = 'Sua lista: \n'
    list.forEach(item => {
      formattedList += `- ${item} \n`
    }) 
    return formattedList
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