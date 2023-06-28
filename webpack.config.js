const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    // Otras configuraciones de Webpack aquí

    plugins: [
        // Otros plugins aquí
        new CopyWebpackPlugin({
            patterns: [{ from: 'src/css', to: 'css' }]
        })
    ]
};
