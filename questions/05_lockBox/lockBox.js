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
      if (code !== test) {
        throw new Error(message);
      } else {
        return message;
      }
    },
  };
};

module.exports = { lockBox };
