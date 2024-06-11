import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import yts from 'yt-search'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    let lister = [
        "mp3",
        "mp4", 
        "mp3doc",
        "mp4doc"
    ]
    let [feature, inputs, inputs_, inputs__, inputs___] = text.split(" ")

    if (command == "اغنيه" || command == 'play2') {
        if (!text) return conn.reply(m.chat, `*🚩 أدخل عنوان مقطع فيديو أو موسيقى*`,  m)
        var res = await yts(text)
        var vid = res.videos[0]
        var q = '128kbps'
        const texto1 = `اغــنيــههة 乂 يـوتـيـوب\n
        ✩ *العنوان ∙* ${vid.title}\n
        ✩ *المده ∙* ${vid.timestamp}\n
        ✩ *المشاهده ∙* ${vid.views}\n
        ✩ *الفنان ∙* ${vid.author.name}\n
        ✩ *مده النشر ∙* ${vid.ago}\n
        ✩ *الرابط ∙* ${'https://youtu.be/' + vid.videoId}\n`.trim()

        await conn.sendButton(m.chat, texto1, wm, res.videos[0].thumbnail, [
            ['الصوت 🎙', `${usedPrefix}mp3 ${text}`],
            ['الفيديو 🎥', `${usedPrefix}mp4 ${text}`]
        ], null, [['♥قناتي♥', `https://whatsapp.com/channel/0029VaZQ0FG4dTnQxihmuk01`]], m)
    }

    if (command == "mp3") {
        if (!text) return conn.reply(m.chat, `*🚩 أدخل عنوان مقطع فيديو أو موسيقى*`, m)
        try {
            const res = await yts(text)
            const vid = res.videos[0]
            const q = '128kbps'
            let yt = await youtubedl(vid.url, q)
            let { title, dl_url, size } = yt
            let limit = 100

            if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `الملف أكثر من ${limit} ميغابايت، تم إلغاء التنزيل.`, m)

            await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: "audio/mp4", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
                'forwardingScore': 200,
                'isForwarded': true,
                externalAdReply: {
                    showAdAttribution: false,
                    title: `${vid.title}`,
                    body: `${vid.author.name}`,
                    mediaType: 2, 
                    sourceUrl: `${vid.url}`,
                    thumbnail: await (await fetch(vid.thumbnail)).buffer()
                }
            }}, { quoted: m })
        } catch (error) {
            try {
                let yt = await youtubedlv2(vid.url, q)
                let { title, dl_url, size } = yt
                let limit = 100

                if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `الملف أكثر من ${limit} ميغابايت، تم إلغاء التنزيل.`, m)

                await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: "audio/mp4", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
                    'forwardingScore': 200,
                    'isForwarded': true,
                    externalAdReply: {
                        showAdAttribution: false,
                        title: `${vid.title}`,
                        body: `${vid.author.name}`,
                        mediaType: 2, 
                        sourceUrl: `${vid.url}`,
                        thumbnail: await (await fetch(vid.thumbnail)).buffer()
                    }
                }}, { quoted: m })
            } catch (error) {
                await conn.reply(m.chat, `*☓ حدث خطأ غير متوقع*\n\n` + error, m)
                console.error(error)
            }
        }
    }

    if (command == "mp4") {
        if (!text) return conn.reply(m.chat, `*🚩 أدخل عنوان مقطع فيديو أو موسيقى*`, m)
        let res = await yts(text)
        let vid = res.videos[0]
        let q = '360p'
        const texto1 = `يـؤتـيؤب 乂 ألأغنيه\n
        ✩ *العنوان ∙* ${vid.title}\n
        ✩ *المده ∙* ${vid.timestamp}\n
        ✩ *المشاهده ∙* ${vid.views}\n
        ✩ *الفنان ∙* ${vid.author.name}\n
        ✩ *مده النشر ∙* ${vid.ago}\n
        ✩ *الرابط ∙* ${'https://youtu.be/' + vid.videoId}\n`

        try {
            let yt = await youtubedl(vid.url, q)
            let { title, dl_url, size } = yt
            let limit = 100

            if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `الملف أكثر من ${limit} ميغابايت، تم إلغاء التنزيل.`, m)

            await conn.sendFile(m.chat, dl_url, 'yt.jpg', `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━━━●────── ${vid.timestamp}`, m)
        } catch (error) {
            try {
                let yt = await youtubedlv2(vid.url, q)
                let { title, dl_url, size } = yt
                let limit = 100

                if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `الملف أكثر من ${limit} ميغابايت، تم إلغاء التنزيل.`, m)

                await conn.sendFile(m.chat, dl_url, 'yt.jpg', `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━━━●────── ${vid.timestamp}`, m)
            } catch (error) {
                await conn.reply(m.chat, `*☓ حدث خطأ غير متوقع*`, m)
                console.error(error)
            }
        }
    }

    if (command == "mp3doc") {
        if (!inputs) return conn.reply(m.chat, `*🚩 أدخل عنوان مقطع فيديو أو موسيقى*`, m)
        let res = await yts(text)
        let vid = res.videos[0]
        let q = '128kbps'
        const texto1 = `Y O U T U B E 乂 D O C\n
        ✩ *العنوان ∙* ${vid.title}\n
        ✩ *المده ∙* ${vid.timestamp}\n
        ✩ *المشاهده ∙* ${vid.views}\n
        ✩ *الفنان ∙* ${vid.author.name}\n
        ✩ *مده النشر ∙* ${vid.ago}\n
        ✩ *الرابط ∙* ${'https://youtu.be/' + vid.videoId}\n`

        try {
            let yt = await youtubedl(vid.url, q)
            let { title, dl_url, size } = yt
            let limit = 100

            if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `الملف أكثر من ${limit} ميغابايت، تم إلغاء التنزيل.`, m)

            await conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: "audio/mpeg", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
                'forwardingScore': 200,
                'isForwarded': true,
                externalAdReply: {
                    showAdAttribution: false,
                    title: `${vid.title}`,
                    body: `${vid.author.name}`,
                    mediaType: 2, 
                    sourceUrl: `${vid.url}`,
                    thumbnail: await (await fetch(vid.thumbnail)).buffer()
                }
            }}, { quoted: m })
        } catch (error) {
            try {
                let yt = await youtubedlv2(vid.url, q)
                let { title, dl_url, size } = yt
                let limit = 100

                if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `الملف أكثر من ${limit} ميغابايت، تم إلغاء التنزيل.`, m)

                await conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: "audio/mpeg", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
                    'forwardingScore': 200,
                    'isForwarded': true,
                    externalAdReply: {
                        showAdAttribution: false,
                        title: `${vid.title}`,
                        body: `${vid.author.name}`,
                        mediaType: 2, 
                        sourceUrl: `${vid.url}`,
                        thumbnail: await (await fetch(vid.thumbnail)).buffer()
                    }
                }}, { quoted: m })
            } catch (error) {
                await conn.reply(m.chat, `*☓ حدث خطأ غير متوقع*`, m)
                console.error(error)
            }
        }
    }

    if (command == "mp4doc") {
        if (!inputs) return conn.reply(m.chat, `*🚩 أدخل عنوان مقطع فيديو أو موسيقى*`, m)
        let res = await yts(text)
        let vid = res.videos[0]
        let q = '360p'
        const texto1 = `Y O U T U B E 乂 D O C\n
        ✩ *العنوان ∙* ${vid.title}\n
        ✩ *المده ∙* ${vid.timestamp}\n
        ✩ *المشاهده ∙* ${vid.views}\n
        ✩ *الفنان ∙* ${vid.author.name}\n
        ✩ *مده النشر ∙* ${vid.ago}\n
        ✩ *الرابط ∙* ${'https://youtu.be/' + vid.videoId}\n`

        try {
            let yt = await youtubedl(vid.url, q)
            let { title, dl_url, size } = yt
            let limit = 100

            if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `الملف أكثر من ${limit} ميغابايت، تم إلغاء التنزيل.`, m)

            await conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: "video/mp4", fileName: vid.title + '.mp4', quoted: m, contextInfo: {
                'forwardingScore': 200,
                'isForwarded': true,
                externalAdReply: {
                    showAdAttribution: false,
                    title: `${vid.title}`,
                    body: `${vid.author.name}`,
                    mediaType: 2, 
                    sourceUrl: `${vid.url}`,
                    thumbnail: await (await fetch(vid.thumbnail)).buffer()
                }
            }}, { quoted: m })
        } catch (error) {
            try {
                let yt = await youtubedlv2(vid.url, q)
                let { title, dl_url, size } = yt
                let limit = 100

                if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `الملف أكثر من ${limit} ميغابايت، تم إلغاء التنزيل.`, m)

                await conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: "video/mp4", fileName: vid.title + '.mp4', quoted: m, contextInfo: {
                    'forwardingScore': 200,
                    'isForwarded': true,
                    externalAdReply: {
                        showAdAttribution: false,
                        title: `${vid.title}`,
                        body: `${vid.author.name}`,
                        mediaType: 2, 
                        sourceUrl: `${vid.url}`,
                        thumbnail: await (await fetch(vid.thumbnail)).buffer()
                    }
                }}, { quoted: m })
            } catch (error) {
                await conn.reply(m.chat, `*☓ حدث خطأ غير متوقع*`, m)
                console.error(error)
            }
        }
    }
}

handler.help = ['اغنيه', 'mp3', 'mp4', 'mp3doc', 'mp4doc']
handler.tags = ['downloader']
handler.command = /^(اغنيه|play2|mp3|mp4|mp3doc|mp4doc)$/

export default handler