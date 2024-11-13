const backgroundColor = '#181616';
const foregroundColor = '#C5C9C5';
const borderColor = backgroundColor;
const cursorColor = '#C8C093';

const red = '#C4746E';
const green = '#8A9A7B';
const yellow = '#C4B28A';
const blue = '#8BA4B0';
const magenta = '#A292A3';
const cyan = '#8EA4A2';
const lightCyan = '#7AA89F';
const lightGreen = '#87A987';
const lightBlack = '#A6A69C';
const lightBlue = '#7FB4CA';
const lightMagenta = '#938AA9';

const extendConfig = ({ css, ...config }) => ({
  ...config,

  backgroundColor,
  foregroundColor,
  cursorColor,
  borderColor,
  colors: {
    black: backgroundColor,
    white: foregroundColor,
    red,
    green,
    blue,
    cyan,
    magenta,
    yellow,

    lightRed: red,
    lightYellow: yellow,

    lightMagenta,
    lightBlack,

    lightWhite: foregroundColor,

    lightCyan,
    lightBlue,
    lightGreen
  },
  css: `
    ${css}

    .tab_active {
      background: rgba(166, 166, 156, .10);
    }
  `
});

module.exports = extendConfig;
