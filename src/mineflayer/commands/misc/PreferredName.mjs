import { Permissions } from "../../../utils/Interfaces.mjs";

export default {
  name: ["preferredname", "pn", "name"],
  ignore: false,
  description: "Sets your preferred name so the bot knows what to call you",
  permission: Permissions.Splasher,
  /**
   *
   * @param {import("../../Bot.mjs").default} bot
   * @param {String} sender
   * @param {Array<String>} args
   */
  execute: async function (bot, sender, args) {
    const usernames = bot.utils
      .getUserObject({ name: sender.username })
      ?.accounts?.map((acc) => acc.name);
    if (!usernames)
      return bot.reply(
        sender,
        "How are you even able to run this without being in the db??",
      );
    // attempt to get the requested username with correct capitalisation
    const requestedName = usernames.find(
      (name) => name?.toLowerCase() === args[0]?.toLowerCase(),
    );
    if (!requestedName) // no name supplied or not a valid option
      return bot.reply(
        sender,
        `Your current preferred name is: ${sender.preferredName}. Set it to one of your other accounts' igns: ${usernames.join(", ")}`,
      );
    bot.utils.setPreferredUsername({
      name: sender.username,
      newName: requestedName,
    });
    bot.reply(sender, `Your preferred name has been set to ${requestedName}.`);
  },
};
