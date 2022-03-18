import Section from "./section";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCards, Navigation} from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import {styled} from "@mui/material";

const MySection = styled(Section)`
  min-height: 80vh;
`

const MySwiper = styled(Swiper)`
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    width: 70vw;
  }

  .swiper-slide-shadow {
    background: none !important;
  }


  & > .swiper-wrapper {
    //  transition: all 1s;
    //  & > .swiper-slide {
    //    display: flex;
    //    align-items: center;
    //    justify-content: center;
    //  }
    //
    //  & > .swiper-slide-active {
    //    //text-align: center;
    //    //z-index: 1;
    //  }
    //
    //  & > .swiper-slide-next {
    //    transform: translateX(-40em) rotateX(-30deg);
    //  }
    //
    //  & > .swiper-slide-prev {
    //    transform: translateX(50em);
    //  }
    //
    //  & > .swiper-slide-active {
    //    //transform: translateX(15%);
    //    z-index: 1;
    //
    //    & > video {
    //      width: 40em;
    //    }
    //  }
  }
`
const MyVideo = styled("video")`
  width: 100%;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  border-radius: 20px;
`

function SectionReviews() {
    return (
        <MySection>
            <MySwiper
                navigation
                effect={"cards"}
                modules={[EffectCards, Navigation]}
            >
                <SwiperSlide>
                    <MyVideo preload="metadata" controls>
                        <source src={'/rev_1.mp4'} type='video/mp4'/>
                    </MyVideo>
                </SwiperSlide>
            </MySwiper>
        </MySection>
    )
}

export default SectionReviews;
