// استدعاء المكتبات المطلوبة
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

// إنشاء نسخة جديدة من البوت وتحديد الصلاحيات (Intents)
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// حدث يشتغل عندما يفتح البوت ويكون أونلاين
client.once('ready', () => {
    console.log(`🚀 البوت شغال بنجاح باسم: ${client.user.tag}`);
});

// أول أمر: البوت يرد عندما يكتب أي شخص "ping"
client.on('messageCreate', (message) => {
    // تجنب رد البوت على نفسه
    if (message.author.bot) return;

    if (message.content.toLowerCase() === 'ping') {
        message.reply('🏓 Pong!');
    }
});

// تشغيل البوت باستخدام التوكن المخفي في البيئة الأمنة
client.login(process.env.DISCORD_TOKEN);
