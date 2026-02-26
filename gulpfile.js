// gulpfile.js

const gulp = require('gulp');
const { setTypescriptCompiler } = require('@microsoft/sp-build-core-tasks');

// Function to set up the TypeScript compiler options
function configureTypescript() {
    return setTypescriptCompiler({
        typescript: require('typescript'),
        // Additional options can be set here
        target: 'ESNext',
        module: 'commonjs',
    });
}

// Define your build tasks
gulp.task('build', gulp.series(configureTypescript, function buildTask(done) {
    console.log('Building the SPFx solution...');
    // Put your build process logic here
    done();
}));

// Default gulp task
gulp.task('default', gulp.series('build'));