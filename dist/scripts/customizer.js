'use strict';

/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

(function ($) {

	// Site title and description.
	wp.customize('blogname', function (value) {
		value.bind(function (to) {
			$('.site-title a').text(to);
		});
	});
	wp.customize('blogdescription', function (value) {
		value.bind(function (to) {
			$('.site-description').text(to);
		});
	});

	// Header text color.
	wp.customize('header_textcolor', function (value) {
		value.bind(function (to) {
			if ('blank' === to) {
				$('.site-title, .site-description').css({
					'clip': 'rect(1px, 1px, 1px, 1px)',
					'position': 'absolute'
				});
			} else {
				$('.site-title, .site-description').css({
					'clip': 'auto',
					'position': 'relative'
				});
				$('.site-title a, .site-description').css({
					'color': to
				});
			}
		});
	});
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWl6ZXIuanMiXSwibmFtZXMiOlsiJCIsIndwIiwiY3VzdG9taXplIiwidmFsdWUiLCJiaW5kIiwidG8iLCJ0ZXh0IiwiY3NzIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7OztBQVFFLFdBQVVBLENBQVYsRUFBYzs7QUFFZjtBQUNBQyxJQUFHQyxTQUFILENBQWMsVUFBZCxFQUEwQixVQUFVQyxLQUFWLEVBQWtCO0FBQzNDQSxRQUFNQyxJQUFOLENBQVksVUFBVUMsRUFBVixFQUFlO0FBQzFCTCxLQUFHLGVBQUgsRUFBcUJNLElBQXJCLENBQTJCRCxFQUEzQjtBQUNBLEdBRkQ7QUFHQSxFQUpEO0FBS0FKLElBQUdDLFNBQUgsQ0FBYyxpQkFBZCxFQUFpQyxVQUFVQyxLQUFWLEVBQWtCO0FBQ2xEQSxRQUFNQyxJQUFOLENBQVksVUFBVUMsRUFBVixFQUFlO0FBQzFCTCxLQUFHLG1CQUFILEVBQXlCTSxJQUF6QixDQUErQkQsRUFBL0I7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQTtBQUNBSixJQUFHQyxTQUFILENBQWMsa0JBQWQsRUFBa0MsVUFBVUMsS0FBVixFQUFrQjtBQUNuREEsUUFBTUMsSUFBTixDQUFZLFVBQVVDLEVBQVYsRUFBZTtBQUMxQixPQUFLLFlBQVlBLEVBQWpCLEVBQXNCO0FBQ3JCTCxNQUFHLGdDQUFILEVBQXNDTyxHQUF0QyxDQUEyQztBQUMxQyxhQUFRLDBCQURrQztBQUUxQyxpQkFBWTtBQUY4QixLQUEzQztBQUlBLElBTEQsTUFLTztBQUNOUCxNQUFHLGdDQUFILEVBQXNDTyxHQUF0QyxDQUEyQztBQUMxQyxhQUFRLE1BRGtDO0FBRTFDLGlCQUFZO0FBRjhCLEtBQTNDO0FBSUFQLE1BQUcsa0NBQUgsRUFBd0NPLEdBQXhDLENBQTZDO0FBQzVDLGNBQVNGO0FBRG1DLEtBQTdDO0FBR0E7QUFDRCxHQWZEO0FBZ0JBLEVBakJEO0FBa0JBLENBakNDLEVBaUNFRyxNQWpDRixDQUFGIiwiZmlsZSI6ImN1c3RvbWl6ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEZpbGUgY3VzdG9taXplci5qcy5cbiAqXG4gKiBUaGVtZSBDdXN0b21pemVyIGVuaGFuY2VtZW50cyBmb3IgYSBiZXR0ZXIgdXNlciBleHBlcmllbmNlLlxuICpcbiAqIENvbnRhaW5zIGhhbmRsZXJzIHRvIG1ha2UgVGhlbWUgQ3VzdG9taXplciBwcmV2aWV3IHJlbG9hZCBjaGFuZ2VzIGFzeW5jaHJvbm91c2x5LlxuICovXG5cbiggZnVuY3Rpb24oICQgKSB7XG5cblx0Ly8gU2l0ZSB0aXRsZSBhbmQgZGVzY3JpcHRpb24uXG5cdHdwLmN1c3RvbWl6ZSggJ2Jsb2duYW1lJywgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHZhbHVlLmJpbmQoIGZ1bmN0aW9uKCB0byApIHtcblx0XHRcdCQoICcuc2l0ZS10aXRsZSBhJyApLnRleHQoIHRvICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cdHdwLmN1c3RvbWl6ZSggJ2Jsb2dkZXNjcmlwdGlvbicsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHR2YWx1ZS5iaW5kKCBmdW5jdGlvbiggdG8gKSB7XG5cdFx0XHQkKCAnLnNpdGUtZGVzY3JpcHRpb24nICkudGV4dCggdG8gKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHQvLyBIZWFkZXIgdGV4dCBjb2xvci5cblx0d3AuY3VzdG9taXplKCAnaGVhZGVyX3RleHRjb2xvcicsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHR2YWx1ZS5iaW5kKCBmdW5jdGlvbiggdG8gKSB7XG5cdFx0XHRpZiAoICdibGFuaycgPT09IHRvICkge1xuXHRcdFx0XHQkKCAnLnNpdGUtdGl0bGUsIC5zaXRlLWRlc2NyaXB0aW9uJyApLmNzcygge1xuXHRcdFx0XHRcdCdjbGlwJzogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG5cdFx0XHRcdFx0J3Bvc2l0aW9uJzogJ2Fic29sdXRlJ1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKCAnLnNpdGUtdGl0bGUsIC5zaXRlLWRlc2NyaXB0aW9uJyApLmNzcygge1xuXHRcdFx0XHRcdCdjbGlwJzogJ2F1dG8nLFxuXHRcdFx0XHRcdCdwb3NpdGlvbic6ICdyZWxhdGl2ZSdcblx0XHRcdFx0fSApO1xuXHRcdFx0XHQkKCAnLnNpdGUtdGl0bGUgYSwgLnNpdGUtZGVzY3JpcHRpb24nICkuY3NzKCB7XG5cdFx0XHRcdFx0J2NvbG9yJzogdG9cblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSApO1xufSAoIGpRdWVyeSApICk7XG4iXX0=
