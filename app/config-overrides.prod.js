module.exports = function(config) {
    // Add the SASS loader
    config.module.loaders.push({
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
    });

    return config;
}
