;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8],
  {
    2651: function (e, s, i) {
      'use strict'
      i.d(s, {
        Z: function () {
          return n
        }
      })
      var a = i(5988),
        t = (i(1664), i(5893))
      function n() {
        return (0, t.jsxs)('footer', {
          className: 'jsx-2802199121',
          children: [
            (0, t.jsx)('a', {
              href: 'https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'jsx-2802199121',
              children: 'Footer'
            }),
            (0, t.jsx)(a.default, {
              id: '2802199121',
              children: [
                'footer.jsx-2802199121{margin-top:50px;width:100%;background-color:white;height:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-filter:drop-shadow(0 -10px 50px #cdf0fd);filter:drop-shadow(0 -10px 50px #cdf0fd);padding-left:30px;padding-right:30px;}',
                'a.jsx-2802199121{color:black;-webkit-text-decoration:none;text-decoration:none;}'
              ]
            })
          ]
        })
      }
    },
    214: function (e, s, i) {
      'use strict'
      i.d(s, {
        Z: function () {
          return l
        }
      })
      var a = i(5988),
        t = i(1664),
        n = i(1163),
        r = i(5893)
      function l() {
        var e = (0, n.useRouter)()
        return (0, r.jsxs)('nav', {
          className: 'jsx-3676763461',
          children: [
            (0, r.jsx)(t.default, {
              href: '/',
              children: (0, r.jsx)('a', {
                className: 'jsx-3676763461',
                children: (0, r.jsx)('image', {
                  src: 'images/logo.svg',
                  height: 60,
                  width: 140,
                  className: 'jsx-3676763461'
                })
              })
            }),
            (0, r.jsxs)('div', {
              id: 'right-side',
              className: 'jsx-3676763461',
              children: [
                (0, r.jsxs)('div', {
                  id: 'nav-items',
                  className: 'jsx-3676763461',
                  children: [
                    (0, r.jsx)(t.default, {
                      href: '/provider',
                      children: (0, r.jsxs)('a', {
                        className:
                          'jsx-3676763461 ' + ('/provider' == e.pathname ? 'active_a' : ''),
                        children: [
                          (0, r.jsx)('span', { className: 'jsx-3676763461', children: 'Provider' }),
                          (0, r.jsx)('div', {
                            className:
                              'jsx-3676763461 ' + ('/provider' == e.pathname ? 'underline' : '')
                          })
                        ]
                      })
                    }),
                    (0, r.jsx)(t.default, {
                      href: '/medical-device',
                      children: (0, r.jsxs)('a', {
                        className:
                          'jsx-3676763461 ' + ('/medical-device' == e.pathname ? 'active_a' : ''),
                        children: [
                          (0, r.jsx)('span', {
                            className: 'jsx-3676763461',
                            children: 'Medical Device Co.'
                          }),
                          (0, r.jsx)('div', {
                            className:
                              'jsx-3676763461 ' +
                              ('/medical-device' == e.pathname ? 'underline' : '')
                          })
                        ]
                      })
                    })
                  ]
                }),
                (0, r.jsx)('button', { className: 'jsx-3676763461', children: 'Log In' })
              ]
            }),
            (0, r.jsx)(a.default, {
              id: '3676763461',
              children: [
                'nav.jsx-3676763461{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:white;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-filter:drop-shadow(0 10px 50px #cdf0fd);filter:drop-shadow(0 10px 50px #cdf0fd);padding-left:30px;padding-right:30px;position:fixed;top:0;}',
                '#right-side.jsx-3676763461{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}',
                '#nav-items.jsx-3676763461{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-right:15vh;}',
                'a.jsx-3676763461{color:var(--blueDark);-webkit-text-decoration:none;text-decoration:none;padding-right:30px;font-size:16px;}',
                'a.jsx-3676763461:hover{color:var(--blueDocspera);}',
                '.active_a.jsx-3676763461{color:var(--blueDocspera);font-weight:600;}',
                '.underline.jsx-3676763461{height:3px;width:100%;background-color:var(--blueDocspera);border-radius:10px;}',
                'button.jsx-3676763461{background-color:var(--blueDocspera);border:none;border-radius:5px;-webkit-filter:drop-shadow(0,3px,6px,black);filter:drop-shadow(0,3px,6px,black);color:white;padding:10px 15px;font-size:16px;}'
              ]
            })
          ]
        })
      }
    },
    6560: function (e, s, i) {
      'use strict'
      i.d(s, {
        Z: function () {
          return r
        }
      })
      var a = i(5988),
        t = i(9920),
        n = i(5893)
      function r(e) {
        var s = e.imgSrc,
          i = e.number,
          r = e.title,
          l = e.plus,
          c =
            (e.order,
            (0, t.useSpring)({
              from: { val: 0 },
              to: { val: 'number' == typeof i ? i : 0 },
              config: { duration: 2e3, config: t.config.molasses }
            })),
          o = (0, t.useSpring)({
            from: { opacity: 0, fontSize: '3vw', margin: 0, color: 'var(--blueDocspera)' },
            to: { opacity: 1 },
            config: { duration: 2e3, config: t.config.molasses }
          }),
          x = (0, t.useSpring)({
            from: { opacity: 0, fontSize: '3vw', margin: 0, color: 'var(--blueDocspera)' },
            to: { opacity: 1 },
            config: { duration: 2500 }
          })
        return (0, n.jsxs)('div', {
          className: 'jsx-168692007 div',
          children: [
            (0, n.jsx)('img', { src: s, className: 'jsx-168692007' }),
            'number' === typeof i
              ? (0, n.jsxs)('div', {
                  style: { display: 'flex' },
                  className: 'jsx-168692007',
                  children: [
                    (0, n.jsx)(t.animated.h1, {
                      style: o,
                      children:
                        isNaN(c) &&
                        c.val.to(function (e) {
                          return Math.floor(e)
                        })
                    }),
                    (0, n.jsx)(t.animated.h1, { style: x, children: l && '+' })
                  ]
                })
              : (0, n.jsx)(t.animated.h1, { style: o, children: i }),
            (0, n.jsx)('span', { className: 'jsx-168692007 title', children: r }),
            (0, n.jsx)(a.default, {
              id: '168692007',
              children: [
                'img.jsx-168692007{height:12vw;}',
                '@media (min-width:1000px){img.jsx-168692007{height:100px;}}',
                '.div.jsx-168692007{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:300px;}',
                'h1.jsx-168692007{font-size:3vw;margin:0;}',
                '.title.jsx-168692007{text-align:center;font-size:18px;max-width:200px;}',
                '@media (max-width:800px){.title.jsx-168692007{font-size:12px;}}'
              ]
            })
          ]
        })
      }
    },
    4894: function (e, s, i) {
      'use strict'
      i.r(s),
        i.d(s, {
          default: function () {
            return o
          }
        })
      var a = i(5988),
        t = i(9008),
        n = i(214),
        r = i(6560),
        l = i(2651),
        c = i(5893)
      function o() {
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsxs)(t.default, {
              children: [
                (0, c.jsx)('title', { className: 'jsx-2961974110', children: 'DocSpera' }),
                (0, c.jsx)('link', {
                  rel: 'icon',
                  href: '/favicon.ico',
                  className: 'jsx-2961974110'
                })
              ]
            }),
            (0, c.jsx)(n.Z, {}),
            (0, c.jsxs)('div', {
              className: 'jsx-2961974110 container',
              children: [
                (0, c.jsx)('h2', {
                  className: 'jsx-2961974110',
                  children:
                    'Intelligent Surgical Coordination Enabling Efficiency and Profitability'
                }),
                (0, c.jsx)('p', {
                  className: 'jsx-2961974110',
                  children:
                    'DocSpera is an integrated solution, helping manage coordination across multiple sites and teams, drive improved efficiencies and deliver better care.'
                }),
                (0, c.jsxs)('div', {
                  className: 'jsx-2961974110 statistics',
                  children: [
                    (0, c.jsx)(r.Z, {
                      imgSrc: 'images/surgeon-users.png',
                      number: 6e3,
                      title: 'Surgeons',
                      plus: !0
                    }),
                    (0, c.jsx)(r.Z, {
                      imgSrc: 'images/patient-volume.png',
                      number: 1e5,
                      title: 'Monthly Patient Visits',
                      plus: !0
                    }),
                    (0, c.jsx)(r.Z, {
                      imgSrc: 'images/practices.png',
                      number: 300,
                      title: 'Practices, ASCs and Hospitals',
                      plus: !0
                    }),
                    (0, c.jsx)(r.Z, {
                      imgSrc: 'images/tech-partners.png',
                      number: 35e4,
                      title: 'Tech Partners',
                      plus: !0
                    })
                  ]
                }),
                (0, c.jsxs)('div', {
                  className: 'jsx-2961974110 provider-solutions',
                  children: [
                    (0, c.jsx)('h2', {
                      className: 'jsx-2961974110',
                      children: 'Integrated Provider Solutions'
                    }),
                    (0, c.jsx)('p', {
                      className: 'jsx-2961974110',
                      children:
                        'Best in class SaaS, real-time, predictive platform for the entire surgical ecosystem'
                    }),
                    (0, c.jsxs)('div', {
                      className: 'jsx-2961974110 provider-solutions-row',
                      children: [
                        (0, c.jsxs)('div', {
                          className: 'jsx-2961974110',
                          children: [
                            (0, c.jsx)('img', {
                              src: 'images/scheduling.png',
                              className: 'jsx-2961974110'
                            }),
                            (0, c.jsx)('h4', {
                              className: 'jsx-2961974110',
                              children: 'Integrated Surgical Scheduling'
                            }),
                            (0, c.jsx)('h6', {
                              className: 'jsx-2961974110',
                              children: 'Coordination across entire care team'
                            }),
                            (0, c.jsx)('p', {
                              className: 'jsx-2961974110',
                              children: (0, c.jsxs)('ul', {
                                className: 'jsx-2961974110',
                                children: [
                                  (0, c.jsx)('li', {
                                    className: 'jsx-2961974110',
                                    children: 'Case scheduling & OR management'
                                  }),
                                  (0, c.jsx)('li', {
                                    className: 'jsx-2961974110',
                                    children: 'Image Sharing'
                                  }),
                                  (0, c.jsx)('li', {
                                    className: 'jsx-2961974110',
                                    children: 'EMR & Telelhealth intergration'
                                  })
                                ]
                              })
                            })
                          ]
                        }),
                        (0, c.jsxs)('div', {
                          className: 'jsx-2961974110',
                          children: [
                            (0, c.jsx)('img', {
                              src: 'images/smart-scheduling.png',
                              className: 'jsx-2961974110'
                            }),
                            (0, c.jsx)('h4', {
                              className: 'jsx-2961974110',
                              children: 'Optimized & Coordinated'
                            }),
                            (0, c.jsx)('h6', {
                              className: 'jsx-2961974110',
                              children: 'Coordination across entire care team'
                            }),
                            (0, c.jsx)('p', {
                              className: 'jsx-2961974110',
                              children: (0, c.jsxs)('ul', {
                                className: 'jsx-2961974110',
                                children: [
                                  (0, c.jsx)('li', {
                                    className: 'jsx-2961974110',
                                    children:
                                      'Real time coordination between clinic, OR Team & Device Rep'
                                  }),
                                  (0, c.jsx)('li', {
                                    className: 'jsx-2961974110',
                                    children: 'Intelligent case backlog booking'
                                  })
                                ]
                              })
                            })
                          ]
                        }),
                        (0, c.jsxs)('div', {
                          className: 'jsx-2961974110',
                          children: [
                            (0, c.jsx)('img', {
                              src: 'images/episode-of-care.png',
                              className: 'jsx-2961974110'
                            }),
                            (0, c.jsx)('h4', {
                              className: 'jsx-2961974110',
                              children: 'Episode of Care'
                            }),
                            (0, c.jsx)('h6', {
                              className: 'jsx-2961974110',
                              children: 'Coordination across entire care team'
                            }),
                            (0, c.jsx)('p', {
                              className: 'jsx-2961974110',
                              children: (0, c.jsxs)('ul', {
                                className: 'jsx-2961974110',
                                children: [
                                  (0, c.jsx)('li', {
                                    className: 'jsx-2961974110',
                                    children: 'Post-acute management and recovery coordination'
                                  }),
                                  (0, c.jsx)('li', {
                                    className: 'jsx-2961974110',
                                    children: 'Risk stratification & management'
                                  })
                                ]
                              })
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            (0, c.jsx)(l.Z, {}),
            (0, c.jsx)(a.default, {
              id: '2961974110',
              children: [
                '.container.jsx-2961974110{padding:0 5vw;}',
                '.statistics.jsx-2961974110{padding-top:200px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}',
                'h2.jsx-2961974110{margin-top:80px;max-width:600px;}',
                '.provider-solutions.jsx-2961974110{margin:0 auto;max-width:1150px;}',
                '.provider-solutions-row.jsx-2961974110{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}',
                '.provider-solutions-row.jsx-2961974110>div.jsx-2961974110{padding:10px;}',
                '.provider-solutions-row.jsx-2961974110 img.jsx-2961974110{width:300px;height:180px;border-radius:10px;-webkit-filter:drop-shadow(0 0px 10px lightgray);filter:drop-shadow(0 0px 10px lightgray);}',
                '.provider-solutions-row.jsx-2961974110 h4.jsx-2961974110{margin:0;margin-top:20px;color:var(--blueDocspera);}',
                '.provider-solutions-row.jsx-2961974110 h6.jsx-2961974110{color:var(--blueDark);font-size:16px;font-weight:500;margin:0;}',
                '.provider-solutions-row.jsx-2961974110 ul.jsx-2961974110{margin-left:-20px;}',
                '.provider-solutions-row.jsx-2961974110 p.jsx-2961974110{max-width:300px;}'
              ]
            })
          ]
        })
      }
    },
    4796: function (e, s, i) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/provider',
        function () {
          return i(4894)
        }
      ])
    }
  },
  function (e) {
    e.O(0, [503, 774, 888, 179], function () {
      return (s = 4796), e((e.s = s))
      var s
    })
    var s = e.O()
    _N_E = s
  }
])
