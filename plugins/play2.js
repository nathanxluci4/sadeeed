const { cmd, commands } = require('../command');
const yts = require("yt-search");
const axios = require("axios");

const thumbnailUrl = "https://files.catbox.moe/t5jj6j.jpg";
const sourceUrl = "https://whatsapp.com/channel/0029VagLBl4DeOMyzdqe690U";

cmd({
  'pattern': 'video3',
  'alias': ["ytvid3", 'ytv3', 'ytvideo3'],
  'react': '🔄',
  'desc': "Download videos from YouTube by searching for keywords.",
  'category': "video",
  'use': ".vidx <keywords>",
  'filename': __filename
}, async (_0xd6d2a7, _0x52dd09, _0x274922, { from: _0x58af10, args: _0x30587b, reply: _0x1967fe }) => {
  try {
    const _0x501cea = _0x30587b.join(" ");
    if (!_0x501cea) {
      return _0x1967fe("*Please give SADE a video title or URL*");
    }
    _0x1967fe("> © SADE is Sᴇɴᴅɪɴɢ Yᴏᴜʀ ᴠɪᴅᴇᴏ Wᴀɪᴛ... ❄️");
    const _0x1ce220 = await yts(_0x501cea);
    if (!_0x1ce220.videos || _0x1ce220.videos.length === 0) {
      return _0x1967fe("❌ No results found for \"" + _0x501cea + "\".");
    }
    const _0x26f941 = _0x1ce220.videos[0];
    const _0x5920cf = _0x26f941.url;
    const _0x2d1d85 = "https://api.davidcyriltech.my.id/youtube/mp3?url=" + _0x5920cf;
    const _0x4e01c1 = await axios.get(_0x2d1d85);
    if (!_0x4e01c1.data.success) {
      return _0x1967fe("❌ Failed to fetch video for \"" + _0x501cea + "\".");
    }
    const { download_url: _0x1b649b } = _0x4e01c1.data.result;
    await _0xd6d2a7.sendMessage(_0x58af10, {
      video: { url: _0x1b649b },
      mimetype: "video/mp4",
      contextInfo: {
        externalAdReply: {
          title: "SADE Video Download",
          body: "Here is your video:",
          mediaType: 1,
          thumbnailUrl: thumbnailUrl,
          sourceUrl: sourceUrl,
          showAdAttribution: true,
        },
      },
    }, { quoted: _0x52dd09 });
  } catch (_0x2dd777) {
    console.error(_0x2dd777);
    _0x1967fe("❌ An error occurred while processing your request.");
  }
});

cmd({
  'pattern': 'play',
  'alias': ["song", 'ytplay3'],
  'react': '🔄',
  'desc': "Download audio from YouTube by searching for keywords.",
  'category': "music",
  'use': ".playx <keywords>",
  'filename': __filename
}, async (_0x5ccd79, _0xea2e4a, _0x258b5e, { from: _0x440036, args: _0x45f6cb, reply: _0xd2fbaa }) => {
  try {
    const _0x316468 = _0x45f6cb.join(" ");
    if (!_0x316468) {
      return _0xd2fbaa("*Please give SADE an audio title or URL*");
    }
    _0xd2fbaa("> © SADE is Sᴇɴᴅɪɴɢ Yᴏᴜʀ Sᴏɴɢ please Wᴀɪᴛ...❄️");
    const _0x2644f6 = await yts(_0x316468);
    if (!_0x2644f6.videos || _0x2644f6.videos.length === 0) {
      return _0xd2fbaa("❌ No results found for \"" + _0x316468 + "\".");
    }
    const _0x1381c4 = _0x2644f6.videos[0];
    const _0x4be45 = _0x1381c4.url;
    const _0x21c154 = "https://api.davidcyriltech.my.id/download/ytmp3?url=" + _0x4be45;
    const _0x2e3133 = await axios.get(_0x21c154);
    if (!_0x2e3133.data.success) {
      return _0xd2fbaa("❌ Failed to fetch audio for \"" + _0x316468 + "\".");
    }
    const { download_url: _0x5e3552 } = _0x2e3133.data.result;
    await _0x5ccd79.sendMessage(_0x440036, {
      audio: { url: _0x5e3552 },
      mimetype: "audio/mp4",
      ptt: false,
      contextInfo: {
        externalAdReply: {
          title: "SADE Audio Download",
          body: "Here is your song:",
          mediaType: 1,
          thumbnailUrl: thumbnailUrl,
          sourceUrl: sourceUrl,
          showAdAttribution: true,
        },
      },
    }, { quoted: _0xea2e4a });
  } catch (_0x1c8cbd) {
    console.error(_0x1c8cbd);
    _0xd2fbaa("❌ An error occurred while processing your request.");
  }
});
