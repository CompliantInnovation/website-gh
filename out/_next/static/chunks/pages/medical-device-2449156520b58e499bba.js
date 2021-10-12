;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [100],
  {
    9967: function (e, s, i) {
      'use strict'
      i.d(s, {
        Z: function () {
          return c
        }
      })
      var a = i(5988),
        t = i(7294),
        n = (i(1664), i(5893))
      function r(e) {
        var s = e.itemInfo
        return (0, n.jsxs)('div', {
          className: 'jsx-2581351109 carousel-item',
          children: [
            (0, n.jsx)('img', { src: s.img, height: 125, width: 250, className: 'jsx-2581351109' }),
            (0, n.jsx)('p', { className: 'jsx-2581351109 title', children: s.title }),
            (0, n.jsx)('p', { className: 'jsx-2581351109 body', children: s.body }),
            (0, n.jsx)(a.default, {
              id: '2581351109',
              children: [
                '.carousel-item.jsx-2581351109{padding:10px;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}',
                'img.jsx-2581351109{border-radius:10px;-webkit-filter:drop-shadow(0 0px 10px lightgray);filter:drop-shadow(0 0px 10px lightgray);}',
                '.title.jsx-2581351109{max-width:250px;font-weight:700;height:50px;margin-top:10px;}',
                '.body.jsx-2581351109{max-width:250px;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;margin-top:20px;}'
              ]
            })
          ]
        })
      }
      var l = function (e) {
        return (0, n.jsx)('svg', {
          fill: e.color,
          x: '0px',
          y: '0px',
          viewBox: '0 0 64 64',
          children: (0, n.jsx)('g', {
            children: (0, n.jsx)('path', {
              stroke: e.color,
              d: 'M18,64c-1,0-2-0.4-2.7-1.1c-1.6-1.5-1.7-4-0.2-5.7L38.9,32L15.1,6.7c-1.5-1.6-1.4-4.1,0.2-5.7s4.2-1.4,5.7,0.2L50,32 L21,62.7C20.2,63.6,19.1,64,18,64z'
            })
          })
        })
      }
      function c(e) {
        var s = e.content,
          i = e.type,
          c = (0, t.useState)(0),
          x = c[0],
          o = c[1]
        s = [
          {
            userId: 1,
            id: 1,
            img:
              'blog' === i ? 'website-gh/images/blog-post.png' : 'website-gh/images/case-study.png',
            title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit'
          },
          {
            userId: 1,
            id: 2,
            img:
              'blog' === i ? 'website-gh/images/blog-post.png' : 'website-gh/images/case-study.png',
            title: 'qui est esse',
            body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat'
          },
          {
            userId: 1,
            id: 3,
            img:
              'blog' === i ? 'website-gh/images/blog-post.png' : 'website-gh/images/case-study.png',
            title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
            body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel '
          }
        ]
        return !Array.isArray(s) || s.length <= 0
          ? null
          : (0, n.jsxs)('div', {
              className: 'jsx-3121543809 container',
              children: [
                (0, n.jsxs)('div', {
                  className: 'jsx-3121543809 carousel',
                  children: [
                    (0, n.jsx)('div', {
                      onClick: function () {
                        0 !== x && o(x - 1)
                      },
                      className: 'jsx-3121543809 left-chevron',
                      children: (0, n.jsx)(l, { color: 0 === x ? 'grey' : 'black' })
                    }),
                    s.map(function (e, s) {
                      return (0, n.jsx)(r, { itemInfo: e }, s)
                    }),
                    (0, n.jsx)('div', {
                      onClick: function () {
                        x !== s.length - 1 && o(x + 1)
                      },
                      className: 'jsx-3121543809 right-chevron',
                      children: (0, n.jsx)(l, {})
                    })
                  ]
                }),
                (0, n.jsx)(a.default, {
                  id: '3121543809',
                  children: [
                    '.container.jsx-3121543809{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}',
                    '.carousel.jsx-3121543809{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:1150px;min-width:1100px;}',
                    '.left-chevron.jsx-3121543809{width:40px;height:40px;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);cursor:pointer;margin-right:40px;}',
                    '.right-chevron.jsx-3121543809{width:40px;height:40px;cursor:pointer;margin-left:40px;}'
                  ]
                })
              ]
            })
      }
    },
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
          return c
        }
      })
      var a = i(5988),
        t = i(1664),
        n = i(1163),
        r = i(8168),
        l = i(5893)
      function c() {
        var e,
          s = (0, n.useRouter)(),
          i = function () {
            return !0
          }
        return (
          i && (e = (0, r.G)('(max-width: 775px)')),
          (0, l.jsxs)('nav', {
            className: 'jsx-2997676456',
            children: [
              i &&
                (0, l.jsx)(t.default, {
                  href: '/',
                  children: (0, l.jsx)('a', {
                    className: 'jsx-2997676456',
                    children: (0, l.jsx)('img', {
                      src: ''.concat(
                        e ? 'website-gh/images/logo-short.png' : 'website-gh/images/logo.svg'
                      ),
                      height: ''.concat(e ? 40 : 70),
                      width: ''.concat(e ? 40 : 150),
                      className: 'jsx-2997676456'
                    })
                  })
                }),
              (0, l.jsxs)('div', {
                id: 'right-side',
                className: 'jsx-2997676456',
                children: [
                  (0, l.jsxs)('div', {
                    id: 'nav-items',
                    className: 'jsx-2997676456',
                    children: [
                      (0, l.jsx)(t.default, {
                        href: '/provider',
                        children: (0, l.jsxs)('a', {
                          className:
                            'jsx-2997676456 ' + ('/provider' == s.pathname ? 'active_a' : ''),
                          children: [
                            (0, l.jsx)('span', {
                              className: 'jsx-2997676456',
                              children: 'Provider'
                            }),
                            (0, l.jsx)('div', {
                              className:
                                'jsx-2997676456 ' + ('/provider' == s.pathname ? 'underline' : '')
                            })
                          ]
                        })
                      }),
                      (0, l.jsx)(t.default, {
                        href: '/medical-device',
                        children: (0, l.jsxs)('a', {
                          className:
                            'jsx-2997676456 ' + ('/medical-device' == s.pathname ? 'active_a' : ''),
                          children: [
                            (0, l.jsx)('span', {
                              className: 'jsx-2997676456',
                              children: 'Medical Device Co.'
                            }),
                            (0, l.jsx)('div', {
                              className:
                                'jsx-2997676456 ' +
                                ('/medical-device' == s.pathname ? 'underline' : '')
                            })
                          ]
                        })
                      })
                    ]
                  }),
                  (0, l.jsx)('button', { className: 'jsx-2997676456', children: 'Log In' })
                ]
              }),
              (0, l.jsx)(a.default, {
                id: '2997676456',
                children: [
                  'nav.jsx-2997676456{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:white;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-filter:drop-shadow(0 10px 50px #cdf0fd);filter:drop-shadow(0 10px 50px #cdf0fd);padding-left:30px;padding-right:30px;position:fixed;top:0;z-index:10000;height:60px;}',
                  '#right-side.jsx-2997676456{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}',
                  '#nav-items.jsx-2997676456{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-right:15vh;}',
                  'a.jsx-2997676456{color:var(--blueDark);-webkit-text-decoration:none;text-decoration:none;padding-right:30px;font-size:16px;}',
                  'a.jsx-2997676456:hover{color:var(--blueDocspera);}',
                  '.active_a.jsx-2997676456{color:var(--blueDocspera);font-weight:600;}',
                  '.underline.jsx-2997676456{height:3px;width:100%;background-color:var(--blueDocspera);border-radius:10px;}',
                  'button.jsx-2997676456{background-color:var(--blueDocspera);border:none;border-radius:5px;-webkit-filter:drop-shadow(0,3px,6px,black);filter:drop-shadow(0,3px,6px,black);color:white;padding:10px 15px;font-size:16px;}'
                ]
              })
            ]
          })
        )
      }
    },
    6560: function (e, s, i) {
      'use strict'
      i.d(s, {
        Z: function () {
          return l
        }
      })
      var a = i(5988),
        t = i(9920),
        n = i(8168),
        r = i(5893)
      function l(e) {
        var s,
          i = e.imgSrc,
          l = e.number,
          c = e.title,
          x = e.plus
        e.order
        ;(function () {
          return !0
        } && (s = (0, n.G)('(max-width: 775px)')))
        var o = (0, t.useSpring)({
            from: { val: 0 },
            to: { val: 'number' == typeof l ? l : 0 },
            config: { duration: 2e3, config: t.config.molasses }
          }),
          d = (0, t.useSpring)({
            from: {
              opacity: 0,
              fontSize: s ? '5vw' : '3vw',
              margin: 0,
              color: 'var(--blueDocspera)'
            },
            to: { opacity: 1, fontSize: s ? '5vw' : '3vw' },
            config: { duration: 2e3, config: t.config.molasses }
          }),
          p = (0, t.useSpring)({
            from: {
              opacity: 0,
              fontSize: s ? '5vw' : '3vw',
              margin: 0,
              color: 'var(--blueDocspera)'
            },
            to: { opacity: 1 },
            config: { duration: 2500 }
          })
        return (0, r.jsxs)('div', {
          className: 'jsx-2020587524 div',
          children: [
            (0, r.jsx)('img', { src: i, className: 'jsx-2020587524' }),
            'number' === typeof l
              ? (0, r.jsxs)('div', {
                  style: { display: 'flex' },
                  className: 'jsx-2020587524',
                  children: [
                    (0, r.jsx)(t.animated.h1, {
                      style: d,
                      children:
                        isNaN(o) &&
                        o.val.to(function (e) {
                          return Math.floor(e)
                        })
                    }),
                    (0, r.jsx)(t.animated.h1, { style: p, children: x && '+' })
                  ]
                })
              : (0, r.jsx)(t.animated.h1, { style: d, children: l }),
            (0, r.jsx)('span', { className: 'jsx-2020587524 title', children: c }),
            (0, r.jsx)(a.default, {
              id: '2020587524',
              children: [
                'img.jsx-2020587524{height:12vw;}',
                '@media (min-width:1000px){img.jsx-2020587524{height:100px;}}',
                '.div.jsx-2020587524{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}',
                '.title.jsx-2020587524{text-align:center;font-size:18px;max-width:200px;}',
                '@media (max-width:800px){.title.jsx-2020587524{font-size:12px;}}'
              ]
            })
          ]
        })
      }
    },
    8168: function (e, s, i) {
      'use strict'
      i.d(s, {
        G: function () {
          return t
        }
      })
      var a = i(7294)
      function t(e) {
        var s = (0, a.useState)(),
          i = s[0],
          t = s[1]
        return (
          (0, a.useEffect)(
            function () {
              var s = window.matchMedia(e)
              s.matches !== i && t(s.matches)
              var a = function () {
                return t(s.matches)
              }
              return (
                s.addListener(a),
                function () {
                  return s.removeListener(a)
                }
              )
            },
            [e]
          ),
          i
        )
      }
    },
    5407: function (e, s, i) {
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
        l = i(9967),
        c = i(2651),
        x = i(5893)
      function o() {
        return (0, x.jsxs)(x.Fragment, {
          children: [
            (0, x.jsxs)(t.default, {
              children: [
                (0, x.jsx)('title', { className: 'jsx-1684342891', children: 'DocSpera' }),
                (0, x.jsx)('link', {
                  rel: 'icon',
                  href: '/favicon.ico',
                  className: 'jsx-1684342891'
                })
              ]
            }),
            (0, x.jsx)(n.Z, {}),
            (0, x.jsxs)('div', {
              className: 'jsx-1684342891 container',
              children: [
                (0, x.jsx)('h2', {
                  className: 'jsx-1684342891',
                  children: 'Power Your Digital Surgery Offerings & Data'
                }),
                (0, x.jsx)('p', {
                  className: 'jsx-1684342891',
                  children:
                    'DocSpera is an integrated, comprehensive, and compliant digital solution powering patient-specific data, enabling insights and driving efficient supply chain.'
                }),
                (0, x.jsxs)('div', {
                  className: 'jsx-1684342891 statistics',
                  children: [
                    (0, x.jsxs)('div', {
                      className: 'jsx-1684342891',
                      children: [
                        (0, x.jsx)(r.Z, {
                          imgSrc: 'website-ghwebsite-gh/images/surgeon-users.png',
                          number: 6e3,
                          title: 'Surgeon Users',
                          plus: !0
                        }),
                        (0, x.jsx)(r.Z, {
                          imgSrc: 'website-ghwebsite-gh/images/surgical-cases.png',
                          number: 35e4,
                          title: 'Surgical Cases',
                          plus: !0
                        })
                      ]
                    }),
                    (0, x.jsxs)('div', {
                      className: 'jsx-1684342891',
                      children: [
                        (0, x.jsx)(r.Z, {
                          imgSrc: 'website-ghwebsite-gh/images/medical-device.png',
                          number: '3/5',
                          title: 'Top Medical Device Companies'
                        }),
                        (0, x.jsx)(r.Z, {
                          imgSrc: 'website-ghwebsite-gh/images/tech-partners.png',
                          number: 30,
                          title: 'Tech Partners',
                          plus: !0
                        })
                      ]
                    })
                  ]
                }),
                (0, x.jsx)('div', {
                  id: 'offerings-section',
                  className: 'jsx-1684342891',
                  children: (0, x.jsxs)('div', {
                    id: 'offerings',
                    className: 'jsx-1684342891 inner-div',
                    children: [
                      (0, x.jsx)('h2', {
                        style: { marginBottom: 0 },
                        className: 'jsx-1684342891',
                        children: 'Enterprise Offerings'
                      }),
                      (0, x.jsx)('p', {
                        style: { color: 'white', marginTop: 0, fontSize: 20 },
                        className: 'jsx-1684342891',
                        children: ' & Outcomes'
                      }),
                      (0, x.jsxs)('div', {
                        id: 'offerings-divs',
                        className: 'jsx-1684342891',
                        children: [
                          (0, x.jsxs)('div', {
                            className: 'jsx-1684342891',
                            children: [
                              (0, x.jsx)('img', { className: 'jsx-1684342891' }),
                              (0, x.jsx)('h4', {
                                className: 'jsx-1684342891',
                                children: 'Advanced Case Notification'
                              }),
                              (0, x.jsx)('p', {
                                className: 'jsx-1684342891',
                                children:
                                  'Early case demand signal to improve supply chain and robotics'
                              }),
                              (0, x.jsx)('button', {
                                className: 'jsx-1684342891',
                                children: 'View'
                              })
                            ]
                          }),
                          (0, x.jsxs)('div', {
                            className: 'jsx-1684342891',
                            children: [
                              (0, x.jsx)('img', { className: 'jsx-1684342891' }),
                              (0, x.jsx)('h4', {
                                className: 'jsx-1684342891',
                                children: 'Integrated Provider Solutions'
                              }),
                              (0, x.jsx)('p', {
                                className: 'jsx-1684342891',
                                children: 'Enhance enterprise software offerings'
                              }),
                              (0, x.jsx)('button', {
                                className: 'jsx-1684342891',
                                children: 'View'
                              })
                            ]
                          }),
                          (0, x.jsxs)('div', {
                            className: 'jsx-1684342891',
                            children: [
                              (0, x.jsx)('img', { className: 'jsx-1684342891' }),
                              (0, x.jsx)('h4', {
                                className: 'jsx-1684342891',
                                children: 'Data Intelligence'
                              }),
                              (0, x.jsx)('p', {
                                className: 'jsx-1684342891',
                                children:
                                  'Support the capture of real-world data across the surgical continuum'
                              }),
                              (0, x.jsx)('button', {
                                className: 'jsx-1684342891',
                                children: 'View'
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                }),
                (0, x.jsxs)('div', {
                  id: 'solve-challenges-section',
                  className: 'jsx-1684342891 inner-div',
                  children: [
                    (0, x.jsx)('h2', {
                      style: { marginBottom: 0 },
                      className: 'jsx-1684342891',
                      children: 'Solve Urgent Challenges'
                    }),
                    (0, x.jsx)('p', {
                      style: { marginTop: 0 },
                      className: 'jsx-1684342891',
                      children: 'With early, integrated, real-time capture of surgical cases:'
                    }),
                    (0, x.jsxs)('div', {
                      id: 'solve-challenges-divs',
                      className: 'jsx-1684342891',
                      children: [
                        (0, x.jsxs)('div', {
                          className: 'jsx-1684342891',
                          children: [
                            (0, x.jsx)('img', { className: 'jsx-1684342891' }),
                            (0, x.jsx)('p', {
                              className: 'jsx-1684342891',
                              children:
                                'Improve inventory management across shipping, sterilization, tray sizing, cancellation management, etc'
                            })
                          ]
                        }),
                        (0, x.jsxs)('div', {
                          className: 'jsx-1684342891',
                          children: [
                            (0, x.jsx)('img', { className: 'jsx-1684342891' }),
                            (0, x.jsx)('p', {
                              className: 'jsx-1684342891',
                              children:
                                'Deepen your understanding of your product performance in real world clinical settings'
                            })
                          ]
                        }),
                        (0, x.jsxs)('div', {
                          className: 'jsx-1684342891',
                          children: [
                            (0, x.jsx)('img', { className: 'jsx-1684342891' }),
                            (0, x.jsx)('p', {
                              className: 'jsx-1684342891',
                              children:
                                'Strengthen market position through strategic offerings & engagements'
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                (0, x.jsxs)('div', {
                  id: 'advanced-case-notification',
                  className: 'jsx-1684342891 inner-div',
                  children: [
                    (0, x.jsx)('h2', {
                      style: { marginTop: 100, marginBottom: 0 },
                      className: 'jsx-1684342891',
                      children: 'Advanced Case Notification'
                    }),
                    (0, x.jsx)('p', {
                      style: { margin: 0 },
                      className: 'jsx-1684342891',
                      children: 'Improve Supply Chain Efficiencies'
                    }),
                    (0, x.jsxs)('div', {
                      style: { display: 'flex', marginLeft: -20, marginTop: 20 },
                      className: 'jsx-1684342891',
                      children: [
                        (0, x.jsxs)('ul', {
                          className: 'jsx-1684342891',
                          children: [
                            (0, x.jsx)('li', {
                              className: 'jsx-1684342891 badge',
                              children: 'Inventory'
                            }),
                            (0, x.jsx)('li', {
                              className: 'jsx-1684342891 badge',
                              children: 'Shipping'
                            })
                          ]
                        }),
                        (0, x.jsxs)('ul', {
                          className: 'jsx-1684342891',
                          children: [
                            (0, x.jsx)('li', {
                              className: 'jsx-1684342891 badge',
                              children: 'Right Size'
                            }),
                            (0, x.jsx)('li', {
                              className: 'jsx-1684342891 badge',
                              children: 'Right Location'
                            })
                          ]
                        })
                      ]
                    }),
                    (0, x.jsx)('img', {
                      src: 'website-ghwebsite-gh/images/advanced-case-notification.png',
                      className: 'jsx-1684342891'
                    })
                  ]
                }),
                (0, x.jsxs)('div', {
                  className: 'jsx-1684342891 provider-solutions inner-div',
                  children: [
                    (0, x.jsx)('h2', {
                      style: { marginBottom: 0 },
                      className: 'jsx-1684342891',
                      children: 'Integrated Provider Solutions'
                    }),
                    (0, x.jsx)('p', {
                      style: { marginTop: 0 },
                      className: 'jsx-1684342891',
                      children:
                        'Best in class SaaS, real-time, predictive platform for the entire surgical ecosystem'
                    }),
                    (0, x.jsxs)('div', {
                      className: 'jsx-1684342891 provider-solutions-row',
                      children: [
                        (0, x.jsxs)('div', {
                          className: 'jsx-1684342891',
                          children: [
                            (0, x.jsx)('img', {
                              src: 'website-ghwebsite-gh/images/scheduling.png',
                              className: 'jsx-1684342891'
                            }),
                            (0, x.jsx)('h4', {
                              className: 'jsx-1684342891',
                              children: 'Integrated Surgical Scheduling'
                            }),
                            (0, x.jsx)('h6', {
                              className: 'jsx-1684342891',
                              children: 'Coordination across entire care team'
                            }),
                            (0, x.jsx)('p', {
                              className: 'jsx-1684342891',
                              children: (0, x.jsxs)('ul', {
                                className: 'jsx-1684342891',
                                children: [
                                  (0, x.jsx)('li', {
                                    className: 'jsx-1684342891',
                                    children: 'Case scheduling & OR management'
                                  }),
                                  (0, x.jsx)('li', {
                                    className: 'jsx-1684342891',
                                    children: 'Image Sharing'
                                  }),
                                  (0, x.jsx)('li', {
                                    className: 'jsx-1684342891',
                                    children: 'EMR & Telelhealth intergration'
                                  })
                                ]
                              })
                            })
                          ]
                        }),
                        (0, x.jsxs)('div', {
                          className: 'jsx-1684342891',
                          children: [
                            (0, x.jsx)('img', {
                              src: 'website-ghwebsite-gh/images/smart-scheduling.png',
                              className: 'jsx-1684342891'
                            }),
                            (0, x.jsx)('h4', {
                              className: 'jsx-1684342891',
                              children: 'Optimized & Coordinated'
                            }),
                            (0, x.jsx)('h6', {
                              className: 'jsx-1684342891',
                              children: 'Coordination across entire care team'
                            }),
                            (0, x.jsx)('p', {
                              className: 'jsx-1684342891',
                              children: (0, x.jsxs)('ul', {
                                className: 'jsx-1684342891',
                                children: [
                                  (0, x.jsx)('li', {
                                    className: 'jsx-1684342891',
                                    children:
                                      'Real time coordination between clinic, OR Team & Device Rep'
                                  }),
                                  (0, x.jsx)('li', {
                                    className: 'jsx-1684342891',
                                    children: 'Intelligent case backlog booking'
                                  })
                                ]
                              })
                            })
                          ]
                        }),
                        (0, x.jsxs)('div', {
                          className: 'jsx-1684342891',
                          children: [
                            (0, x.jsx)('img', {
                              src: 'website-ghwebsite-gh/images/episode-of-care.png',
                              className: 'jsx-1684342891'
                            }),
                            (0, x.jsx)('h4', {
                              className: 'jsx-1684342891',
                              children: 'Episode of Care'
                            }),
                            (0, x.jsx)('h6', {
                              className: 'jsx-1684342891',
                              children: 'Coordination across entire care team'
                            }),
                            (0, x.jsx)('p', {
                              className: 'jsx-1684342891',
                              children: (0, x.jsxs)('ul', {
                                className: 'jsx-1684342891',
                                children: [
                                  (0, x.jsx)('li', {
                                    className: 'jsx-1684342891',
                                    children: 'Post-acute management and recovery coordination'
                                  }),
                                  (0, x.jsx)('li', {
                                    className: 'jsx-1684342891',
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
                }),
                (0, x.jsxs)('div', {
                  id: 'insights-section',
                  className: 'jsx-1684342891 inner-div',
                  children: [
                    (0, x.jsx)('h2', {
                      className: 'jsx-1684342891',
                      children: 'Data Intelligence & RWD Insights'
                    }),
                    (0, x.jsx)('p', {
                      className: 'jsx-1684342891',
                      children:
                        'Support the capture of real-word data and insights across the surgical continuum'
                    }),
                    (0, x.jsx)('img', {
                      src: 'website-ghwebsite-gh/images/demand-intel.png',
                      className: 'jsx-1684342891'
                    }),
                    (0, x.jsxs)('div', {
                      id: 'insights-copy-div',
                      className: 'jsx-1684342891',
                      children: [
                        (0, x.jsxs)('div', {
                          className: 'jsx-1684342891',
                          children: [
                            (0, x.jsxs)('div', {
                              className: 'jsx-1684342891 insight-title-div',
                              children: [
                                (0, x.jsx)('img', { src: '', className: 'jsx-1684342891' }),
                                (0, x.jsx)('h4', {
                                  className: 'jsx-1684342891',
                                  children: 'Demand Intelligence'
                                })
                              ]
                            }),
                            (0, x.jsx)('p', {
                              className: 'jsx-1684342891',
                              children: 'View aggregated case demand information by region'
                            })
                          ]
                        }),
                        (0, x.jsxs)('div', {
                          className: 'jsx-1684342891',
                          children: [
                            (0, x.jsxs)('div', {
                              className: 'jsx-1684342891 insight-title-div',
                              children: [
                                (0, x.jsx)('img', { src: '', className: 'jsx-1684342891' }),
                                (0, x.jsx)('h4', {
                                  className: 'jsx-1684342891',
                                  children: 'Market Intelligence'
                                })
                              ]
                            }),
                            (0, x.jsx)('p', {
                              className: 'jsx-1684342891',
                              children:
                                'Understand market share across specialty and therapeutic areas'
                            })
                          ]
                        }),
                        (0, x.jsxs)('div', {
                          className: 'jsx-1684342891',
                          children: [
                            (0, x.jsxs)('div', {
                              className: 'jsx-1684342891 insight-title-div',
                              children: [
                                (0, x.jsx)('img', { src: '', className: 'jsx-1684342891' }),
                                (0, x.jsx)('h4', {
                                  className: 'jsx-1684342891',
                                  children: 'Device Intelligence & Registry'
                                })
                              ]
                            }),
                            (0, x.jsx)('p', {
                              className: 'jsx-1684342891',
                              children:
                                'Longitudinal data from pre-op to recovery and support post market surveillance'
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                (0, x.jsx)('div', {
                  className: 'jsx-1684342891 carousel-container',
                  children: (0, x.jsxs)('div', {
                    className: 'jsx-1684342891 case-study-section',
                    children: [
                      (0, x.jsx)('h2', { className: 'jsx-1684342891', children: 'Case Studies' }),
                      (0, x.jsx)(l.Z, { type: 'case-study' })
                    ]
                  })
                })
              ]
            }),
            (0, x.jsx)(c.Z, {}),
            (0, x.jsx)(a.default, {
              id: '1684342891',
              children: [
                '.container.jsx-1684342891>h2.jsx-1684342891,.container.jsx-1684342891>p.jsx-1684342891{padding:0 5vw;}',
                'button.jsx-1684342891{background-color:var(--blueDocspera);border:none;border-radius:5px;-webkit-filter:drop-shadow(0,3px,6px,black);filter:drop-shadow(0,3px,6px,black);color:white;padding:5px 10px;font-size:14px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;position:absolute;right:10px;bottom:10px;}',
                'h2.jsx-1684342891{margin-top:80px;}',
                '#offerings-section.jsx-1684342891{margin-top:50px;padding:70px 0 100px 0;width:100%;background-color:var(--blueDocspera);}',
                '#offerings.jsx-1684342891 h2.jsx-1684342891{margin-top:0;color:white;}',
                '#offerings.jsx-1684342891{padding:0 5vw;}',
                '#offerings-divs.jsx-1684342891{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex:1;-ms-flex:1;flex:1;}',
                '#offerings-divs.jsx-1684342891>div.jsx-1684342891{position:relative;-webkit-flex:1;-ms-flex:1;flex:1;border-radius:10px;background-color:white;padding:15px;padding-bottom:30px;margin:10px;}',
                '#offerings-divs.jsx-1684342891 img.jsx-1684342891{width:100%;height:175px;margin-right:10px;}',
                '#offerings-divs.jsx-1684342891 h4.jsx-1684342891{margin:0;}',
                '#solve-challenges-divs.jsx-1684342891{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}',
                '#solve-challenges-divs.jsx-1684342891>div.jsx-1684342891{background-color:white;margin:10px;padding:10px;}',
                '#solve-challenges-divs.jsx-1684342891>div.jsx-1684342891>img.jsx-1684342891{width:100%;min-height:100px;}',
                '#insights-section.jsx-1684342891>img.jsx-1684342891{width:100%;}',
                '#insights-section.jsx-1684342891 h4.jsx-1684342891{margin:0;color:var(--blueDocspera);}',
                '#insights-copy-div.jsx-1684342891{padding-top:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}',
                '#insights-copy-div.jsx-1684342891 p.jsx-1684342891{max-width:285px;}',
                '.insight-title-div.jsx-1684342891{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}',
                '.insight-title-div.jsx-1684342891 img.jsx-1684342891{height:25px;width:25px;margin-right:10px;}',
                '#advanced-case-notification.jsx-1684342891 img.jsx-1684342891{margin-top:20px;width:100%;}',
                '#advanced-case-notification.jsx-1684342891 ul.jsx-1684342891{margin-top:0;}',
                '#advanced-case-notification.jsx-1684342891 li.jsx-1684342891{border-radius:3px;margin:2px;color:var(--blueDocspera);font-weight:500;}',
                '.provider-solutions-row.jsx-1684342891{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}',
                '.provider-solutions-row.jsx-1684342891>div.jsx-1684342891{padding:10px;}',
                '.provider-solutions-row.jsx-1684342891 img.jsx-1684342891{width:300px;height:180px;border-radius:10px;-webkit-filter:drop-shadow(0 0px 10px lightgray);filter:drop-shadow(0 0px 10px lightgray);}',
                '.provider-solutions-row.jsx-1684342891 h4.jsx-1684342891{margin:0;margin-top:20px;color:var(--blueDocspera);}',
                '.provider-solutions-row.jsx-1684342891 h6.jsx-1684342891{color:var(--blueDark);font-size:16px;font-weight:500;margin:0;}',
                '.provider-solutions-row.jsx-1684342891 ul.jsx-1684342891{margin-left:-20px;}',
                '.provider-solutions-row.jsx-1684342891 p.jsx-1684342891{max-width:300px;}'
              ]
            })
          ]
        })
      }
    },
    3727: function (e, s, i) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/medical-device',
        function () {
          return i(5407)
        }
      ])
    }
  },
  function (e) {
    e.O(0, [503, 774, 888, 179], function () {
      return (s = 3727), e((e.s = s))
      var s
    })
    var s = e.O()
    _N_E = s
  }
])
