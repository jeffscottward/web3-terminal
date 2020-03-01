/** @jsx jsx */
import { useEffect } from "react"
import { jsx } from "theme-ui";
import chalk from 'chalk'

// KeyBoard Btns
// import KeyboardDictionary from "../utils/keyboardDictionary";

// XTERM Deps
import { Terminal } from "xterm";
import xtermCSS from "xterm/css/xterm.css";
import { WebLinksAddon } from "xterm-addon-web-links";
import { FitAddon } from "xterm-addon-fit";
import { SearchAddon } from "xterm-addon-search";

// ETH LOGO
import ETHASCII from '../components/eth-ascii'

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

  const newLine = () => {
    terminal.writeln(color.green(``));
    terminal.write(color.green(`$ `));
  }

  const createWelcomeBanner = () => {
    // Welcome
    terminal.writeln(color.green(`****************************************`));
    terminal.writeln(color.green(``));
    terminal.writeln(color.green(`       Welcome to Web 3.0 Terminal `));
    terminal.writeln(color.green(``));

    // ETH LOGO
    ETHASCII.map(line => {
      terminal.writeln(color.green(line));
      return true
    })

    terminal.writeln(color.green(``));
    terminal.writeln(color.green(`****************************************`));
    terminal.writeln(color.green(``));
    terminal.write(color.green(`$ `));
  }

  useEffect(() => {
    const initTerminal = () => {
      // Attach
      terminal.open(document.getElementById("term"));
      // Fit to screen
      fitAddon.fit();
      // Welcome Banner
      createWelcomeBanner();

      // EVENT LISTERNERS
      terminal.onKey(async e => {
        buffer += e.key;
        // let [type, value] = await KeyboardDictionary(e.keyCode);
        // if (type.hasOwnProperty("charInput")) {}
        // const handleDirective = e => {console.log(e);};

        if(e.domEvent.key === "Backspace") {
          terminal.write("\x1b[D");
        }
        if (e.domEvent.key === "Enter") {
          newLine();
        } else {
          terminal.write(color.green(e.key));
        }
      });
      // terminal.onData((d)=>{})
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
