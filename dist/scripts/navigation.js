'use strict';

/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function () {
	var container, button, menu, links, i, len;

	container = document.getElementById('js-site-navigation');
	if (!container) {
		return;
	}

	button = container.getElementsByTagName('button')[0];
	if ('undefined' === typeof button) {
		return;
	}

	menu = container.getElementsByTagName('ul')[0];

	// Hide menu toggle button if menu is empty and return early.
	if ('undefined' === typeof menu) {
		button.style.display = 'none';
		return;
	}

	menu.setAttribute('aria-expanded', 'false');
	if (!menu.classList.contains('js-nav-menu')) {
		menu.classList.add('js-nav-menu');
	}

	button.addEventListener('click', function () {
		container.classList.toggle('is-toggled');
		menu.classList.toggle('is-toggled');
		button.classList.toggle('is-toggled');

		var expanded = 'false' === button.getAttribute('aria-expanded') ? 'true' : 'false';
		button.setAttribute('aria-expanded', expanded);
	});

	// Get all the link elements within the menu.
	links = menu.getElementsByTagName('a');

	// Each time a menu link is focused or blurred, toggle focus.
	for (i = 0, len = links.length; i < len; i++) {
		links[i].addEventListener('focus', toggleFocus, true);
		links[i].addEventListener('blur', toggleFocus, true);
	}

	/**
  * Sets or removes .focus class on an element.
  */
	function toggleFocus() {
		var self = this;

		// Move up through the ancestors of the current link until we hit .js-nav-menu.
		while (-1 === self.className.indexOf('js-nav-menu')) {

			// On li elements toggle the class .focus.
			if ('li' === self.tagName.toLowerCase()) {
				if (-1 !== self.className.indexOf('focus')) {
					self.className = self.className.replace(' focus', '');
				} else {
					self.className += ' focus';
				}
			}

			self = self.parentElement;
		}
	}

	/**
  * Toggles `focus` class to allow submenu access on tablets.
  */
	(function (container) {
		var touchStartFn,
		    i,
		    parentLink = container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');

		if ('ontouchstart' in window) {
			touchStartFn = function touchStartFn(e) {
				var menuItem = this.parentNode,
				    i;

				if (!menuItem.classList.contains('focus')) {
					e.preventDefault();
					for (i = 0; i < menuItem.parentNode.children.length; ++i) {
						if (menuItem === menuItem.parentNode.children[i]) {
							continue;
						}
						menuItem.parentNode.children[i].classList.remove('focus');
					}
					menuItem.classList.add('focus');
				} else {
					menuItem.classList.remove('focus');
				}
			};

			for (i = 0; i < parentLink.length; ++i) {
				parentLink[i].addEventListener('touchstart', touchStartFn, false);
			}
		}
	})(container);
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uanMiXSwibmFtZXMiOlsiY29udGFpbmVyIiwiYnV0dG9uIiwibWVudSIsImxpbmtzIiwiaSIsImxlbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInN0eWxlIiwiZGlzcGxheSIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSIsImV4cGFuZGVkIiwiZ2V0QXR0cmlidXRlIiwibGVuZ3RoIiwidG9nZ2xlRm9jdXMiLCJzZWxmIiwiY2xhc3NOYW1lIiwiaW5kZXhPZiIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJwYXJlbnRFbGVtZW50IiwidG91Y2hTdGFydEZuIiwicGFyZW50TGluayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ3aW5kb3ciLCJlIiwibWVudUl0ZW0iLCJwYXJlbnROb2RlIiwicHJldmVudERlZmF1bHQiLCJjaGlsZHJlbiIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBTUUsYUFBVztBQUNaLEtBQUlBLFNBQUosRUFBZUMsTUFBZixFQUF1QkMsSUFBdkIsRUFBNkJDLEtBQTdCLEVBQW9DQyxDQUFwQyxFQUF1Q0MsR0FBdkM7O0FBRUFMLGFBQVlNLFNBQVNDLGNBQVQsQ0FBeUIsb0JBQXpCLENBQVo7QUFDQSxLQUFLLENBQUVQLFNBQVAsRUFBbUI7QUFDbEI7QUFDQTs7QUFFREMsVUFBU0QsVUFBVVEsb0JBQVYsQ0FBZ0MsUUFBaEMsRUFBMkMsQ0FBM0MsQ0FBVDtBQUNBLEtBQUssZ0JBQWdCLE9BQU9QLE1BQTVCLEVBQXFDO0FBQ3BDO0FBQ0E7O0FBRURDLFFBQU9GLFVBQVVRLG9CQUFWLENBQWdDLElBQWhDLEVBQXVDLENBQXZDLENBQVA7O0FBRUE7QUFDQSxLQUFLLGdCQUFnQixPQUFPTixJQUE1QixFQUFtQztBQUNsQ0QsU0FBT1EsS0FBUCxDQUFhQyxP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QVNPO0FBQ05tQixjQUFTckIsU0FBVCxDQUFtQnlCLE1BQW5CLENBQTJCLE9BQTNCO0FBQ0E7QUFDRCxJQWhCRDs7QUFrQkEsUUFBTWpDLElBQUksQ0FBVixFQUFhQSxJQUFJeUIsV0FBV1YsTUFBNUIsRUFBb0MsRUFBRWYsQ0FBdEMsRUFBMEM7QUFDekN5QixlQUFXekIsQ0FBWCxFQUFjVyxnQkFBZCxDQUFnQyxZQUFoQyxFQUE4Q2EsWUFBOUMsRUFBNEQsS0FBNUQ7QUFDQTtBQUNEO0FBQ0QsRUEzQkMsRUEyQkM1QixTQTNCRCxDQUFGO0FBNEJBLENBakdDLEdBQUYiLCJmaWxlIjoibmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmlsZSBuYXZpZ2F0aW9uLmpzLlxuICpcbiAqIEhhbmRsZXMgdG9nZ2xpbmcgdGhlIG5hdmlnYXRpb24gbWVudSBmb3Igc21hbGwgc2NyZWVucyBhbmQgZW5hYmxlcyBUQUIga2V5XG4gKiBuYXZpZ2F0aW9uIHN1cHBvcnQgZm9yIGRyb3Bkb3duIG1lbnVzLlxuICovXG4oIGZ1bmN0aW9uKCkge1xuXHR2YXIgY29udGFpbmVyLCBidXR0b24sIG1lbnUsIGxpbmtzLCBpLCBsZW47XG5cblx0Y29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdqcy1zaXRlLW5hdmlnYXRpb24nICk7XG5cdGlmICggISBjb250YWluZXIgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YnV0dG9uID0gY29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCAnYnV0dG9uJyApWzBdO1xuXHRpZiAoICd1bmRlZmluZWQnID09PSB0eXBlb2YgYnV0dG9uICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG1lbnUgPSBjb250YWluZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoICd1bCcgKVswXTtcblxuXHQvLyBIaWRlIG1lbnUgdG9nZ2xlIGJ1dHRvbiBpZiBtZW51IGlzIGVtcHR5IGFuZCByZXR1cm4gZWFybHkuXG5cdGlmICggJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBtZW51ICkge1xuXHRcdGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG1lbnUuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsICdmYWxzZScgKTtcblx0aWYgKCAhIG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCAnanMtbmF2LW1lbnUnICkgKSB7XG5cdFx0bWVudS5jbGFzc0xpc3QuYWRkKCAnanMtbmF2LW1lbnUnICk7XG5cdH1cblxuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0Y29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoICdpcy10b2dnbGVkJyApO1xuXHRcdG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSggJ2lzLXRvZ2dsZWQnICk7XG5cdFx0YnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoICdpcy10b2dnbGVkJyApO1xuXG5cdFx0bGV0IGV4cGFuZGVkID0gKCAnZmFsc2UnID09PSBidXR0b24uZ2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcgKSApID8gJ3RydWUnIDogJ2ZhbHNlJztcblx0XHRidXR0b24uc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIGV4cGFuZGVkICk7XG5cdH0gKTtcblxuXHQvLyBHZXQgYWxsIHRoZSBsaW5rIGVsZW1lbnRzIHdpdGhpbiB0aGUgbWVudS5cblx0bGlua3MgPSBtZW51LmdldEVsZW1lbnRzQnlUYWdOYW1lKCAnYScgKTtcblxuXHQvLyBFYWNoIHRpbWUgYSBtZW51IGxpbmsgaXMgZm9jdXNlZCBvciBibHVycmVkLCB0b2dnbGUgZm9jdXMuXG5cdGZvciAoIGkgPSAwLCBsZW4gPSBsaW5rcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcblx0XHRsaW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKCAnZm9jdXMnLCB0b2dnbGVGb2N1cywgdHJ1ZSApO1xuXHRcdGxpbmtzW2ldLmFkZEV2ZW50TGlzdGVuZXIoICdibHVyJywgdG9nZ2xlRm9jdXMsIHRydWUgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXRzIG9yIHJlbW92ZXMgLmZvY3VzIGNsYXNzIG9uIGFuIGVsZW1lbnQuXG5cdCAqL1xuXHRmdW5jdGlvbiB0b2dnbGVGb2N1cygpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBNb3ZlIHVwIHRocm91Z2ggdGhlIGFuY2VzdG9ycyBvZiB0aGUgY3VycmVudCBsaW5rIHVudGlsIHdlIGhpdCAuanMtbmF2LW1lbnUuXG5cdFx0d2hpbGUgKCAtMSA9PT0gc2VsZi5jbGFzc05hbWUuaW5kZXhPZiggJ2pzLW5hdi1tZW51JyApICkge1xuXG5cdFx0XHQvLyBPbiBsaSBlbGVtZW50cyB0b2dnbGUgdGhlIGNsYXNzIC5mb2N1cy5cblx0XHRcdGlmICggJ2xpJyA9PT0gc2VsZi50YWdOYW1lLnRvTG93ZXJDYXNlKCkgKSB7XG5cdFx0XHRcdGlmICggLTEgIT09IHNlbGYuY2xhc3NOYW1lLmluZGV4T2YoICdmb2N1cycgKSApIHtcblx0XHRcdFx0XHRzZWxmLmNsYXNzTmFtZSA9IHNlbGYuY2xhc3NOYW1lLnJlcGxhY2UoICcgZm9jdXMnLCAnJyApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNlbGYuY2xhc3NOYW1lICs9ICcgZm9jdXMnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNlbGYgPSBzZWxmLnBhcmVudEVsZW1lbnQ7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFRvZ2dsZXMgYGZvY3VzYCBjbGFzcyB0byBhbGxvdyBzdWJtZW51IGFjY2VzcyBvbiB0YWJsZXRzLlxuXHQgKi9cblx0KCBmdW5jdGlvbiggY29udGFpbmVyICkge1xuXHRcdHZhciB0b3VjaFN0YXJ0Rm4sIGksXG5cdFx0XHRwYXJlbnRMaW5rID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoICcubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGEsIC5wYWdlX2l0ZW1faGFzX2NoaWxkcmVuID4gYScgKTtcblxuXHRcdGlmICggJ29udG91Y2hzdGFydCcgaW4gd2luZG93ICkge1xuXHRcdFx0dG91Y2hTdGFydEZuID0gZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRcdHZhciBtZW51SXRlbSA9IHRoaXMucGFyZW50Tm9kZSxcblx0XHRcdFx0aTtcblxuXHRcdFx0XHRpZiAoICEgbWVudUl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCAnZm9jdXMnICkgKSB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgbWVudUl0ZW0ucGFyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGg7ICsraSApIHtcblx0XHRcdFx0XHRcdGlmICggbWVudUl0ZW0gPT09IG1lbnVJdGVtLnBhcmVudE5vZGUuY2hpbGRyZW5baV0gKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bWVudUl0ZW0ucGFyZW50Tm9kZS5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCAnZm9jdXMnICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoICdmb2N1cycgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCAnZm9jdXMnICk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdGZvciAoIGkgPSAwOyBpIDwgcGFyZW50TGluay5sZW5ndGg7ICsraSApIHtcblx0XHRcdFx0cGFyZW50TGlua1tpXS5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIHRvdWNoU3RhcnRGbiwgZmFsc2UgKTtcblx0XHRcdH1cblx0XHR9XG5cdH0oIGNvbnRhaW5lciApICk7XG59ICgpICk7XG4iXX0=
