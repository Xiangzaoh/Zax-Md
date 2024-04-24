let { runtime, formatp, prefix, smd, smdBuffer } = require("../lib");
const axios = require("axios");
const os = require("os");
const speed = require("performance-now");
const Config = require("../config");
smd(
  {
    cmdname: "test",
    alias: ["check", "checkbot"],
    desc: "Check bot is active?",
    category: "misc",
    filename: __filename,
  },
  async (_0x17bb63) => {
    try {
      let _0x12a593 = "*BOT CURRENTLY ACTIVE!*";
      await _0x17bb63.reply(
        _0x12a593,
        {
          contextInfo: {
            externalAdReply: {
              title: "ACTIVE",
              sourceUrl: gurl,
              showAdAttribution: true,
              thumbnail: await smdBuffer(await _0x17bb63.getpp()),
            },
          },
        },
        "asta"
      );
    } catch (_0x2ace2e) {}
  }
);
smd(
  {
    cmdname: "caption",
    alias: ["setcaption"],
    desc: "set caption for Replied Message",
    category: "misc",
    filename: __filename,
  },
  async (_0xcc3d0b, _0x718ae9) => {
    try {
      if (!_0xcc3d0b.reply_message || !_0x718ae9) {
        return await _0xcc3d0b.reply(
          !_0xcc3d0b.reply_message
            ? "*_Please reply to message with caption | filname_*"
            : "*Please provide text to set caption!*"
        );
      }
      if (
        _0xcc3d0b.reply_message.image ||
        _0xcc3d0b.reply_message.video ||
        _0xcc3d0b.reply_message.mtype.includes("document")
      ) {
        let _0x4e09a5 = "" + _0x718ae9.split("|")[1]?.trim() || "null";
        let _0x14b6a8 = _0xcc3d0b.reply_message.mtype.includes("document")
          ? _0x718ae9.split("|")[0].trim()
          : _0x718ae9;
        _0xcc3d0b.reply_message.message[_0xcc3d0b.reply_message.mtype].caption =
          _0x14b6a8;
        _0xcc3d0b.reply_message.message[
          _0xcc3d0b.reply_message.mtype
        ].fileName = _0x4e09a5;
        await _0xcc3d0b.bot.copyNForward(
          _0xcc3d0b.chat,
          _0xcc3d0b.reply_message
        );
      } else {
        return await _0xcc3d0b.reply(
          "please reply to an Audio/Video/document message"
        );
      }
    } catch (_0x5ab188) {
      await _0xcc3d0b.error(
        _0x5ab188 + "\n\ncommand : caption",
        _0x5ab188,
        false
      );
    }
  }
);
smd(
  {
    cmdname: "document",
    alias: ["senddoc", "todoc"],
    desc: "send document for Replied image/video Message",
    category: "misc",
    filename: __filename,
  },
  async (_0x7587f6, _0x11eeb1) => {
    try {
      let _0x49db20 =
        _0x7587f6.image || _0x7587f6.video
          ? _0x7587f6
          : _0x7587f6.reply_message &&
            (_0x7587f6.reply_message.image || _0x7587f6.reply_message.video)
          ? _0x7587f6.reply_message
          : false;
      if (!_0x49db20) {
        return await _0x7587f6.reply("_Reply to an image/video message!_");
      }
      if (!_0x11eeb1) {
        return await _0x7587f6.reply(
          "_Need fileName, Example: document Asta | caption_"
        );
      }
      let _0x1bfcf5 = await _0x7587f6.bot.downloadAndSaveMediaMessage(
        _0x49db20
      );
      let _0x3f6d77 = _0x11eeb1.includes(":")
        ? ":"
        : _0x11eeb1.includes(";")
        ? ";"
        : "|";
      let _0x3c4532 =
        _0x11eeb1.split(_0x3f6d77)[0].trim() +
        "." +
        (_0x49db20.image ? "jpg" : "mp4");
      let _0x3367ca = _0x11eeb1.split(_0x3f6d77)[1]?.trim() || "";
      _0x3367ca = ["copy", "default", "old", "reply"].includes(_0x3367ca)
        ? _0x49db20.text
        : _0x3367ca;
      if (_0x1bfcf5) {
        _0x7587f6.bot.sendMessage(_0x7587f6.chat, {
          document: {
            url: _0x1bfcf5,
          },
          mimetype: _0x49db20.mimetype,
          fileName: _0x3c4532,
          caption: _0x3367ca,
        });
      } else {
        _0x7587f6.reply("*Request Denied!*");
      }
    } catch (_0x408490) {
      await _0x7587f6.error(
        _0x408490 + "\n\ncommand : document",
        _0x408490,
        false
      );
    }
  }
);
smd(
  {
    cmdname: "tovv",
    alias: ["toviewonce"],
    desc: "send viewonce for Replied image/video Message",
    category: "misc",
    filename: __filename,
  },
  async (_0x241c6f, _0x5ce27a) => {
    try {
      let _0x1d26ad =
        _0x241c6f.image || _0x241c6f.video
          ? _0x241c6f
          : _0x241c6f.reply_message &&
            (_0x241c6f.reply_message.image || _0x241c6f.reply_message.video)
          ? _0x241c6f.reply_message
          : false;
      if (!_0x1d26ad) {
        return await _0x241c6f.reply("_Reply to image/video with caption!_");
      }
      let _0x60cca4 = await _0x241c6f.bot.downloadAndSaveMediaMessage(
        _0x1d26ad
      );
      let _0x8cde12 = _0x1d26ad.image ? "image" : "video";
      if (_0x60cca4) {
        _0x241c6f.bot.sendMessage(
          _0x241c6f.chat,
          {
            [_0x8cde12]: {
              url: _0x60cca4,
            },
            caption: _0x5ce27a,
            mimetype: _0x1d26ad.mimetype,
            fileLength: "99999999",
            viewOnce: true,
          },
          {
            quoted: _0x1d26ad,
          }
        );
      } else {
        _0x241c6f.reply("*Request Denied!*");
      }
    } catch (_0x2422e7) {
      await _0x241c6f.error(_0x2422e7 + "\n\ncommand : tovv", _0x2422e7, false);
    }
  }
);

