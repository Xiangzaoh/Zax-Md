// Code credits: © Souravkl11 - Raganork MD™

const {Module} = require('../main');

Module({
    pattern: 'inactive ?(.*)',
    fromMe: true,
    desc:"Shows, Kicks inactive members. (Only from when bot was set up)",
    usage:".inactive 30 days, .inactive 50 msgs kick, you can add 'kick' for kicking."
}, (async (message, match) => {
    if (!message.isGroup) return await message.sendReply(Lang.GROUP_COMMAND)
    var m = message; var conn = message.client;
    let msgs = await conn.getMessages(m.jid);
    var users = (await conn.groupMetadata(m.jid)).participants.map(e=>e.id);
    let senders = Object.keys(msgs)
    if (match[1]?.includes("days")){
    let inactive = []
    let queryDate = parseInt(match[1].replace(/^\D+/g,''))
    let result = `_*Members with no messages since ${queryDate} days*_\n\n`;
    let i = 0
    for (let user of users){
    try {var timeDiff = new Date().getTime() - msgs[user]?.time } catch { var timeDiff = 0 }
    try {var dateDiff = parseInt(timeDiff/(1000*3600*24))}catch{var dateDiff = 0}
    if ((queryDate <= dateDiff) || !senders.includes(user)){
    i++
    inactive.push(user)
    result+=`${(i)}. @${user.split('@')[0]}\n`
      }    
     }
    if (match[1]?.toLowerCase().includes("kick")){
   let kickmsg = `_*Kicking ${inactive.length} inactive members with no messages since ${queryDate}*_`
   await new Promise((r)=>setTimeout(r,3000))
   await conn.sendMessage(m.jid,{text:kickmsg,mentions:inactive});        
   for (let user of inactive){
    await conn.groupParticipantsUpdate(m.jid,[user],'remove')
    await new Promise((r)=>setTimeout(r,1000))
    }
   return;
   }
    await conn.sendMessage(m.jid,{text:result,mentions:inactive});        
    }
    if (match[1]?.includes("msgs")){
    let inactive = []
    let queryMsg = parseInt(match[1].replace(/^\D+/g,''))
    let result = `_*Members with less than ${queryMsg} messages*_\n\n`;
    let i = 0
    for (let user of users){
    if ((queryMsg > msgs[user]?.total) || !senders.includes(user)){
    i++
    inactive.push(user)
    result+=`${(i)}. @${user.split('@')[0]}\n`
      }    
     }
   if (match[1]?.toLowerCase().includes("kick")){
   let kickmsg = `_*Kicking ${inactive.length} inactive members with less than ${queryMsg} messages*_`
   await new Promise((r)=>setTimeout(r,3000))
   await conn.sendMessage(m.jid,{text:kickmsg,mentions:inactive});        
   for (let user of inactive){
    await conn.groupParticipantsUpdate(m.jid,[user],'remove')
    await new Promise((r)=>setTimeout(r,1000))
    }
   return;
   } 
   await conn.sendMessage(m.jid,{text:result,mentions:inactive});
}
    if (!match[1]){
    let inactive = []
    let result = "_*Members with 0 messages*_\n\n";
    let i = 0
for (let px in users){
    if (!senders.includes(users[px])){
 i++
 inactive.push(users[px]);
 result+=`${(i)}. @${users[px].split('@')[0]}\n`
 } 
}
await conn.sendMessage(m.jid,{text:result,mentions:inactive});    
}
}))
