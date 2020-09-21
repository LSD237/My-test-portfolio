const gulp          = require('gulp');
const concat        = require('gulp-concat'); // Обычная конкатенация
const autoprefixer  = require('gulp-autoprefixer');
const cleanCSS      = require('gulp-clean-css'); // Минификация CSS (сжатие)(оптимизация стилей)
const uglify        = require('gulp-uglify'); // Минификация JS (сжатие)(оптимизация сткиптов)
const del           = require('del'); // Отчистка каталогов
const browserSync   = require('browser-sync').create(); // Синхронизация с браузером
const sass          = require('gulp-sass');
const sourcemaps    = require('gulp-sourcemaps'); // Для препроцессоров стилей(в отладчике браузера указывается нужная строка стилей)
const imagemin      = require('gulp-imagemin'); // Для оптимизации изображений
const rename        = require("gulp-rename"); // Для изменения названия файлов(добавления суффиксов, расширений)
// const postcss       = require('gulp-postcss'); // Для адекватной работы аутопрефиксера

// Порядок подключения SCSS файлов
const styleFiles = [
    './src/scss/color/_color.scss',
    './src/scss/header/_header.scss',
    './src/scss/footer/_footer.scss',
    './src/scss/main.scss',
    './src/scss/about.scss'
]
// Порядок подключения jS файлов
const scriptFiles = [
    './src/js/main.js',
    './src/js/lib.js'
]

// Таск для обработки стилей
gulp.task('styles', () => {
    // Выбор файлов (альтернатива './src/scss/**/*.scss')
    return gulp.src(styleFiles) // Либо вместо пути подставить переменную (styleFiles)
    .pipe(sourcemaps.init())
    // Компиляция + вывод при ошибки
    .pipe(sass().on('error', sass.logError))
    // Объединение файлов в один
    .pipe(concat('style.css'))
    // Добавить префиксы
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
    }))
    // Минификация (сжатие) CSS
    .pipe(cleanCSS({
        level: 2
    }))
    .pipe(sourcemaps.write('./'))
    // Добавление суффикса к названию файла ('.min' т.е. минифицированный)
    .pipe(rename({
        suffix: '.min'
    }))
    // Выходная папка для стилей
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
});

// Таск на скрипты JS
gulp.task('scripts', () => {
    return gulp.src(scriptFiles)
    .pipe(concat('script.js'))
    // .pipe(uglify()) // Обычная минификация JS (сжатие)
    .pipe(uglify({
        toplevel: true // Дополнительное сжатие
    }))
    // Добавление суффикса к названию файла ('.min' т.е. минифицированный)
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream());
});

// Удалить всё в указанной папке
gulp.task('del', () => {
    return del(['build/*'])
});

// Оптимизация img
gulp.task('img-compress', () => {
    // Все файлы во всех директориях img
    return gulp.src('./src/images/**')
    .pipe(imagemin({
        progressive: true // Более оптимальный метод сжатия
    }))
    .pipe(gulp.dest('./build/images/'))
});

gulp.task('watch', () => {
    browserSync.init({      // Выполняем browserSync
        server: {           // Определяем параметры сервера
            baseDir: "./"   // Директория для сервера
        }
    });
    // Дабавленные изображения будут сжиматься
    gulp.watch('./src/images/**', gulp.series('img-compress'))
    // Следить за файлами со стилями с нужным расширением
    gulp.watch('./src/scss/**/*.scss', gulp.series('styles'))
    // Следить за JS файлами
    gulp.watch('./src/js/**/*.js', gulp.series('scripts'))
    // При изменении HTML запустить синхронизация с браузером
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Таск по уполчанию. (удаляет-отчищает),(наполняет и сжимает img),(отслеживает)
gulp.task('default', gulp.series('del', gulp.parallel('styles', 'scripts', 'img-compress'), 'watch'));
