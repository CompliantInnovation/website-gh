const mountUrl = process.env.MOUNT_URL ? process.env.MOUNT_URL : '';
const assetsPrefix = process.env.ASSET_PREFIX ? process.env.ASSET_PREFIX : '';
const staticSssetsPrefix = process.env.STATIC_ASSET_PREFIX
  ? process.env.STATIC_ASSET_PREFIX
  : '';
const loginUrl = process.env.LOGIN_URL ? process.env.LOGIN_URL : '/login';

module.exports = {
  'process.env.MOUNT_URL': mountUrl,
  'process.env.ASSET_PREFIX': assetsPrefix,
  'process.env.STATIC_ASSET_PREFIX': staticSssetsPrefix,
  'process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS': 'UA-43970239-1',
  'process.env.LOGIN_URL': loginUrl,
};
