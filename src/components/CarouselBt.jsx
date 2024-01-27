import { Carousel } from 'react-responsive-carousel';
export default function CarouselBt({ lastThree }) {
  return (
    <>
      {lastThree.length > 0 && (
        <Carousel autoPlay
          interval={1500}
          showArrows={false}
          stopOnHover={true}
          swipeable={false}
          showThumbs={false}
          infiniteLoop
          animationHandler={'slide'}
          transitionTime={150}>
          {
            lastThree?.map(product => (
              <div key={product.id}>
                <img className='w-50 text-center' src={product.image} />
                <p className='legend'>{product.description.toUpperCase().substring(0, 10)}...</p>
              </div>
            ))
          }
        </Carousel>
      )}
    </>
  )
}