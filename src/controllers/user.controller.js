const { User } = require('../db/schemas/user')
const { formatList } = require('../utils/string.utils')

async function addNewUser(ctx) {
  try {
    let success = false
    const newUser = new User({
      name: `${ctx.update.message.chat.first_name} ${ctx.update.message.chat.last_name}`,
      telegramId: ctx.update.message.chat.id,
      list:""
    })

    await newUser.save()
      .then(success = true)
      .catch(err => console.log(err))
    
    return success
  } catch(err) {
    console.error(err)
  }
}

async function userSearch(ctx) {
  try {
    const userSearch = await User.find({ telegramId: ctx.update.message.chat.id })
    if(userSearch.length != 0) return true 
    return false

  } catch(err) {
    console.error(err)
  }
}

async function updateList(ctx, item) {
  try {
    const reference = { telegramId: ctx.update.message.chat.id }
    await User.findOneAndUpdate(reference, { $push: { list: item } })
  } catch(err) {
    console.error(err)
  }
}

async function userHandle(ctx) {
  try {
    const existentUser = await userSearch(ctx)
    if(existentUser === true) return
    const createNewUserResult = await addNewUser(ctx)
    if(createNewUserResult) console.info('New user created on database.')
  } catch(err) {
    console.error(err)
  }
}

async function getUserList(ctx) {
  try {
    const userSearch = await User.find({ telegramId: ctx.update.message.chat.id })
    if(!userSearch) return 
    const list = userSearch[0]['_doc'].list
    const formattedList = formatList(list)
    return formattedList
  } catch(err) {
    console.error(err)
  }
}

async function deleteUserList(ctx) {
  try {
    const reference = { telegramId: ctx.update.message.chat.id }
    await User.findOneAndUpdate(reference, { list: [] })
  } catch(err) {
    console.log(err)
  }
}

module.exports = {
  userHandle,
  updateList,
  getUserList,
  deleteUserList
}