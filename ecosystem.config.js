module.exports = {
    apps: [
      {
        name: 'outpost-worker',
        script: './main.js',
        env: {
          NODE_ENV: 'mainnet',
          OUTPOST_API_KEY: '****************************************************',
          GATEWAY_URL: 'https://api.dstor.cloud',
          GATEWAY_WS_URL: 'wss://api.dstor.cloud',
          IPFS_API: 'http://127.0.0.1:5001'
        },
      },
    ],
  }


