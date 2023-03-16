const prod = process.env.NODE_ENV === 'production'
const mountUrl = process.env.MOUNT_URL ? process.env.MOUNT_URL : ''
const assetsPrefix = process.env.ASSET_PREFIX ? process.env.ASSET_PREFIX : ''

module.exports = {
  'process.env.MOUNT_URL': mountUrl,
  'process.env.ASSET_PREFIX': assetsPrefix,
  'process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS': 'UA-43970239-1',
}
