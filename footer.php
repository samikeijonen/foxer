<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Foxer
 */

?>

	<footer id="colophon" class="site-footer">
		<div class="site-info">
			<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'foxer' ) ); ?>">
			<?php
				/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( 'Proudly powered by %s', 'foxer' ), 'WordPress' );
			?>
			</a>
			<span class="sep"> | </span>
			<?php
				/* translators: 1: Theme name, 2: Theme author. */
				printf( esc_html__( 'Theme: %1$s by %2$s.', 'foxer' ), 'Foxer', '<a href="https://foxland.fi/">Foxland</a>' );
			?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->

	<?php get_template_part( 'template-parts/navigation/navigation', 'social' ); ?>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
