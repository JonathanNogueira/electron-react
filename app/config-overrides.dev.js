module.exports = function(config) {
    // Generate sourcemaps
    config.devtool = 'source-map';

    // Compile i18n messages throughout the project into JSON files
    config.module.loaders[0].query.plugins = [
        ["react-intl", {
            "messagesDir": "./build/messages/"
        }]
    ];

    // Add the SASS loader
    config.module.loaders.push({
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
    });

    return config;
}
