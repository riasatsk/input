import * as readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

/**
 *
 * @param {string} param
 * @returns {string}
 */
export default async function input(param) {
  const rl = readline.createInterface({ input: stdin, output: stdout });
  const answer = await rl.question(param);
  rl.close();
  return answer;
}
