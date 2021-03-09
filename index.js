import dotenv from "dotenv";
import Discord from "discord.js";

dotenv.config();

const client = new Discord.Client();

client
  .login(process.env.TOKEN)
  .then(() => {
    console.info("\nAWAKE\n");
  })
  .catch(() => {
    console.error("\nERROR\n");
  });

client.on("message", async function (message) {
  // message.delete();
  if (!message.author.bot) {
    console.log(message.content);
    console.log(message.cleanContent);
    console.log(message.attachments);
    // console.log(message.reply("أخلاقك"));
    console.log(message.embeds);
    // (await message.author.createDM()).send("أخلاقك");
  }
});
