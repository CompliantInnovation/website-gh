import { useSpring, animated, config } from 'react-spring'
import { useMedia } from '../hooks/useMedia'

export default function NumberScroll({ imgSrc, number, title, plus, order, percent }) {
  const isBrowser = () => typeof window !== 'undefined'
  let tabletSize
  let mobileSize
  if (isBrowser) {
    tabletSize = useMedia('(max-width: 775px)')
    mobileSize = useMedia('(max-width: 500px)')
  }

  const spring = useSpring({
    from: { val: 0 },
    to: { val: typeof number == 'number' ? number : 0 },
    config: { duration: 2000, config: config.molasses }
  })

  const styles = useSpring({
    from: {
      opacity: 0,
      fontSize: tabletSize ? '5vw' : '30px',
      margin: 0,
      color: 'var(--blueDark)'
    },
    to: { opacity: 1, fontSize: tabletSize ? '5vw' : '30px' },
    config: { duration: 2000, config: config.molasses }
  })

  const plusStyles = useSpring({
    from: {
      opacity: 0,
      fontSize: '20px',
      margin: 0,
      color: 'var(--blueDark)'
    },
    to: { opacity: 1 },
    config: { duration: 1000, delay: 1000 }
  })

  return (
    <div className='div'>
      <img src={imgSrc} />
      {typeof number === 'number' ? (
        <div style={{ display: 'flex' }}>
          <animated.h1 style={styles}>
            {isNaN(spring) && spring.val.to((val) => Math.floor(val).toLocaleString('en-US'))}
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
          height: 60px;
        }

        @media (max-width: 500px) {
          img {
            height: 40px;
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
          color: var(--blueDark);
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
