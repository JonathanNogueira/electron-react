module.exports = function(config) {
    // Add a stub for .scss files
    var cssStubModule = config.moduleNameMapper['^.+\\.css$'];
    config.moduleNameMapper['^.+\\.s?css$'] = cssStubModule;

    return config;
}
