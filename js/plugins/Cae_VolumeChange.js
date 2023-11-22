//=========================================================
// Cae_VolumeChange.js
//=========================================================

/*:
 * @plugindesc v1.1 - Customise how much the volume changes by when pressing left/right in the options.
 * @author Caethyril
 *
 * @help Plugin Commands:
 *   None.
 *
 * Compatibility:
 *   Overrides the volumeOffset function of Window_Options.
 *
 * Terms of use:
 *   Free to use and modify.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Update log:
 *   1.1: Code rewrite for v1.5 update! =)
 *   1.0: Initial release.
 * 
 * @param Volume Change
 * @text Volume Change
 * @type number
 * @min 0
 * @max 100
 * @desc Volume changes by this much when pressing left/right in the options.
 *   Default: 20
 * @default 20
 */

var Imported = Imported || {};				// Import namespace, var can redefine
Imported.Cae_VolumeChange = 1.1;			// Import declaration

var CAE = CAE || {};					// Author namespace, var can redefine
CAE.VolumeChange = CAE.VolumeChange || {};		// Plugin namespace

(function(_) {

'use strict';

	_.params = PluginManager.parameters('Cae_VolumeChange');	// Get parameters
  
	_.Offset = Number(_.params['Volume Change']);			// Process parameters

	Window_Options.prototype.volumeOffset = function() {		// Override!
		return _.Offset;
	};

})(CAE.VolumeChange);