smd(
  {
    cmdname: "request",
    alias: ["reportbug", "report"],
    desc: "report bug/features of bot to its creator!",
    category: "misc",
    filename: __filename,
  },
  async (_0x3b2ef2, _0x45bf7a) => {
    try {
      if (!_0x45bf7a) {
        return _0x3b2ef2.reply(
          "Example : " +
            prefix +
            "request [REQUEST/BUG] yt commands are not working!"
        );
      }
      if (_0x45bf7a.split(" ").length < 5) {
        return _0x3b2ef2.reply("_your `REQUEST/BUG`  must have `5 words` !_");
      }
      let _0x2dca1f = "*| REQUEST/BUG |*";
      let _0x3c1a2b =
        "\n\n*User* : @" +
        _0x3b2ef2.senderNum +
        "\n\n*Request/Bug* : " +
        _0x45bf7a;
      let _0x23711a =
        "\n\n*Hii " +
        _0x3b2ef2.senderName.split("\n").join(" ") +
        ", Your request has been forwarded to my Creator!*.";
      await _0x3b2ef2.sendMessage(
        "2348039607375@s.whatsapp.net",
        {
          text: _0x2dca1f + _0x3c1a2b,
          mentions: [_0x3b2ef2.sender],
        },
        {
          quoted: _0x3b2ef2,
        }
      );
      await _0x3b2ef2.reply(
        _0x2dca1f + _0x23711a + _0x3c1a2b,
        {
          mentions: [_0x3b2ef2.sender],
        },
        "asta",
        _0x3b2ef2
      );
    } catch (_0x29b74b) {
      _0x3b2ef2.error(_0x29b74b + "\n\nCommand: request", _0x29b74b, false);
    }
  }
);

