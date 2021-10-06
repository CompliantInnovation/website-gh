import React, { useState, useEffect } from 'react'
import CarouselItem from './CarouselItem'
import Chevron from './Chevron'
import { useMedia } from '../hooks/useMedia'
import Link from 'next/link'

export default function Carousel({ content, type }) {
  const [current, setCurrent] = useState(0)
  const isBrowser = () => typeof window !== 'undefined'

  let tabletSize, mobileSize, desktopSize
  if (isBrowser) {
    tabletSize = useMedia('(min-width: 775px)');
    mobileSize = useMedia('(max-width: 530px)');
 

  }

  // content = [
  //   {
  //     userId: 1,
  //     id: 1,
  //     img: type === 'blog' ? 'images/blog-post.png' : 'images/case-study.png',
  //     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  //     body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit'
  //   },
  //   {
  //     userId: 1,
  //     id: 2,
  //     img: type === 'blog' ? 'images/blog-post.png' : 'images/case-study.png',

  //     title: 'qui est esse',
  //     body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat'
  //   },
  //   {
  //     userId: 1,
  //     id: 3,
  //     img: type === 'blog' ? 'images/blog-post.png' : 'images/case-study.png',

  //     title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
  //     body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel '
  //   }
  // ]

  useEffect(() => {
    if (current + 2 == content.length) {
      console.log('current!:', current)
      setCurrent(0)
    }
  }, [current])

  const nextSlide = () => {
    if (current !== content.length - 1) {
      setCurrent(current + 1)
    }
  }

  const previousSlide = () => {
    if (current !== 0) {
      setCurrent(current - 1)
    }
  }

  if (!Array.isArray(content) || content.length <= 0) {
    return null
  }

  return (
    <div className='container'>
      <div className='carousel'>
        <div className='left-chevron' onClick={() => previousSlide()}>
          <Chevron color={current === 0 ? 'grey' : 'black'} />
        </div>
        {content.map((item, idx) => {
        
          console.log('idx', idx)
          console.log(desktopSize)
          console.log(tabletSize)
          console.log(mobileSize)
          if(tabletSize) {
            if (idx == current || idx == current + 1 || idx == current + 2) {
              console.log(current)
              return <CarouselItem itemInfo={item} key={idx} type={type} />
            }
          } else if(mobileSize) {
            if (idx == current) {
              console.log(current)
              return <CarouselItem itemInfo={item} key={idx} type={type} />
            }
          } else 
          if (idx == current || idx == current + 1) {
            console.log(current)
            return <CarouselItem itemInfo={item} key={idx} type={type} />
          }
        
        
        })}
        <div className='right-chevron' onClick={() => nextSlide()}>
          <Chevron />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          min-height: 200px;
        }
        .carousel {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1150px;
          min-width: 1100px;
        }
        .left-chevron {
          width: 40px;
          height: 40px;
          transform: rotate(180deg);
          cursor: pointer;
          margin-right: 40px;
        }
        .right-chevron {
          width: 40px;
          height: 40px;
          cursor: pointer;
          margin-left: 40px;
        }

        @media (max-width: 1150px) {
          .right-chevron, .left-chevron {
            width: 35px;
            height: 35px;
          }
          .carousel {
            min-width: 900px;
          }
        }

        @media (max-width: 940px) {
          .carousel {
            min-width: 800px;
          }
        }
        @media (max-width: 850px) {
          .carousel {
            min-width: 650px;
          }
        }
        @media (max-width: 700px) {
          .carousel {
            min-width: 550px;
          }
        }

        @media (max-width: 530px) {
          .carousel {
            min-width: 100px;
          }
        }
      `}</style>
    </div>
  )
}
