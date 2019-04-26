const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const { GenerateSW, InjectManifest } = require('workbox-webpack-plugin');
const withOffline = require('next-offline')

module.exports = withOffline({
  target: 'serverless', 
  // webpack: config => {
  //   config.plugins.push(
  // //     new SWPrecacheWebpackPlugin({
  // //       verbose: true,
  // //       staticFileGlobsIgnorePatterns: [/\.next\//],
  // //       runtimeCaching: [
  // //         {
  // //           handler: 'networkFirst',
  // //           urlPattern: /^https?.*/
  // //         }
  // //       ]
  // //     })
  //     // new InjectManifest({
  //     //   swSrc: 'service-worker.js',
  //     // })
  //   )

    // return config
  // }, 
  workboxOpts: {  
    runtimeCaching: [
      {
        urlPattern: /.png$/,
        handler: 'cacheFirst'
      },
      {
        urlPattern: /api/,
        handler: 'networkFirst',
        options: {
          cacheableResponse: {
            statuses: [0, 200],
            headers: {
              'x-test': 'true'
            }
          }
        }
      }
    ]
  }
})