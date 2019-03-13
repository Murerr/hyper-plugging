exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    borderColor: 'red',
    cursorColor: 'red',
    css: `
      ${config.css || ''}
      .tabs_nav .tabs_list .tab_text {
        color: red;
      }
      .tabs_nav .tabs_title {
        color: red;
      }
    `
  });
}
