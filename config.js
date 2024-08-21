//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "darksten4@gmail.com";
global.location = "America,Port-au-Prince.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://sten_4ldx_user:9o1M5XMhT9FutGJ7gN1S90S39i9C0pQQ@dpg-cqr69ng8fa8c73foguig-a.oregon-postgres.render.com/sten_4ldx";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Dark-S-TEN/DRK_ST_V1/tree/main";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/101bf22f101df83c4adbf.jpg";
global.devs = "50931461936";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "50948748102";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/101bf22f101df83c4adbf.jpg";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkFmS1lLbU1UN1d1MVp1Q1RRYVo5cGR0WW9wM1ozc3AzTTFNVGt0S3AzYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWlnNXowdkt5VFFEUU1zNHRhNHJDZjhQS1lXQi9wKzY3OHlDQlQ2Rk4xMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRWdEQzJIMDkwU05Tb3JwNWRMVzNQWFliV1Nhb2hodXQ0Zllvd3MvSjN3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaZ2RicWMyTG5JSThqSG1VZkZLc2djZjdIZjBSRTlOaStIVk5ENThUc1c4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVFWm9qOEpNM0dFb3VvOHFiSmdkbXlKZGJReFZSLzlxK2NuU1pXRlE5MGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im91Zmw0ajk1emlWM2NqOWhseVRaSzBPcFZlWXBtZ0R6RnFNZlh6MzBhMzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0l0OWlTVUpEbGRkcGI3TnNFNDVKeEY2ZDlaS1NXVG10UENGWmlpKzlHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkRYdkNDVENFOEVxZTBSbVpHRTNvcU5BeUhmSlA0SHNwNXhxUFhMYWdHcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpuaERxS1MxUG9nbCszOGlPSlNnTDJhZ2MvcGR0d0pKbFlqRmFybGcvWlRaUlJIQkJrNG82dmlSVDlsMFIzYnJpYkoyU0dWMmRxZ28vYnB4QUxxeENBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTgsImFkdlNlY3JldEtleSI6IkNuY3h3LytJY3o5bklDZG5RNW81OFh2VFFLc2FQQVJRZnNOUEltTFVlUW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjdpN092emdiUXRlTnhudjVaZEpHM0EiLCJwaG9uZUlkIjoiNjJiZjU5YTMtMjVkZC00NDExLTg0N2ItYTM4NjFhMDExNDRkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVVK1JVWGFMN2Fhc09nRlRhcmg3RjFjcGFjYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYSUN4MjdrOEJxNExBU0U4SnF2VjV0YmdMUUE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWjlQTlI4MUgiLCJtZSI6eyJpZCI6IjUwOTQ4NzQ4MTAyOjQ1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPbk8xZklIRVB2SmxMWUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJuYUl2SWNVTlBMSFhqbCtucXdVRFhET2FtaWVvVXA5T2FodGRiVldnUGk0PSIsImFjY291bnRTaWduYXR1cmUiOiJVczZsWU9Mem5ZbnRDcm9yakRCNTNnS1QvdWQyOUpCNXQ4VzNnQm4rNnNQbWFKQ2wreUNqZ2lrUjdyN2tzTFlwMExNUnYrZ0dwLzlTcXY0QU43dy9EUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ0V2OTRPRFV2SHB3QXRDVnM1OG9LeTVPRkNQaytuYkN6dTBibkVsamdZTjU3RnpndStFcjFaZ1JaSWJwNmo1cUhQcU5PVUQ4bXhiazUvUHlyWEo0QWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDk0ODc0ODEwMjo0NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaMmlMeUhGRFR5eDE0NWZwNnNGQTF3em1wb25xRktmVG1vYlhXMVZvRDR1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0MTk2MTAzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFjRiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "null",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in DRK_ST_Tech| enjoy your time| this is DRK_ST_V1",
  author: process.env.PACK_AUTHER || "🌹⃟⃢👑 ĐÆ𝚪𝐊༒𝙎-𝙏𝞢𝞜🌹⃟⃢👑",
  packname: process.env.PACK_NAME || "🤫",
  botname: process.env.BOT_NAME || "DRK_ST_V1",
  ownername: process.env.OWNER_NAME || "𓄂⍣⃝𝐆𝚯𝐃𝄟✮͢≛ 𝐒𝚫𝐒𝐔𝐊𝚵⃝𝄟✮⃝👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "FRECYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
