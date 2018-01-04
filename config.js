/**
 * Configuration based on WPGulp.
 *
 * @link: https://github.com/ahmadawais/WPGulp
 *
 * Project Configuration for gulp tasks.
 *
 * In paths you can add <<glob or array of globs>>. Edit the variables as per your project requirements.
 */

module.exports = {

	// START Editing Project Variables.
	// Project options.
	project: 'Foxer',                      // Project Name.
	projectURL: 'foxland-products.local/', // Local project URL of your already running WordPress site. Could be something like local.dev or localhost:8888.
	productURL: './',                      // Theme/Plugin URL. Leave it like it is, since our gulpfile.js lives in the root folder.
	browserAutoOpen: true,
	injectChanges: true,

	// Style options.
	styleSRC: './assets/sass/style.scss', // Path to main .scss file.
	styleDestination: './',               // Path to place the compiled CSS file. Default set to root folder.
	outputStyle: 'expanded',              // Available options → 'compact' or 'compressed' or 'nested' or 'expanded'
	errLogToConsole: true,
	precision: 10,
	styleName: 'style.css',
	styleMinName: 'style.min.css',
	SassLint: [
		'assets/sass/**/*.scss',
		'!assets/sass/generic/_normalize.scss',
		'!node_modules/**'
	],

	// JS Vendor options.
	jsSRC: [ './assets/js/*.js', './!assets/js/*.min.js' ], // Path to JS folder.
	jsDST: './assets/js/', // Path to place the compiled JS vendors file.
	JSLint: [
		'assets/js/concat/*.js',
		'assets/js/*.js',
		'!assets/js/project.js',
		'!assets/js/*.min.js',
		'!gruntfile.js',
		'!gulpfile.js',
		'!node_modules/**'
	],

	// JS Custom options.
	jsCustomSRC: './assets/js/custom/*.js', // Path to JS custom scripts folder.
	jsCustomDestination: './assets/js/', // Path to place the compiled JS custom scripts file.
	jsCustomFile: 'custom', // Compiled JS custom file name. Default set to custom i.e. custom.js.

	// Images options.
	imgSRC: [ './assets/images/*', '!./assets/images/*.svg' ], // Source folder of images which should be optimized and watched.
	imgDST: './assets/images/',                                // Destination folder of optimized images. Must be different from the imagesSRC folder.

	// SVG options.
	svgSRC: './assets/images/svg-icons/*.svg', // Source folder of SVG icons.
	svgDST: './assets/images/',                // Destination folder of svg sprite file. Must be different from the svgSRC folder.

	// Watch files paths.
	styleWatchFiles: './assets/sass/**/*.scss',       // Path to all *.scss files inside css folder and inside them.
	vendorJSWatchFiles: './assets/js/vendor/*.js',    // Path to all vendor JS files.
	customJSWatchFiles: './assets/js/custom/*.js',    // Path to all custom JS files.
	PHPWatchFiles: './**/*.php',                      // Path to all PHP files.
	SVGWatchFiles: './assets/images/svg-icons/*.svg', // Path to all SVG files.

	// Translation options.
	textDomain: 'foxer',                   // Your textdomain here.
	translationFile: 'foxer.pot',          // Name of the transalation file.
	translationDST: './languages', // Where to save the translation files.
	packageName: 'Foxer',                  // Package name.

	// Browsers you care about for autoprefixing. Browserlist https://github.com/ai/browserslist
	BROWSERS_LIST: [
		'last 2 version',
		'> 1%',
		'ie >= 9',
		'ie_mob >= 10',
		'ff >= 30',
		'chrome >= 34',
		'safari >= 7',
		'opera >= 23',
		'ios >= 7',
		'android >= 4',
		'bb >= 10'
	]

	// STOP Editing Project Variables.
};
