'use stric'

const gulp = require('gulp')
const $ = {
    stylus: require('gulp-stylus')
    , pug: require('gulp-pug')
    , browserSync: require('browser-sync').create()
    , imagemin: require('gulp-imagemin')
    , babel: require('gulp-babel')
    , lint: require('gulp-eslint')
    , stylint: require('gulp-stylint')
    , svgSprite: require('gulp-svg-sprite')
    , plumber: require('gulp-plumber')
    , sourcemaps: require('gulp-sourcemaps')
    , clean: require('gulp-clean')
    , responsive: require('gulp-responsive')
    , htmlmin: require('gulp-htmlmin')
    , uglify: require('gulp-uglify')
    , cssmin: require('gulp-cssmin')
    , rename: require('gulp-rename')
    , eol: require('gulp-eol')
 
}    

const basePaths = {
    src: 'src/'
    , dest: './'
    , assetsSrc: 'src/assets/'
    , assetsDest: './assets/'
}

const Paths = {
    images: {
        loader: [basePaths.src + 'assets/img/**/*.*', '!' + basePaths.src + 'assets/img/background-*.jpg']
        , dest: basePaths.dest + 'assets/img/'
        , watch: [basePaths.src + 'assets/img/**/*.*']
    }
    , sprite: {
        loader: basePaths.src + 'icons/*.svg'
        , dest: basePaths.assetsDest + 'img/sprite.svg'
        , watch: [basePaths.src + 'icons/*.svg']
    }
    , pug: {
        loader: basePaths.src + '*.pug'
        , dest: basePaths.dest
        , watch: [basePaths.src + '*.pug', basePaths.src + 'partials/*.pug', basePaths.src + 'layouts/*.pug']
    }
    , stylus: {
        loader: 'src/assets/styles/style.styl'
        , loaderPartials: 'src/assets/styles/partials/*.styl'
        , dest: basePaths.assetsDest + 'styles/'
        , watch: [basePaths.assetsSrc + 'styles/*.styl', basePaths.assetsSrc + 'styles/partials/*.styl']
    }
    , javascript: {
        loader: basePaths.assetsSrc + 'scripts/*.js'
        , dest: basePaths.assetsDest + 'scripts/'
        , watch: [basePaths.assetsSrc + 'scripts/*.js']
    }
}

const Config = {
    pug: {}
    , stylus: {
        compress: true
        , sourcemap: {
            comment: false
            , inline: false
        }
    }
    , stylint: {
        config: '.stylintrc'
    }
    , babel: {
        presets: ['es2015']
        , env: {
            production: {
                presets: ['babili']
            }
        }
    }
    , svgconfig: {
        shape: {
            id: {
                generator: ''
            }
            , spacing: {
                padding: 5
            }
        }
        , mode: {
            symbol: {
                dest: basePaths.dest
                , layout: 'diagonal'
                , sprite: Paths.sprite.dest
                , bust: false
                , inline: false
            }
        }
        , variables: {
            mapname: 'icons'
        }
    }
    , browserSync: {
        init: {
            server: Paths.dest
            , open: false
        }
    }
    , build: ['svgsprite', 'pug', 'stylint', 'stylus', 'imagemin', 'lint', 'babel']
    , server: ['build','browserSync','watch']
}

gulp.task('pug', () => {
    gulp.src(Paths.pug.loader)
        .pipe($.plumber())
        .pipe($.pug(Config.pug))
        .pipe($.htmlmin({collapseWhitespace: true}))
        .pipe($.eol('\r\n'))
        .pipe($.plumber.stop())
        .pipe(gulp.dest(Paths.pug.dest))
        .pipe($.browserSync.stream())
})

gulp.task('stylus', () => {
    gulp.src(Paths.stylus.loader)
        .pipe($.plumber())
        // .pipe($.sourcemaps.init())
        .pipe($.stylus(Config.stylus))
        .pipe($.cssmin())
        // .pipe($.sourcemaps.write())
        .pipe($.rename({suffix: '.min'}))
        .pipe($.eol('\r\n'))
        .pipe($.plumber.stop())
        .pipe(gulp.dest('./assets/styles/'))
        .pipe($.browserSync.stream())
})

gulp.task('stylint', () => {
    gulp.src([Paths.stylus.loader, Paths.stylus.loaderPartials])
        .pipe($.plumber())
        .pipe($.stylint())
        .pipe($.stylint.reporter())
        .pipe($.plumber.stop())
})

