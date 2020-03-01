import * as KeyCode from "keycode-js";
// https://www.npmjs.com/package/keycode-js

export default function (inputKey) {
  switch (inputKey) {

    // NUMBERS
    case KeyCode.KEY_0:
      return [{charInput: "NUMERIC"}, "0"];
    case KeyCode.KEY_1:
      return [{charInput: "NUMERIC"}, "1"];
    case KeyCode.KEY_2:
      return [{charInput: "NUMERIC"}, "2"];
    case KeyCode.KEY_3:
      return [{charInput: "NUMERIC"}, "3"];
    case KeyCode.KEY_4:
      return [{charInput: "NUMERIC"}, "4"];
    case KeyCode.KEY_5:
      return [{charInput: "NUMERIC"}, "5"];
    case KeyCode.KEY_6:
      return [{charInput: "NUMERIC"}, "6"];
    case KeyCode.KEY_7:
      return [{charInput: "NUMERIC"}, "7"];
    case KeyCode.KEY_8:
      return [{charInput: "NUMERIC"}, "8"];
    case KeyCode.KEY_9:
      return [{charInput: "NUMERIC"}, "9"];

    case KeyCode.KEY_EQUALS:
      return [{charInput: "NUMERIC"}, "="];
    case KeyCode.KEY_SUBTRACT:
      return [{charInput: "NUMERIC"}, "-"];

    // LETTERS
    case KeyCode.KEY_A:
      return [{charInput:"LEXOGRAPHIC"}, "a"];
    case KeyCode.KEY_B:
      return [{charInput:"LEXOGRAPHIC"}, "b"];
    case KeyCode.KEY_C:
      return [{charInput:"LEXOGRAPHIC"}, "c"];
    case KeyCode.KEY_D:
      return [{charInput:"LEXOGRAPHIC"}, "d"];
    case KeyCode.KEY_E:
      return [{charInput:"LEXOGRAPHIC"}, "e"];
    case KeyCode.KEY_F:
      return [{charInput:"LEXOGRAPHIC"}, "f"];
    case KeyCode.KEY_G:
      return [{charInput:"LEXOGRAPHIC"}, "g"];
    case KeyCode.KEY_H:
      return [{charInput:"LEXOGRAPHIC"}, "h"];
    case KeyCode.KEY_I:
      return [{charInput:"LEXOGRAPHIC"}, "i"];
    case KeyCode.KEY_J:
      return [{charInput:"LEXOGRAPHIC"}, "j"];
    case KeyCode.KEY_K:
      return [{charInput:"LEXOGRAPHIC"}, "k"];
    case KeyCode.KEY_L:
      return [{charInput:"LEXOGRAPHIC"}, "l"];
    case KeyCode.KEY_M:
      return [{charInput:"LEXOGRAPHIC"}, "m"];
    case KeyCode.KEY_N:
      return [{charInput:"LEXOGRAPHIC"}, "n"];
    case KeyCode.KEY_O:
      return [{charInput:"LEXOGRAPHIC"}, "o"];
    case KeyCode.KEY_P:
      return [{charInput:"LEXOGRAPHIC"}, "p"];
    case KeyCode.KEY_Q:
      return [{charInput:"LEXOGRAPHIC"}, "q"];
    case KeyCode.KEY_R:
      return [{charInput:"LEXOGRAPHIC"}, "r"];
    case KeyCode.KEY_S:
      return [{charInput:"LEXOGRAPHIC"}, "s"];
    case KeyCode.KEY_T:
      return [{charInput:"LEXOGRAPHIC"}, "t"];
    case KeyCode.KEY_U:
      return [{charInput:"LEXOGRAPHIC"}, "u"];
    case KeyCode.KEY_V:
      return [{charInput:"LEXOGRAPHIC"}, "v"];
    case KeyCode.KEY_W:
      return [{charInput:"LEXOGRAPHIC"}, "w"];
    case KeyCode.KEY_X:
      return [{charInput:"LEXOGRAPHIC"}, "x"];
    case KeyCode.KEY_Y:
      return [{charInput:"LEXOGRAPHIC"}, "y"];
    case KeyCode.KEY_Z:
      return [{charInput:"LEXOGRAPHIC"}, "z"];

    case KeyCode.KEY_SEMICOLON:
      return [{ charInput: "PUNCTUATION" }, ";"];

    case KeyCode.KEY_RETURN:
      return [[
         {charInput: "PUNCTUATION" },
         {actionType: "DIRECTIVE" }
        ], "\n"];
    case KeyCode.KEY_ENTER:
      return [[
         {charInput: "PUNCTUATION" },
         {actionType: "DIRECTIVE" }
        ], "\n"];

    // case KEY_CANCEL:
    //   return ["DIRECTIVE", ""];
    // case KEY_HELP:
    //   return ["DIRECTIVE", ""];
    // case KEY_BACK_SPACE:
    //   return ["DIRECTIVE", ""];
    // case KEY_TAB:
    //   return ["DIRECTIVE", ""];
    // case KEY_CLEAR:
    //   return ["DIRECTIVE", ""];


    // case KEY_SHIFT:
    //   return ["DIRECTIVE", ""];
    // case KEY_CONTROL:
    //   return ["DIRECTIVE", ""];
    // case KEY_ALT:
    //   return ["DIRECTIVE", ""];
    // case KEY_PAUSE:
    //   return ["DIRECTIVE", ""];
    // case Lock:
    //   return ["DIRECTIVE", ""];
    // case KEY_ESCAPE:
    //   return ["DIRECTIVE", ""];
    // case KEY_SPACE:
    //   return ["DIRECTIVE", ""];
    // case up:
    //   return ["DIRECTIVE", ""];
    // case down:
    //   return ["DIRECTIVE", ""];
    // case KEY_END:
    //   return ["DIRECTIVE", ""];
    // case KEY_HOME:
    //   return ["DIRECTIVE", ""];
    // case KEY_LEFT:
    //   return ["DIRECTIVE", ""];
    // case KEY_UP:
    //   return ["DIRECTIVE", ""];
    // case KEY_RIGHT:
    //   return ["DIRECTIVE", ""];
    // case KEY_DOWN:
    //   return ["DIRECTIVE", ""];
    // case Screen:
    //   return ["DIRECTIVE", ""];
    // case KEY_INSERT:
    //   return ["DIRECTIVE", ""];
    // case KEY_DELETE:
    //   return ["DIRECTIVE", ""];

    default:
      break;
  }
}
