import React, {useEffect, useState} from 'react';
import CarouselItem from './CarouselItem';
import Chevron from './Chevron';
import {useMedia} from '../hooks/useMedia';

export default function Carousel({content, type}) {
  const [current, setCurrent] = useState(0);
  const isBrowser = () => typeof window !== 'undefined';

  const tabletSize = useMedia('(min-width: 810px)');
  const mobileSize = useMedia('(max-width: 614px)');

  // content = [
  //   {
  //     userId: 1,
  //     id: 1,
  //     img: type === 'blog' ? '/images/blog-post.png' : '/images/case-study.png',
  //     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  //     body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit'
  //   }
  // ]

  useEffect(() => {
    if (current + 2 == content.length) {
      setCurrent(0);
    }
  }, [current]);

  const nextSlide = () => {
    if (current !== content.length - 1) {
      setCurrent(current + 1);
    }
  };

  const previousSlide = () => {
    if (current !== 0) {
      setCurrent(current - 1);
    }
  };

  if (!Array.isArray(content) || content.length <= 0) {
    return null;
  }

  return (
    <div className="container">
      <div className="carousel">
        <div className="left-chevron" onClick={() => previousSlide()}>
          <Chevron color={current === 0 ? 'grey' : 'black'} />
        </div>
        {content.map((item, idx) => {
          if (tabletSize) {
            if (idx == current || idx == current + 1 || idx == current + 2) {
              return <CarouselItem itemInfo={item} key={idx} type={type} />;
            }
          } else if (mobileSize) {
            if (idx == current || idx == current + 1) {
              return <CarouselItem itemInfo={item} key={idx} type={type} />;
            }
          } else if (idx == current || idx == current + 1) {
            return <CarouselItem itemInfo={item} key={idx} type={type} />;
          }
        })}
        <div className="right-chevron" onClick={() => nextSlide()}>
          <Chevron />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          min-height: 200px;
          max-width: 800px;
          margin: 0 auto;
        }

        .carousel {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
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

        @media (max-width: 810px) {
          .right-chevron,
          .left-chevron {
            width: 35px;
            height: 35px;
          }
        }

        @media (max-width: 614px) {
          .right-chevron,
          .left-chevron {
            width: 25px;
            height: 25px;
            margin: 0;
          }
        }

        @media (max-width: 368px) {
          .right-chevron,
          .left-chevron {
            margin: 0;
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </div>
  );
}
