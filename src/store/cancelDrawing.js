import { state } from './index.js';

/**
 * Calls cancelDrawing on all tools.
 * @export
 * @public
 * @method
 * @name cancelDrawing
 *
 * @returns {undefined}
 */
export default function cancelDrawing() {
  state.tools.forEach(tool => {
    if (Object.prototype.hasOwnProperty.call(tool, 'cancelDrawing')) {
      tool.cancelDrawing();
    }
  });
}
