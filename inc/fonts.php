<?php
/**
 * Fonts related functions.
 *
 * @package Foxer
 */

/**
 * Register custom fonts.
 */
function foxer_fonts_url() {
	$fonts_url = '';
	$fonts     = [];
	$subsets   = 'latin,latin-ext';

	/*
	 * Translators: If there are characters in your language that are not
	 * supported by Fira Sans, translate this to 'off'. Do not translate
	 * into your own language.
	 */
	if ( 'off' !== esc_attr_x( 'on', 'Fira Sans font: on or off', 'foxer' ) ) {
		$fonts[] = 'Lora:400,700,400i,700i';
	}

	/*
	 * Translators: If there are characters in your language that are not
	 * supported by Lato, translate this to 'off'. Do not translate
	 * into your own language.
	 */
	if ( 'off' !== esc_attr_x( 'on', 'Lato font: on or off', 'foxer' ) ) {
		$fonts[] = 'Lato:400,700,400i,700i';
	}

	if ( $fonts ) {
		$query_args = [
			'family' => rawurlencode( implode( '|', $fonts ) ),
			'subset' => rawurlencode( $subsets ),
		];

		$fonts_url = add_query_arg( $query_args, 'https://fonts.googleapis.com/css' );
	}

	return esc_url_raw( $fonts_url );
}

/**
 * Add preconnect for Google Fonts.
 *
 * @param array  $urls           URLs to print for resource hints.
 * @param string $relation_type  The relation type the URLs are printed.
 * @return array $urls           URLs to print for resource hints.
 */
function foxer_resource_hints( $urls, $relation_type ) {
	if ( wp_style_is( ' foxer-fonts', 'queue' ) && 'preconnect' === $relation_type ) {
		$urls[] = [
			'href' => 'https://fonts.gstatic.com',
			'crossorigin',
		];
	}

	return $urls;
}
add_filter( 'wp_resource_hints', 'foxer_resource_hints', 10, 2 );
