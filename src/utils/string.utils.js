function formatList(listObj) {
  try {
    let formattedList = 'Sua lista: \n'
    const spreadList = [...listObj]
    if(spreadList.length === 0) return 'Você não tem nada na lista! 😕'
    spreadList.forEach(item => {
      if(item) formattedList += `- ${item} \n`
    }) 
    return formattedList
  } catch(err) {
    console.error(err.message)
  }
}

function printBotMessage(message) {
  console.error(`AntidoryBot message: "${message}"`)
}

module.exports = {
  formatList,
  printBotMessage
}