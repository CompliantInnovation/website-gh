import Link from 'next/link'
export default function CarouselItem({ itemInfo, type }) {
  return (
    <div className='carousel-item'>
      <img src={itemInfo.img} height={125} width={250} />
      {/* TODO: Limit amount of text to be displayed as title space is 200px high */}
      {itemInfo.title && <p className='title'>{itemInfo.title}</p>}
      {itemInfo.bod && <p className='body'>{itemInfo.body}</p>}

      <style jsx>{`
        .carousel-item {
          padding: 10px;
          align-self: center;
          display: flex;
          flex-direction: column;
        }
        img {
          border-radius: ${type == 'case-study' || (type == 'blog' && '10px')};
          filter: ${type == 'case-study' ||
          (type == 'blog' && 'drop-shadow(0 0px 10px lightgray)')};
          height: auto;
          width: ${itemInfo.width}px;
          user-select: none;
        }
        .title {
          max-width: 250px;
          font-weight: 700;
          height: 50px;
          margin-top: 10px;
        }
        .body {
          max-width: 250px;
          align-self: flex-end;
          margin-top: 20px;
        }
        @media (max-width:1150px) {
          img {
            width: ${itemInfo.width/1.2}px;
          }
        }
      `}</style>
    </div>
  )
}
