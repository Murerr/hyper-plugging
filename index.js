exports.decorateConfig = (config) => {
  var candyAppleColor = '#ffbcd9'; // ff0800
  return Object.assign({}, config, {
    
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