gulp.task('lint', () => {
    gulp.src(Paths.javascript.loader)
        .pipe($.plumber())
        .pipe($.lint())
        .pipe($.lint.format())
        .pipe($.plumber.stop())
        .pipe($.browserSync.stream())
})

gulp.task('babel', () => {
    gulp.src(Paths.javascript.loader)
        .pipe($.plumber())
        .pipe($.babel(Config.babel))
        .pipe($.uglify())
        .pipe($.eol('\r\n'))
        .pipe($.plumber.stop())
        .pipe(gulp.dest(Paths.javascript.dest))
        .pipe($.browserSync.stream())
})

gulp.task('svgsprite', () => {
    gulp.src(Paths.sprite.loader)
        .pipe($.plumber())
        .pipe($.svgSprite(Config.svgconfig))
        .pipe($.plumber.stop())
        .pipe(gulp.dest(basePaths.dest))
})

gulp.task('responsive', () => {
    gulp.src('./src/assets/img/*.{png,jpg}')
        .pipe($.plumber())
        .pipe($.responsive({
            'background-*.jpg': [{
                width: 576
                , rename: { suffix: '-576px' }
                , withMetadata: false
            }, {
                width: 720
                , rename: { suffix: '-720px' }
                , withMetadata: false
            }, {
                width: 768
                , rename: { suffix: '-768px' }
                , withMetadata: false
            },{
                width: 864
                , rename: { suffix: '-864px' }
                , withMetadata: false
            }, {
                width: 960
                , rename: { suffix: '-960px' }
                , withMetadata: false
            },{
                width: 992
                , rename: { suffix: '-992px' }
                , withMetadata: false
            }, {
                width: 1152
                , rename: { suffix: '-1152px' }
                , withMetadata: false
            }, {
                width: 1200
                , rename: { suffix: '-1200px' }
                , withMetadata: false
            }, {
                width: 1240
                , rename: { suffix: '-1240px' }
                , withMetadata: false
            }, {
                width: 1536
                , rename: { suffix: '-1536px' }
                , withMetadata: false
            }, {
                width: 1488
                , rename: { suffix: '-1488px' }
                , withMetadata: false
            }, {
                width: 1500
                , rename: { suffix: '-1500px' }
                , withMetadata: false
            }, {
                width: 1728
                , rename: { suffix: '-1728px' }
                , withMetadata: false
            }, {
                width: 1800
                , rename: { suffix: '-1800px' }
                , withMetadata: false
            }, {
                width: 1920
                , rename: { suffix: '-1920px' }
                , withMetadata: false
            }, {
                width: 1984
                , rename: { suffix: '-1984px' }
                , withMetadata: false
            }, {
                width: 2304
                , rename: { suffix: '-2304px' }
                , withMetadata: false
            }, {
                width: 2400
                , rename: { suffix: '-2400px' }
                , withMetadata: false
            }, {
                width: 2880
                , rename: { suffix: '-2880px' }
                , withMetadata: false
            }, {
                width: 2976
                , rename: { suffix: '-2976px' }
                , withMetadata: false
            }, {
                width: 3600
                , rename: { suffix: '-3600px' }
                , withMetadata: false
            }, {
                width: 3840
                , rename: { suffix: '-3840px' }
                , withMetadata: false
            }, {
                width: 3600
                , rename: { suffix: '-5760px' }
                , withMetadata: false
            }]
        }))
        .pipe($.imagemin())
        .pipe($.plumber.stop())
        .pipe(gulp.dest(Paths.images.dest))
})

gulp.task('imagemin', () => {
    gulp.src(Paths.images.loader)
        .pipe($.plumber())
        .pipe($.imagemin())
        .pipe($.plumber.stop())
        .pipe(gulp.dest(Paths.images.dest))
})

gulp.task('watch', () => {
    gulp.watch(Paths.sprite.watch, ['svgsprite'])
    gulp.watch(Paths.images.watch, ['imagemin'])
    gulp.watch(Paths.pug.watch, ['pug'])
    gulp.watch(Paths.stylus.watch,['stylint','stylus'])
    gulp.watch(Paths.javascript.watch,['lint','babel'])
})

gulp.task('browserSync', () => {
    $.browserSync.init(Config.browserSync.init)
})

gulp.task('clean', () => {
    gulp.src('assets/**/*.*', {read: false})
        .pipe($.clean())
})

gulp.task('build', Config.build)
gulp.task('server', Config.server)
gulp.task('default', ['server'])