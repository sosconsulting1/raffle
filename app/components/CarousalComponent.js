import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const CarousalComponent = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
    return(
    <div className="flex flex-row w-full h-96 bg-white mt-4">
    <div className="embla" ref={emblaRef}>      
    <div className="embla__container h-full">        
    <div className="embla__slide f w-full h-full">

{/* Image 1 */}
        <Image style={{ width: '100%', height: '100%' }} src="/OverviewSlideshow1.jpg" alt="Special Olympics Southern California" width={0} height={0} sizes="100vw" layout="full" />
      </div>
     
      <div className="embla__slide w-full h-full ">
{/* Image 2 */}
        <Image style={{ width: '100%', height: '100%' }} src="/OverviewSlideshow2.jpg" alt="Special Olympics Southern California" width={0} height={0} sizes="100vw" layout="full" />
      </div>  
      <div className="embla__slide w-full h-full ">
{/* Image 3 */}
        <Image style={{ width: '100%', height: '100%' }} src="/OverviewSlideshow3.jpg" alt="Special Olympics Southern California" width={0} height={0} sizes="100vw" layout="full" />
      </div> 
      <div className="embla__slide w-full h-full ">
{/* Image 4 */}
        <Image style={{ width: '100%', height: '100%' }} src="/OverviewSlideshow4.jpg" alt="Special Olympics Southern California" width={0} height={0} sizes="100vw" layout="full" />
      </div> 
    </div>    
    </div>
    </div>)
    }

export default CarousalComponent;