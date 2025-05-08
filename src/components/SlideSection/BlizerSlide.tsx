import { useBlazeSlider } from "@/hooks/useBlazeSlider";
import "blaze-slider/dist/blaze.css"; // BlazeSlider'ın CSS dosyasını unutmayın!

const sliderConfig = {
  all: {
    enableAutoplay: true,
    autoplayInterval: 2000,
    transitionDuration: 300,
    slidesToShow: 4,
  },
  '(max-width: 900px)': {
    slidesToShow: 3,
  },
  '(max-width: 500px)': {
    slidesToShow: 1,
  },
};
console.log("Current Width: ", window.innerWidth);
console.log("BlazeSlider Config: ", sliderConfig);

const reviews = [
  {
    date: "03/05/24",
    title: "Beğendim gayet güzeldi",
    content:
      "Ürün gayet güzel ama eksikliği bir süreden sonra bayabiliyor. Hasan teşekkürler.",
  },
  { date: "04/05/24", title: "Başarılı!", content: "Gayet iyi bir ürün." },
  {
    date: "05/05/24",
    title: "Tavsiye ederim",
    content: "Uygun fiyatlı ve kaliteli.",
  },
  {
    date: "06/05/24",
    title: "Beklentiyi karşıladı",
    content: "Başarılı bir ürün. Memnun kaldım.",
  },
  {
    date: "07/05/24",
    title: "Kaliteli!",
    content: "Uzun zamandır kullanıyorum, çok memnunum.",
  },
  {
    date: "08/05/24",
    title: "Mükemmel!",
    content: "Kargo hızlıydı ve ürün çok kaliteli.",
  },
  {
    date: "09/05/24",
    title: "Fiyat performans ürünü",
    content: "Bu fiyata böyle bir ürün bulmak zor.",
  },
  {
    date: "10/05/24",
    title: "Harika bir deneyim",
    content: "Kesinlikle tekrar alırım. Çok beğendim.",
  },
];

export default function CustomerReviews() {
  const { sliderElRef, sliderRef } = useBlazeSlider(sliderConfig);

  // Button click handlers for prev and next
  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.prev(); // Slider'ı bir önceki slayta kaydır
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.next(); // Slider'ı bir sonraki slayta kaydır
    }
  };

  return (
    <div className="container mx-auto h-full max-w-6xl lg:p-4 py-3 md:px-10 lg:px-0">
      <div className="grid grid-cols-2 flex items-center mb-2">
        <h2 className="text-l font-bold text-start">
          GERÇEK MÜŞTERİ YORUMLARI
        </h2>
        <div className="flex justify-end">
          <button
            onClick={handlePrevClick}
            className="blaze-prev hover:bg-gray-100 p-2 m-1 rounded-full"
          >
            ❮
          </button>
          <button
            onClick={handleNextClick}
            className="blaze-next hover:bg-gray-100 p-2 m-1 rounded-full"
          >
            ❯
          </button>
        </div>
      </div>

      <hr />
      {/* BlazeSlider Wrapper */}
      <div
        ref={sliderElRef}
        className="blaze-slider relative w-full mb-20 mt-5 md:px-10 lg:px-0"
      >
        {/* BlazeSlider Container */}
        <div className="blaze-container ">
          {/* BlazeSlider Track */}
          <div className="blaze-track gap-4 overflow-hidden">
            {/* Reviews as Slides */}
            {reviews.map((review, index) => (
              <div key={index} className="p-4 bg-white text-left">
                <p className="text-sm text-gray-500">{review.date}</p>
                <h3 className="text-xl text-gray-700 font-bold my-2 ">
                  {review.title}
                </h3>
                <p className="text-gray-600">{review.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
