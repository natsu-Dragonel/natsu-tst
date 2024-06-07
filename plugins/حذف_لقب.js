let handler = async function (m, { conn, args }) {
  if (!args[0]) {
    return conn.reply(m.chat, 'من فضلك قم بكتابة اللقب الذي تريد حذفه.', m);
  }

  let groupInfo = await conn.groupMetadata(m.chat);

  if (!groupInfo) {
    return conn.reply(m.chat, 'حدث خطأ في الحصول على معلومات المجموعة.', m);
  }

  let groupMembers = groupInfo.participants;
  let nicknameToDelete = args.join(' ').trim();

  let registeredUsers = Object.entries(global.db.data.users)
    .filter(([key, user]) => user.registered && typeof user.name === 'string' && user.name.match(/[\u0600-\u06FF]/))
    .map(([key, user]) => ({ jid: key, name: user.name }))
    .sort((a, b) => a.name.localeCompare(b.name, 'ar'));

  let userToDelete = registeredUsers.find(user => user.name === nicknameToDelete);

  if (!userToDelete) {
    return conn.reply(m.chat, `لم يتم العثور على اللقب: *${nicknameToDelete}*`, m);
  }

  // احذف المستخدم من قاعدة البيانات
  delete global.db.data.users[userToDelete.jid];

  conn.reply(m.chat, `تم حذف اللقب: *${nicknameToDelete}* بنجاح.`, m);
}

handler.help = ['حذف_لقب'];
handler.tags = ['حذف', 'أسماء', 'عربية'];
handler.command = ['حذف_لقب', 'حذف_اللقب'];
handler.group = true;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;

export default handler;
