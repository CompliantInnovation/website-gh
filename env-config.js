const prod = process.env.NODE_ENV === 'production'
const mountUrl = process.env.MOUNT_URL ? process.env.MOUNT_URL : '/website-gh'

module.exports = {
  'process.env.MOUNT_URL': mountUrl ? '/website-gh' : '',
  'process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS': 'UA-43970239-1',
}
