<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Foxer
 */

?>
<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#main"><?php esc_html_e( 'Skip to content', 'foxer' ); ?></a>

	<header id="masthead" class="site-header">
		<div class="site-header__branding">
			<?php
			the_custom_logo();
			if ( is_front_page() && is_home() ) :
				?>
				<h1 class="site-header__title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php
			else :
				?>
				<p class="site-header__title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
			<?php
			endif;

			$foxer_description = get_bloginfo( 'description', 'display' );
			if ( $foxer_description || is_customize_preview() ) :
			?>
				<p class="site-header__description"><?php echo $foxer_description; /* WPCS: xss ok. */ ?></p>
			<?php
			endif;
			?>
		</div><!-- .site-header__branding -->

		<?php get_template_part( 'template-parts/navigation/navigation', 'top' ); ?>
	</header><!-- #masthead -->
