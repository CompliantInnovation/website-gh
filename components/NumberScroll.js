import { useSpring, animated, config } from 'react-spring'

export default function NumberScroll({ imgSrc, number, title, plus, order }) {
  const spring = useSpring({
    from: { val: 0 },
    to: { val: typeof number == 'number' ? number : 0 },
    config: { duration: 2000, config: config.molasses }
  })

  const styles = useSpring({
    from: { opacity: 0, fontSize: '3vw', margin: 0, color: 'var(--blueDocspera)' },
    to: { opacity: 1 },
    config: { duration: 2000, config: config.molasses }
  })

  const plusStyles = useSpring({
    from: { opacity: 0, fontSize: '3vw', margin: 0, color: 'var(--blueDocspera)' },
    to: { opacity: 1 },
    config: { duration: 2500 }
  })

  return (
    <div className='div'>
      <img src={imgSrc} />
      {typeof number === 'number' ? (
        <div style={{ display: 'flex' }}>
          <animated.h1 style={styles}>
            {isNaN(spring) && spring.val.to((val) => Math.floor(val))}
          </animated.h1>
          <animated.h1 style={plusStyles}>{plus && '+'}</animated.h1>
        </div>
      ) : (
        <animated.h1 style={styles}>{number}</animated.h1>
      )}
      <span className='title'>{title}</span>

      <style jsx>{`
        img {
          height: 12vw;
        }

        @media (min-width: 1000px) {
          img {
            height: 100px;
          }
        }

        .div {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 300px;
        }

        h1 {
          font-size: 3vw;
          margin: 0;
        }

        .title {
          text-align: center;
          font-size: 18px;
          max-width: 200px;
        }

        @media (max-width: 800px) {
          .title {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  )
}
