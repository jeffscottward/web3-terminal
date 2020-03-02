import { newLine, newUserLine } from "../utils/newLine";
import chalk from "chalk";
const color = new chalk.Instance({ level: 2 });

export default async function(terminal, args) {
  await newLine(terminal);
  await terminal.write(color.green(`====================================`));
  await newLine(terminal);
  await terminal.write(
    color.green(`The List of programs avaliable include:`)
  );
  await newLine(terminal);
  await terminal.write(
    color.green(`eth, uniswap, 3box, dex`)
  );
  await newLine(terminal);
  await terminal.write(color.green(`====================================`));
}
