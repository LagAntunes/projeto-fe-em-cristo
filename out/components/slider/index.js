// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import styles from "./styles.module.css";

function Slider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={500}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ delay: 5000 }}
      className={styles.slider}
    >
      <SwiperSlide>
        <img className={styles.sliderImage} src="https://scontent.fcwb2-3.fna.fbcdn.net/v/t39.30808-6/417453405_809572741210290_4217827326221770324_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wGRqCQbVHZMQ7kNvgFg7aKM&_nc_ht=scontent.fcwb2-3.fna&oh=00_AYB-H_577DR_cuDfPte_qvw7nwhXWZyjdJRv44o1F07T5Q&oe=664873C9"/>
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.sliderImage} src="https://scontent.fcwb2-3.fna.fbcdn.net/v/t39.30808-6/417509127_826501542850743_8481976079611831469_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mAecDIpOzNYQ7kNvgHmiC6m&_nc_ht=scontent.fcwb2-3.fna&oh=00_AYBJUSmG1St30xra999YhShR3cNQiYhk_zkb_DuCmoOuNw&oe=66486E7E"/>
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.sliderImage} src="https://scontent.fcwb2-3.fna.fbcdn.net/v/t39.30808-6/441163534_872255328275364_1766361674554832558_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-yAJD2jvPQ8Q7kNvgHpzLz9&_nc_ht=scontent.fcwb2-3.fna&oh=00_AYCA0rN_WGTyV_RdODjr6PQwtUb7kU3pM6yXOd4YrDgdIg&oe=66486326"/>
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.sliderImage} src="https://scontent.fcwb2-3.fna.fbcdn.net/v/t39.30808-6/434593966_845335274300703_3633242361456797094_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UwcyY_z1cusQ7kNvgE21qag&_nc_ht=scontent.fcwb2-3.fna&oh=00_AYBs9iBGCJnssGKJLNmjfCRjh8P24rNZkFKadc9ooij5ZA&oe=66487A3E"/>
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.sliderImage} src="https://scontent.fcwb2-3.fna.fbcdn.net/v/t39.30808-6/417471588_809578044543093_2570164206238500120_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=55ngEnJ9_6IQ7kNvgFh3dKd&_nc_ht=scontent.fcwb2-3.fna&oh=00_AYC-tKqAKFed6fZAe2HnkhilaUnw4fh5ScUWXc-qdf_7LA&oe=664869A5"/>
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.sliderImage} src="https://scontent.fcwb2-3.fna.fbcdn.net/v/t39.30808-6/420200976_844029561097941_3961413270377651277_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Fhvm1pthveIQ7kNvgFmZxnT&_nc_ht=scontent.fcwb2-3.fna&oh=00_AYBbiKy25VUqHgJrg_zNtOdSu4GrCHJeG3r7sXcxem4ekg&oe=66486A8F"/>
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.sliderImage} src="https://scontent.fcwb2-3.fna.fbcdn.net/v/t39.30808-6/438093023_862612665906297_3529229049267914306_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4kR_DX3Vk6gQ7kNvgHMAq5P&_nc_ht=scontent.fcwb2-3.fna&oh=00_AYC8lLNLyGqc2AUwhUCfH3GRsaycYS1S9CQLjI_W8jC9ig&oe=66487855"/>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
