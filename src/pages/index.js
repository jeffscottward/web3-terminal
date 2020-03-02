/** @jsx jsx */
import { useEffect } from "react"
import { jsx } from "theme-ui";

// XTERM Deps
import { Terminal } from "xterm";
import xtermCSS from "xterm/css/xterm.css";
import { WebLinksAddon } from "xterm-addon-web-links";
import { FitAddon } from "xterm-addon-fit";
import { SearchAddon } from "xterm-addon-search";

// Key Handlers
import keyHanlders from '../utils/keyHandlers'

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

const Index = props => {
  useEffect(() => {
    const initTerminal = () => {
      // Attach
      terminal.open(document.getElementById("term"));
      // Fit to screen
      fitAddon.fit();
      // Welcome Banner
      createWelcomeBanner(terminal);
      // EVENT LISTERNERS
      terminal.onKey(async event => {
        await keyHanlders(terminal, event)
      });
    };
    initTerminal();
  }, []);
  return (
    <div>
      <div id="term"/>
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
