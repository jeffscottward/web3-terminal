/** @jsx jsx */
import { useEffect } from "react"
import { jsx } from "theme-ui";
import chalk from 'chalk'
import {get} from 'axios'

// KeyBoard Btns
// import KeyboardDictionary from "../utils/keyboardDictionary";

// XTERM Deps
import { Terminal } from "xterm";
import xtermCSS from "xterm/css/xterm.css";
import { WebLinksAddon } from "xterm-addon-web-links";
import { FitAddon } from "xterm-addon-fit";
import { SearchAddon } from "xterm-addon-search";

import getCleanDom from '../utils/getCleanDom'

// Display
import createWelcomeBanner from "../utils/createWelcomeBanner"

// XTERM Init
const terminal = new Terminal();

// XTERM ADDONS
const fitAddon = new FitAddon();
const webLinksAddon = new WebLinksAddon();
const searchAddon = new SearchAddon();

// XTERM LOAD ADDONS
terminal.loadAddon(fitAddon);
terminal.loadAddon(webLinksAddon);
terminal.loadAddon(searchAddon);

// Chalk Options
const color = new chalk.Instance({ level: 2 });

// Terminal buffer
let buffer = ''

const Index = props => {
  // const { loading, error, data } = useQuery(gql(`______`));
  // if (loading) {return "Loading...";}
  // if (error) {return `Error! ${error.message}`;}

  useEffect(() => {

    const newUserLine = () => {
      terminal.writeln(color.green(``));
      terminal.write(color.green(`$ `));
    };

    const checkForArguements = async (program,args) => {
      if (program === "eth") {
        if(args[0] === "--tx") {
          // 0x3bc8e5930cc4dae9c16f3ef9a9a6ce72d42bc6434bed4f8895b3cbf701c50113
          let webpage = await getCleanDom("https://etherscan.io/tx/" + args[1]);
          console.log(webpage);
        }

        if(args[0] === "--usd") {
          let data = await get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&api_key=6080b7ae6c692c47dc3b0fde6df506025d9bde53aaf6d02629b52bba5fc93518');
          let price = await data.data.USD;
          await terminal.writeln(``);
          await terminal.write(color.green(`ETH -> USD: $${price}`));
        }

        if(args[0] === "--dex") {
          if(args[1] === "kyber") {
            let webpage = await getCleanDom("https://etherscan.io/dextracker?filter=6");
            console.log(webpage);
          }
        }
      }
    }

    const checkForPrograms = program => {
      switch (program) {
        case "eth":
          console.log("check for eth commands");
          return true
        case "3box":
          console.log("check for 3box commands");
          return true;
        case "uniswap":
          console.log("check for uniswap commands");
          return true;
        default:
          terminal.writeln(``);
          terminal.write(color.red(`No programs by the name of: ${program}`));
          buffer = "";
      }
    };

    const checkForValidInput = async input => {
      let bufferArray = input.split(" ");
      let program = bufferArray[0];
      if(checkForPrograms(program)){
        bufferArray.shift();
        await checkForArguements(program, bufferArray);
      }
    };

    const initTerminal = () => {
      // Attach
      terminal.open(document.getElementById("term"));

      // Fit to screen
      fitAddon.fit();

      // Welcome Banner
      createWelcomeBanner(terminal);

      // EVENT LISTERNERS
      terminal.onKey(async e => {
        switch (e.domEvent.key) {
          case "Backspace":
            if (buffer.length > 0) {
              terminal.write("\b \b");
              buffer = buffer.slice(0, buffer.length - 1);
            }
            break;
          case "Enter":
            await checkForValidInput(buffer);
            buffer = "";
            newUserLine();
            break;
          default:
            console.log(e.domEvent.key);
            terminal.write(color.green(e.key));
            buffer += e.key;
            break;
        }
      });
    };
    initTerminal();
  }, []);

  return (
    <div>
      <header />
      <main>
        <div id="term"/>
      </main>
      <footer />
      <style>{`
        * { box-sizing: border-box;}
        html, body, #term {
         margin: 0;
         padding: 0;
         height: 100vh;
         background: black;
        }
        body {
          padding-top: 20px;
          padding-left: 20px;
        }
        ::-webkit-scrollbar{
          background: transparent;
        }
        ::-webkit-resizer {
          background: transparent;
          resize: none;
        }
      `}</style>
    </div>
  );
};

export default Index;
