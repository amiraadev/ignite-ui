﻿/*!@license
* Infragistics.Web.ClientUI Tile Manager localization resources <build_number>
*
* Copyright (c) 2011-<year> Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define( [
			"jquery"
		], factory );
	} else {
		factory(jQuery);
	}
}
(function ($) {
$.ig = $.ig || {};

	$.ig.TileManager = {};

	$.extend($.ig.TileManager, {
		locale: {
		    renderDataError: "Échec de la récupération ou de l'analyse des données.",
		    setOptionItemsLengthError: "The length of the items configurations does not match the number of the tiles."
		}
	});
	
	$.ig.locale = $.ig.locale || {};
	$.ig.locale.fr = $.ig.locale.fr || {};
	$.ig.locale.fr.TileManager = $.extend({}, $.ig.TileManager.locale);
}));// REMOVE_FROM_COMBINED_FILES
