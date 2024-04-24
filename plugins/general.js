const util = require("util");
const fs = require("fs-extra");
const { cmd } = require("../lib/plugins");
const { smd, createUrl } = require("../lib");
smd(
  {
    pattern: "readmore",
    alias: ["rmore", "readmor"],
    desc: "Adds *readmore* in given text.",
    category: "user",
    filename: __filename,
  },
  async (_0x5db0de, _0x38fb87) => {
    try {
      let _0x5ea4b8 = _0x38fb87 ? _0x38fb87 : _0x5db0de.reply_text;
      if (!_0x5ea4b8) {
        _0x5ea4b8 =
          "*Uhh Dear,Please provide text*\n*Eg:- _.readmor text1 readmore text2_*";
      } else {
        _0x5ea4b8 += " ";
      }
      if (_0x5ea4b8.includes("readmore")) {
        await _0x5db0de.reply(
          _0x5ea4b8.replace(/readmore/, String.fromCharCode(8206).repeat(4001))
        );
      } else {
        await _0x5db0de.reply(
          _0x5ea4b8.replace(" ", String.fromCharCode(8206).repeat(4001))
        );
      }
    } catch (_0x36cb2c) {
      await _0x5db0de.error(
        _0x36cb2c + "\n\ncommand : readmore",
        _0x36cb2c,
        false
      );
    }
  }
);
let pmtypes = ["videoMessage", "imageMessage"];
cmd(
  {
    pattern: "url",
    alias: ["createurl"],
    category: "user",
    filename: __filename,
    desc: "image to url.",
    use: "<video | image>",
  },
  async (_0x4e4351) => {
    try {
      let _0x680da4 = pmtypes.includes(_0x4e4351.mtype)
        ? _0x4e4351
        : _0x4e4351.reply_message;
      if (!_0x680da4 || !pmtypes.includes(_0x680da4?.mtype)) {
        return _0x4e4351.reply("*_Uhh Dear, Reply To An Image/Video!_*");
      }
      let _0x349452 = await _0x4e4351.bot.downloadAndSaveMediaMessage(
        _0x680da4
      );
      let _0x536aa6 = await createUrl(_0x349452);
      if (!_0x536aa6) {
        return _0x4e4351.reply("*_Failed To Create Url!_*");
      }
      try {
        fs.unlink(_0x349452);
      } catch {}
      await _0x4e4351.send(util.format(_0x536aa6), {}, "asta", _0x680da4);
    } catch (_0x2ee8cc) {
      await _0x4e4351.error(_0x2ee8cc + "\n\ncommand url", _0x2ee8cc);
    }
  }
);
cmd(
  {
    pattern: "upload",
    alias: ["url2"],
    category: "user",
    filename: __filename,
    desc: "image to url.",
    use: "<video | image>",
  },
  async (_0xbda24) => {
    try {
      let _0x7d6de1 = pmtypes.includes(_0xbda24.mtype)
        ? _0xbda24
        : _0xbda24.reply_message;
      if (!_0x7d6de1 || !pmtypes.includes(_0x7d6de1?.mtype)) {
        return _0xbda24.reply("*_Uhh Dear, Reply To An Image/Video!_*");
      }
      let _0xeb95de = await _0xbda24.bot.downloadAndSaveMediaMessage(_0x7d6de1);
      let _0x3e1ea8 = await createUrl(_0xeb95de, "uguMashi");
      try {
        fs.unlink(_0xeb95de);
      } catch {}
      if (!_0x3e1ea8 || !_0x3e1ea8.url) {
        return _0xbda24.reply("*_Failed To Create Url!_*");
      }
      await _0xbda24.send(util.format(_0x3e1ea8.url), {}, "asta", _0x7d6de1);
    } catch (_0x1a2f02) {
      await _0xbda24.error(_0x1a2f02 + "\n\ncommand upload", _0x1a2f02);
    }
  }
);
smd(
  {
    pattern: "calc",
    desc: "calculate an equation.",
    category: "user",
    use: "<equation>",
    filename: __filename,
  },
  async (_0x5d95a7, _0x28af98) => {
    try {
      if (!_0x28af98) {
        return await _0x5d95a7.reply(
          "*Please enter a math operation*\n*Example: .calc 22+12*"
        );
      }
      let _0xcebecd = _0x28af98.replace(/\s+/g, "");
      if (!/^(\d+([-+%*/]\d+)+)$/.test(_0xcebecd)) {
        return await _0x5d95a7.reply(
          "Please enter a valid mathematical operation."
        );
      }
      const _0x38ba36 = (_0x3b53fe) => {
        return new Function("return " + _0x3b53fe)();
      };
      const _0x5e0640 = _0x38ba36(_0xcebecd);
      if (
        _0xcebecd.includes("/") &&
        _0xcebecd.split("/").some((_0x413293) => _0x413293 === "0")
      ) {
        return _0x5d95a7.reply("Cannot divide by zero.");
      }
      if (_0xcebecd.split(/[-+%*/]/).length <= 2) {
        const [_0x120f57, _0x1de7dc, _0x112a0e] =
          _0xcebecd.match(/\d+|[-+%*/]/g);
        return await _0x5d95a7.reply(
          _0x120f57 + " " + _0x1de7dc + " " + _0x112a0e + " = " + _0x5e0640
        );
      } else {
        return await _0x5d95a7.reply("Result: " + _0x5e0640);
      }
    } catch (_0x120f52) {
      return await _0x5d95a7.error(_0x120f52 + "\n\ncommand: calc", _0x120f52);
    }
  }
);
