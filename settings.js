/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU1rY0lKRHhHMHFtNWRGbjk2Z2k3VnBUUEJzZXlmQmNzWlU4eHZHei9HOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHloOExtTTc2ZUtaOHJVOUlIeWp0SHNReFZ1L0k2MVcveTlSUFM2YUVITT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQmpISE9RZGIvdy9VMHVySjhGTG9XZkNQZWlvUk1XN01sTDB6SkZpQ1dNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJaEJyckdJb29ucTBFVlpEUnFRLzVJZk03cjZuQWs2V1NHdDc3L0NSRVRRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFQSmdxYTlUMC9wU1VFRnJ0OFJuY2FOMDdYVnExZmZSdElzT0hkb3pKR3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlIxZmxLd05IRmJkdWRhczF2dXZBVmpTRWQwNlQ1WVhycVhSZzNWNHEzVG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkthRE5qek4xVzM3OEk0eS9aOUQwOEZONzZwTHpVKzM0Z3dVd3JuOFQxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0hJTTdNcDE5dVFrNjJxd1lPOFdRZmRkK1MwSmdhbGZIY0syWHdxVDlIMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImR4WVM4d2s0elMwOWJBdURKU2dFM2xacEVITXlGYmxtaHU1VjE0MGVqWmI4WldjdGlwdWRLdUliQUpHWncwMTBOam54U1hMRVp6TDlGQ2J4aHh6eENBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTYsImFkdlNlY3JldEtleSI6Ik1XVTU1VDB5VnAxOXQ4TUU2b3ZJdUtZdERXbVJFSlV6QThwSlVjWUJlZFk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IldDMDg0V1dVU2txdW9XdGlwY09nQ1EiLCJwaG9uZUlkIjoiNTY0NzRjNzQtNWNkYS00OWZlLWExODktM2M5N2YwOWZhY2NhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklQWS9UUmgzaDlmaDVrc3haVTduQ1Vwc2RLMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUZ3EyVkdTYjk0WTFWbU5HcW0xZUhpcUlUWEk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVk4ySkoxR1ciLCJtZSI6eyJpZCI6IjI2MzcxNDc1Nzg1Nzo2OEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkgxbnFFRkVJYjdtYnNHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibWMvS2o3MEZqeUlycGx2RVR4SzBBK2tzenEvNHg2ZDgwLzRqNGZIZUsyQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiKzZ5QkhTNDVuamxJZnpxUjZaOGRwZkY2NXU5Y1JYTHF1OVJkaUJmSW1sVmh2d0RZYWtiMCtHVldDdmFDdGNzTHhvY0hLVjFNRlp4eEhWVG5sRnNYRHc9PSIsImRldmljZVNpZ25hdHVyZSI6ImxJOWdOLytnYVB4bFlNQzI5Q2VjeDVMOGM3NjkycTZZcjBoR1BxZC9JeGwzbUF4R3hmZXNpWit1V3FPUlpaTGg3a2x3TW5SMloxbThjWjl2dTlOTEF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzE0NzU3ODU3OjY4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpuUHlvKzlCWThpSzZaYnhFOFN0QVBwTE02ditNZW5mTlArSStIeDNpdGcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQ3NzAwNjksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTjQyIn0=';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "263";
const author = process.env.STICKER_AUTHOR || 'Akii;
const packname = process.env.PACKNAME || 'akii';
const dev = process.env.DEV || '263714757857';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || '𝙰𝙺𝙸𝙾-𝙼𝙳';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antispam = process.env.ANTISPAM || 'true';
const chatbot = process.env.CHAT_BOT || 'true';
const antilink = process.env.ANTILINK || 'true';
const autoreact = process.env.AUTOREACT || 'true';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'true';
const antibad = process.env.ANTI_BAD_WORD || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'true';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  autoreact,
  mode,
  antibad,
  antilink,
  prefix,
  anticall,
  chatbot,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete
};
