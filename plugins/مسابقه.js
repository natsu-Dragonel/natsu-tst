
import fetch from 'node-fetch';

let points = 50;
let maxPlayers = 10;
let maxQuestions = 50;
let questionTimeout = 25 * 1000; 

let handler = async (m, { conn, command }) => {
    let id = m.chat;
    conn.𝑁𝐴𝑇𝑺𝑈 = conn.𝑁𝐴𝑇𝑺𝑈 ? conn.𝑁𝐴𝑇𝑺𝑈 : {};
//شرط بدا اللعبه هنبدا هنا تمام
    if (command === "مسابقه-صور") {
        if (id in conn.𝑁𝐴𝑇𝑺𝑈) {
            conn.reply(m.chat, '*المسابقه شغاله حالياً يمكنك المشاركه*', conn.𝑁𝐴𝑇𝑺𝑈[id][0]);
            throw false;
        }

        conn.𝑁𝐴𝑇𝑺𝑈[id] = [
            await conn.reply(m.chat, '┐┈┈┈〈 *💕 مـسـابـقـه صـور 🌃* 〉┈┈┈◆\n │╮┈┈┈┈┈┈┈┈┈┈┈┈⩺ـ\n┴│🔥⩺ ¹ جاوب علي السوال \nقبل اي احد\n│🔥⩺ ² منشن الرساله عشان تتحسب النقطه\n┬│🔥⩺  ³ السوال الواحد ب 50 نقطه\n│╯┈┈┈┈┈┈┈┈┈┈┈┈⩺ـ\n┘┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⩺ـ', m), [], [], 0, 0, null
        ];

        conn.reply(m.chat, '*المسابقه تم تفعيلها استخدم .انضم-صور للانضمام للمسابقه*', m);
        throw false;
      //زرار الانضمام
    } else if (command === "انضم-صور") {
        if (!(id in conn.𝑁𝐴𝑇𝑺𝑈)) {
            conn.reply(m.chat, '*المعذره لايوجد مسابقه حالياً*', m);
            throw false;
        }

        if (conn.𝑁𝐴𝑇𝑺𝑈[id][2].length >= maxPlayers) {
            conn.reply(m.chat, '*المعذره العدد مكتمل*', m);
            throw false;
        }

        if (conn.𝑁𝐴𝑇𝑺𝑈[id][2].findIndex(player => player.id === m.sender) !== -1) {
            conn.reply(m.chat, '*لقد قمت بلتسجيل مسبقاً*', m);
            throw false;
        }

        conn.𝑁𝐴𝑇𝑺𝑈[id][2].push({ id: m.sender, points: 0, correctAnswers: 0 });
        conn.reply(m.chat, `تـم الـتـسـجـيـل بـنـجـاح\nتـبـقـي للـانـضـمـام: ${maxPlayers - conn.𝑁𝐴𝑇𝑺𝑈[id][2].length}`, m);
//وقفنا هنا تمام
        if (conn.𝑁𝐴𝑇𝑺𝑈[id][2].length >= 2) {
            let 𝑁𝐴𝑇𝑺𝑈 = await (await fetch(`https://raw.githubusercontent.com/DK3MK/worker-bot/main/guess.json`)).json();
            let json = 𝑁𝐴𝑇𝑺𝑈[Math.floor(Math.random() * 𝑁𝐴𝑇𝑺𝑈.length)];
            conn.𝑁𝐴𝑇𝑺𝑈[id][1] = json;
            let playersList = conn.𝑁𝐴𝑇𝑺𝑈[id][2].map((player, i) => `${i + 1} - @${player.id.split('@')[0]} [${player.points} نقطة]`).join('\n');
            let caption = `┐┈┈┈〈 *📍 مـسـابـقـه صـور 📍* 〉┈┈┈◆
*•🔢 رقـم الـسـوال ${conn.𝑁𝐴𝑇𝑺𝑈[id][4] + 1}*
*•🔥 اجب بسرعه قبل اي شخص اخر*
*•💰 الجائزة:* ⌊ ${points} ⌉ *نقطة* , \`لكل جواب صحيح\`
╯──────────────────⟢ـ`.trim()
            conn.sendFile(m.chat, json.img, '', caption, m)
//لضبط الوقت
            conn.𝑁𝐴𝑇𝑺𝑈[id][5] = setTimeout(() => {
                conn.reply(m.chat, `*•┇❖↞الوقت أنتهي الاجابه هي┇⏳❯*\n ${json.name}\n╯──────────────────⟢ـ`, conn.𝑁𝐴𝑇𝑺𝑈[id][0]);
                clearTimeout(conn.𝑁𝐴𝑇𝑺𝑈[id][5]);
                conn.𝑁𝐴𝑇𝑺𝑈[id][5] = null;

                setTimeout(async () => {
                    let newJson = 𝑁𝐴𝑇𝑺𝑈[Math.floor(Math.random() * 𝑁𝐴𝑇𝑺𝑈.length)];
                    conn.𝑁𝐴𝑇𝑺𝑈[id][1] = newJson;
                    conn.𝑁𝐴𝑇𝑺𝑈[id][3]++;
                    conn.𝑁𝐴𝑇𝑺𝑈[id][4]++;

                    let newCaption = `┐┈┈┈〈 *📍 مـسـابـقـه صـور 📍* 〉┈┈┈◆
*•🔢 رقـم الـسـوال ${conn.𝑁𝐴𝑇𝑺𝑈[id][4] + 1}*
*•🔥 اجب بسرعه قبل اي شخص اخر*
*•💰 الجائزة:* ⌊ ${points} ⌉ *نقطة* , \`لكل جواب صحيح\`
╯──────────────────⟢ـ`.trim()
                    conn.sendFile(m.chat, newJson.img, '', newCaption, m)
                }, 1000); 
            }, questionTimeout);
        }//شرط الحذق
    } else if (command === "حذف-صور") {
        if (!conn.𝑁𝐴𝑇𝑺𝑈[id]) {
            conn.reply(m.chat, '*لا يوجد احد قام بتشغيل المسابقه*', m);
        } else {
            clearTimeout(conn.𝑁𝐴𝑇𝑺𝑈[id][5]); 
            delete conn.𝑁𝐴𝑇𝑺𝑈[id];
            conn.reply(m.chat, '*تم الغاء مسابقه صور بنجاح*', m);
        }
    }
};

