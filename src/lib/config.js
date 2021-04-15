export default class Config {
  constructor(config = {}) {
    this._config = {};
    this.defaultConfig = Object.freeze({
      width: 800,
      height: 600,
      canvasId: 'main',
    });

    const allowedKeys = Object.keys(this.defaultConfig);
    allowedKeys.forEach(key => {
      if(config[key]) {
        this._config[key] = config[key];
      } else {
        this._config[key] = this.defaultConfig[key];
      }
    });
  }

  get width() {
    return this._config.width;
  }

  get height() {
    return this._config.height;
  }

  get canvasId() {
    return this._config.canvasId;
  }
}
