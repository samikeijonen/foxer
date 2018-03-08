<?php
/**
 * Displays social links navigation.
 *
 * @package Foxer
 */

if ( ! has_nav_menu( 'social' ) ) :
	return;
endif;
?>

<nav class="menu menu--social">
	<?php
		wp_nav_menu( [
			'container'      => '',
			'theme_location' => 'social',
			'menu_id'        => '',
			'menu_class'     => 'menu__items',
		] );
	?>
</nav>
