'use strict';
const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');

const sourcemaps = require('gulp-sourcemaps');

const browserSync = require('browser-sync').create();
const del = require('del');

const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

const ghpages = require('gh-pages');
const path = require('path');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const concat = require('gulp-concat');


function buildSvgSprite() {
  return src(`./src/assets/svg/*.svg`)
    .pipe(svgmin(function (file) {
      return {
        plugins: [{
          cleanupIDs: { minify: true }
        }]
      }
    }))
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('sprite.svg'))
    .pipe(dest(`./src/assets/img/`));
}
exports.buildSvgSprite = buildSvgSprite;


