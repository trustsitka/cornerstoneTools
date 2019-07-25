import BaseTool from './base/BaseTool.js';
import { setToolActive, setToolPassive } from '../store/setToolMode.js';

/**
 * @public
 * @class PanZoomTool
 * @memberof Tools
 *
 * @classdesc Tool that combines Pan and ZoomWheel behavior.
 * @extends Tools.Base.BaseTool
 */

export default class PanZoomTool extends BaseTool {
  constructor(props = {}) {
    const defaultProps = {
      name: 'PanZoom',
      supportedInteractionTypes: ['Mouse', 'MouseWheel'],
    };

    super(props, defaultProps);

    this.referencedToolNames = {
      pan: 'Pan',
      zoomWheel: 'ZoomMouseWheel',
    };
  }

  activeCallback() {
    setToolActive(this.referencedToolNames.pan, { mouseButtonMask: 1 });
    setToolActive(this.referencedToolNames.zoomWheel, { mouseButtonMask: 4 });
  }

  passiveCallback() {
    setToolPassive(this.referencedToolNames.zoomWheel);
  }
}
