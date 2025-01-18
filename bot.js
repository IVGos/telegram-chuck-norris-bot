const ChuckNorris = require('./ChuckNorris');

async function main() {
  const { Telegraf } = require('telegraf');
  const { message } = require('telegraf/filters');
  const fs = require('fs/promises');

  const BOT_TOKEN = '7904832764:AAH9YeCdBE_tL8Fy5DSFuyY-TpMKNsr2FA8';

  const bot = new Telegraf(BOT_TOKEN);
  const jokes = await fs.readFile('./chuck.json', 'utf-8');
  const allJokes = JSON.parse(jokes);
  // const joke = ChuckNorris.getJoke;
  let currentJoke;

  bot.start((ctx) => ctx.reply('Здесь шуточки за 300'));

  bot.command('joke', async (ctx) => {
    const newJoke = await ChuckNorris.getJoke();
    currentJoke = newJoke.value;
    ctx.reply(`очередная шуточка: ${newJoke.value}`);
  });

  bot.command('list', async (ctx) => {
    const jokeList = await allJokes
      .map((el, index) => `${index + 1}: ${el.title}`)
      .join('\n');
    ctx.reply(`тут список шуток:\n${jokeList}`);
  });
  bot.command('save', async (ctx) => {
    const jokeCount = allJokes.length 
    if (jokeCount >= 10) allJokes.shift();
    allJokes.push({ title: currentJoke });
    await fs.writeFile('./chuck.json', JSON.stringify(allJokes, null, 2));
    ctx.reply(`записал в базу шутку ${currentJoke}`);
  });

  bot.launch();

  // Enable graceful stop
  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));
}

main();
