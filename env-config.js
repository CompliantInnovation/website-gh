const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.BACKEND_URL': prod ? '/website-gh' : '',
  'process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS': 'UA-43970239-1L',
}