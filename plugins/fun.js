const axios = require("axios");
const { randomeFunfacts, smd } = require("../lib");
const fetch = require("node-fetch");
smd(
  {
    cmdname: "question",
    info: "Random Question.",
    type: "fun",
    filename: __filename,
  },
  async (_0x526dda, _0x570e21, { smd: _0x59940a }) => {
    try {
      await _0x526dda.reply(await randomeFunfacts(_0x59940a));
    } catch (_0x2763aa) {
      await _0x526dda.error(_0x2763aa + "\n\ncommand: " + _0x59940a, _0x2763aa);
    }
  }
);
smd(
  {
    cmdname: "truth",
    info: "truth and dare(truth game.).",
    type: "fun",
    filename: __filename,
  },
  async (_0xc2b276, _0x3b493e, { smd: _0x52be61 }) => {
    try {
      await _0xc2b276.reply(await randomeFunfacts(_0x52be61));
    } catch (_0x28b284) {
      await _0xc2b276.error(_0x28b284 + "\n\ncommand: " + _0x52be61, _0x28b284);
    }
  }
);
smd(
  {
    cmdname: "dare",
    info: "truth and dare(dare game.).",
    type: "fun",
    filename: __filename,
  },
  async (_0x330b72, _0x34d36a, { smd: _0x2a0858 }) => {
    try {
      await _0x330b72.reply(await randomeFunfacts(_0x2a0858));
    } catch (_0x27a0b8) {
      await _0x330b72.error(_0x27a0b8 + "\n\ncommand: " + _0x2a0858, _0x27a0b8);
    }
  }
);
smd(
  {
    cmdname: "joke",
    info: "Sends Joke in chat.",
    type: "fun",
    filename: __filename,
  },
  async (_0x330ac0, _0x8b468d, { smd: _0x2e3522 }) => {
    try {
      await _0x330ac0.reply(await randomeFunfacts(_0x2e3522));
    } catch (_0x1817a2) {
      await _0x330ac0.error(_0x1817a2 + "\n\ncommand: " + _0x2e3522, _0x1817a2);
    }
  }
);
smd(
  {
    cmdname: "joke2",
    info: "Sends Joke in chat.",
    type: "fun",
    filename: __filename,
  },
  async (_0x5c9c52, _0x6b6e25, { smd: _0x64ba }) => {
    try {
      await _0x5c9c52.reply(await randomeFunfacts(_0x64ba));
    } catch (_0x35fd84) {
      await _0x5c9c52.error(_0x35fd84 + "\n\ncommand: " + _0x64ba, _0x35fd84);
    }
  }
);
smd(
  {
    cmdname: "fact",
    info: "Sends fact in chat.",
    type: "fun",
    filename: __filename,
  },
  async (_0x1dc7e3, _0x16aaa1, { smd: _0x375b98 }) => {
    try {
      await _0x1dc7e3.reply(await randomeFunfacts(_0x375b98));
    } catch (_0x1e1a8b) {
      await _0x1dc7e3.error(_0x1e1a8b + "\n\ncommand: " + _0x375b98, _0x1e1a8b);
    }
  }
);
smd(
  {
    cmdname: "quotes",
    info: "Sends quotes in chat.",
    type: "fun",
    filename: __filename,
  },
  async (_0x12963f, _0x4f30d2, { smd: _0x3462d1 }) => {
    try {
      await _0x12963f.reply(await randomeFunfacts(_0x3462d1));
    } catch (_0x18e714) {
      await _0x12963f.error(_0x18e714 + "\n\ncommand: " + _0x3462d1, _0x18e714);
    }
  }
);
smd(
  {
    cmdname: "define",
    info: "urban dictionary.",
    type: "fun",
    filename: __filename,
  },
  async (_0x460337, _0x614c0a) => {
    try {
      let _0x328d73 = _0x614c0a ? _0x614c0a : _0x460337.reply_text;
      if (!_0x328d73) {
        return await _0x460337.send(
          "*_Hey " + _0x460337.senderName + ", please provide a text!_*"
        );
      }
      let { data: _0x330600 } = await axios.get(
        "http://api.urbandictionary.com/v0/define?term=" + _0x328d73
      );
      var _0x27eb8f = _0x330600
        ? "*Word:* ```" +
          _0x328d73 +
          "``` \n*Definition:* ```" +
          _0x330600.list[0].definition.replace(/\[/g, "").replace(/\]/g, "") +
          "``` \n*Example:* ```" +
          _0x330600.list[0].example.replace(/\[/g, "").replace(/\]/g, "") +
          "```"
        : "*_No results found for given word_*";
      return _0x460337.reply(_0x27eb8f);
    } catch (_0x1d0916) {
      await _0x460337.error(
        _0x1d0916 + "\n\ncommand: define",
        _0x1d0916,
        "*No result for:* ```" + text + "```"
      );
    }
  }
);
smd(
  {
    cmdname: "character",
    category: "fun",
    use: "[@user]",
    filename: __filename,
    info: "Check character of replied USER!",
  },
  async (_0x2a677e) => {
    const _0x32c078 = _0x2a677e.reply_message
      ? _0x2a677e.reply_message.sender
      : _0x2a677e.mentionedJid && _0x2a677e.mentionedJid[0]
      ? _0x2a677e.mentionedJid[0]
      : "";
    if (!_0x32c078 || !_0x32c078.includes("@")) {
      return await _0x2a677e.reply(
        "*Mention/reply user to check its character!*"
      );
    }
    const _0x5845d4 = [
      "Sigma",
      "Generous",
      "Grumpy",
      "Overconfident",
      "Obedient",
      "Good",
      "Simple",
      "Kind",
      "Patient",
      "Pervert",
      "Cool",
      "Helpful",
      "Brilliant",
      "Sexy",
      "Hot",
      "Gorgeous",
      "Cute",
      "Fabolous",
      "Funny",
    ];
    const _0x2f5d93 = _0x5845d4[Math.floor(Math.random() * _0x5845d4.length)];
    let _0x3b31ed =
      "Character of @" +
      _0x32c078.split("@")[0] +
      "  is *" +
      _0x2f5d93 +
      "* 🔥⚡";
    _0x2a677e.send(
      _0x3b31ed,
      {
        mentions: [_0x32c078],
      },
      "asta",
      _0x2a677e
    );
  }
);
smd(
  {
    cmdname: "poetry",
    alias: ["shairi", "shayeri"],
    type: "fun",
    info: "get randome poetry lines",
  },
  async (_0x4d032f) => {
    try {
      let _0x45fa91 = await fetch(
        "https://shizoapi.onrender.com/api/texts/shayari?apikey=shizo"
      );
      let { result: _0x1aa994 } = await _0x45fa91.json();
      _0x4d032f.reply(
        _0x45fa91 && _0x1aa994 ? _0x1aa994 : "_Request Denied from Server!_"
      );
    } catch (_0x303ba6) {
      await _0x4d032f.error(
        _0x303ba6 + "\n\ncommand : poetry",
        _0x303ba6,
        false
      );
    }
  }
);
var sifat = [
  "Fine",
  "Unfriendly",
  "Cute",
  "Sigma",
  "Chapri",
  "Nibba/nibbi",
  "Annoying",
  "Dilapidated",
  "Angry person",
  "Polite",
  "Burden",
  "Great",
  "Cringe",
  "Liar",
];
var hoby = [
  "Cooking",
  "Dancing",
  "Playing",
  "Gaming",
  "Painting",
  "Helping Others",
  "Watching anime",
  "Reading",
  "Riding Bike",
  "Singing",
  "Chatting",
  "Sharing Memes",
  "Drawing",
  "Eating Parents Money",
  "Playing Truth or Dare",
  "Staying Alone",
];
var cakep = ["Yes", "No", "Very Ugly", "Very Handsome"];
var wetak = [
  "Caring",
  "Generous",
  "Angry person",
  "Sorry",
  "Submissive",
  "Fine",
  "Im sorry",
  "Kind Hearted",
  "Patient",
  "UwU",
  "Top",
  "Helpful",
];
var checkme = {};
smd(
  {
    cmdname: "personality",
    alias: ["aboutme"],
    desc: "Check randome information about your character!",
    category: "fun",
    filename: __filename,
  },
  async (_0x263d98, _0x3610bc) => {
    try {
      let _0x2126b2 = _0x263d98.sender;
      if (_0x263d98.isCreator) {
        _0x2126b2 = _0x263d98.reply_message
          ? _0x263d98.reply_message.sender
          : _0x263d98.mentionedJid[0]
          ? _0x263d98.mentionedJid[0]
          : _0x2126b2;
      }
      let _0x32f5f0 =
        !/fresh|reset|new|why|update/g.test(_0x3610bc) && checkme[_0x2126b2]
          ? checkme[_0x2126b2]
          : "*ABOUT @" +
            _0x2126b2.split("@")[0] +
            "*\n  \n*Name :* " +
            (await _0x263d98.bot.getName(_0x2126b2)).split("\n").join("  ") +
            "\n*Characteristic :* " +
            sifat[Math.floor(Math.random() * sifat.length)] +
            "\n*Hobby :* " +
            hoby[Math.floor(Math.random() * hoby.length)] +
            "\n*Simp :* " +
            Math.floor(Math.random() * 101) +
            "%\n*Great :* " +
            Math.floor(Math.random() * 101) +
            "%\n*Handsome :* " +
            cakep[Math.floor(Math.random() * cakep.length)] +
            "\n*Character :* " +
            wetak[Math.floor(Math.random() * wetak.length)] +
            "\n*Good Morals :* " +
            Math.floor(Math.random() * 101) +
            "%\n*Bad Morals :* " +
            Math.floor(Math.random() * 101) +
            "%\n*Intelligence :* " +
            Math.floor(Math.random() * 101) +
            "%\n*Courage :* " +
            Math.floor(Math.random() * 101) +
            "%\n*Afraid :* " +
            Math.floor(Math.random() * 101) +
            "%\n  \n *aLL BOUT UO*";
      checkme[_0x2126b2] = _0x32f5f0;
      _0x263d98.bot.sendUi(
        _0x263d98.from,
        {
          caption: _0x32f5f0,
          mentions: [_0x2126b2],
        },
        {
          quoted: _0x263d98,
        },
        "image",
        await _0x263d98.getpp(_0x2126b2),
        true
      );
    } catch (_0x3a370c) {
      _0x263d98.error(_0x3a370c + "\n\nCommand:aboutme", _0x3a370c, false);
    }
  }
);
