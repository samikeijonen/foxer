<?php
/**
 * Styles and scripts related functions, hooks, and filters.
 *
 * @package Foxer
 */

/**
 * Enqueue scripts and styles.
 */
function foxer_scripts() {
	// Get '.min' suffix.
	$suffix = foxer_get_min_suffix();

	// Custom fonts, used in the main stylesheet.
	wp_enqueue_style( 'foxer-fonts', foxer_fonts_url(), [], null );

	// Main styles.
	wp_enqueue_style( 'foxer-style', get_parent_theme_file_uri( '/dist/styles/style' . $suffix . '.css' ), [], '20180101' );

	// Main scripts.
	wp_enqueue_script( 'foxer-navigation', get_theme_file_uri( '/dist/scripts/navigation' . $suffix . '.js' ), [], '20180101', true );

	// Skip link for older browsers (IE 11).
	wp_enqueue_script( 'foxer-skip-link-focus-fix', get_theme_file_uri( '/dist/scripts/skip-link-focus-fix' . $suffix . '.js' ), [], '20180101', true );

	// Dequeue Core block styles.
	wp_dequeue_style( 'wp-blocks' );

	// Comments JS.
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	// Remove the default emoji styles. We'll handle this in the stylesheet.
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
}
add_action( 'wp_enqueue_scripts', 'foxer_scripts' );

/**
 * Enqueue scripts and styles for the editor.
 */
function foxer_editor_scripts() {
	// Get '.min' suffix.
	$suffix = foxer_get_min_suffix();

	// Add custom fonts.
	wp_enqueue_style( 'foxer-fonts', foxer_fonts_url(), [], null );

	// Main styles for the editor.
	wp_enqueue_style( 'foxer-style', get_parent_theme_file_uri( '/dist/styles/blocks' . $suffix . '.css' ), [], '20180301' );

	// Dequeue Core block fonts.
	wp_dequeue_style( 'wp-editor-font' );

	// Dequeue Core block styles.
	wp_dequeue_style( 'wp-blocks' );
}
add_action( 'enqueue_block_editor_assets', 'foxer_editor_scripts' );

/**
 * Filters the 'stylesheet_uri' to allow theme developers to offer a minimized version of their main
 * 'style.css' file. It will detect if a 'style.min.css' file is available and use it if SCRIPT_DEBUG
 * is disabled.
 *
 * @author    Justin Tadlock <justin@justintadlock.com>
 * @copyright Copyright (c) 2008 - 2017, Justin Tadlock
 * @link      http://themehybrid.com/hybrid-core
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * @param     string $stylesheet_uri     The URI of the active theme's stylesheet.
 * @param     string $stylesheet_dir_uri The directory URI of the active theme's stylesheet.
 * @return    string $stylesheet_uri
 */
function foxer_min_stylesheet_uri( $stylesheet_uri, $stylesheet_dir_uri ) {
	// Get '.min' suffix.
	$suffix = foxer_get_min_suffix();

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
add_filter( 'stylesheet_uri', 'foxer_min_stylesheet_uri', 5, 2 );

/**
 * Helper function for getting the script/style `.min` suffix for minified files.
 *
 * @return string
 */
function foxer_get_min_suffix() {
	return defined( 'SCRIPT_DEBUG' ) && true === SCRIPT_DEBUG ? '' : '.min';
}

/**
 * Handles JavaScript detection.
 *
 * Adds a `js` class to the root `<html>` element when JavaScript is detected.
 */
function foxer_javascript_detection() {
	echo "<script>(function(html){html.className = html.className.replace(/\bno-js\b/,'js')})(document.documentElement);</script>\n";
}
add_action( 'wp_head', 'foxer_javascript_detection', 0 );
