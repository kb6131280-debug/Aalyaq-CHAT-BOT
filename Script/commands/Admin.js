const fs = require("fs-extra");
const path = require("path");
const moment = require("moment-timezone");

module.exports.config = {
  name: "admin",
  aliases: ["admininfo", "infoadmin"],
  version: "1.0.1",
  hasPermssion: 0,
  credits: "TALHA",
  description: "Show Owner Info",
  commandCategory: "info",
  usages: "admin",
  cooldowns: 2
};

module.exports.run = async function ({ api, event }) {
  const time = moment().tz("Asia/Dhaka")
    .format("DD/MM/YYYY hh:mm:ss A");

  const ownerImage = path.join(
    __dirname,
    "../../assets/Screenshot_2026-10-16-23-09-15-26_a23b203fd3aafc6dcb84e438dda678b6.jpg"
  );

  if (!fs.existsSync(ownerImage)) {
    return api.sendMessage(
      "Owner photo not found. Please check image path.",
      event.threadID,
      event.messageID
    );
  }

  const body = `
┌───────────────⭓
│ 𝗢𝗪𝗡𝗘𝗥 𝗗𝗘𝗧𝗔𝗜𝗟𝗦
├───────────────
│👤 Name : TALHA
│🚹 Gender : Male
│❤️ Relation : Single
│🎂 Age : 18+
│🎓 Education : HSC (2027)
│🏡 Address : NARAYANGANJ
└───────────────⭓

┌───────────────⭓
│ 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦
├───────────────
│📘 Facebook:
https://www.facebook.com/share/1CUi4CwD3o/
└───────────────⭓

┌───────────────⭓
│ 🕒 𝗨𝗽𝗱𝗮𝘁𝗲𝗱 𝗧𝗶𝗺𝗲
├───────────────
│ ${time}
└───────────────⭓
`;

  return api.sendMessage({
    body,
    attachment: fs.createReadStream(ownerImage)
  }, event.threadID, event.messageID);
};
