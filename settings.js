  //project_name : XＥꜱʜᴜ-BOT
// @author : Eshan kavishka
// @youtube : https://www.youtube.com/@SAEshanKavishkaPerera
// @instagram : heyits_tylor
// @telegram : t.me/EshuNvrDie
// @github : Dark-Xploit
// @tiktok : eshu_nvrdie_official 
// @whatsapp : 94789119916
//*
//* 
//=================================================//
const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//=================================================//
global.SESSION_ID = process.env.SESSION_ID || 'XPLOADER~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0swTDJkd3h2bk80YXByaUdpMzdNdDVPZit6VFVpdHRaRE1KVnNZUFdIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUoxZGxKelNVcVNzbGpWL2FBK3RxcTlqZEJXQnFMZlcrUHluaSs1RW9tbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4RDdMRXgwTWlpendmL0l3aGwydHhFSEZ4TjVvNlpqRUN6MXdURDhqM0g0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXdXl1cFVJaWNHbE9VNXFrRkJTd1g0VjB1YnJwUUdtZGNBZDIxaDNERFN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNBU01tOE8vWEZleHIrUlVHcldhVWwrbGczRTMxRmNkbER0Y2tXajFLM2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdvVHVsaHJhR2pFWlJvV1VGczlQS09Yd0I1WkxJWGxwNlF4bVhYWWttajg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU43QWE5elBWU1NrUWpiRnpDVVEzTlFLMDlWN2Z0SjZVeHluWEFRMHlIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMks5UlNpSUliS2Z1dDBIaXFUVUljN0VMWVpoOWJyb0ppUjJwVzZYMUMwaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhkR0tmaE9WYnpGYTdEUmJOdEpUK0VNNnVITytsZHBZMTV2M3NZRlEyWXpZS1pQbjRvTzF3TUNMQmpaWWpiYlptazdhTUhTNkJkeGNDY1ljb3BidGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODYsImFkdlNlY3JldEtleSI6Im1tc3hHZ0x2L3JjMldCWlVlUThpM3R5MlpxdmZpaStKM0tHRDdmYk5BdUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODkxMTk5MTZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMUNCQTgxQ0FGMzg3NUNDNTQxMEJCRDg2RDE5N0U2QUMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNjQyMTcxNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiSDNHUzNGTEsiLCJtZSI6eyJpZCI6Ijk0Nzg5MTE5OTE2OjM1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTQyNzMwODkwMDcyMTI1OjM1QGxpZCIsIm5hbWUiOiJYXG5cbkVcblxu6pyxXG5cbsqcXG5cbuG0nFxuXG5CXG5cbk9cblxuVCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkdqa0tZRUVMM2kvcnNHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoiamp1ODBoQUtlbjZlaE5tVDNRdE8rbEMzalRvZnJwVlRqbWJBdXJrT2NIVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVEk5S0pNUmRsY1dhMGF4MFdzQkd4NmN0ZlBucXFhL1U5djhzTSs1cG1ERkdjNGx2ckZ6M2ozckd0RkMwM240T2E2WWhFUWgwRkl2UDB5Sm5BUHRKQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6InF5UTNyaGVyeHdMVjZZYVM2eXQyZ3ltQnVXRzhmNml6S0VPSEdVM0dNMWFZbmtQZjlmT2N2QkZCNkoyRlBQakZrSUx1dWVIWG9qUVRNTGZ3Z3JUV2d3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODkxMTk5MTY6MzVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWTQ3dk5JUUNucCtub1RaazkwTFR2cFF0NDA2SDY2VlU0NW13THE1RG5CMSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2NDIxNzA3LCJsYXN0UHJvcEhhc2giOiIxUVltbyIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR0FBIn0=' 
//Enter your Xploader session id here; must start with XPLOADER~

//=================================================//
global.botname = process.env.BOT_NAME || 'XＥꜱʜᴜ-BOT' 
//Your desired bot name

//=================================================//
global.ownernumber = process.env.OWNER_NUMBER || '94789119916' 
//Type your number here

//=================================================//
global.ownername = process.env.OWNER_NAME || 'Eshan kavishka' 
//Type your name here

//=================================================//
global.plink = process.env.PLINK || "https://www.tiktok.com/@eshu_nvrdie_official?_t=ZS-8smH0dOA0wh&_r=1"

//=================================================//
global.wm = process.env.GL_WM || "XＥꜱʜᴜ-BOT"

//=================================================//
global.packname = process.env.STICKER_PACK_NAME || "XＥꜱʜᴜ-BOT" 
//The sticker pack name

//=================================================//
global.author = process.env.STICKER_AUTHOR_NAME || "Eshan Kavishka Multiple whatsapp bot" 
//The sticker author name

//=================================================//
global.urldb =process.env.MONGODB_URL || "mongodb+srv://Eshunvrdie1:Eshan@2010@cluster0.iqut1.mongodb.net/"
// just leave blank or enter a mongoDB url

//=================================================//
global.xprefix = process.env.PREFIX || '.' 
//Set your desired prefix

//=================================================//
global.mode = process.env.MODE || 'public';
// Set to 'private' to enable private mode, otherwise default is 'public'

//=================================================//
global.hituet = 0 
//=================================================//
global.autoviewstatus = process.env.AUTO_STATUS_VIEW || 'true'

//=================================================//
global.autoreactstatus = process.env.AUTO_STATUS_REACT || 'true'

//=================================================//
global.anticall = process.env.ANTI_CALL || 'true'

//=================================================//
global.welcome = process.env.WELCOME_MSG || 'true'

//=================================================//
global.statusemoji = process.env.STATUS_EMOJI || '🗿'
//Set the emoji that you want to be reacted to status

//=================================================//
global.timezones = process.env.TIMEZONE || "india/srilanka" 
//Don't edit this if you don't know!

//=================================================//
global.countrycode = process.env.COUNTRY_CODE || '94' 
//set your country code for functionality of blockforeign and antiforeign commands

//=================================================//
global.autoblockforeign = process.env.AUTO_BLOCK_FOREIGN || 'false';
// Set to 'true' to enable automatic blocking of foreign numbers

//=================================================//
global.gcantiforeign = process.env.GC_ANTI_FOREIGN || 'true';
// Set to 'true' to enable automatic removal of foreign numbers from groups

//=================================================//
global.autoread = process.env.AUTO_READ || 'false';
// Set to 'true' to enable automatic reading of messages

//=================================================//
//=================================================//
global.menustyle = process.env.MENU_STYLE || '2' 
// options 1, 2, 3, 4 or 5
// 1 = Document menu(Android only)
// 2 = Text only menu(Android & iOS)
//3 = Image menu with context(Android & iOS)
//4 = Image menu(Android & iOS)
//5 = Payment menu

//=================================================//
//Replies
global.mess = { 
  limit: '*Your limit is used up!*', 
  nsfw: '*Tell the admin to enable NSFW first!*', 
  done: '*Done*', 
  error: '*Sorry, I cannot perform that action!*', 
  success: '*Success XＥꜱʜᴜ-BOT*', 
  premium: '*Only premium users can use this command!*', 
  owner: '*Apologies, only my owner can use this command!*', 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}
//=================================================//

//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})
//=================================================//
