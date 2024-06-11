import fg from 'api-dylux';
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
import yts from 'yt-search';
import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    let lister = [
        "mp3",
        "mp4",
        "mp3doc",
        "mp4doc"
    ];
    let [feature, inputs, inputs_, inputs__, inputs___] = text.split(" ");

    if (command == "اغنيه" || command == 'play2') {
        if (!text) return conn.reply(m.chat, `*🚩 أدخل عنوان مقطع فيديو أو موسيقى*`, m);

        try {
            await m.react('🕓'); // رد فعل للإشارة إلى أن العملية قيد التشغيل
            var res = await yts(text);
            var vid = res.videos[0];
            var q = '128kbps';
            const texto1 = `اغــنيــههة 乂 يـوتـيـوب\n
            ✩ *العنوان ∙* ${vid.title}\n
            ✩ *المده ∙* ${vid.timestamp}\n
            ✩ *المشاهده ∙* ${vid.views}\n
            ✩ *الفنان ∙* ${vid.author.name}\n
            ✩ *مده النشر ∙* ${vid.ago}\n
            ✩ *الرابط ∙* ${'https://youtu.be/' + vid.videoId}\n`.trim();

            await conn.sendButton(m.chat, texto1, wm, res.videos[0].thumbnail, [
                ['الصوت 🎙', `${usedPrefix}mp3 ${text}`],
                ['الفيديو 🎥', `${usedPrefix}mp4 ${text}`]
            ], null, [['♥قناتي♥', `https://whatsapp.com/channel/0029VaZQ0FG4dTnQxihmuk01`]], m);
        } catch (error) {
            console.error(error);
            await conn.reply(m.chat, `*☓ حدث خطأ غير متوقع*\n\n` + error, m);
        }
    }

    if (command == "mp3") {
        if (!text) return conn.reply(m.chat, `*🚩 أدخل عنوان مقطع فيديو أو موسيقى*`, m);

        try {
            const res = await yts(text);
            const vid = res.videos[0];
            const q = '128kbps';
            let yt = await fg.yta(vid.url, q);
            let { title, dl_url, size } = yt;
            let limit = 100;

            if (size.split('MB')[0] >= limit) return conn.reply(m.chat, ` الملف أكثر من ${limit} ميغابايت، تم إلغاء التنزيل.`, m).then(_ => m.react('✖️'));

            await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: "audio/mp4", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
                'forwardingScore': 200,
                'isForwarded': true,
                externalAdReply:{
                    showAdAttribution: false,
                    title: `${vid.title}`,
                    body: `${vid.author.name}`,
                    mediaType: 2,
                    sourceUrl: `${vid.url}`,
                    thumbnail: await (await fetch(vid.thumbnail)).buffer()
                }
            }}, { quoted: m });
            await m.react('✅');
        } catch (error) {
            console.error(error);
            await conn.reply(m.chat, `*☓ Ocurrió un error inesperado*\n\n` + error, m).then(_ => m.react('✖️'));
        }
    }

    // يتبع الكود الآخر لـ mp4doc و mp3doc
};

handler.help = ["play"].map(v => v + " <formato> <búsqueda>");
handler.tags = ["downloader"];
handler.command = ['اغنيه', 'play2', 'mp3', 'mp4', 'mp3doc', 'mp4doc', 'اغنية'];
handler.star = 2;

export default handler;