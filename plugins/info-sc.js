import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://github.com/FahriAdison/Sad-Multi-Device*\nSubscribe Untuk Mengetahui Update Selanjutnya:bit.ly/Papah-Chan\nSilahkan follow github saya dibawah ,Terimakasih`
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/FahriAdison/', 'πΆπΈππ·ππ±', null, null, [
['πΌπ΄π½π', '/menu']
], m)
}
handler.command = handler.help = ['sc']
handler.tags = ['info']

export default handler
