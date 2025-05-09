import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const ojsNutrition = [
  { name: "İletişim" },
  { name: "Hakkımızda" },
  { name: "Sık Sorulan Sorular" },
  { name: "KVKK" },
  { name: "Çalışma İlkelerimiz" },
  { name: "Satış Sözleşmesi" },
  { name: "Garanti ve İade Koşulları" },
  { name: "Gerçek Müşteri Yorumları" },
  { name: "Blog" },
];

const categories = [
  { name: "Protein" },
  { name: "Spor Gıdaları" },
  { name: "Sağlık" },
  { name: "Gıda" },
  { name: "Vitamin" },
  { name: "Aksesuar" },
  { name: "Tüm Ürünler" },
  { name: "Paketler" },
  { name: "Lansmana Özel" },
];

const products = [
  { name: "Protein" },
  { name: "Spor Gıdaları" },
  { name: "Sağlık" },
  { name: "Gıda" },
  { name: "Vitamin" },
  { name: "Aksesuar" },
  { name: "Tüm Ürünler" },
  { name: "Paketler" },
  { name: "Lansmana Özel" },
];

export function Footer() {
  return (
    <>
      <div className="" style={{ backgroundColor: "#222222" }}>
        <div className="container mx-auto w-full h-auto mt-4 max-w-7xl text-white ">
          <div className=" gap-1 px-4 pt-4 md:px-10 md:pt-10">
            <span className="text-yellow-400 text-lg">⭐</span>
            <span className="text-yellow-400 text-lg">⭐</span>
            <span className="text-yellow-400 text-lg">⭐</span>
            <span className="text-yellow-400 text-lg">⭐</span>
            <span className="text-yellow-400 text-lg">⭐</span>
            <span className="text-white text-xl font-semibold ml-2">{`{140.000+}`}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 py-20 flex justify-between px-4 mx-auto md:px-10">
            <h1 className="text-2xl md:text-3xl">
              LABORATUVAR TESTLİ ÜRÜNLER AYNI GÜN & ÜCRETSİZ KARGO MEMNUNİYET
              GARANTİSİ
            </h1>
            <span className="md:text-2xl">
              200.000'den fazla ürün yorumumuza dayanarak, ürünlerimizi
              seveceğinize eminiz. Eğer herhangi bir sebeple memnun kalmazsan,
              bizimle iletişime geçtiğinde çözüme kavuşturacağız.
            </span>
          </div>
          {/* Mobil: Accordion */}
          <div className="md:hidden px-4">
            <Accordion type="multiple">
              <AccordionItem value="item-1">
                <AccordionTrigger>OJS Nutrition</AccordionTrigger>
                <AccordionContent>
                  {ojsNutrition.map((item, index) => (
                    <p key={index} className="text-sm text-gray-400 py-1">
                      {item.name}
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Kategoriler</AccordionTrigger>
                <AccordionContent>
                  {categories.map((item, index) => (
                    <p key={index} className="text-sm text-gray-400 py-1">
                      {item.name}
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Popüler Ürünler</AccordionTrigger>
                <AccordionContent>
                  {products.map((item, index) => (
                    <p key={index} className="text-sm text-gray-400 py-1">
                      {item.name}
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          {/** MAsaüstü */}
          <div className="hidden md:flex grid grid-flow-col justify-stretch px-4 md:px-10">
            <div className="mr-auto">
              <img
                className="w-40 pb-5"
                src="/public/images/LOGO_Beyaz.png"
                alt=""
              />
              {ojsNutrition.map((ojs, index) => (
                <ol key={index}>
                  <li className="text-slate-400">{ojs.name}</li>
                </ol>
              ))}
            </div>
            <div className="m-auto">
              <h5 className=" font-semibold py-2 text-2xl">Kategoriler</h5>
              {categories.map((category, index) => (
                <ol key={index}>
                  <li className="text-slate-400">{category.name}</li>
                </ol>
              ))}
            </div>
            <div className="ml-auto">
              <h5 className=" font-semibold py-2 text-2xl">Popüler Ürünler</h5>
              {products.map((product, index) => (
                <ol key={index}>
                  <li className="text-slate-400">{product.name}</li>
                </ol>
              ))}
            </div>
          </div>
          <div className="px-4 md:px-10 row flex-1 py-8">
            Copyright@-Tüm hakları saklıdır.
          </div>
        </div>
      </div>
    </>
  );
}
