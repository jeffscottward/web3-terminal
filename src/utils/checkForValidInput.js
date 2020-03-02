import {newLine} from '../utils/newLine'
import chalk from 'chalk'

import ethProgram from '../programs/eth'
import listProgram from "../programs/list";
// import ethProgram from "../programs/eth";
// import ethProgram from "../programs/eth";
// import ethProgram from "../programs/eth";
// import ethProgram from "../programs/eth";
// import ethProgram from "../programs/eth";

const color = new chalk.Instance({ level: 2 });

export default async function (terminal, buffer) {
  // Break up entry
  let bufferArray = buffer.split(" ");
  console.log(bufferArray);
  // Get program
  let program = bufferArray[0];
  // Remove prgram from input
  bufferArray.shift();
  // Get args from input
  let args = bufferArray;
  // Find program
  console.log(program)
  switch (program) {
    case "ls":
      await listProgram(terminal, args);
      break;
    case "l":
      await listProgram(terminal, args);
      break;
    case "help":
      await listProgram(terminal, args);
      break;
    case "eth":
      await ethProgram(terminal, args);
      break;
    case "uniswap":
      // await uniswapProgram(terminal, args);
      break;
    case "dex":
      // await dexProgram(terminal, args);
      break;
    case "3box":
      // await threeBoxProgram(terminal, args);
      break;
    default:
      newLine(terminal);
      terminal.write(color.red(`No programs by the name of: ${program}`));
      buffer = "";
      break;
  }
};
