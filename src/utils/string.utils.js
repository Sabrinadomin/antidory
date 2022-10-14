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

function formatCurrentDate() {
  const currentDate = new Date()
  const dissembleDate = {
    day: currentDate.getDate(),
    month: currentDate.getMonth() + 1,
    year: currentDate.getFullYear(),
    hours: currentDate.getHours(),
    minutes:currentDate.getMinutes()
  }

  Object.values(dissembleDate).forEach(key => {
    if(key.length === 2) key.toString().padStart(2, '0')
  })

  return `${dissembleDate.day}/${dissembleDate.month}/${dissembleDate.year} ${dissembleDate.hours}:${dissembleDate.minutes}`
}

module.exports = {
  formatList,
  printBotMessage,
  formatCurrentDate
}