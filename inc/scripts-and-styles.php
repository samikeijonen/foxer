<?php
/**
 * Styles and scripts related functions, hooks, and filters.
 *
 * @package _s
 */

/**
 * Enqueue scripts and styles.
 */
function _s_scripts() {
	// Get '.min' suffix.
	$suffix = _s_get_min_suffix();

	// Custom fonts, used in the main stylesheet.
	wp_enqueue_style( '_s-fonts', _s_fonts_url(), array(), null );

	// Main styles.
	wp_enqueue_style( '_s-style', get_stylesheet_uri() );

	// Main scripts.
	wp_enqueue_script( '_s-navigation', get_theme_file_uri( '/assets/js/navigation' . $suffix . '.js' ), array(), '20180101', true );

	// Skip link for older browsers (IE 11).
	wp_enqueue_script( '_s-skip-link-focus-fix', get_theme_file_uri( '/assets/js/skip-link-focus-fix' . $suffix . '.js' ), array(), '20180101', true );

	// Comments JS.
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', '_s_scripts' );

/**
 * Filters the 'stylesheet_uri' to allow theme developers to offer a minimized version of their main
 * 'style.css' file. It will detect if a 'style.min.css' file is available and use it if SCRIPT_DEBUG
 * is disabled.
 *
 * @author    Justin Tadlock <justin@justintadlock.com>
 * @copyright Copyright (c) 2008 - 2017, Justin Tadlock
 * @link      http://themehybrid.com/hybrid-core
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * @param     string  $stylesheet_uri      The URI of the active theme's stylesheet.
 * @param     string  $stylesheet_dir_uri  The directory URI of the active theme's stylesheet.
 * @return    string  $stylesheet_uri
 */
function _s_min_stylesheet_uri( $stylesheet_uri, $stylesheet_dir_uri ) {
	// Get '.min' suffix.
	$suffix = _s_get_min_suffix();

	// Use the .min stylesheet if available.
	if ( $suffix ) {
		// Remove the stylesheet directory URI from the file name.
		$stylesheet = str_replace( trailingslashit( $stylesheet_dir_uri ), '', $stylesheet_uri );

		// Change the stylesheet name to 'style.min.css'.
		$stylesheet = str_replace( '.css', "{$suffix}.css", $stylesheet );

		// If the stylesheet exists in the stylesheet directory, set the stylesheet URI to the dev stylesheet.
		if ( file_exists( trailingslashit( get_stylesheet_directory() ) . $stylesheet ) ) {
			$stylesheet_uri = esc_url( trailingslashit( $stylesheet_dir_uri ) . $stylesheet );
		}
	}

	// Return the theme stylesheet.
	return $stylesheet_uri;
}
add_filter( 'stylesheet_uri', '_s_min_stylesheet_uri', 5, 2 );

/**
 * Helper function for getting the script/style `.min` suffix for minified files.
 *
 * @return string
 */
function _s_get_min_suffix() {
	return defined( 'SCRIPT_DEBUG' ) && true === SCRIPT_DEBUG ? '' : '.min';
}

/**
 * Handles JavaScript detection.
 *
 * Adds a `js` class to the root `<html>` element when JavaScript is detected.
 */
function _s_javascript_detection() {
	echo "<script>(function(html){html.className = html.className.replace(/\bno-js\b/,'js')})(document.documentElement);</script>\n";
}
add_action( 'wp_head', '_s_javascript_detection', 0 );
