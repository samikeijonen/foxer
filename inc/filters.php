<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package Foxer
 */

/**
 * Remove hentry and add entry at the same time.
 *
 * @since  1.0.0
 * @param  array $classes Post classes.
 * @return array $classes Modified post classes.
 */
function foxer_entry_classes( $classes ) {
	// Remove .hentry class.
	$key = array_search( 'hentry', $classes, true );
	if ( false !== $key ) {
		unset( $classes[ $key ] );
	}

	// Add entry class for Schema.org markup.
	$classes[] = 'entry';

	return $classes;
}
add_filter( 'post_class', 'foxer_entry_classes' );

/**
 * Filters the HTML attributes applied to a menu item's anchor element.
 *
 * @param array    $atts {
 *     The HTML attributes applied to the menu item's `<a>` element, empty strings are ignored.
 *
 *     @type string $title  Title attribute.
 *     @type string $target Target attribute.
 *     @type string $rel    The rel attribute.
 *     @type string $href   The href attribute.
 * }
 * @param WP_Post  $item  The current menu item.
 * @param stdClass $args  An object of wp_nav_menu() arguments.
 * @param int      $depth Depth of menu item. Used for padding.
 * @return string  $attr
 */
function foxer_nav_menu_link_attr( $atts, $item, $args, $depth ) {
	$atts['class'] = 'menu__anchor menu__anchor--' . $args->theme_location;

	if ( in_array( 'current-menu-item', $item->classes, true ) ) {
		$atts['class'] .= ' is-active';
	}

	return $atts;
}
add_filter( 'nav_menu_link_attributes', 'foxer_nav_menu_link_attr', 11, 4 );

/**
 * Filters the CSS class(es) applied to a menu item's list item element.
 *
 * @param array    $classes The CSS classes that are applied to the menu item's `<li>` element.
 * @param WP_Post  $item    The current menu item.
 * @param stdClass $args    An object of wp_nav_menu() arguments.
 * @param int      $depth   Depth of menu item. Used for padding.
 */
function foxer_nav_menu_css_class( $classes, $item, $args, $depth ) {
	$classes[] = 'menu__item';

	if ( in_array( 'current-menu-item', $classes, true ) ) {
		$classes[] = 'menu__item--active';
	}

	if ( in_array( 'current-menu-parent', $classes, true ) ) {
		$classes[] = 'menu__item--parent';
	}

	if ( in_array( 'current-menu-ancestor', $classes, true ) ) {
		$classes[] = 'menu__item--ancestor';
	}

	return $classes;
}
add_filter( 'nav_menu_css_class', 'foxer_nav_menu_css_class', 5, 4 );

/**
 * Add a pingback url auto-discovery header for singularly identifiable articles.
 */
function foxer_pingback_header() {
	if ( is_singular() && pings_open() ) {
		echo '<link rel="pingback" href="', esc_url( get_bloginfo( 'pingback_url' ) ), '">';
	}
}
add_action( 'wp_head', 'foxer_pingback_header' );
