// Utils.mjs

export class DebugOptions {
  constructor({
    printAll = false,
    printLength = false,
    printFirst = false,
    printLast = false,
    printRank = null,
    printUser = null,
  } = {}) {
    this.printAll = printAll;
    this.printLength = printLength;
    this.printFirst = printFirst;
    this.printLast = printLast;
    this.printRank = printRank;
    this.printUser = printUser;
  }
}

export const MessageType = Object.freeze({
  Whisper: 0,
  PartyInvite: 1,
  PartyMessage: 2,
  Other: 3,
});

/**
 * When adding a new permission, make sure you place it in the number that corresponds to the correct weight.
 * A higher weight means a higher permission level.
 */
export const Permissions = Object.freeze({
  ExSplasher: 0,
  HoB: 1,
  Famous: 1,
  Splasher: 2,
  Trusted: 2,
  Staff: 3,
  Admin: 4,
  Owner: 5,
  BotAccount: 5,
});

/**
 * I don't think you'd need to add a new type, but just incase - Conutik
 */
export const WebhookMessageType = Object.freeze({
  JoinLeave: 0,
  PrivateMessage: 1,
  PublicMessage: 2,
  GuildMessage: 3,
  PartyMessage: 4,
  ActionLog: 5,
  Bridge: 6,
  Other: 7, // anything that isn't any of the above
  All: 8, // all of the above
});

export const SenderType = Object.freeze({
  Minecraft: 0,
  Discord: 1,
  Console: 2,
});

export const VerbosityLevel = Object.freeze({
  Off: 0, // no messages
  Minimal: 1, // only messages that are essential to the command's function
  Reduced: 2, // reduce optional messages (remove most party messages, keep most dm command feedback for better ux)
  Full: 3, // all messages
});

export const DisableCommand = Object.freeze({
  Normal: 0, // Disable command normally and using `!p disable most`
  UsuallyKeepEnabled: 1, // Disable command only using `!p disable all`, ignore `most`
  ForceEnabled: 2, // Never disable command (even manually)
});
