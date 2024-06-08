let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: 'قـائـمـة الـاوامــر'
            },
            body: {
              text: 'اضغط على الزر لفتح قاءمه الاوامر📝'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'دوس هنا ',
                    sections: [
                      {
                        title: 'قوائم البوت',
                        highlight_label: 'اختار',
                        rows: [
                          {
                            header: 'قسم ارقام المطور',
                            title: 'هنا مطور البوت يا حب 💋♥',
                            description: '',
                            id: '.𝑁𝐴𝑇𝑺𝑈'
                          },
                          {
                            header: 'قسم المعلومات',
                            title: 'تعطيك معلومات البوت يا حب 😍♥',
                            description: '',
                            id: '.𝛩𝐵𝐼𝑇𝛩'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['قايمه','اوامر','المطور']

export default handler
