const events = require(lib_dir + "/plugins.js");
let {
  Config,
  TelegraPh,
  sleep,
  getBuffer,
  parsedJid,
  fancy,
  tiny,
  botpic,
  tlang
} = require(lib_dir);
if (!Array.isArray(global.renters)) {
  global.renters = [];
}
if (!Array.isArray(global.rentdisable)) {
  global.rentdisable = [];
}
let disabledperma = ["antiaudio", "antimedia", "antiimage", "antivideo", "antipoll", "antisticker", "anticontact", "antilocation", "antidocument","antivirtex"];
const {
  userdb,
  smd,
  fetchJson,
  sendWelcome,
  bot_,
  getTime
} = require(lib_dir);
const util = require("util");
const fs = require("fs-extra");
const axios = require("axios");
const fetch = require("node-fetch");
const exec = util.promisify(require("child_process").exec);
let db = {};
db.get = async () => {
  const _0x39ecdb = "./ZAX.json";
  try {
    return JSON.parse(fs.readFileSync(_0x39ecdb, "utf-8"));
  } catch (_0x12c187) {
    return {};
  }
};
db.update = async _0x19934a => {
  try {
    const _0x370f4c = "./ZAX.json";
    const _0x50546d = db.get();
    const _0x456e8c = {
      ..._0x50546d,
      ..._0x19934a
    };
    fs.writeFileSync(_0x370f4c, JSON.stringify(_0x456e8c, null, 2), "utf-8");
    return _0x456e8c;
  } catch (_0x4e2ecd) {
    console.error("Error updating data:", _0x4e2ecd);
  }
};
  const {
    mention,
    filter
  } = require(lib_dir + "/Zax.js");
  let chats = global.db.data.chats[from]
        if (typeof chats !== 'object') global.db.data.chats[from] = {}
        if (chats) {
        if (!('antiforeignnum' in chats)) chats.antiforeignnum = false
        if (!('antimedia' in chats)) chats.media = false
        if (!('antivirtex' in chats)) chats.antivirtex = false
        if (!('antiimage' in chats)) chats.antiimage = false
        if (!('antivideo' in chats)) chats.video = false
        if (!('antiaudio' in chats)) chats.antiaudio = false
        if (!('antipoll' in chats)) chats.antipoll = false
        if (!('antisticker' in chats)) chats.antisticker = false
        if (!('anticontact' in chats)) chats.anticontact = false
        if (!('antilocation' in chats)) chats.antilocation = false
        if (!('antidocument' in chats)) chats.antidocument = false
      } else global.db.data.chats[from] = {
        antiforeignnum: false,
        antiviewonce: false,
        antivirtex: false,
        antimedia: false,
        antiimage: false,
        antivideo: false,
        antiaudio: false,
        antipoll: false,
        antisticker: false,
        antilocation: false,
        antidocument: false,
        anticontact: false,
      }
 //ANTI VIRUS
 if (isGroup && db.data.chats[m.chat].antivirtex) {
    if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
    if (isGroupAdmins) return replygcxeon('*VIRTEX DETECTED*')
    console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
    XeonBotInc.sendText(m.chat, `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`)   
    if (!isBotAdmins) return
    if(XeonTheCreator) return
    XeonBotInc.groupParticipantsUpdate(from, [sender], 'remove')
    await XeonBotInc.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
    XeonBotInc.sendMessage(`${ownernumber}@s.whatsapp.net`,{text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Virtex ${isGroup?`in ${groupName}`:''}`})
     }
     }
     
            //anti media
            if (db.data.chats[m.chat].antimedia && isMedia) {
            if (XeonTheCreator || isAdmins || !isBotAdmins){		  
            } else {
              replygcxeon(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`)
        return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
            }
      }
            if (db.data.chats[m.chat].image && isXeonMedia) {
        if(isXeonMedia === "imageMessage"){
            if (XeonTheCreator || isAdmins || !isBotAdmins){		  
            } else {
              replygcxeon(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`)
        return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
            }
        }
      }
            if (db.data.chats[m.chat].antivideo && isXeonMedia) {
        if(isXeonMedia === "videoMessage"){
            if (XeonTheCreator || isAdmins || !isBotAdmins){		  
            } else {
              replygcxeon(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`)
        return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
            }
        }
      }
            if (db.data.chats[m.chat].antisticker && isXeonMedia) {
        if(isXeonMedia === "stickerMessage"){
            if (XeonTheCreator || isAdmins || !isBotAdmins){		  
            } else {
              replygcxeon(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`)
        return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
            }
        }
      }
            if (db.data.chats[m.chat].antiaudio && isXeonMedia) {
        if(isXeonMedia === "audioMessage"){
            if (XeonTheCreator || isAdmins || !isBotAdmins){		  
            } else {
              replygcxeon(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
        return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
            }
        }
      }
           if (db.data.chats[m.chat].antipoll && isXeonMedia) {
        if(isXeonMedia === "pollCreationMessage"){
            if (XeonTheCreator || isAdmins || !isBotAdmins){		  
            } else {
              replygcxeon(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
        return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
            }
        }
      }
           if (db.data.chats[m.chat].antilocation && isXeonMedia) {
        if(isXeonMedia === "locationMessage"){
            if (XeonTheCreator || isAdmins || !isBotAdmins){		  
            } else {
              replygcxeon(`\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`)
        return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
            }
        }
      }
           if (db.data.chats[m.chat].antidocument && isXeonMedia) {
        if(isXeonMedia === "documentMessage"){
            if (XeonTheCreator || isAdmins || !isBotAdmins){		  
            } else {
              replygcxeon(`\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`)
        return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
            }
        }
      }
          if (db.data.chats[m.chat].anticontact && isXeonMedia)
        if(isXeonMedia === "contactMessage"){
            if (XeonTheCreator || isAdmins || !isBotAdmins){		  
            } else {
              replygcxeon(`\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`)
        return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
            }
        }
             'antiaudio'
            	if (!m.isGroup) return XeonStickGroup()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
               if (args.length < 1) return replygcxeon('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiaudio = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiaudio = false
                  replygcxeon(`${command} is disabled`)
               }
               
             'antiforeign'
            	if (!m.isGroup) return XeonStickGroup()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
               if (args.length < 1) return replygcxeon('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[m.chat].antiforeignnum = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[m.chat].antiforeignnum = false
                  replygcxeon(`${command} is disabled`)
               }
               
             'poll' 
	if (!XeonTheCreator) return XeonStickOwner()
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await replygcxeon(
                    `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Xeon,Cheems,Doge...`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await XeonBotInc.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        
             'antipoll'
            	if (!m.isGroup) return XeonStickGroup()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
               if (args.length < 1) return replygcxeon('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antipoll = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antipoll = false
                  replygcxeon(`${command} is disabled`)
               }
               
             'antisticker'
            	if (!m.isGroup) return XeonStickGroup()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
               if (args.length < 1) return replygcxeon('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antisticker = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antisticker = false
                  replygcxeon(`${command} is disabled`)
               }
               
             'antiimage'
            	if (!m.isGroup) return XeonStickGroup()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
               if (args.length < 1) return replygcxeon('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiimage = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiimage = false
                  replygcxeon(`${command} is disabled`)
               }
               
             'antivideo'
            	if (!m.isGroup) return XeonStickGroup()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
               if (args.length < 1) return replygcxeon('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antivideo = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antivideo = false
                  replygcxeon(`${command} is disabled`)
               }
               
             'antivirtex'
		         if (!m.isGroup) return XeonStickGroup()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
               if (args.length < 1) return replygcxeon('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antivirtex = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antivirtex = false
                  replygcxeon(`${command} is disabled`)
               }
               
             'antiviewonce'
		         if (!m.isGroup) return XeonStickGroup()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
               if (args.length < 1) return replygcxeon('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiviewonce = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiviewonce = false
                  replygcxeon(`${command} is disabled`)
               }
               
             'antimedia'
		         if (!m.isGroup) return XeonStickGroup()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
               if (args.length < 1) return replygcxeon('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antimedia = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antimedia = false
                  replygcxeon(`${command} is disabled`)
               }
               
             'antidocument'
		         if (!m.isGroup) return XeonStickGroup()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
               if (args.length < 1) return replygcxeon('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antidocument = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antidocument = false
                  replygcxeon(`${command} is disabled`)
               }
               
             'anticontact'
		         if (!m.isGroup) return XeonStickGroup()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
               if (args.length < 1) return replygcxeon('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].anticontact = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].anticontact = false
                  replygcxeon(`${command} is disabled`)
               }
               
             'antilocation'
		         if (!m.isGroup) return XeonStickGroup()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
               if (args.length < 1) return replygcxeon('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilocation = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilocation = false
                  replygcxeon(`${command} is disabled`)
               }
               