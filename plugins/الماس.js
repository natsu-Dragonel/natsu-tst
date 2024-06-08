//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (text && m.isGroup) {
    who = m.mentionedJid[0]
  } else {
    who = m.sender
  }
  
  let users = global.db.data.users
  let gems = users[who].gems || 0

  if (!text) {
    await m.reply(`≡ *「عدد الجواهر」*
*┌●━──━𓊆عدد الجواهر𓊇━──━●*
*╎𖣐➽ الإجمالي:* ${gems}
*└●━──𓊆⍣⃝NATSU𓊇──━●*`)
  } else {
    await m.reply(`≡ *「عدد جواهر ${await conn.getName(who)}」*
*┌●━──━𓊆عدد الجواهر𓊇━──━●*
*╎𖣐➽ الإجمالي:* ${gems}
*└●━──𓊆⍣⃝NATSU𓊇──━●*`)
  }
}

handler.help = ['mygems', 'الماس']
handler.tags = ['info']
handler.command = ['الماس']

export default handler
