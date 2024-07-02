const readline = require('node:readline/promises');
const { stdin, stdout } = require('node:process');

/**
 *
 * @param {string} param
 * @returns {Promise<string>}
 */
async function input(param) {
  const rl = readline.createInterface({ input: stdin, output: stdout });
  const answer = await rl.question(param);
  rl.close();
  return answer;
}

module.exports = input;
