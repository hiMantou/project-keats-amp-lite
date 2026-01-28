const path = require('path')

module.exports = {
    assetPrefix: "./",
    generateEtags: false,
    generateBuildId: async () => {
        return 'keats-lite-build-id'
    },

    webpack: (config, options) => {
        eidtSvgIcon(config);
        eidtStyledJsx(config, options);
        return config;
    },
}

function eidtSvgIcon(config) {
    config.module.rules.push({
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true
                }
            }
        ]
    });
}
function eidtStyledJsx(config, options) {
    config.module.rules.push({
        test: /\.css$/,
        use: [
            options.defaultLoaders.babel,
            {
                loader: require('styled-jsx/webpack').loader,
                options: {
                    type: 'global',
                },
            }
        ],
    })
}