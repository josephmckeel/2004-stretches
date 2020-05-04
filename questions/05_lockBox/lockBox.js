const lockBox = (code, msg) => {
  let final = code;
  let message = msg;
  if (typeof msg !== "string") {
    throw new Error(message);
  }
  return {
    modCode: function modCode(code, newCode) {
      final = newCode;
      return final;
    },

    modMessage: function modMessage(code, newMsg) {
      message = newMsg;
      return message;
    },

    revealMessage: function revealMessage(test) {
      if (final !== test) {
        throw new Error(message);
      }
      return message;
    },
  };
};

module.exports = { lockBox };
