import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

interface image {
  src: string;
  alt: string;
}

export default function MySwiper({ images }: { images: image[] }) {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {images.map((image) => (
        <SwiperSlide key={image.src}>
          <img
            src={image.src}
            alt={image.alt}
            loading={"lazy"}
            className="rounded-xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
