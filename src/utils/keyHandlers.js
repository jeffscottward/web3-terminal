import {newUserLine} from '../utils/newLine'
import checkForValidInput from '../utils/checkForValidInput'
import chalk from "chalk";
const color = new chalk.Instance({ level: 2 });

// Terminal buffer
let buffer = "";

export default async function (terminal, e) {
  switch (e.domEvent.key) {
    case "Backspace":
      if (buffer.length > 0) {
        terminal.write("\b \b");
        buffer = buffer.slice(0, buffer.length - 1);
      }
      break;
    case "Enter":
      await checkForValidInput(terminal, buffer);
      buffer = "";
      newUserLine(terminal);
      break;
    default:
      terminal.write(color.green(e.key));
      buffer += e.key;
      break;
  }
}
