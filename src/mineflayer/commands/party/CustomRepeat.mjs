import { Permissions } from "../../../utils/Interfaces.mjs";

export default {
  name: ["customrep", "customrepeat", "crep", "crepeat"], // This command will be triggered by either command1 or command2
  ignore: false, // Whether to ignore this file or not
  description: "Repeat Command", // Description of the command
  permission: Permissions.Trusted, // Permission level required to execute

  // this command is VERY broken and i dont know why, ive tried during duration * 1000 but that doesnt work

  /**
   *
   * @param {import("../../Bot.mjs").default} bot
   * @param {String} sender
   * @param {Array<String>} args
   */
  execute: async function (bot, sender, args) {
    let repetitions = parseInt(args[0]);
    let duration = parseFloat(args[1]);
    let startIndex = 2;
    if (isNaN(duration)) {
      duration = 2;
      startIndex--;
    }
    if(isNaN(repetitions)) {
      repetitions = 5;
      startIndex--;
    }
    if (repetitions > 7) repetitions = 7;

    if (args.length < 1 + startIndex) {
      bot.reply(sender.username, "Invalid command usage!");
      setTimeout(() => {
        bot.reply(sender.username, "To use this command, use: !p customrepeat <repetitions> <duration> <message>")
        setTimeout(() => {
          bot.reply(sender.username, "For example: !p rep 5 1 Hello world!")
        }, 550)
      }, 550)
      return;
    }

    for (let i = 0; i < repetitions; i++) {
      setTimeout(() => {
        bot.chat(`/pc ${sender.username}: ${args.slice(startIndex).join(" ")}`);
      }, i * (duration * 1000));
    }

    /*
    if (isNaN(repetitions)) repetitions = 5;
    if(duration < 0.5) duration = 0.5;
    if (isNaN(duration)) duration = 2;

    if(args.slice(2).join(" "))

    bot.chat(`/pc ${sender.username}: ${args.slice(2).join(" ")}`);
    repetitions--;
    for (let i = 0; i < repetitions; i++) {
      setTimeout(
        () => {
          bot.chat(`/pc ${sender.username}: ${args.slice(2).join(" ")}`);
        },
        (i + 1) * (duration * 1000),
      );
    } */
  },
};
