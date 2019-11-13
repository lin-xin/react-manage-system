const { override, fixBabelImports } = require('customize-cra');
// const { override, fixBabelImports, addLessLoader } = require('customize-cra');

process.env.GENERATE_SOURCEMAP = 'false'; // 关闭sourcemap

module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: 'css'
		// style: true
	})
	// 修改主题色
	// addLessLoader({
	// 	javascriptEnabled: true,
	// 	modifyVars: {
	// 		'@primary-color': '#ffaa22',
	// 		'@link-color': '#ffaa22'
	// 	}
	// })
);
