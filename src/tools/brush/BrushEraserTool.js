import BrushTool from './BrushTool.js';

const DEFAULT_PROPS = {
  name: 'BrushEraser',
  configuration: {
    alwaysEraseOnClick: true,
  },
};

/**
 * @public
 * @class BrushEraserTool
 * @memberof Tools.Brush
 * @classdesc Tool for erasing brush segmentations on an image.
 * @extends Tools.Brush.BrushTool
 */
class BrushEraserTool extends BrushTool {
  constructor(props) {
    super(Object.assign(DEFAULT_PROPS, props));
  }
}

export default BrushEraserTool;
