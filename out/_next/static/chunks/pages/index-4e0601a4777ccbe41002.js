;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    9967: function (e, s, i) {
      'use strict'
      i.d(s, {
        Z: function () {
          return o
        }
      })
      var a = i(5988),
        t = i(7294),
        n = (i(1664), i(5893))
      function r(e) {
        var s = e.itemInfo
        return (0, n.jsxs)('div', {
          className: 'jsx-3404581895 carousel-item',
          children: [
            (0, n.jsx)('img', { src: s.img, height: 125, width: 250, className: 'jsx-3404581895' }),
            (0, n.jsx)('p', { className: 'jsx-3404581895 title', children: s.title }),
            (0, n.jsx)('p', { className: 'jsx-3404581895 body', children: s.body }),
            (0, n.jsx)(a.default, {
              id: '3404581895',
              children: [
                '.carousel-item.jsx-3404581895{padding:10px;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}',
                'img.jsx-3404581895{border-radius:10px;-webkit-filter:drop-shadow(0 0px 10px lightgray);filter:drop-shadow(0 0px 10px lightgray);}',
                '.title.jsx-3404581895{max-width:250px;font-weight:700;height:50px;}',
                '.body.jsx-3404581895{max-width:250px;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}'
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
      function o(e) {
        var s = e.content,
          i = e.type,
          o = (0, t.useState)(0),
          c = o[0],
          x = o[1]
        s = [
          {
            userId: 1,
            id: 1,
            img: 'blog' === i ? 'images/blog-post.png' : 'images/case-study.png',
            title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit'
          },
          {
            userId: 1,
            id: 2,
            img: 'blog' === i ? 'images/blog-post.png' : 'images/case-study.png',
            title: 'qui est esse',
            body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat'
          },
          {
            userId: 1,
            id: 3,
            img: 'blog' === i ? 'images/blog-post.png' : 'images/case-study.png',
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
                        0 !== c && x(c - 1)
                      },
                      className: 'jsx-3121543809 left-chevron',
                      children: (0, n.jsx)(l, { color: 0 === c ? 'grey' : 'black' })
                    }),
                    s.map(function (e, s) {
                      return (0, n.jsx)(r, { itemInfo: e }, s)
                    }),
                    (0, n.jsx)('div', {
                      onClick: function () {
                        c !== s.length - 1 && x(c + 1)
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
          o =
            (e.order,
            (0, t.useSpring)({
              from: { val: 0 },
              to: { val: 'number' == typeof i ? i : 0 },
              config: { duration: 2e3, config: t.config.molasses }
            })),
          c = (0, t.useSpring)({
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
                      style: c,
                      children:
                        isNaN(o) &&
                        o.val.to(function (e) {
                          return Math.floor(e)
                        })
                    }),
                    (0, n.jsx)(t.animated.h1, { style: x, children: l && '+' })
                  ]
                })
              : (0, n.jsx)(t.animated.h1, { style: c, children: i }),
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
    9789: function (e, s, i) {
      'use strict'
      i.r(s),
        i.d(s, {
          default: function () {
            return d
          }
        })
      var a = i(5988),
        t = i(9008),
        n = i(214),
        r = (i(7294), i(5893)),
        l = function () {
          return (0, r.jsxs)('div', {
            className: 'jsx-1150728999',
            children: [
              (0, r.jsx)('svg', {
                viewBox: '0 0 532 203.67',
                fill: 'transparent',
                stroke: 'transparent',
                strokeWidth: '2',
                className: 'jsx-1150728999',
                children: (0, r.jsxs)('g', {
                  id: 'DocSperaTelehealth',
                  className: 'jsx-1150728999',
                  children: [
                    (0, r.jsx)('path', {
                      d: 'M55.36,429.68a40.27,40.27,0,1,1,0-80.53H78.58v17H55.36a23.23,23.23,0,1,0,23.22,23.23V366.19h17v23.23a40.31,40.31,0,0,1-40.27,40.26Zm60-72a8.51,8.51,0,0,0-8.52-8.52H95.63v17h11.18A8.51,8.51,0,0,0,115.33,357.67ZM95.63,338a8.53,8.53,0,0,0-17,0v11.19h17Z',
                      transform: 'translate(-14.59 -328.94)',
                      className: 'jsx-1150728999'
                    }),
                    (0, r.jsx)('path', {
                      d: 'M204.48,390.74c0,16.71-7.2,29.11-20.3,32.61a59,59,0,0,1-14.41,1.4h-22.9V364c0-4.7,2.3-7.2,7-7.3h19.6C195.08,356.74,204.48,369,204.48,390.74Zm-31-22.1h-12.9v43.81h11.1c13.81,0,18.61-7.4,18.61-21.71C190.28,377.14,186.08,368.64,173.47,368.64Z',
                      transform: 'translate(-14.59 -328.94)',
                      className: 'jsx-1150728999'
                    }),
                    (0, r.jsx)('path', {
                      d: 'M255.59,398.54c0,18.21-8.1,27.41-24.11,27.41s-24-9.2-24-27.41c0-18.4,8-27.5,24-27.5S255.59,380.14,255.59,398.54Zm-34.61,0c.1,10.31,3.6,15.51,10.4,15.51s10.21-5.4,10.31-15.91c0-10.3-3.4-15.4-10.21-15.4C224.48,382.74,221,388,221,398.54Z',
                      transform: 'translate(-14.59 -328.94)',
                      className: 'jsx-1150728999'
                    }),
                    (0, r.jsx)('path', {
                      d: 'M283.69,426c-16,0-24.2-9.2-24.6-27.41,0-18.1,8.1-27.2,24.4-27.5,12.8,0,20.41,5.7,22.71,17.2H291.69a8.66,8.66,0,0,0-8.6-5.5c-7,0-10.5,5.3-10.5,15.8s3.7,15.81,11.1,15.71a10.38,10.38,0,0,0,8-3.8,6.13,6.13,0,0,1,4.5-1.9h10C303.8,419.35,296,426.25,283.69,426Z',
                      transform: 'translate(-14.59 -328.94)',
                      className: 'jsx-1150728999'
                    }),
                    (0, r.jsx)('path', {
                      d: 'M349.8,405.85c0-3.31-2-5.51-6.2-6.71-4-1.2-8.6-2.4-13.5-3.7-13.3-3.4-19.91-9.6-19.91-18.6.3-14.3,8.81-21.3,25.61-21.21,16,0,24.31,7,25.11,21.11H353.1a6.52,6.52,0,0,1-6.2-4c-2.3-3.9-6.4-5.8-12.3-5.8-7.2.1-10.8,2.8-11.1,8,0,4.3,4.3,7.4,13.2,9.4a157.69,157.69,0,0,1,16.2,4.7q11.42,3.9,10.81,16.81c-.8,13.3-9.81,19.9-27,19.9-18,0-27.11-7.5-27.51-22.3H322.7c.5,7.2,5.1,10.8,14,10.8S349.9,411.45,349.8,405.85Z',
                      transform: 'translate(-14.59 -328.94)',
                      className: 'jsx-1150728999'
                    }),
                    (0, r.jsx)('path', {
                      d: 'M379.81,438.85q0,6.6-6.61,6.6h-6.7V394.84c.7-15.8,8.91-23.6,24.81-23.6q24.6,0,24.6,26.7c0,18-7,27.31-21.1,27.81-6.6,0-11.6-2.7-15-8.2Zm11.3-25c7.2,0,10.9-5.1,11.2-15.31,0-10.7-3.8-16-11.4-16s-11.2,5.3-11.1,16C380.21,408.75,383.91,413.85,391.11,413.85Z',
                      transform: 'translate(-14.59 -328.94)',
                      className: 'jsx-1150728999'
                    }),
                    (0, r.jsx)('path', {
                      d: 'M443.22,426c-16-.5-24-9.8-24-27.81s8.1-27,24.21-27.1c16.8,0,24.7,10.3,23.7,31h-34.2c.5,8.11,4,12.21,10.5,12.21a12.29,12.29,0,0,0,8.6-3.8,5.83,5.83,0,0,1,4.5-1.9h9.8C463.42,419.75,456.22,426,443.22,426Zm-10.11-33.41H453c-.8-7-4.1-10.6-9.8-10.6S434.12,385.54,433.11,392.54Z',
                      transform: 'translate(-14.59 -328.94)',
                      className: 'jsx-1150728999'
                    }),
                    (0, r.jsx)('path', {
                      d: 'M470.82,397.44c.4-17.1,9.5-25.6,27.21-25.6h1.9v13.8h-4.5c-7.41,0-11.11,3.9-11.11,11.6v27.51h-13.5Z',
                      transform: 'translate(-14.59 -328.94)',
                      className: 'jsx-1150728999'
                    }),
                    (0, r.jsx)('path', {
                      d: 'M516.83,385.64h-13.3c1.6-9.8,8.5-14.6,20.7-14.6,14.6,0,22,4.8,22.3,14.6v18c0,14.6-8.8,21.1-23.1,22.1-12.7,1-21.5-4.9-21.5-16.6.3-12.71,9.5-16.11,22.9-17.41,5.7-.7,8.6-2.4,8.6-5.3-.3-3-3.1-4.5-8.6-4.5C520.13,381.94,517.53,383.14,516.83,385.64Zm16.8,17.4v-4.9a57.6,57.6,0,0,1-10.6,3.2c-5.3,1-8,3.51-8,7.41.3,4.2,2.5,6.2,6.7,6.2C529.13,415,533.63,410.55,533.63,403Z',
                      transform: 'translate(-14.59 -328.94)',
                      className: 'jsx-1150728999'
                    })
                  ]
                })
              }),
              (0, r.jsx)(a.default, {
                id: '1150728999',
                children: [
                  'div.jsx-1150728999{background-color:transparent;height:100%;width:100%;padding:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}',
                  'svg.jsx-1150728999{width:80%;}',
                  '#DocSperaTelehealth.jsx-1150728999{-webkit-animation:fill-jsx-1150728999 1s ease forwards 1.5s;animation:fill-jsx-1150728999 1s ease forwards 1.5s;}',
                  'path.jsx-1150728999:nth-child(1){stroke-dasharray:558px;stroke-dashoffset:558px;-webkit-animation:line-anim-jsx-1150728999 2s ease forwards 0.1s;animation:line-anim-jsx-1150728999 2s ease forwards 0.1s;}',
                  'path.jsx-1150728999:nth-child(2){stroke-dasharray:356px;stroke-dashoffset:356px;-webkit-animation:line-anim-jsx-1150728999 2s ease forwards 0.2s;animation:line-anim-jsx-1150728999 2s ease forwards 0.2s;}',
                  'path.jsx-1150728999:nth-child(3){stroke-dasharray:252px;stroke-dashoffset:252px;-webkit-animation:line-anim-jsx-1150728999 2s ease forwards 0.3s;animation:line-anim-jsx-1150728999 2s ease forwards 0.3s;}',
                  'path.jsx-1150728999:nth-child(4){stroke-dasharray:239px;stroke-dashoffset:239px;-webkit-animation:line-anim-jsx-1150728999 1s ease forwards 0.4s;animation:line-anim-jsx-1150728999 1s ease forwards 0.4s;}',
                  'path.jsx-1150728999:nth-child(5){stroke-dasharray:359px;stroke-dashoffset:359px;-webkit-animation:line-anim-jsx-1150728999 1s ease forwards 0.5s;animation:line-anim-jsx-1150728999 1s ease forwards 0.5s;}',
                  'path.jsx-1150728999:nth-child(6){stroke-dasharray:314px;stroke-dashoffset:314px;-webkit-animation:line-anim-jsx-1150728999 1s ease forwards 0.6s;animation:line-anim-jsx-1150728999 1s ease forwards 0.6s;}',
                  'path.jsx-1150728999:nth-child(7){stroke-dasharray:289px;stroke-dashoffset:289px;-webkit-animation:line-anim-jsx-1150728999 1s ease forwards 0.7s;animation:line-anim-jsx-1150728999 1s ease forwards 0.7s;}',
                  'path.jsx-1150728999:nth-child(8){stroke-dasharray:149px;stroke-dashoffset:149px;-webkit-animation:line-anim-jsx-1150728999 1s ease forwards 0.8s;animation:line-anim-jsx-1150728999 1s ease forwards 0.8s;}',
                  'path.jsx-1150728999:nth-child(9){stroke-dasharray:277px;stroke-dashoffset:277px;-webkit-animation:line-anim-jsx-1150728999 1s ease forwards 0.9s;animation:line-anim-jsx-1150728999 1s ease forwards 0.9s;}',
                  '@-webkit-keyframes line-anim-jsx-1150728999{to{stroke-dashoffset:0;}}',
                  '@keyframes line-anim-jsx-1150728999{to{stroke-dashoffset:0;}}',
                  '@-webkit-keyframes fill-jsx-1150728999{from{fill:transparent;}to{fill:transparent;stroke:none;}}',
                  '@keyframes fill-jsx-1150728999{from{fill:transparent;}to{fill:transparent;stroke:none;}}'
                ]
              })
            ]
          })
        },
        o = i(6560),
        c = i(9967)
      i(1664)
      function x() {
        return (0, r.jsxs)('footer', {
          className: 'jsx-2802199121',
          children: [
            (0, r.jsx)('a', {
              href: 'https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'jsx-2802199121',
              children: 'Footer'
            }),
            (0, r.jsx)(a.default, {
              id: '2802199121',
              children: [
                'footer.jsx-2802199121{margin-top:50px;width:100%;background-color:white;height:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-filter:drop-shadow(0 -10px 50px #cdf0fd);filter:drop-shadow(0 -10px 50px #cdf0fd);padding-left:30px;padding-right:30px;}',
                'a.jsx-2802199121{color:black;-webkit-text-decoration:none;text-decoration:none;}'
              ]
            })
          ]
        })
      }
      function d() {
        return (0, r.jsxs)('div', {
          className: 'jsx-2756296662 container',
          children: [
            (0, r.jsxs)(t.default, {
              children: [
                (0, r.jsx)('title', { className: 'jsx-2756296662', children: 'DocSpera' }),
                (0, r.jsx)('link', {
                  rel: 'icon',
                  href: '/favicon.ico',
                  className: 'jsx-2756296662'
                })
              ]
            }),
            (0, r.jsx)(n.Z, {}),
            (0, r.jsx)('img', {
              id: 'landing-bg',
              src: 'images/hexagon_bottom.png',
              width: '100%',
              className: 'jsx-2756296662'
            }),
            (0, r.jsx)('div', {
              id: 'logo-animation',
              className: 'jsx-2756296662',
              children: (0, r.jsx)(l, {})
            }),
            (0, r.jsxs)('div', {
              className: 'jsx-2756296662 statistics',
              children: [
                (0, r.jsx)(o.Z, {
                  imgSrc: 'images/patient-volume.png',
                  number: 1e5,
                  title: 'Monthly Patient Volume',
                  plus: !0
                }),
                (0, r.jsx)(o.Z, {
                  imgSrc: 'images/surgeon-users.png',
                  number: 6e3,
                  title: 'Surgical Users',
                  plus: !0
                }),
                (0, r.jsx)(o.Z, {
                  imgSrc: 'images/episodic-cases.png',
                  number: 35e4,
                  title: 'Episodic Cases'
                }),
                (0, r.jsx)(o.Z, {
                  imgSrc: 'images/practices.png',
                  number: 300,
                  title: 'Practices, ASCs & Hospitals',
                  plus: !0
                })
              ]
            }),
            (0, r.jsxs)('div', {
              id: 'connecting-section',
              className: 'jsx-2756296662',
              children: [
                (0, r.jsxs)('div', {
                  id: 'words-div',
                  className: 'jsx-2756296662',
                  children: [
                    (0, r.jsxs)('h2', {
                      className: 'jsx-2756296662',
                      children: [
                        'Connecting ',
                        (0, r.jsx)('b', { className: 'jsx-2756296662', children: 'Surgeons' }),
                        ', ',
                        (0, r.jsx)('br', { className: 'jsx-2756296662' }),
                        ' ',
                        (0, r.jsx)('b', { className: 'jsx-2756296662', children: 'Care Teams' }),
                        ' & ',
                        (0, r.jsx)('b', {
                          className: 'jsx-2756296662',
                          children: 'Medical Device Co.'
                        })
                      ]
                    }),
                    (0, r.jsx)('p', {
                      style: { maxWidth: 420, marginLeft: -20 },
                      className: 'jsx-2756296662',
                      children: (0, r.jsxs)('ul', {
                        className: 'jsx-2756296662',
                        children: [
                          (0, r.jsx)('li', {
                            className: 'jsx-2756296662',
                            children:
                              'Single institution-agnostic interface managing cases from surgery decision to recovery'
                          }),
                          (0, r.jsx)('li', {
                            className: 'jsx-2756296662',
                            children: 'Seamlessly integrates with EMR systems and PACS'
                          }),
                          (0, r.jsx)('li', {
                            className: 'jsx-2756296662',
                            children:
                              'Immediate supply chain signaling for improved logistics and support'
                          }),
                          (0, r.jsx)('li', {
                            className: 'jsx-2756296662',
                            children:
                              'Enable early intervention with predictive indicators for patient compliance, discharge info, & readmission'
                          })
                        ]
                      })
                    })
                  ]
                }),
                (0, r.jsx)('img', {
                  id: 'connecting-graphic',
                  src: 'images/connecting2.png',
                  className: 'jsx-2756296662'
                })
              ]
            }),
            (0, r.jsxs)('div', {
              className: 'jsx-2756296662 carousel-container',
              children: [
                (0, r.jsxs)('div', {
                  className: 'jsx-2756296662 blog-section',
                  children: [
                    (0, r.jsx)('h2', { className: 'jsx-2756296662', children: 'DocSpera Blog' }),
                    (0, r.jsx)(c.Z, { type: 'blog' })
                  ]
                }),
                (0, r.jsxs)('div', {
                  className: 'jsx-2756296662 case-study-section',
                  children: [
                    (0, r.jsx)('h2', { className: 'jsx-2756296662', children: 'Case Studies' }),
                    (0, r.jsx)(c.Z, { type: 'case-study' })
                  ]
                })
              ]
            }),
            (0, r.jsx)(x, {}),
            (0, r.jsx)(a.default, {
              id: '2756296662',
              children: [
                '.container.jsx-2756296662{width:100%;}',
                '#landing-bg.jsx-2756296662{margin-top:-200px;position:absolute;z-index:-100;}',
                '#logo-animation.jsx-2756296662{margin:0 auto;margin-top:100px;width:70%;}',
                '.statistics.jsx-2756296662{padding-top:200px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}',
                '#connecting-section.jsx-2756296662{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:100px 0;width:100%;margin-top:100px;}',
                '@media (max-width:970px){#connecting-section.jsx-2756296662{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}',
                '#connecting-graphic.jsx-2756296662{width:50%;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}',
                '@media (max-width:800px){#connecting-graphic.jsx-2756296662{width:100%;}}',
                '#words-div.jsx-2756296662{padding-top:4vw;padding-left:4vw;}',
                '@media (max-width:1200px){#words-div.jsx-2756296662{padding-top:0;}}',
                '#words-div.jsx-2756296662>h2.jsx-2756296662{font-weight:200;}'
              ]
            })
          ]
        })
      }
    },
    8581: function (e, s, i) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return i(9789)
        }
      ])
    }
  },
  function (e) {
    e.O(0, [503, 774, 888, 179], function () {
      return (s = 8581), e((e.s = s))
      var s
    })
    var s = e.O()
    _N_E = s
  }
])
