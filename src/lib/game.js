export default class Game {
  /**
   * @param {Config} config
   */
  constructor(config) {
    this.lastFrame = window.performance.now();
    this.deltaTime = 0;
    const canvas = document.getElementById(config.canvasId);
    if (!canvas) {
      throw new Error('Provide valid canvas id');
    }
    this.ctx = canvas.getContext('2d');
    this.ctx.canvas.width = config.width;
    this.ctx.canvas.height = config.height;
  }

  init() {
    window.requestAnimationFrame(() => this.loop());
  }

  loop(){
    const timestamp = window.performance.now();
    this.deltaTime = timestamp - this.lastFrame;
    this.lastFrame = timestamp;

    window.requestAnimationFrame(() => this.loop());
  };
}
