const path = require('path')

module.exports = {
    assetPrefix: "./",
	generateEtags: false,
	generateBuildId: async () => {
		return 'keats-lite-build-id'
	},
	// sassOptions: {
	// 	includePaths: [path.join(__dirname, 'src', 'components', 'button')]
	// }
	webpack: (config, options) => {
        eidtCssModuleName(config);
        eidtCssName(config)
        eidtJsName(config);
        
		return config;
	},
}

function eidtCssModuleName(config){
    config.module.rules.forEach((rule) => {
        if (rule.oneOf) {
            rule.oneOf.forEach(({ use }) => {
                if (use && Array.isArray(use)) {
                    use.forEach(({ options: { modules } }) => {
                        if (modules && modules.getLocalIdent) {
                            delete modules.getLocalIdent
                            modules.localIdentName = '[name]__[local]'
                        }
                    })
                }
            })
        }
    })
}

function eidtJsName(config){
    config.output.filename = config.output.filename.replace('-[chunkhash]', '');
}

function eidtCssName(config) {
    const miniCssExtractPluginInstance = config.plugins.find(
        // plugin => plugin instanceof NextMiniCssExtractPlugin
        plugin => plugin.__next_css_remove
    );

    if (miniCssExtractPluginInstance) {
        miniCssExtractPluginInstance.options.filename = 'static/css/[name].css';
        miniCssExtractPluginInstance.options.chunkFilename = 'static/css/[name].css';
    }
}


// config.module.rules.push({
//     test: /\.css$/i,
//     use: [
//         "style-loader",
//         {
//             loader: "css-loader",
//             options: {
//                 modules: {
//                     localIdentName: "[path][name]__[local]xxx",
//                 },
//             },
//         },
//         // "sass-loader",
//     ],
// });
// config.module.rules.push({
//     test: /\.module\.css$/,
//     use: [
//         {
//             loader: "css-loader",
//             options: {
//                 modules: {
//                     localIdentName: "[local]__xxx_[hash:base64:5]",
//                 },
//             },
//         },
//     ],
// });

// config.module.rules.push({
//     test: /\.css$/,
//     use: [
//         options.defaultLoaders.babel,
//         {
//             loader: require('styled-jsx/webpack').loader,
//             options: {
//                 type:'global',
//                 // type: (fileName, options) => options.query.type || 'global',
//                 // type: (fileName, options) => options.query.type || 'scoped',
//             },
//         },
//     ],
// })

//     config.module.rules.push({
//         test: /\.module\.css$/,
//         use: [
//             {
//                 loader: "css-loader",
//                 options: {
//                     modules: {
//                         localIdentName: "[local]__[hash:base64:5]",
//                     },
//                 },
//             },
//         ],
//     });


// config.module.rules.push({
// 	test: /\.css$/,
// 	use: [
// 		options.defaultLoaders.babel,
// 		{
// 			loader: require('styled-jsx/webpack').loader,
// 			options: { type: 'global' },
// 		},
// 	],
// });

// 	config.module.rules.push({
// 		test: /\.svg$/,
// 		use: [
// 			{
// 				loader: '@svgr/webpack',
// 				options: {
// 					icon: true
// 				}
// 			}
// 		]
// 	});