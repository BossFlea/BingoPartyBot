import { Permissions } from "../../../utils/Interfaces.mjs";

const quizDuration = 60_000;
const quizReminderInterval = 15_100;

export default {
  name: ["quiz", "q", "createquiz"], // This command will be triggered by either command1 or command2
  ignore: false, // Whether to ignore this file or not
  description: "Quiz Start Command", // Description of the command
  permission: Permissions.Trusted, // Permission level required to execute
  /**
   *
   * @param {import("../../Bot.mjs").default} bot
   * @param {String} sender
   * @param {Array<String>} args
   */
  execute: async function (bot, sender, args) {
    if (bot.utils.quiz.isActive)
      return bot.reply(
        sender,
        "There is already an active quiz! You can't start another one!",
      );
    if (args.join(" ").split("|").length !== 2)
      return bot.reply(
        sender,
        "Please provide a quiz question and answer in the following format: !quiz <question> | <answer>",
      );
    const quizQuestion = args.join(" ").split("|")[0].trim();
    const quizAnswer = args.join(" ").split("|")[1].trim();
    if (quizQuestion.split("").length < 1 || quizAnswer.split("").length < 1)
      return bot.reply(
        sender,
        "Please provide a quiz question and answer in the following format: !quiz <question> | <answer>",
      );
    if (quizQuestion.split("").length > 40 || quizAnswer.split("").length > 40)
      return bot.reply(
        sender,
        "Question/Answer is too long! Please keep them under 40 characters each. (This is due to chat limitations)",
      );

    let quiz = {
      question: quizQuestion,
      answer: quizAnswer,
      author: sender.username,
      duration: quizDuration,
      startedAt: Date.now(),
      intervalID: null,
      timeoutID: null,
    };

    quiz.intervalID = setInterval(
      bot.utils.quiz.intervalReminder.bind(bot.utils.quiz),
      quizReminderInterval,
      bot,
    );

    quiz.timeoutID = setTimeout(
      bot.utils.quiz.expiredQuiz.bind(bot.utils.quiz),
      quiz.duration,
      bot,
    );

    bot.utils.quiz.startQuiz(bot, quiz);
  },
};
