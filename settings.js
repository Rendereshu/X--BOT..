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
global.SESSION_ID = process.env.SESSION_ID || 'XPLOADER~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMklRYWw0VHZRSTlyc25kNzN6WHNQT0NxclZ0bmJjQkU3L0RMTG5mQjgyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDdJOVVHKzRnV2pjd1REdVcrWGhzZ1RIbWNtMlZ2YldFaFFyeExyR0NUYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTnYxL0IzVk1vZGQ3MUJvZ0pFTmJQNzlTQXF3ZkRpR3JHSzVUdzVRc25nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGckFEQUJEM2hJS05uTlJjaytsMHEzSWROa1hCU2ptMWYrSmUzemNwR3lRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndHTElJUGlGTFoxMENUOFBFaFNLc29oNjRlMTFvWFl4WkVxMDZoSU5oRnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFDVDZUNU5OMWhFclRFRWNZN1dmVHRNUFA4aGRCdm9kNXJqOEtuQ3phMVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0p3Y2lBOU9aTjYzL0trbFYyZTVVcGptdEtHaEZHczRzdjVvSDdNelNWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFBsbEhnRDI4NGduZGcwbUdGRFVoUEZKcHdkdEs1QzY3SjgzQWNaemtTST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBySUdwdXU2dXNTL1gvaVh6VUx6K0N6SzVCZEpXMWhWUVA5VW5pZXRIeU1MR0NuRExFRVhmQnl2dEtYUEZaaG5oblJDVk9EUHNWcE0rUmVVYm4zekJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAzLCJhZHZTZWNyZXRLZXkiOiJxaUxHSVRlRzBVdFhSQWtUU3RzcWxhRHVYSGJzeXNrclVnbjlScVFreEFJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJQTEpLUkdYUyIsIm1lIjp7ImlkIjoiOTQ3ODkxMTk5MTY6MzNAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNDI3MzA4OTAwNzIxMjU6MzNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOSDM5UEFIRUtYRStic0dHQWtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJLMXNCY012dEdNT0FadmpYN3VWNE0xQUgxNURkNWp1RFF5ZStzcWNLMkFrPSIsImFjY291bnRTaWduYXR1cmUiOiJJTTI3NHZvOUlRQ2hFcUlDRDdRc0RJMnAyTGZ6dkJNRUV5azR4OWcxQXJXdHVPbG52Zk1CMVhGa05STXpacmVlNXdmZXpnUmpUcGdlc2tHWFNYaEFDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZTRnT1dOVGJOMWhlVHYrSXNqbmZlSnlpNXFtQmJSNlNpRDY1QnFYRkxjQ21xY0ptbVExU2FWdVFWclBQck5YTXI1Q3FZdXU2YjRoUXFISUpyNVZHQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4OTExOTkxNjozM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTdGJBWERMN1JqRGdHYjQxKzdsZUROUUI5ZVEzZVk3ZzBNbnZyS25DdGdKIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzYzMzU5MjIsImxhc3RQcm9wSGFzaCI6IjFRWW1vIn0=' 
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
