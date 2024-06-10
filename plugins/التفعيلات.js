let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '   ─『 التفعيلات 』─ '
            },
            body: {
              text: 'حدد التفعيل المطلوب\n*مرحبا اليك قأىمه التفعيلات*\n'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'التفعيلات',
                    sections: [
                      {
                        title: 'التفعيلات',
                        highlight_label: 'تفعيلات',
                        rows: [
   {
                            header: 'التفعيلات',
                            title: 'الامر',
                            description: '.التفعيلات',
                            id: '.التفعيلات'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                },
{
                     name: "cta_url",
           buttonParamsJson: '{"display_text":"قناتي","url":"https://whatsapp.com/channel/0029VaZQ0FG4dTnQxihmuk01"}'
           },
    {
              name: "quick_reply",
              buttonParamsJson: '{"display_text":".افتح مضاداللينكات2","id":"message"}'
            },
     {
         name: "quick_reply",
              buttonParamsJson: '{"display_text":".اقفل مضاداللينكات2","id":"message"}'
            },
     {
          name: "quick_reply",
              buttonParamsJson: '{"display_text":".افتح مضادالشتائم","id":"message"}'
            },
     {
          name: "quick_reply",
              buttonParamsJson: '{"display_text":".اقفل مضادالشتائم","id":"message"}'
            },
     {
          name: "quick_reply",
              buttonParamsJson: '{"display_text":".افتح تقيد","id":"message"}'
            },
     {
          name: "quick_reply",
              buttonParamsJson: '{"display_text":".اقفل تقيد","id":"message"}'
           },
     {
          name: "quick_reply",
              buttonParamsJson: '{"display_text":".افتح الصحين","id":"message"}'
           },
     {
          name: "quick_reply",
              buttonParamsJson: '{"display_text":".اقفل الصحين","id":"message"}'
           },
     {
          name: "quick_reply",
              buttonParamsJson: '{"display_text":".افتح الادمن-فقط","id":"message"}'
           },
     {
          name: "quick_reply",
              buttonParamsJson: '{"display_text":".اقفل الادمن-فقط","id":"message"}'
           },
     {
          name: "quick_reply",
              buttonParamsJson: '{"display_text":".افتح مضادالخاص","id":"message"}'
          },
     {
          name: "quick_reply",
              buttonParamsJson: '{"display_text":".اقفل مضادالخاص","id":"message"}'
           },
     {
          name: "quick_reply",
              buttonParamsJson: '{"display_text":".افتح الترحيب","id":"message"}'
          },
     {
          name: "quick_reply",
              buttonParamsJson: '{"display_text":".اقفل الترحيب","id":"message"}'
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
handler.command = ['تفعيل','اوقف','on','off','التفعيلات']

export default handler
