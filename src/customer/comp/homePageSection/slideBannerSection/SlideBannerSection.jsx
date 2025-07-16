import { MainCarouselData } from "../../homePageSectionData/SlideBannerData/SlideBannerData";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const SlideBannerSection = () => {
    const items = MainCarouselData.map((item) => <div className="border h-[35rem]"><img className='h-full w-full cursor-pointer' role='presentation' src={item.image} alt={item.title} /></div>);
  return (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={3000}
        infinite={true}
    />
  )
}

export default SlideBannerSection