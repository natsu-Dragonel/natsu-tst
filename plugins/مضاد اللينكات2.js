// تعبير عادي للتحقق من وجود رابط في النص
const linkRegex = /https:/i;

export async function before(m, {isAdmin, isBotAdmin, text}) {
  // التحقق مما إذا كانت الرسالة مرسلة من البوت نفسه
  if (m.isBaileys && m.fromMe) {
    return true;
  }

  // التحقق مما إذا كانت الرسالة في مجموعة
  if (!m.isGroup) return false;

  // الحصول على البيانات من قاعدة البيانات العالمية
  const chat = global.db.data.chats[m.chat];
  const delet = m.key.participant;
  const bang = m.key.id;
  const bot = global.db.data.settings[this.user.jid] || {};
  const user = `@${m.sender.split`@`[0]}`;
  const isGroupLink = linkRegex.exec(m.text);

  if (chat.antiLink2 && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
      const linkThisGroup2 = `https://www.youtube.com/`;
      const linkThisGroup3 = `https://youtu.be/`;
      if (m.text.includes(linkThisGroup)) return true;
      if (m.text.includes(linkThisGroup2)) return true;
      if (m.text.includes(linkThisGroup3)) return true;
    }

    // النص المشفر
    function _0x1db2(_0x13ff87, _0xfd361c) {
      var _0x1db285 = _0xfd36();
      _0x1db2 = function (_0x20ced5, _0x5d3f32) {
        _0x20ced5 = _0x20ced5 - 0x0;
        var _0x3e6eb1 = _0x1db285[_0x20ced5];
        return _0x3e6eb1;
      };
      return _0x1db2(_0x13ff87, _0xfd361c);
    }
    
    function _0xfd36() {
      var _0x25c443 = [
        '4668192vnnbqc', '2168aqDeLg', '920qbyGTq', 'sender', '289948whyFlH',
        '102670cHNXOI', '10zfknTb', '541hIdQD', ' لقد كسرت قواعد المجموعة, سوف يتم إبادتك...!!',
        '323435WSPHs', '130326DVEYzl', 'chat', '48kMqPFV', '6813rvAWBo', '638CfHmP'
      ];
      _0xfd36 = function () {
        return _0x25c443;
      };
      return _0xfd36();
    }
    
    var _0x317230 = _0x1db2;
    (function (_0x9d59bb, _0x50cf38) {
      var _0x5482ee = _0x1db2;
      var _0xbe51de = _0x9d59bb();
      while (!![]) {
        try {
          var _0x10c3e1 = -parseInt(_0x5482ee(0x5)) / 0x1 * (-parseInt(_0x5482ee(0xe)) / 0x2) +
            -parseInt(_0x5482ee(0x8)) / 0x3 + -parseInt(_0x5482ee(0x2)) / 0x4 * (parseInt(_0x5482ee(0x4)) / 0x5) +
            -parseInt(_0x5482ee(0xa)) / 0x6 * (parseInt(_0x5482ee(0x7)) / 0x7) +
            parseInt(_0x5482ee(0x0)) / 0x8 * (parseInt(_0x5482ee(0xb)) / 0x9) +
            parseInt(_0x5482ee(0x3)) / 0xa * (parseInt(_0x5482ee(0xc)) / 0xb) +
            -parseInt(_0x5482ee(0xd)) / 0xc;
          if (_0x10c3e1 === _0x50cf38) {
            break;
          } else {
            _0xbe51de['push'](_0xbe51de['shift']());
          }
        } catch (_0x491fd0) {
          _0xbe51de['push'](_0xbe51de['shift']());
        }
      }
    }(_0xfd36, 0x4e979));

    // إرسال رسالة تحذيرية
    await this.sendMessage(m[_0x317230(0x9)], {
      text: '*「 مضاد اللينك 」*\n*مع السلامه يا روحي 👋 ' + user + ' لقد كسرت قواعد المجموعة, سوف يتم إبادتك...!!',
      mentions: [m[_0x317230(0x1)]]
    }, { quoted: m });

    if (!isBotAdmin) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] البوت مش ادمن, لا يمكنني ابادتك*');

    if (isBotAdmin && bot.restrict) {
      await conn.sendMessage(m.chat, {
        delete: {
          remoteJid: m.chat,
          fromMe: false,
          id: bang,
          participant: delet
        }
      });
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    } else if (!bot.restrict) {
      return m.reply('*[❗𝐈𝐍𝐅𝐎❗] المطور مش مفعل خاصيه الطرد (#افتح تقيد) كلم المطور يشغلها*');
    }
  }
  return true;
}