smd(
  {
    cmdname: "ping2",
    alias: ["botstatus", "statusbot", "p2"],
    type: "misc",
    info: "get randome poetry lines",
  },
  async (_0xdfc3ca) => {
    try {
      const _0x37ca41 = process.memoryUsage();
      const _0x4a72de = os.cpus().map((_0x39cb6a) => {
        _0x39cb6a.total = Object.keys(_0x39cb6a.times).reduce(
          (_0x432663, _0x5a155c) => _0x432663 + _0x39cb6a.times[_0x5a155c],
          0
        );
        return _0x39cb6a;
      });
      const _0x410388 = _0x4a72de.reduce(
        (_0x8a6a46, _0x3dde47, _0x4edc26, { length: _0x378aa4 }) => {
          _0x8a6a46.total += _0x3dde47.total;
          _0x8a6a46.speed += _0x3dde47.speed / _0x378aa4;
          _0x8a6a46.times.user += _0x3dde47.times.user;
          _0x8a6a46.times.nice += _0x3dde47.times.nice;
          _0x8a6a46.times.sys += _0x3dde47.times.sys;
          _0x8a6a46.times.idle += _0x3dde47.times.idle;
          _0x8a6a46.times.irq += _0x3dde47.times.irq;
          return _0x8a6a46;
        },
        {
          speed: 0,
          total: 0,
          times: {
            user: 0,
            nice: 0,
            sys: 0,
            idle: 0,
            irq: 0,
          },
        }
      );
      let _0xce26d = speed();
      let _0x3db049 = speed() - _0xce26d;
      neww = performance.now();
      oldd = performance.now();
      respon = (
        "\nResponse Speed " +
        _0x3db049.toFixed(4) +
        " _Second_ \n " +
        (oldd - neww) +
        " _miliseconds_\n\nRuntime : " +
        runtime(process.uptime()) +
        "\n\n💻 Info Server\nRAM: " +
        formatp(os.totalmem() - os.freemem()) +
        " / " +
        formatp(os.totalmem()) +
        "\n\n_NodeJS Memory Usaage_\n" +
        Object.keys(_0x37ca41)
          .map(
            (_0x19d575, _0x3942d9, _0x3fa08c) =>
              _0x19d575.padEnd(
                Math.max(..._0x3fa08c.map((_0x6548cb) => _0x6548cb.length)),
                " "
              ) +
              ": " +
              formatp(_0x37ca41[_0x19d575])
          )
          .join("\n") +
        "\n\n" +
        (_0x4a72de[0]
          ? "_Total CPU Usage_\n" +
            _0x4a72de[0].model.trim() +
            " (" +
            _0x410388.speed +
            " MHZ)\n" +
            Object.keys(_0x410388.times)
              .map(
                (_0xffc60c) =>
                  "- *" +
                  (_0xffc60c + "*").padEnd(6) +
                  ": " +
                  (
                    (_0x410388.times[_0xffc60c] * 100) /
                    _0x410388.total
                  ).toFixed(2) +
                  "%"
              )
              .join("\n") +
            " "
          : "") +
        "\n\n "
      ).trim();
      _0xdfc3ca.reply(respon);
    } catch (_0x13d03e) {
      await _0xdfc3ca.error(
        _0x13d03e + "\n\ncommand : ping2",
        _0x13d03e,
        false
      );
    }
  }
);
smd(
  {
    cmdname: "myip",
    alias: ["ip"],
    type: "misc",
    info: "get randome poetry lines",
  },
  async (_0x446c27) => {
    try {
      let { data: _0x58d504 } = await axios.get("https://api.ipify.org/");
      _0x446c27.send(
        _0x58d504
          ? "*Bot's IP address is : _" + _0x58d504 + "_*"
          : "_No responce from server!_"
      );
    } catch (_0x2976b7) {
      await _0x446c27.error(_0x2976b7 + "\n\ncommand : myip", _0x2976b7, false);
    }
  }
);
let ssweb = (_0x55d18b, _0x2b24ca = "desktop") => {
  return new Promise((_0x3e38ef, _0x5b6da8) => {
    const _0x3eb2a3 = "https://www.screenshotmachine.com";
    const _0x3bbdf7 = {
      url: _0x55d18b,
      device: _0x2b24ca,
      cacheLimit: 0,
    };
    axios({
      url: _0x3eb2a3 + "/capture.php",
      method: "POST",
      data: new URLSearchParams(Object.entries(_0x3bbdf7)),
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    })
      .then((_0xc3c6b3) => {
        const _0x5ba45c = _0xc3c6b3.headers["set-cookie"];
        if (_0xc3c6b3.data.status == "success") {
          axios
            .get(_0x3eb2a3 + "/" + _0xc3c6b3.data.link, {
              headers: {
                cookie: _0x5ba45c.join(""),
              },
              responseType: "arraybuffer",
            })
            .then(({ data: _0x257890 }) => {
              result = {
                status: 200,
                result: _0x257890,
              };
              _0x3e38ef(result);
            });
        } else {
          _0x5b6da8({
            status: 404,
            statuses: "Link Error",
            message: _0xc3c6b3.data,
          });
        }
      })
      .catch(_0x5b6da8);
  });
};
smd(
  {
    cmdname: "ss",
    alias: ["webss", "fullss"],
    type: "misc",
    info: "get randome poetry lines",
  },
  async (_0x4cdec8, _0x41dfb5) => {
    try {
      let _0x587b99 = _0x41dfb5.split(" ")[0].trim();
      if (!_0x587b99) {
        return await _0x4cdec8.reply(
          "*Need URL! Use " +
            prefix +
            "ss https://github.com/Astropeda/Asta-Md*"
        );
      }
      let _0x358290 = await ssweb(_0x587b99);
      if (_0x358290 && _0x358290.status == "200") {
        return await _0x4cdec8.send(
          _0x358290.result,
          {
            caption: Config.caption,
          },
          "smdimg",
          _0x4cdec8
        );
      } else {
        _0x4cdec8.send("_No responce from server!_");
      }
    } catch (_0x126b07) {
      await _0x4cdec8.error(
        _0x126b07 + "\n\ncommand : myip",
        _0x126b07,
        "*Request Denied!*"
      );
    }
  }
);
smd(
  {
    pattern: "repo",
    alias: ["git", "sc", "script"],
    desc: "Sends info about repo",
    category: "tools",
    filename: __filename,
  },
  async (_0x45da98) => {
    try {
      let { data: _0x44f98c } = await axios.get(
        "https://api.github.com/repos/Astropeda/Asta-Md"
      );
      let _0x1c73f9 = (
        "\nSimple WhatsApp Bot, Created By *" +
        Config.ownername +
        "*. \n\n  *❲❒❳ Stars:* " +
        (_0x44f98c?.stargazers_count || "120+") +
        " stars\n  *❲❒❳ Forks:* " +
        (_0x44f98c?.forks_count || "1000+") +
        " forks\n  *❲❒❳ Creator:* MrXhriss\n  *❲❒❳ Created:* " +
        (_0x44f98c?.created_at || "undefined") +
        "\n  *❲❒❳ Repo:* _https://github.com/videoyt24/Swahili-Md_\n  *❲❒❳ Scan:* _" +
        scan +
        "_\n\n" +
        (Config.caption ? "\n\n" + Config.caption : "")
      ).trim();
      return await _0x45da98.sendUi(_0x45da98.jid, {
        caption: _0x1c73f9,
      });
    } catch (_0x5816fe) {
      await _0x45da98.error(_0x5816fe + "\n\ncommand: repo", _0x5816fe);
    }
  }
);
smd(
  {
    pattern: "status",
    alias: ["about", "info"],
    desc: "To check bot status",
    category: "misc",
    filename: __filename,
  },
  async (_0x397531) => {
    try {
      const _0x2d09cb = process.uptime();
      timestampe = speed();
      latensie = speed() - timestampe;
      let _0x53eb40 = (
        " *I am " +
        Config.botname +
        "* \n  *❲❒❳ About:* A Simple WhatsApp Bot, Created By *" +
        Config.ownername +
        "*.\n\n  *❲❒❳ Speed:* " +
        latensie.toFixed(4) +
        " ms\n  *❲❒❳ Uptime:* " +
        runtime(process.uptime()) +
        "\n  *❲❒❳ Version:* " +
        Config.VERSION +
        "\n  *❲❒❳ Owner:*  " +
        Config.ownername +
        "\n\n  *❲❒❳ Channel:* _" +
        gurl +
        "_ \n" +
        (Config.caption ? "\n\n" + Config.caption : "")
      ).trim();
      return await _0x397531.bot.sendUi(_0x397531.jid, {
        caption: _0x53eb40,
      });
    } catch {}
  }
);
smd(
  {
    pattern: "cpu",
    desc: "To check bot status",
    category: "misc",
    filename: __filename,
  },
  async (_0x51c639) => {
    try {
      const _0x78d515 = process.memoryUsage();
      const _0x14b376 = os.cpus().map((_0x4baa78) => {
        _0x4baa78.total = Object.keys(_0x4baa78.times).reduce(
          (_0x124129, _0x54fdbe) => _0x124129 + _0x4baa78.times[_0x54fdbe],
          0
        );
        return _0x4baa78;
      });
      const _0x52bb92 = _0x14b376.reduce(
        (_0x371aab, _0x42f37d, _0x41ec3e, { length: _0x3f2c1a }) => {
          _0x371aab.total += _0x42f37d.total;
          _0x371aab.speed += _0x42f37d.speed / _0x3f2c1a;
          _0x371aab.times.user += _0x42f37d.times.user;
          _0x371aab.times.nice += _0x42f37d.times.nice;
          _0x371aab.times.sys += _0x42f37d.times.sys;
          _0x371aab.times.idle += _0x42f37d.times.idle;
          _0x371aab.times.irq += _0x42f37d.times.irq;
          return _0x371aab;
        },
        {
          speed: 0,
          total: 0,
          times: {
            user: 0,
            nice: 0,
            sys: 0,
            idle: 0,
            irq: 0,
          },
        }
      );
      timestampe = speed();
      latensie = speed() - timestampe;
      var _0x54755f = performance.now();
      var _0x366cd8 = performance.now();
      respon = (
        "*❲❒❳ " +
        Config.botname +
        " Server Info ❲❒❳*\n\n  *❲❒❳ Runtime:* " +
        runtime(process.uptime()) +
        "\n  *❲❒❳ Speed:* " +
        latensie.toFixed(3) +
        "/" +
        (_0x366cd8 - _0x54755f).toFixed(3) +
        " ms\n  *❲❒❳ RAM:* " +
        formatp(os.totalmem() - os.freemem()) +
        " / " +
        formatp(os.totalmem()) +
        "\n\n  *❲❒❳ Memory Usage:*\n      " +
        Object.keys(_0x78d515)
          .map(
            (_0x4a444a, _0xf623b7, _0x26f7ee) =>
              _0x4a444a.padEnd(
                Math.max(..._0x26f7ee.map((_0x470f51) => _0x470f51.length)),
                " "
              ) +
              ": " +
              formatp(_0x78d515[_0x4a444a])
          )
          .join("\n      ") +
        "\n\n" +
        (_0x14b376[0]
          ? "  *❲❒❳ Total CPU Usage:*\n  *" +
            _0x14b376[0].model.trim() +
            " (" +
            _0x52bb92.speed +
            " MHZ)*\n      " +
            Object.keys(_0x52bb92.times)
              .map(
                (_0x1a945a) =>
                  "-" +
                  (_0x1a945a + "").padEnd(6) +
                  ": " +
                  (
                    (_0x52bb92.times[_0x1a945a] * 100) /
                    _0x52bb92.total
                  ).toFixed(2) +
                  "%"
              )
              .join("\n      ") +
            "\n\n  *❲❒❳ CPU Core Usage (" +
            _0x14b376.length +
            " Core CPU)*\n  " +
            _0x14b376
              .map(
                (_0x1ada4d, _0x5999d4) =>
                  "*Core " +
                  (_0x5999d4 + 1) +
                  ": " +
                  _0x1ada4d.model.trim() +
                  " (" +
                  _0x1ada4d.speed +
                  " MHZ)*\n      " +
                  Object.keys(_0x1ada4d.times)
                    .map(
                      (_0x2cc08d) =>
                        "-" +
                        (_0x2cc08d + "").padEnd(6) +
                        ": " +
                        (
                          (_0x1ada4d.times[_0x2cc08d] * 100) /
                          _0x1ada4d.total
                        ).toFixed(2) +
                        "%"
                    )
                    .join("\n      ")
              )
              .join("\n\n")
          : "") +
        "\n"
      ).trim();
      return await _0x51c639.send(respon, {}, "", _0x51c639);
    } catch (_0x102a1d) {
      await _0x51c639.error(
        _0x102a1d + "\n\ncommand: cpu",
        _0x102a1d,
        "*_No responce from Server side, Sorry!!_*"
      );
    }
  }
);
