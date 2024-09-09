const { command, mode, toAudio, IronMan } = require("../lib");
const ScrapeDl = require("../lib/scraper");
command(
   {
      pattern: "fb",
      fromMe: mode,
      desc: "Downloads Facebook Media",
      type: "download",
   },
   async (message, match) => {
      if (!match) return message.reply("_provide vaild facebook link_");
      await message.reply("_Downloading_");
      const buff = await ScrapeDl.facebook(match);
      return message.sendFile(buff);
   }
);

command(
   {
      pattern: "insta",
      fromMe: mode,
      desc: "Downloads Instagram Media",
      type: "download",
   },
   async (message, match) => {
      if (!match) return message.reply("_provide vaild instagram link_");
      await message.reply("_Downloading_");
      const buff = await ScrapeDl.instagram(match);
      return message.sendFile(buff);
   }
);

command(
   {
      pattern: "twitter",
      fromMe: mode,
      desc: "Downloads Twitter Media",
      type: "download",
   },
   async (message, match) => {
      if (!match) return message.reply("_provide vaild twitter url_");
      await message.reply("_Downloading_");
      const buff = await ScrapeDl.twitter(match);
      return await message.sendFile(buff);
   }
);

command(
   {
      pattern: "tiktok",
      fromMe: mode,
      desc: "Downloads Tiktok Media",
      type: "download",
   },
   async (message, match) => {
      if (!match) return await message.reply("_provide tiktok url_");
      await message.reply("_Downloading_");
      const buff = await ScrapeDl.tiktok(match);
      return await message.sendFile(buff);
   }
);

command(
   {
      pattern: "pinterest",
      fromMe: mode,
      desc: "Downloads Pinterest Images",
      type: "download",
   },
   async (message, match) => {
      if (!match) return message.reply("_provide me a searching option_");
      await message.reply("_Searching_");
      const buffers = await ScrapeDl.pinterest(match);
      for (const buffer of buffers) {
         await message.sendFile(buffer);
      }
   }
);

command(
   {
      pattern: "spotify",
      fromMe: mode,
      desc: "Downloads Spotify Music",
      type: "download",
   },
   async (message, match) => {
      if (!match) return message.reply("_provide me spotify url_");
      await message.reply("_Downloading_");
      const buff = await ScrapeDl.spotify(match);
      const audio = await toAudio(buff, "mp3");
      return await msg.sendMessage(msg.jid, audio, { mimetype: "audio/mpeg" }, "audio");
   }
);

command(
   {
      pattern: "ytv",
      fromeMe: mode,
      desc: "Downloads Youtube Videos",
      type: "download",
   },
   async (message, match) => {
      if (!match) return message.reply("_provide youtube url_");
      await message.reply("_Downloading_");
      const buff = await ScrapeDl.youtube(match);
      return await message.sendFile(buff);
   }
);

command(
   {
      pattern: "yta",
      fromMe: mode,
      desc: "Download Youtube Music Audio",
      type: "download",
   },
   async (message, match) => {
      if (!match) return await message.reply("_provide youtube music_");
      await message.reply("_Downloading_");
      const buff = await ScrapeDl.ytmp3(match);
      return await message.sendFile(buff);
   }
);

command(
   {
      pattern: "story",
      fromMe: mode,
      desc: "Downloads Instagram stories",
      type: "download",
   },
   async (message, match) => {
      if (!match) return message.reply("_Provide a valid Instagram username_");
      await message.reply(`_Downloading stories of ${match}..._`);
      const res = await fetch(IronMan(`ironman/ig/story?user=${match}`));
      const data = await res.json();
      if (!data.status || !data.media.length) return message.reply("_No stories found for this user or this account is private_");
      for (const dl of data.media) {
         await message.sendFile(dl);
      }
   }
);

command(
   {
      pattern: "play",
      fromMe: mode,
      desc: "Fetches Songs",
      type: "download",
   },
   async (msg, cont) => {
      const { prefix } = msg.prefix;
      if (!cont) return await msg.sendReply(`_Provide Me Song Name_\n\n${prefix} play Just the two of us`);
      await msg.sendReply("_Downloading_");
      let audio = await ScrapeDl["play"](cont);
      audio = await toAudio(audio, "mp3");
      return await msg.sendMessage(msg.jid, audio, { mimetype: "audio/mpeg" }, "audio");
   }
);