handler.before = async function (m, { conn }) {
    let id = m.chat;
    this.𝑁𝐴𝑇𝑺𝑈 = this.𝑁𝐴𝑇𝑺𝑈 ? this.𝑁𝐴𝑇𝑺𝑈 : {};

    if (!(id in this.𝑁𝐴𝑇𝑺𝑈)) return;

    let json = this.𝑁𝐴𝑇𝑺𝑈[id][1];
    let players = this.𝑁𝐴𝑇𝑺𝑈[id][2];
    let questionCount = this.𝑁𝐴𝑇𝑺𝑈[id][3];

    if (json && json.name && m.text.toLowerCase() === json.name.toLowerCase()) {
        clearTimeout(this.𝑁𝐴𝑇𝑺𝑈[id][5]); // Clear timeout
        let playerIndex = players.findIndex(player => player.id === m.sender);
        players[playerIndex].points += points;
        players[playerIndex].correctAnswers++;
        questionCount++;

        if (questionCount >= maxQuestions) {
            let sortedPlayers = players.sort((a, b) => b.points - a.points);
            let playersList = sortedPlayers.map((player, i) => `${i + 1} - @${player.id.split('@')[0]} [${player.points} نقطة, ${player.correctAnswers} من إجابات صحيحه]`).join('\n');
            this.reply(m.chat, `لـقـد انـتـهـت الـمـسـابـقـه\nالـيـك لـوحـه الـصـاداره:\n\n${playersList}`, m, { mentions: conn.parseMention(playersList) });
            delete this.𝑁𝐴𝑇𝑺𝑈[id];
        } else {
            let 𝑁𝐴𝑇𝑺𝑈 = await (await fetch(`https://raw.githubusercontent.com/DK3MK/worker-bot/main/guess.json`)).json();
            json = 𝑁𝐴𝑇𝑺𝑈[Math.floor(Math.random() * 𝑁𝐴𝑇𝑺𝑈.length)];
            this.𝑁𝐴𝑇𝑺𝑈[id][1] = json;
            this.𝑁𝐴𝑇𝑺𝑈[id][3] = questionCount;
            this.𝑁𝐴𝑇𝑺𝑈[id][4]++;
            let playersList = players.map((player, i) => `${i + 1} - @${player.id.split('@')[0]} [${player.points} نقطة, ${player.correctAnswers} إجابات صحيحة]`).join('\n');
            let caption = `┐┈┈┈〈 *📍 مـسـابـقـه صـور 📍* 〉┈┈┈◆
*•🔢 رقـم الـسـوال ${this.𝑁𝐴𝑇𝑺𝑈[id][4] + 1}*
*•🔥 اجب بسرعه قبل اي شخص اخر*
*•💰 الجائزة:* ⌊ ${points} ⌉ *نقطة* , \`لكل جواب صحيح\`
╯──────────────────⟢ـ`.trim()
            this.sendFile(m.chat, json.img, '', caption, m)

 
            this.𝑁𝐴𝑇𝑺𝑈[id][5] = setTimeout(() => {
                this.reply(m.chat, `*•┇❖↞الوقت أنتهي الاجابه هي┇⏳❯*\n ${json.name}\n╯──────────────────⟢ـ`, this.𝑁𝐴𝑇𝑺𝑈[id][0]);
                clearTimeout(this.𝑁𝐴𝑇𝑺𝑈[id][5]);
                this.𝑁𝐴𝑇𝑺𝑈[id][5] = null;

                setTimeout(async () => {
                    let newJson = 𝑁𝐴𝑇𝑺𝑈[Math.floor(Math.random() * 𝑁𝐴𝑇𝑺𝑈.length)];
                    this.𝑁𝐴𝑇𝑺𝑈[id][1] = newJson;
                    this.𝑁𝐴𝑇𝑺𝑈[id][3]++;
                    this.𝑁𝐴𝑇𝑺𝑈[id][4]++;
//تكرار الشروط مهمه
                    let newCaption = `┐┈┈┈〈 *📍 مـسـابـقـه صـور 📍* 〉┈┈┈◆
*•🔢 رقـم الـسـوال ${this.itachixvi[id][4] + 1}*
*•🔥 اجب بسرعه قبل اي شخص اخر*
*•💰 الجائزة:* ⌊ ${points} ⌉ *نقطة* , \`لكل جواب صحيح\`╯──────────────────⟢ـ`.trim()
                    this.sendFile(m.chat, newJson.img, '', newCaption, m)
                }, 1000); 
            }, questionTimeout);
        }
    }
};
handler.command = /^(مسابقه-صور|انضم-صور|حذف-صور)$/i;

export default handler;