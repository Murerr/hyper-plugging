exports.decorateConfig = (config) => {
  var candyAppleColor = '#ff0800'; // ff0800
  var solarizedDarkColor = '#002b36' // Solarized Dark
  var cursorShape = 'BEAM' // // The shape of the caret in the terminal. Available options are: 'BEAM', 'UNDERLINE', 'BLOCK'
  var cursorBlink = false;
  return Object.assign({}, config, {
    backgroundColor : solarizedDarkColor,
    cursorShape : cursorShape,
    cursorBlink : cursorBlink,
    showHamburgerMenu : false,
    borderColor: candyAppleColor,
    cursorColor: candyAppleColor,
    css: `
      ${config.css || ''}
      .tabs_nav .tabs_list .tab_text {
        color: candyAppleColor;
      }
      .tabs_nav .tabs_title {
        color: candyAppleColor;
      }
    `

  });
}

