const { src, dest, parallel, watch, series } = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const includeFiles = require('gulp-include');
const webpack = require('webpack-stream');

function browsersync() {
    browserSync.init({
        server: {
            baseDir: './public/',
            serverStaticOptions: {
                extensions: ['html'],
            },
        },
        port: 8080,
        ui: {port: 8081},
        open: true,
    })
}

function styles() {
    return src('./src/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({grid: true}))
        .pipe(dest('./public/css/'))
        .pipe(browserSync.stream());
}

function scripts() {
    return src('./src/js/script.js')
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'script.js'
            },
            watch: false
        }))
        .pipe(dest('./public/js'))
        .pipe(browserSync.reload({stream: true,}));
}

function pages() {
    return src('./src/index.html')
        .pipe(dest('./public/'))
        .pipe(browserSync.reload({stream: true,}));
}

function watch_dev() {
    watch(['./src/js/script.js', './src/js/modules/**/*.js'], scripts);
    watch(['./src/sass/style.scss', './src/sass/**/*.scss'], styles).on('change', browserSync.reload);
    watch(['./src/index.html'], pages).on('change', browserSync.reload);
}

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.pages = pages;

exports.default = parallel(
    styles,
    scripts,
    pages,browsersync,
    watch_dev
);