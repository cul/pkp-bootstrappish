<?php

/**
 * @file BootstrappishThemePlugin.inc.php
 *
 * Copyright (c) 2000-2012 John Willinsky
 * Distributed under the GNU GPL v2. For full terms see the file docs/COPYING.
 *
 * @class BootstrappishThemePlugin
 * @ingroup plugins_themes_bootstrappish
 *
 * @brief "Bootstrappish" theme plugin
 */

//$Id$

import('classes.plugins.ThemePlugin');

class BootstrappishThemePlugin extends ThemePlugin {
	/**
	 * Get the name of this plugin. The name must be unique within
	 * its category.
	 * @return String name of plugin
	 */
	function getName() {
		return 'BootstrappishThemePlugin';
	}

	function getDisplayName() {
		return 'Bootstrappish Theme';
	}

	function getDescription() {
		return 'Twitter Bootstrappish styling. Shame about the templates';
	}

	function getStylesheetFilename() {
		return 'bootstrap.css';
	}

	function getLocaleFilename($locale) {
		return null; // No locale data
	}
}

?>
