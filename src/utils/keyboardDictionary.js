import * as KeyCode from "keycode-js";
// https://www.npmjs.com/package/keycode-js

const stringify = input => input.toString()

const numberPayload = (num) => {
  return [{ charType: "NUMERIC", actionType: "INPUT" }, stringify(num)]
}
const mathPayload = (op) => {
  return [{ charType: "MATH_OP", actionType: "INPUT" }, stringify(op)]
}
const letterPayload = (letter) => {
  return [{ charType: "LEXOGRAPHIC", actionType: "INPUT" }, stringify(letter)];
}
const punctuationPayload = punctuation => {
  return [{charInput: "PUNCTUATION", actionType: "INPUT" }, stringify(punctuation)];
};
const directivePayload = directive => {
  return [{ actionType: "DIRECTIVE" }, stringify(directive)];
};

export default function (inputKey) {
  switch (inputKey) {
    //////////////////////////////
    // NUMBERS
    //////////////////////////////
    case KeyCode.KEY_0:
      return numberPayload(0);
    case KeyCode.KEY_1:
      return numberPayload(1);
    case KeyCode.KEY_2:
      return numberPayload(2);
    case KeyCode.KEY_3:
      return numberPayload(3);
    case KeyCode.KEY_4:
      return numberPayload(4);
    case KeyCode.KEY_5:
      return numberPayload(5);
    case KeyCode.KEY_6:
      return numberPayload(6);
    case KeyCode.KEY_7:
      return numberPayload(7);
    case KeyCode.KEY_8:
      return numberPayload(8);
    case KeyCode.KEY_9:
      return numberPayload(9);
    case KeyCode.KEY_NUMPAD0:
      return numberPayload(0);
    case KeyCode.KEY_NUMPAD1:
      return numberPayload(1);
    case KeyCode.KEY_NUMPAD2:
      return numberPayload(2);
    case KeyCode.KEY_NUMPAD3:
      return numberPayload(3);
    case KeyCode.KEY_NUMPAD4:
      return numberPayload(4);
    case KeyCode.KEY_NUMPAD5:
      return numberPayload(5);
    case KeyCode.KEY_NUMPAD6:
      return numberPayload(6);
    case KeyCode.KEY_NUMPAD7:
      return numberPayload(7);
    case KeyCode.KEY_NUMPAD8:
      return numberPayload(8);
    case KeyCode.KEY_NUMPAD9:
      return numberPayload(9);
    //////////////////////////////
    // MATH OPERATIONS
    //////////////////////////////
    case KeyCode.KEY_ADD:
      return mathPayload("+");
    case KeyCode.KEY_SUBTRACT:
      return mathPayload("-");
    case KeyCode.KEY_MULTIPLY:
      return mathPayload("*");
    case KeyCode.KEY_DIVIDE:
      return mathPayload("/");
    case KeyCode.KEY_EQUALS:
      return mathPayload("=");
    case KeyCode.KEY_SEPARATOR:
      return mathPayload("+");
    //////////////////////////////
    // LETTERS
    //////////////////////////////
    case KeyCode.KEY_A:
      return letterPayload("a");
    case KeyCode.KEY_B:
      return letterPayload("b");
    case KeyCode.KEY_C:
      return letterPayload("c");
    case KeyCode.KEY_D:
      return letterPayload("d");
    case KeyCode.KEY_E:
      return letterPayload("e");
    case KeyCode.KEY_F:
      return letterPayload("f");
    case KeyCode.KEY_G:
      return letterPayload("g");
    case KeyCode.KEY_H:
      return letterPayload("h");
    case KeyCode.KEY_I:
      return letterPayload("i");
    case KeyCode.KEY_J:
      return letterPayload("j");
    case KeyCode.KEY_K:
      return letterPayload("k");
    case KeyCode.KEY_L:
      return letterPayload("l");
    case KeyCode.KEY_M:
      return letterPayload("m");
    case KeyCode.KEY_N:
      return letterPayload("n");
    case KeyCode.KEY_O:
      return letterPayload("o");
    case KeyCode.KEY_P:
      return letterPayload("p");
    case KeyCode.KEY_Q:
      return letterPayload("q");
    case KeyCode.KEY_R:
      return letterPayload("r");
    case KeyCode.KEY_S:
      return letterPayload("s");
    case KeyCode.KEY_T:
      return letterPayload("t");
    case KeyCode.KEY_U:
      return letterPayload("u");
    case KeyCode.KEY_V:
      return letterPayload("v");
    case KeyCode.KEY_W:
      return letterPayload("w");
    case KeyCode.KEY_X:
      return letterPayload("x");
    case KeyCode.KEY_Y:
      return letterPayload("y");
    case KeyCode.KEY_Z:
      return letterPayload("z");
    //////////////////////////////
    // PUNCTUATION
    //////////////////////////////
    case KeyCode.KEY_SEMICOLON:
      return punctuationPayload(";");
    case KeyCode.KEY_COMMA:
      return punctuationPayload(",");
    case KeyCode.KEY_PERIOD:
      return punctuationPayload(".");
    case KeyCode.KEY_SLASH:
      return punctuationPayload("/");
    case KeyCode.KEY_BACK_QUOTE:
      return punctuationPayload("`");
    case KeyCode.KEY_OPEN_BRACKET:
      return punctuationPayload("[");
    case KeyCode.KEY_BACK_SLASH:
      return punctuationPayload("\\");
    case KeyCode.KEY_CLOSE_BRACKET:
      return punctuationPayload("]");
    case KeyCode.KEY_QUOTE:
      return punctuationPayload('"');
    case KeyCode.KEY_META:
      return punctuationPayload("|");
    //////////////////////////////
    // Directive
    //////////////////////////////
    case KeyCode.KEY_RETURN:
      return directivePayload("return");
    case KeyCode.KEY_ENTER:
      return directivePayload("enter");
    case KeyCode.KEY_LEFT:
      return directivePayload("left");
    case KeyCode.KEY_RIGHT:
      return directivePayload("right");
    case KeyCode.KEY_UP:
      return directivePayload("up");
    case KeyCode.KEY_DOWN:
      return directivePayload("down");
    case KeyCode.KEY_CANCEL:
      return directivePayload("cancel");
    case KeyCode.KEY_HELP:
      return directivePayload("help");
    case KeyCode.KEY_BACK_SPACE:
      return directivePayload("backspace");
    case KeyCode.KEY_TAB:
      return directivePayload("tab");
    case KeyCode.KEY_CLEAR:
      return directivePayload("clear");
    case KeyCode.KEY_SHIFT:
      return directivePayload("shift");
    case KeyCode.KEY_CONTROL:
      return directivePayload("ctrl");
    case KeyCode.KEY_ALT:
      return directivePayload("alt");
    case KeyCode.KEY_PAUSE:
      return directivePayload("pause");
    case KeyCode.KEY_NUM_LOCK:
      return directivePayload("numlock");
    case KeyCode.KEY_SCROLL_LOCK:
      return directivePayload("scrolllock");
    case KeyCode.KEY_CAPS_LOCK:
      return directivePayload("capslock");
    case KeyCode.KEY_ESCAPE:
      return directivePayload("esc");
    case KeyCode.KEY_SPACE:
      return directivePayload("space");
    case KeyCode.KEY_END:
      return directivePayload("end");
    case KeyCode.KEY_HOME:
      return directivePayload("home");
    case KeyCode.KEY_PRINTSCREEN:
      return directivePayload("printscreen");
    case KeyCode.KEY_INSERT:
      return directivePayload("insert");
    case KeyCode.KEY_DELETE:
      return directivePayload("delete");
    case KeyCode.KEY_LEFT_CMD:
      return directivePayload("leftcmd");
    case KeyCode.KEY_RIGHT_CMD:
      return directivePayload("rightcmd");
    case KeyCode.KEY_CONTEXT_MENU:
      return directivePayload("ctxmenu");
    default:
      break;
  }
}
