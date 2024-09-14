import { Permissions } from "../../../utils/Interfaces.mjs";

export default {
    name: ["allinvite", "allinv"], // This command will be triggered by either command1 or command2
    ignore: false, // Whether to ignore this file or not
    description: "All Invite Command", // Description of the command
    permission: Permissions.Trusted, // Permission level required to execute this command
    /**
     * 
     * @param {import("../../Bot.mjs").default} bot 
     * @param {String} sender 
     * @param {Array<String>} args 
     */
    execute: async function (bot, sender, args) {
        bot.bot.chat(`/pc ${sender} has enabled all invite for the party.`);
        setTimeout(() => {
            bot.bot.chat(`/p allinvite`);
            bot.webhook.send(
                {
                    username: bot.config.webhook.name,
                },
                {
                    content: `Enabled all invite for the party. Command executed by ${sender}`,
                }
            );
        })
    }
  }
  