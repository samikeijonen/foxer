<?php
/**
 * Enqueue scripts and styles.
 */
function _s_scripts() {
	// Get '.min' suffix.
	$suffix = _s_get_min_suffix();

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
 * Handles JavaScript detection.
 *
 * Adds a `js` class to the root `<html>` element when JavaScript is detected.
 */
function _s_javascript_detection() {
	echo "<script>(function(html){html.className = html.className.replace(/\bno-js\b/,'js')})(document.documentElement);</script>\n";
}
add_action( 'wp_head', '_s_javascript_detection', 0 );

/**
 * Helper function for getting the script/style `.min` suffix for minified files.
 *
 * @since  1.0.0
 * @return string
 */
function _s_get_min_suffix() {
	return defined( 'SCRIPT_DEBUG' ) && true === SCRIPT_DEBUG ? '' : '.min';
}
