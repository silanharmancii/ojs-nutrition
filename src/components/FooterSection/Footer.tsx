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
      <div
        className=""
        style={{ backgroundColor: "#222222" }}
      >
        <div className="container mx-auto w-full h-auto mt-4 max-w-7xl text-white ">
          <div className="grid grid-cols-2 gap-4 flex-1 py-20 flex justify-between">
            <h1 className="text-3xl">
              LABORATUVAR TESTLİ ÜRÜNLER AYNI GÜN & ÜCRETSİZ KARGO MEMNUNİYET
              GARANTİSİ
            </h1>
            <span className="text-2xl">
              200.000'den fazla ürün yorumumuza dayanarak, ürünlerimizi
              seveceğinize eminiz. Eğer herhangi bir sebeple memnun kalmazsan,
              bizimle iletişime geçtiğinde çözüme kavuşturacağız.
            </span>
          </div>
          <div className="grid grid-flow-col justify-stretch ">
            <div>
              <img className="w-40 pb-5" src="/public/images/LOGO_Beyaz.png" alt="" />
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
          <div className="row flex-1 py-8">Copyright@-Tüm hakları saklıdır.</div>
        </div>
      </div>
    </>
  );
}
