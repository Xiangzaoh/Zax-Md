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
    if (isGroupAdmins) return replygczax('*VIRTEX DETECTED*')
    console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
    ZaxBotInc.sendText(m.chat, `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`)   
    if (!isBotAdmins) return
    if(ZaxTheCreator) return
    ZaxBotInc.groupParticipantsUpdate(from, [sender], 'remove')
    await ZaxBotInc.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
    ZaxBotInc.sendMessage(`${ownernumber}@s.whatsapp.net`,{text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Virtex ${isGroup?`in ${groupName}`:''}`})
     }
     }
     
            //anti media
            if (db.data.chats[m.chat].antimedia && isMedia) {
            if (ZaxTheCreator || isAdmins || !isBotAdmins){		  
            } else {
              replygczax(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`)
        return ZaxBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
            }
      }
            if (db.data.chats[m.chat].image && isZaxMedia) {
        if(isZaxMedia === "imageMessage"){
            if (ZaxTheCreator || isAdmins || !isBotAdmins){		  
            } else {
              replygczax(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`)
        return ZaxBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
            }
        }
      }
            if (db.data.chats[m.chat].antivideo && isZaxMedia) {
        if(isZaxMedia === "videoMessage"){
            if (ZaxTheCreator || isAdmins || !isBotAdmins){		  
            } else {
              replygczax(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`)
        return ZaxBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
            }
        }
      }
            if (db.data.chats[m.chat].antisticker && isZaxMedia) {
        if(isZaxMedia === "stickerMessage"){
            if (ZaxTheCreator || isAdmins || !isBotAdmins){		  
            } else {
              replygczax(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`)
        return ZaxBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
            }
        }
      }
            if (db.data.chats[m.chat].antiaudio && isZaxMedia) {
        if(isZaxMedia === "audioMessage"){
            if (ZaxTheCreator || isAdmins || !isBotAdmins){		  
            } else {
              replygczax(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
        return ZaxBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
            }
        }
      }
           if (db.data.chats[m.chat].antipoll && isZaxMedia) {
        if(isZaxMedia === "pollCreationMessage"){
            if (ZaxTheCreator || isAdmins || !isBotAdmins){		  
            } else {
              replygczax(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
        return ZaxBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
            }
        }
      }
           if (db.data.chats[m.chat].antilocation && isZaxMedia) {
        if(isZaxMedia === "locationMessage"){
            if (ZaxTheCreator || isAdmins || !isBotAdmins){		  
            } else {
              replygczax(`\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`)
        return ZaxBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
            }
        }
      }
           if (db.data.chats[m.chat].antidocument && isZaxMedia) {
        if(isZaxMedia === "documentMessage"){
            if (ZaxTheCreator || isAdmins || !isBotAdmins){		  
            } else {
              replygczax(`\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`)
        return ZaxBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
            }
        }
      }
          if (db.data.chats[m.chat].anticontact && isZaxMedia)
        if(isZaxMedia === "contactMessage"){
            if (ZaxTheCreator || isAdmins || !isBotAdmins){		  
            } else {
              replygczax(`\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`)
        return ZaxBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
            }
        }
             'antiaudio'
            	if (!m.isGroup) return ZaxStickGroup()
if (!isBotAdmins) return ZaxStickBotAdmin()
if (!isAdmins && !ZaxTheCreator) return ZaxStickAdmin()
               if (args.length < 1) return replygczax('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiaudio = true
                  replygczax(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiaudio = false
                  replygczax(`${command} is disabled`)
               }
               
             'antiforeign'
            	if (!m.isGroup) return ZaxStickGroup()
if (!isBotAdmins) return ZaxStickBotAdmin()
if (!isAdmins && !ZaxTheCreator) return ZaxStickAdmin()
               if (args.length < 1) return replygczax('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[m.chat].antiforeignnum = true
                  replygczax(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[m.chat].antiforeignnum = false
                  replygczax(`${command} is disabled`)
               }
               
             'poll' 
	if (!ZaxTheCreator) return ZaxStickOwner()
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await replygczax(
                    `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Zax,zaxbot,Doge...`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await ZaxBotInc.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        
             'antipoll'
            	if (!m.isGroup) return ZaxStickGroup()
if (!isBotAdmins) return ZaxStickBotAdmin()
if (!isAdmins && !ZaxTheCreator) return ZaxStickAdmin()
               if (args.length < 1) return replygczax('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antipoll = true
                  replygczax(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antipoll = false
                  replygczax(`${command} is disabled`)
               }
               
             'antisticker'
            	if (!m.isGroup) return ZaxStickGroup()
if (!isBotAdmins) return ZaxStickBotAdmin()
if (!isAdmins && !ZaxTheCreator) return ZaxStickAdmin()
               if (args.length < 1) return replygczax('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antisticker = true
                  replygczax(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antisticker = false
                  replygczax(`${command} is disabled`)
               }
               
             'antiimage'
            	if (!m.isGroup) return ZaxStickGroup()
if (!isBotAdmins) return ZaxStickBotAdmin()
if (!isAdmins && !ZaxTheCreator) return ZaxStickAdmin()
               if (args.length < 1) return replygczax('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiimage = true
                  replygczax(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiimage = false
                  replygczax(`${command} is disabled`)
               }
               
             'antivideo'
            	if (!m.isGroup) return ZaxStickGroup()
if (!isBotAdmins) return ZaxStickBotAdmin()
if (!isAdmins && !ZaxTheCreator) return ZaxStickAdmin()
               if (args.length < 1) return replygczax('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antivideo = true
                  replygczax(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antivideo = false
                  replygczax(`${command} is disabled`)
               }
               
             'antivirtex'
		         if (!m.isGroup) return ZaxStickGroup()
if (!isBotAdmins) return ZaxStickBotAdmin()
if (!isAdmins && !ZaxTheCreator) return ZaxStickAdmin()
               if (args.length < 1) return replygczax('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antivirtex = true
                  replygczax(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antivirtex = false
                  replygczax(`${command} is disabled`)
               }
               
             'antiviewonce'
		         if (!m.isGroup) return ZaxStickGroup()
if (!isBotAdmins) return ZaxStickBotAdmin()
if (!isAdmins && !ZaxTheCreator) return ZaxStickAdmin()
               if (args.length < 1) return replygczax('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiviewonce = true
                  replygczax(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiviewonce = false
                  replygczax(`${command} is disabled`)
               }
               
             'antimedia'
		         if (!m.isGroup) return ZaxStickGroup()
if (!isBotAdmins) return ZaxStickBotAdmin()
if (!isAdmins && !ZaxTheCreator) return ZaxStickAdmin()
               if (args.length < 1) return replygczax('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antimedia = true
                  replygczax(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antimedia = false
                  replygczax(`${command} is disabled`)
               }
               
             'antidocument'
		         if (!m.isGroup) return ZaxStickGroup()
if (!isBotAdmins) return ZaxStickBotAdmin()
if (!isAdmins && !ZaxTheCreator) return ZaxStickAdmin()
               if (args.length < 1) return replygczax('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antidocument = true
                  replygczax(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antidocument = false
                  replygczax(`${command} is disabled`)
               }
               
             'anticontact'
		         if (!m.isGroup) return ZaxStickGroup()
if (!isBotAdmins) return ZaxStickBotAdmin()
if (!isAdmins && !ZaxTheCreator) return ZaxStickAdmin()
               if (args.length < 1) return replygczax('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].anticontact = true
                  replygczax(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].anticontact = false
                  replygczax(`${command} is disabled`)
               }
               
             'antilocation'
		         if (!m.isGroup) return ZaxStickGroup()
if (!isBotAdmins) return ZaxStickBotAdmin()
if (!isAdmins && !ZaxTheCreator) return ZaxStickAdmin()
               if (args.length < 1) return replygczax('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilocation = true
                  replygczax(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilocation = false
                  replygczax(`${command} is disabled`)
               }
               