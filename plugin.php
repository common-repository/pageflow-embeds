<?php
/**
 * Plugin Name: Pageflow Embeds
 * Description: A plugin to easily embed pageflow stories
 * Author: Codevise Solutions GmbH
 * Author URI: https://codevise.de/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
