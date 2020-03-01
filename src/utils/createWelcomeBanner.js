// ETH LOGO
import ETHASCII from '../components/eth-ascii'
import chalk from "chalk";
const color = new chalk.Instance({ level: 2 });

export default function (terminal) {
   // Welcome
  terminal.writeln(color.green(`****************************************`));
  terminal.writeln(color.green(``));
  terminal.writeln(color.green(`       Welcome to Web 3.0 Terminal `));
  terminal.writeln(color.green(``));

  // ETH LOGO
  ETHASCII.map(line => {
    terminal.writeln(color.green(line));
    return true;
  });

  terminal.writeln(color.green(``));
  terminal.writeln(color.green(`****************************************`));
  terminal.writeln(color.green(``));
  terminal.write(color.green(`$ `));
}
