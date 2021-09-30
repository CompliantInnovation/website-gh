import { useSpring, animated, config } from 'react-spring'
import { useMedia } from '../hooks/useMedia'

export default function NumberScroll({ imgSrc, number, title, plus, order, percent }) {
  const isBrowser = () => typeof window !== 'undefined'

  let tabletSize
  if (isBrowser) {
    tabletSize = useMedia('(max-width: 775px)')
  }

  const spring = useSpring({
    from: { val: 0 },
    to: { val: typeof number == 'number' ? number : 0 },
    config: { duration: 2000, config: config.molasses }
  })

  const styles = useSpring({
    from: {
      opacity: 0,
      fontSize: tabletSize ? '5vw' : '3vw',
      margin: 0,
      color: 'var(--blueDocspera)'
    },
    to: { opacity: 1, fontSize: tabletSize ? '5vw' : '3vw' },
    config: { duration: 2000, config: config.molasses }
  })

  const plusStyles = useSpring({
    from: {
      opacity: 0,
      fontSize: tabletSize ? '5vw' : '3vw',
      margin: 0,
      color: 'var(--blueDocspera)'
    },
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
          <animated.h1 style={tabletSize ? plusStyles : plusStyles}>
            {plus && '+'}
            {percent && '%'}
          </animated.h1>
        </div>
      ) : (
        <animated.h1 style={tabletSize ? styles : styles}>{number}</animated.h1>
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
