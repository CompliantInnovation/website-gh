import Link from 'next/link'
export default function CarouselItem({ itemInfo }) {
  return (
    <div className='carousel-item'>
      <img src={itemInfo.img} height={125} width={250} />
      {/* TODO: Limit amount of text to be displayed as title space is 200px high */}
      <p className='title'>{itemInfo.title}</p>
      <p className='body'>{itemInfo.body}</p>
      <style jsx>{`
        .carousel-item {
          padding: 10px;
          align-self: stretch;
          display: flex;
          flex-direction: column;
        }
        img {
          border-radius: 10px;
          filter: drop-shadow(0 0px 10px lightgray);
        }
        .title {
          max-width: 250px;
          font-weight: 700;
          height: 50px;
        }
        .body {
          max-width: 250px;
          align-self: flex-end;
        }
      `}</style>
    </div>
  )
}
