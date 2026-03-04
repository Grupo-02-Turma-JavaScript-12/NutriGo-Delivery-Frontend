import { useState } from "react"
import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"

const foodData = [
  {
    id: 1,
    name: "Pizzas",
    tamil: "Massa Integral",
    desc: "Massa de aveia com frango desfiado e queijo light",
    img: "/img/pratos/pizza.png",
  },
  {
    id: 2,
    name: "Massas",
    tamil: "Baixo Carboidrato",
    desc: "Espaguete de abobrinha ao molho pesto e castanhas",
    img: "/img/pratos/massa.png",
  },
  {
    id: 3,
    name: "Hamburgers",
    tamil: "Rico em Proteína",
    desc: "Blend de patinho no pão australiano integral",
    img: "/img/pratos/burguer.png",
  },
  {
    id: 4,
    name: "Doces",
    tamil: "Zero Açúcar",
    desc: "Mousse de cacau 70% com stevia e morangos frescos",
    img: "/img/pratos/doce.png",
  },
  {
    id: 5,
    name: "Bolos",
    tamil: "Sem Glúten",
    desc: "Bolo de banana com aveia, canela e whey protein",
    img: "/img/pratos/bolo.png",
  },
]

export function Home() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleProgress = (swiper) => {
    swiper.slides.forEach((slide) => {
      const slideProgress = slide.progress
      const absProgress = Math.abs(slideProgress)

      const translateY = absProgress * -150
      const scale = 1 - absProgress * 0.3
      const opacity = 1 - absProgress * 0.5
      const rotate = slideProgress * 15

      slide.style.transform = `translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`
      slide.style.opacity = `${opacity}`
    })
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[url('img/banner/bghome.jpg')] bg-cover bg-no-repeat p-4 text-white">
      <div className="z-10 mb-20 text-center">
        <h2 className="text-4xl font-bold text-white transition-all duration-500 select-none">
          {foodData[activeIndex]?.tamil}
        </h2>
        <h1 className="-mt-4 text-7xl font-black tracking-tighter text-yellow-600 uppercase transition-all duration-700">
          {foodData[activeIndex]?.name}
        </h1>
        <p className="mt-2 text-gray-200 italic">
          {foodData[activeIndex]?.desc}
        </p>
      </div>

      <div className="relative w-full max-w-5xl">
        <Swiper
          modules={[Navigation, Autoplay]}
          centeredSlides={true}
          grabCursor={true}
          slidesPerView={3}
          loop={true}
          loopedSlides={4}
          speed={1000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          watchSlidesProgress={true}
          onProgress={handleProgress}
          onSetTransition={(swiper, duration) => {
            swiper.slides.forEach((slide) => {
              slide.style.transition = `${duration}ms ease-out`
            })
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="overflow-visible!"
        >
          {foodData.map((food) => (
            <SwiperSlide
              key={food.id}
              className="flex flex-col items-center justify-center"
            >
              <div className="group relative">
                <img
                  src={food.img}
                  alt={food.name}
                  className="h-auto w-70 drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:scale-110 md:w-87.5"
                />

                <div className="absolute -bottom-10 left-1/2 -z-10 h-14 w-44 -translate-x-1/2 rounded-full bg-orange-600/30 opacity-0 blur-[50px] transition-opacity duration-500 in-[.swiper-slide-active]:opacity-100" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute bottom-10 left-1/2 h-0.5 w-48 -translate-x-1/2 bg-white/10">
        <div
          className="h-full bg-orange-600 shadow-[0_0_10px_#ea580c] transition-all duration-700"
          style={{ width: `${((activeIndex + 1) / foodData.length) * 100}%` }}
        />
      </div>
    </div>
  )
}
