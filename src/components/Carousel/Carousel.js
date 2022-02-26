import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import iphone13 from '../../asset/images/iphone13B.jpg'
import iphone12 from '../../asset/images/iPhone12BN.png'
import style from '../../asset/styles/Carousel.module.css'

import {PATHS} from '../../configs/routes.config'

import {ButtonComp} from '../../components/Buttons/Button'
function Carousel () {
  return (
      <div className={style.contain}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                
                >
                <SwiperSlide>
                    {/* <img style={{width:'900px'}} 
                         alt="home"/> */}
                    <div className={style.fSlide} >
                    <div className={style.Boxx}>
                            <h2 >welcome to Trobche</h2>
                            <span >Apple product's</span>
                            <ButtonComp margin={'2rem auto'} padding={'1rem 5rem'} link={PATHS.Home}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <img style={{width:'50%'}} 
                         alt="home"/> */}
                    <div className={style.sSlide} >
                    <div className={style.Boxx}>
                            <h2 >به تربچه خوش امدید</h2>
                            <span >محصولات کمپانی اپل</span>
                            <ButtonComp margin={'2rem auto'} padding={'1rem 5rem'} link={PATHS.Home}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <img style={{width:'50%'}} 
                         alt="home"/> */}
                    <div className={style.tSlide} >
                        <div className={style.Boxx}>
                            <h2 >welcome fashion</h2>
                            <span >روز زنانه</span>
                            <ButtonComp margin={'2rem auto'} padding={'1rem 5rem'} link={PATHS.Home}/>
                        </div>
                    </div>
                </SwiperSlide>
        </Swiper>
    </div>
  );
};

export {Carousel}