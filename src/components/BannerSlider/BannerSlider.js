import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../../assets/banner-1.jpg';
import banner2 from '../../assets/banner-2.jpg';
import banner3 from '../../assets/banner-3.jpg';
import secondaryBanner from '../../assets/secondaryBanner.jpg';


const BannerSlider = () => {
  const mainSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const secondarySliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      {/* Main Slider */}
      <Slider {...mainSliderSettings}>
        <div>
          <img src={banner1} alt="Banner 1" />
        </div>
        <div>
          <img src={banner2} alt="Banner 2" />
        </div>
        <div>
          <img src={banner3} alt="Banner 3" />
        </div>
      </Slider>

      {/* Gap between sliders */}
      <div style={{ margin: '20px' }}></div>

      {/* Secondary Banner Slider */}
      <Slider {...secondarySliderSettings}>
        <div>
          <img src={secondaryBanner} alt="Secondary Banner 1" />
        </div>
        {/* <div>
          <img src={secondaryBanner2} alt="Secondary Banner 2" />
        </div>
        <div>
          <img src={secondaryBanner3} alt="Secondary Banner 3" />
        </div> */}
      </Slider>
    </div>
  );
};

export default BannerSlider;
