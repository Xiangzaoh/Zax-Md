const fs = require("fs").promises;
const path = require("path");
const { SESSION_ID } = require("../config");
const PastebinAPI = require("pastebin-js");

const sessionPath = path.resolve(__dirname, "../session");
const pastebin = new PastebinAPI("bR1GcMw175fegaIFV2PfignYVtF0b_Bl");

async function ensureSessionDirectory() {
 try {
  await fs.mkdir(sessionPath, { recursive: true });
 } catch (error) {
  console.error("Error creating session directory:", error);
 }
}

function decodeBase64(encodedString) {
 try {
  return Buffer.from(encodedString, "base64").toString("utf-8");
 } catch (error) {
  console.error("Error decoding base64:", error);
  return null;
 }
}

async function writeFile(filePath, data) {
 try {
  await fs.writeFile(filePath, data);
  console.log("Saved file:", filePath);
 } catch (error) {
  console.error(`Error writing file: ${filePath}`, error);
 }
}

async function writeSession(sessionId = SESSION_ID) {
 await ensureSessionDirectory();

 const cleanedSessionId = ("" + sessionId).replace(/ֆաǟɦɨʟ~/gi, "").trim();

 if (cleanedSessionId.length > 20) {
  const decodedSession = decodeBase64(cleanedSessionId);
  if (!decodedSession) return;

  try {
   const parsedSession = JSON.parse(decodedSession);

   if (parsedSession["creds.json"]) {
    for (const [fileName, fileData] of Object.entries(parsedSession)) {
     const fileContent = typeof fileData === "string" ? fileData : JSON.stringify(fileData, null, 2);
     await writeFile(path.join(sessionPath, fileName), fileContent);
    }
   } else {
    await writeFile(path.join(sessionPath, "creds.json"), JSON.stringify(parsedSession, null, 2));
   }
  } catch (error) {
   console.error("Error processing session data:", error);
  }
 } else {
  try {
   const decodedData = await pastebin.getPaste(cleanedSessionId);
   await writeFile(path.join(sessionPath, "creds.json"), decodedData.toString());
  } catch (error) {
   console.error("Error fetching or writing Pastebin data:", error);
  }
 }
}

module.exports = { writeSession };
