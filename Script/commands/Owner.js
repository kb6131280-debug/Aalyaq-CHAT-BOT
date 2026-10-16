const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "owner",
  aliases: ["ownerinfo", "owners"],
  version: "1.0.1",
  hasPermssion: 0,
  credits: "TALHA",
  description: "Show Owner Info with random photo",
  commandCategory: "Information",
  usages: "owner",
  cooldowns: 2
};

module.exports.run = async function ({ api, event }) {

  const info = `
👑 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢

👤 𝗡𝗮𝗺𝗲: TALHA
🎂 𝗔𝗴𝗲: 𝟭𝟴+
💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻: 𝗦𝗶𝗻𝗴𝗹𝗲
🎓 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻: 𝗦𝘁𝘂𝗱𝗲𝗻𝘁
📚 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻: 𝗛𝗦𝗖 27
🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀: NARAYANGANJ 

🔗 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦

📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸:
fb.com/61564608965386

💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿:
m.me/61564608965386

📞 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽:
wa.me/01938667887
`;

  const images = [
    "https://i.imgur.com/hPtliXo.jpeg",
    "https://i.imgur.com/cwd64Av.jpeg",
    "https://i.imgur.com/L7txp4M.jpeg",
    "https://i.imgur.com/5dG8PS5.jpeg"
  ];

  const randomImg =
    images[Math.floor(Math.random() * images.length)];

  const filePath = __dirname + "/cache/owner.jpg";

  const callback = () => {
    api.sendMessage(
      {
        body: info,
        attachment: fs.createReadStream(filePath)
      },
      event.threadID,
      () => {
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
    );
  };

  return request(encodeURI(randomImg))
    .pipe(fs.createWriteStream(filePath))
    .on("close", callback);
};
