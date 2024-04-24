let { smd, smdBuffer} = require(global.lib_dir || "../lib");
let fs = require("fs");
const fetch = require("node-fetch");
const cheerio = require("cheerio");
const Config = require("../config");
const { react } = require("../lib/Asta");
let s_ser = true;
const axios = require('axios');
smd(
 {
   pattern: "repo",
   desc: "Show the bot's GitHub repository link.",
   category: "info",
   filename: __filename,
   use: "!repo",
 },
 async (m) => {
   try {
     const title = "Zax Md Github Repo Link";
     const body = "Zax Md Premium WhatsApp bot built in Node Js and Baileys with commands tp improve your whatsapp usage is here to bring a new way to use whatsapp.";
     const footer = "(copyRight logo text) Xiangzaoh Works";
     const contextInfo = {
       forwardingScore: 999,
       isForwarded: true,
       externalAdReply: {
         title: null,
         body: null,
         previewType: "PHOTO",
         thumbnailUrl: null,
         thumbnail: null,
         sourceUrl: "https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k",
       },
     };

     const buttons = [
       {
         buttonId: "id1",
         buttonText: { displayText: "Channel Link" },
         type: 1,
       },
     ];

     const buttonMessage = {
       text: `${body}\n\n${footer}`,
       footerText: footer,
       buttons: buttons,
       headerType: 1,
     };

     await m.bot.sendMessage(m.from, buttonMessage, {
       quoted: m.data,
       contextInfo,
     });
   } catch (e) {
     await m.error(`${e}\n\ncommand: repo`, e);
   }
 }
);
smd(
  {
    pattern: "zip",
    alias: ["zipcode"],
    desc: "Provides information about a US zip code.",
    category: "tools",
    use: "zip [zip_code]",
    examples: ["zip 90001", "zip 33162"]
  },
  async (message, input) => {
    const zipCode = input;

    if (!zipCode) {
      return message.reply("Please provide a zip code.");
    }

    try {
      const response = await axios.get(`https://api.zippopotam.us/us/${zipCode}`);
      const { postCode, country, countryAbbreviation, places } = response.data;

      let output = `
*Zip Code:* ${postCode}
*Country:* ${country} (${countryAbbreviation})
*Places:*
`;

      places.forEach((place, index) => {
        output += `\n${index + 1}. ${place["place name"]}, ${place.state} (${place.latitude}, ${place.longitude})`;
      });

      await message.send(output);
    } catch (error) {
      await message.error(
        error + "\n\nCommand: zip",
        error,
        "Failed to retrieve zip code information."
      );
    }
  }
);
smd(
  {
    pattern: "channel",
    desc: "To check ping",
    react: "🗨️",
    category: "user",
    filename: __filename,
  },
  async (message) => {
    const channelMessage = `ZAX MD CHANNEL SUPPORT\n\n _ʜᴇʏ ʜᴇʀᴇ's ᴏᴜʀ ᴄʜᴀɴɴᴇʟ ʟɪɴᴋ, ᴘʟᴇᴀsᴇ ғᴏʟʟᴏᴡ ᴀɴᴅ sᴜᴘᴘᴏʀᴛ ᴜs ᴛᴏ ᴋᴇᴇᴘ ᴛʜɪs ᴘʀᴏᴊᴇᴄᴛ ᴀʟɪᴠᴇ_\n *ʟɪɴᴋ:* https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k\n\n ${Config.botname} *WORKS*`;

    const contextInfo = {
      forwardingScore: 999,
      isForwarded: true,
    };

    await message.send(channelMessage, { contextInfo });
  }
);
smd(
  {
    pattern: "support",
    desc: "To check ping",
    react: "🗨️",
    category: "user",
    filename: __filename,
  },
  async (message) => {
    const SupportMsg = `ZAX MD GROUP SUPPORT\n\n *ʟɪɴᴋ:* https://chat.whatsapp.com/L7W9mOrPQH3LyRWmYV8dDj\n\n ${Config.botname} *WORKS*`;

    const contextInfo = {
      forwardingScore: 999,
      isForwarded: true,
    };

    await message.send(SupportMsg, { contextInfo });
  }
);
smd(
  {
    pattern: "cleartmp",
    type: "tools",
    info: "Clear temporary files cache",
  },
  async (_0xadf9f3) => {
    try {
      const _0xae4773 = "./temp";
      if (fs.existsSync(_0xae4773)) {
        fs.readdirSync(_0xae4773).forEach((_0x1577c1) =>
          fs.rmSync(_0xae4773 + "/" + _0x1577c1)
        );
      }
      await _0xadf9f3.reply("_The *temp* folder has been cleaned_");
    } catch (_0x3308a1) {
      _0xadf9f3.error(_0x3308a1 + "\n\nCommand: cleartmp", _0x3308a1, false);
    }
  }
);
smd(
  {
    cmdname: "restart",
    info: "To restart bot",
    type: "tools",
    fromMe: s_ser,
    filename: __filename,
  },
  async (_0x514d3c) => {
    const { exec: _0x1912df } = require("child_process");
    _0x514d3c.reply("Restarting");
    _0x1912df("pm2 restart all");
  }
);
smd(
  {
    cmdname: "shutdown",
    info: "To restart bot",
    type: "tools",
    fromMe: s_ser,
    filename: __filename,
  },
  async (_0x514d3c) => {
    const { exec: _0x1912df } = require("child_process");
    _0x514d3c.reply("Shutting Down");
    _0x1912df("pm2 stop all");
  }
);
let tmpUrl = "https://telegra.ph/file/b8e96b599e0fa54d25940.jpg";
const secmailData = {};
smd(
  {
    pattern: "tempmail",
    alias: ["tmpmail", "newmail", "tempemail"],
    info: "Create tempory email address, and use it according your need!",
    type: "tools",
  },
  async (_0x10eae6) => {
    try {
      if (!secmailData[_0x10eae6.sender]) {
        const _0x5b6408 = await tempmail.create();
        if (!_0x5b6408 || !_0x5b6408[0]) {
          return await _0x10eae6.reply("*Request Denied!*");
        }
        const _0x17929d = _0x5b6408[0].split("@");
        secmailData[_0x10eae6.sender] = {
          email: _0x5b6408[0],
          login: _0x17929d[0],
          domain: _0x17929d[1],
        };
      }
      var _0x54710d = false;
      try {
        _0x54710d = await smdBuffer(tmpUrl);
      } catch (_0x40985f) {}
      await _0x10eae6.reply(
        (
          "*YOUR TEMPMAIL INFO*\n      \n      \n  *EMAIL:* ➪ " +
          secmailData[_0x10eae6.sender].email +
          "\n  *Login:* ➪ " +
          secmailData[_0x10eae6.sender].login +
          "\n  *Domain:* ➪ " +
          secmailData[_0x10eae6.sender].domain +
          "\n  \n  \n  *USE _" +
          prefix +
          "checkmail_ to get latest emails!*\n  *USE _" +
          prefix +
          "delmail_ to delete current email!*\n  \n  " +
          Config.caption +
          "\n  "
        ).trim(),
        {
          contextInfo: {
            ...(await _0x10eae6.bot.contextInfo(
              "TEMPMAIL",
              _0x10eae6.senderName,
              _0x54710d
            )),
          },
        },
        "smd",
        _0x10eae6
      );
    } catch (_0x2c8958) {
      console.log(_0x2c8958);
      await _0x10eae6.reply("*Request Denied!*");
    }
  }
);
smd(
  {
    pattern: "checkmail",
    alias: ["readmail", "reademail"],
    type: "tools",
    info: "check mails in your temporary email address!",
  },
  async (_0x39080b) => {
    try {
      const _0x13bdf9 = _0x39080b.sender;
      const _0x1ca6eb = secmailData[_0x13bdf9];
      if (!_0x1ca6eb || !_0x1ca6eb.email) {
        return await _0x39080b.reply(
          "*You haven't created a temporary email.*\n  *Use _" +
            prefix +
            "tempmail_ to create email first!*"
        );
      }
      const _0xb59e7d = await tempmail.mails(_0x1ca6eb.login, _0x1ca6eb.domain);
      if (!_0xb59e7d || !_0xb59e7d[0] || _0xb59e7d.length === 0) {
        return await _0x39080b.reply(
          "*EMPTY  ➪ No mails received yet!* \n*Use _" +
            prefix +
            "delmail_ to delete mail!*"
        );
      }
      var _0x392c45 = false;
      try {
        _0x392c45 = await smdBuffer(tmpUrl);
      } catch (_0x27f4a4) {}
      for (const _0x2b6dd0 of _0xb59e7d) {
        const _0x587f7f = await tempmail.emailContent(
          _0x1ca6eb.login,
          _0x1ca6eb.domain,
          _0x2b6dd0.id
        );
        console.log({
          emailContent: _0x587f7f,
        });
        if (_0x587f7f) {
          const _0xa4d211 =
            "\n  *From* ➪ " +
            _0x2b6dd0.from +
            "\n  *Date* ➪  " +
            _0x2b6dd0.date +
            "\n  *EMAIL ID* ➪  [" +
            _0x2b6dd0.id +
            "]\n  *Subject* ➪  " +
            _0x2b6dd0.subject +
            "\n  *Content* ➪  " +
            _0x587f7f;
          await _0x39080b.reply(
            _0xa4d211,
            {
              contextInfo: {
                ...(await _0x39080b.bot.contextInfo(
                  "*EMAIL ➪ " + _0x2b6dd0.id + "*",
                  _0x39080b.senderName,
                  _0x392c45
                )),
              },
            },
            "smd",
            _0x39080b
          );
        }
      }
    } catch (_0x4473c8) {
      console.log(_0x4473c8);
      await _0x39080b.reply("*Request Denied!*");
    }
  }
);
smd(
  {
    pattern: "delmail",
    alias: ["deletemail", "deltemp", "deltmp"],
    type: "tools",
    info: "Delete tempory email address!",
  },
  async (_0x536927) => {
    try {
      const _0x35c5db = _0x536927.sender;
      if (secmailData[_0x35c5db]) {
        delete secmailData[_0x35c5db];
        await _0x536927.reply("*Successfully deleted the email address.*");
      } else {
        await _0x536927.reply("*No email address to delete.*");
      }
    } catch (_0x527b01) {
      console.log(_0x527b01);
      await _0x536927.reply("*Request Denied!*");
    }
  }
);
const tempmail = {};
tempmail.create = async () => {
  const _0x4b8b0a =
    "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1";
  try {
    let _0x64d3a = await fetch(_0x4b8b0a);
    if (!_0x64d3a.ok) {
      throw new Error("HTTP error! status: " + _0x64d3a.status);
    }
    let _0x3d6ee6 = await _0x64d3a.json();
    return _0x3d6ee6;
  } catch (_0x5fcd34) {
    console.log(_0x5fcd34);
    return null;
  }
};
tempmail.mails = async (_0xf78957, _0x22b96c) => {
  const _0x52bcfa =
    "https://www.1secmail.com/api/v1/?action=getMessages&login=" +
    _0xf78957 +
    "&domain=" +
    _0x22b96c;
  try {
    let _0x334113 = await fetch(_0x52bcfa);
    if (!_0x334113.ok) {
      throw new Error("HTTP error! status: " + _0x334113.status);
    }
    let _0x21e568 = await _0x334113.json();
    return _0x21e568;
  } catch (_0x470fd0) {
    console.log(_0x470fd0);
    return null;
  }
};
tempmail.emailContent = async (_0x2bb874, _0x365dd7, _0x53af41) => {
  const _0x525052 =
    "https://www.1secmail.com/api/v1/?action=readMessage&login=" +
    _0x2bb874 +
    "&domain=" +
    _0x365dd7 +
    "&id=" +
    _0x53af41;
  try {
    let _0x5287ec = await fetch(_0x525052);
    if (!_0x5287ec.ok) {
      throw new Error("HTTP error! status: " + _0x5287ec.status);
    }
    let _0x321f50 = await _0x5287ec.json();
    const _0x2d0a5f = _0x321f50.htmlBody;
    console.log({
      htmlContent: _0x2d0a5f,
    });
    const _0x59fd31 = cheerio.load(_0x2d0a5f);
    const _0x492dcb = _0x59fd31.text();
    return _0x492dcb;
  } catch (_0x47924e) {
    console.log(_0x47924e);
    return null;
  }
};
