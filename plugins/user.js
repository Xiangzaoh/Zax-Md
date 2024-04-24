const { Config, smd } = require("../lib");
const cmd = smd;
cmd(
  {
    pattern: "jid",
    desc: "get jid of all user in a group.",
    category: "user",
    filename: __filename,
    use: "<@user>",
  },
  async ({ jid: _0x317d9b, reply: _0x355aae, quoted: _0x5256f4 }) => {
    if (_0x5256f4) {
      return _0x355aae(_0x5256f4.sender);
    } else {
      return _0x355aae(_0x317d9b);
    }
  }
);
cmd(
  {
    pattern: "getpp",
    desc: "Get Profile Pic For Given User",
    category: "user",
    filename: __filename,
  },
  async (_0x24b8a0) => {
    try {
      let _0x4cd072 = _0x24b8a0.reply_message
        ? _0x24b8a0.reply_message.sender
        : _0x24b8a0.mentionedJid[0]
        ? _0x24b8a0.mentionedJid[0]
        : _0x24b8a0.from;
      let _0x23f248;
      try {
        _0x23f248 = await _0x24b8a0.bot.profilePictureUrl(_0x4cd072, "image");
      } catch (_0x42ab42) {
        return _0x24b8a0.reply("```Profile Pic Not Fetched```");
      }
      return await _0x24b8a0.bot.sendMessage(
        _0x24b8a0.chat,
        {
          image: {
            url: _0x23f248,
          },
          caption: "  *---Profile Pic Is Here---*\n" + Config.caption,
        },
        {
          quoted: _0x24b8a0,
        }
      );
    } catch (_0x40b881) {
      await _0x24b8a0.error(_0x40b881 + "\n\ncommand : getpp", _0x40b881);
    }
  }
);
cmd(
  {
    pattern: "whois",
    desc: "Makes photo of replied sticker.",
    category: "user",
    use: "<reply to any person>",
    filename: __filename,
  },
  async (_0x5b9714) => {
    try {
      let _0x354e18 = _0x5b9714.reply_message
        ? _0x5b9714.reply_message.sender
        : _0x5b9714.mentionedJid[0]
        ? _0x5b9714.mentionedJid[0]
        : false;
      if (!_0x354e18 && _0x5b9714.isGroup) {
        const _0x561b75 =
          (await _0x5b9714.bot
            .profilePictureUrl(_0x5b9714.chat, "image")
            .catch(
              (_0x1c3876) => "https://telegra.ph/file/29a8c892a1d18fdb26028.jpg"
            )) || THUMB_IMAGE;
        const _0x3bf573 = _0x5b9714.metadata;
        const _0x3526c9 = _0x5b9714.admins
          .map(
            (_0x2df5bb, _0x5c8c6c) =>
              "  " + (_0x5c8c6c + 1) + ". wa.me/" + _0x2df5bb.id.split("@")[0]
          )
          .join("\n");
        const _0x46b7ba =
          _0x3bf573.owner ||
          _0x5b9714.admins.find((_0x297d66) => _0x297d66.admin === "superadmin")
            ?.id ||
          false;
        let _0x204314 =
          "\n      *「 GROUP INFORMATION 」*\n*▢ NAME :* \n   • " +
          _0x3bf573.subject +
          "\n*▢ Members :*\n   • " +
          _0x3bf573.participants.length +
          "\n*▢ Group Owner :*\n   • " +
          (_0x46b7ba ? "wa.me/" + _0x46b7ba.split("@")[0] : "notFound") +
          "\n*▢ Admins :*\n" +
          _0x3526c9 +
          "\n*▢ Description :*\n   • " +
          (_0x3bf573.desc?.toString() || "_not set_") +
          "\n   ";
        return await _0x5b9714.reply(
          _0x561b75,
          {
            caption: _0x204314,
          },
          "image"
        );
      } else {
        if (!_0x354e18) {
          return _0x5b9714.reply("*_Please Reply To A Person!_*");
        }
        try {
          var _0x12d99e = await _0x5b9714.bot.fetchStatus(_0x354e18);
          var _0x23847e = _0x12d99e.status;
          var _0xfd4a68 = _0x12d99e.setAt.toString();
          var _0x5d0d88 = _0xfd4a68.split(" ");
          if (_0x5d0d88.length > 3) {
            _0xfd4a68 = _0x5d0d88.slice(0, 5).join(" ");
          }
        } catch {
          var _0x23847e = "undefined";
          var _0xfd4a68 = "";
        }
        var _0x52ccee = _0x354e18.split("@")[0];
        let _0x5ae446;
        try {
          _0x5ae446 = await _0x5b9714.bot.profilePictureUrl(_0x354e18, "image");
        } catch (_0x17156a) {
          _0x5ae446 = "https://telegra.ph/file/29a8c892a1d18fdb26028.jpg";
        }
        var _0xf3d6e0 = await _0x5b9714.bot.getName(_0x354e18);
        return await _0x5b9714.bot.sendMessage(
          _0x5b9714.jid,
          {
            image: {
              url: _0x5ae446,
            },
            caption: "`ASTA MD WHATSAPP BOT`",
          },
          {
            quoted: _0x5b9714,
          }
        );
      }
    } catch (_0x31ca34) {
      await _0x5b9714.error(_0x31ca34 + "\n\ncommand : whois", _0x31ca34);
    }
  }
);
cmd(
  {
    pattern: "wa",
    desc: "Makes wa me of quoted or mentioned user.",
    category: "user",
    filename: __filename,
  },
  async (_0x3186cd) => {
    try {
      let _0x3c71d6 = _0x3186cd.reply_message
        ? _0x3186cd.reply_message.sender
        : _0x3186cd.mentionedJid[0]
        ? _0x3186cd.mentionedJid[0]
        : false;
      await _0x3186cd.reply(
        !_0x3c71d6
          ? "*Please Reply Or Mention A User*"
          : "https://wa.me/" + _0x3c71d6.split("@")[0]
      );
    } catch (_0x100353) {
      await _0x3186cd.error(_0x100353 + "\n\ncommand : wa", _0x100353, false);
    }
  }
);
cmd(
  {
    pattern: "mee",
    desc: "Makes wa me for user.",
    category: "user",
    filename: __filename,
  },
  async (_0x12ac1b) => {
    try {
      return await _0x12ac1b.reply(
        "https://wa.me/" + _0x12ac1b.sender.split("@")[0]
      );
    } catch {}
  }
);
