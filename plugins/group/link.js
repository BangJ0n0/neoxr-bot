exports.run = {
   usage: ['link'],
   hidden: ['getlink'],
   async: async (m, {
      client
   }) => {
      await client.reply(m.chat, 'https://chat.whatsapp.com/' + (await client.groupInviteCode(m.chat)), m)
   },
   group: true,
   botAdmin: true
}