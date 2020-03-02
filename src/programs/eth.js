import {newLine} from '../utils/newLine'
import {get} from 'axios'
import chalk from 'chalk'
import getCleanDom from '../utils/getCleanDom'
const color = new chalk.Instance({ level: 2 });

export default async function (terminal, args) {
  if(args.length === 0 ) {
    await newLine(terminal);
    await terminal.write(color.green(`====================================`));
    await newLine(terminal);
    await terminal.write(
      color.green(`eth commands:`)
    );
    await newLine(terminal);
    await terminal.write(color.green(`--usd   =>  gets current USD price`));
    await newLine(terminal);
    await terminal.write(color.green(`More to come...`));
    await newLine(terminal);
    await terminal.write(color.green(`====================================`));
  }
  if (args[0] === "--tx") {
    // 0x3bc8e5930cc4dae9c16f3ef9a9a6ce72d42bc6434bed4f8895b3cbf701c50113
    let webpage = await getCleanDom("https://etherscan.io/tx/" + args[1]);
    console.log(webpage);
  }

  if (args[0] === "--usd") {
    let data = await get(
      "https://min-api.cryptocompare.com/data/" +
        "price?fsym=ETH&tsyms=USD&" +
        "api_key=" +
        "6080b7ae6c692c47dc3b0fde6df506025d9bde53aaf6d02629b52bba5fc93518"
    );
    let price = await data.data.USD;
    await newLine(terminal);
    await terminal.write(color.green(`ETH -> USD: $${price}`));
  }

  if (args[0] === "--dex") {
    if (args[1] === "kyber") {
      let webpage = await getCleanDom(
        "https://etherscan.io/dextracker?filter=6"
      );
      console.log(webpage);
    }
  }
};
