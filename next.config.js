// const path = require('path')

module.exports = {
	generateEtags: false,
	generateBuildId: async () => {
		return 'keats-build-id'
	},
	// sassOptions: {
	// 	includePaths: [path.join(__dirname, 'src', 'components', 'button')]
	// }
	// webpack: (config, options) => {
	// 	config.module.rules.push({
	// 		test: /\.css$/,
	// 		use: [
	// 			options.defaultLoaders.babel,
	// 			{
	// 				loader: require('styled-jsx/webpack').loader,
	// 				options: { type: 'global' },
	// 			},
	// 		],
	// 	});

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

	// 	return config;
	// },
}
