import chalk from 'chalk'
const color = new chalk.Instance({ level: 2 });

export function newUserLine (terminal) {
  terminal.writeln(color.green(``));
  terminal.write(color.green(`$ `));
};

export function newLine (terminal) {
  terminal.writeln(``);
};
