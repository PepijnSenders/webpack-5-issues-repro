const { PHASE_PRODUCTION_BUILD } = require('next/constants');

const { getEmptyFile } = require('./getEmptyFile');
// const getModuleSandboxAliases = require('./getModuleSandboxAliases');

module.exports = (phase, { defaultConfig }) => {
  return {
    webpack: (config, options) => {
      if (typeof defaultConfig.webpack === 'function') {
        config = defaultConfig.webpack(config, options);
      }

      if (phase === PHASE_PRODUCTION_BUILD) {
        config.plugins = config.plugins.filter((plugin) => {
          return plugin.constructor.name !== 'ForkTsCheckerWebpackPlugin';
        });
      }

      // if (!options.isServer) {
      //   config.node = {
      //     fs: 'empty',
      //     dgram: 'empty',
      //     dns: 'empty',
      //   };
      // }

      config.resolve.alias = {
        ...config.resolve.alias,
        // Some packages use `lodash-es` which is the same thing, this prevents
        // both being loaded into the bundle
        'lodash-es': 'lodash',
        'preact/compat': 'react',
        'senf-instrument-alias': options.isServer
          ? '@hellofresh/senf-instrument/lib/server.js'
          : '@hellofresh/senf-instrument/lib/client.js',
        'module-sandbox': process.env.MODULE_SANDBOX || getEmptyFile(true),
        ...(options.isServer
          ? {}
          : {
              'prom-client': getEmptyFile(),
            }),
      };

      // if (process.env.MODULE_SANDBOX) {
      // const moduleSandboxAliases = getModuleSandboxAliases();

      //   config.resolve.alias = {
      //     ...config.resolve.alias,
      //     ...moduleSandboxAliases,
      //   };
      // }

      // if (!options.isServer) {
      //   c.enabled = !isCI;

      //   console.log(c.bold.blue('Adding webpack aliases:'));

      //   const table = new Table({
      //     head: ['Alias', 'Source'],
      //     chars: { mid: '', 'left-mid': '', 'mid-mid': '', 'right-mid': '' },
      //     colWidths: [30, 30],
      //   });

      //   Object.keys(config.resolve.alias).forEach((aliasKey) => {
      //     table.push([
      //       path.relative(baseDir, aliasKey),
      //       path.relative(baseDir, config.resolve.alias[aliasKey]),
      //     ]);
      //   });

      //   console.log(table.toString());

      //   console.log();
      // }

      // const getNextEntry = config.entry;

      // config.entry = async () => {
      //   const nextEntry = await getNextEntry();

      //   if (!options.isServer) {
      //     return nextEntry;
      //   }

      //   return {
      //     ...nextEntry,
      //     'custom-server': path.resolve(baseDir, 'custom-server/index.ts'),
      //   };
      // };

      return config;
    },
  };
};
