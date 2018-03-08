<?php
/**
 * Displays top navigation.
 *
 * @package Foxer
 */

if ( ! has_nav_menu( 'top' ) ) :
	return;
endif;
?>

<nav id="js-site-navigation" class="menu menu--top">
	<button type="button" class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Menu', 'foxer' ); ?></button>
	<?php
		wp_nav_menu( [
			'container'      => '',
			'theme_location' => 'top',
			'menu_id'        => 'primary-menu',
			'menu_class'     => 'menu__items',
		] );
	?>
</nav><!-- #site-navigation -->
