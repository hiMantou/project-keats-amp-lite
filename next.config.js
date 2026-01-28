const path = require('path')

module.exports = {
    assetPrefix: "./",
    generateEtags: false,
    generateBuildId: async () => {
        return 'keats-lite-build-id'
    },

    webpack: (config, options) => {

        eidtSvgIcon(config);
        if (process.env.NODE_ENV === "production") {
            eidtCssFileName(config);
            eidtCssModuleName(config);
        }
        return config;
    },
}

function eidtCssModuleName(config) {
    config.module.rules.forEach((rule) => {
        if (rule.oneOf) {
            rule.oneOf.forEach(({ use }) => {
                if (use && Array.isArray(use)) {
                    use.forEach(({ options }) => {
                        if (options.modules) {
                            delete options.modules.getLocalIdent
                            options.modules.localIdentName = '[local]'
                        }
                    })
                }
            })
        }
    })
}

function eidtCssFileName(config) {
    const miniCssExtractPluginInstance = config.plugins.find(
        plugin => plugin.__next_css_remove
    );
    if (miniCssExtractPluginInstance) {
        miniCssExtractPluginInstance.options.filename = 'static/css/[name].css';
        miniCssExtractPluginInstance.options.chunkFilename = 'static/css/[name].css';
    }
}

function eidtSvgIcon(config) {
    config.module.rules.push({
        test: /\.svg$/,
        use: [
            // options.defaultLoaders.babel,
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true
                }
            }
        ]
    });
}
