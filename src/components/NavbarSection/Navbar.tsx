import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import {
  CategoryData,
  fetchCategories,
} from "../CategorySection/fetchCategories";
import { Link } from "react-router-dom";

const info = [
  {
    logo: "/public/images/info/image_181.png",
    title: "Aynı gün kargo",
    description: "16:00'dan önceki siparişlerde",
  },
  {
    logo: "/public/images/info/image_180.png",
    title: "Ücretsiz kargo",
    description: "100 tl üzeri siparişlerde",
  },
  {
    logo: "/public/images/info/image_182.png",
    title: "Güvenli alışveriş",
    description: "1.000.000+ mutlu müşteri",
  },
];

export function NavMenu() {
  const [menuOpen, setMenuOpen] = useState(false); // Hamburger menüsü durumu
  const [categories, setCategories] = useState<CategoryData[]>([]); // Kategorileri depolamak için state
  const [isLoading, setIsLoading] = useState(true); // Yükleniyor göstergesi

  useEffect(() => {
    async function loadCategories() {
      const data = await fetchCategories(); // Kategori verilerini çek
      setCategories(data); // State'e kaydet
      setIsLoading(false); // Yüklenme tamamlandı
    }

    loadCategories();
  }, []);

  return (
    <>
      {/* FIRST */}
      <div className="container mx-auto max-w-7xl grid lg:grid-cols-3 md:grid-cols-3 py-5 lg:px-0 md:px-10">
        {/* Hamburger Menü - Mobil */}
        <div className="flex items-center justify-between py-5 lg:py-0 md:py-0 px-5 lg:px-0 md:px-10 ">
          <button
            className="lg:hidden md:hidden flex items-center"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={faBars} className="text-2xl text-gray-700" />
          </button>
          {/* Hamburger Menü Dropdown */}
          {menuOpen && (
            <div className="fixed inset-0 bg-white z-50 p-6 flex flex-col">
              <div className="flex justify-end">
                <button onClick={() => setMenuOpen(false)} className="text-2xl font-bold text-gray-600">
                  ✕
                </button>
              </div>

              <ul className="mt-10 space-y-6 text-lg font-medium text-gray-800">
                {isLoading ? (
                  <li className="text-gray-500">Yükleniyor...</li>
                ) : (
                  categories.map((category) => (
                    <li key={category.id} className="border-b pb-2">
                      {category.name}
                    </li>
                  ))
                )}
                <li className="pt-4 text-gray-700">Hesabım</li>
              </ul>
            </div>
          )}
          {/* LOGO */}
          <Link to={"/"}>
            <img
              className="mx-auto lg:m-1 md:m-1"
              src="/public/images/LOGO_Siyah.png"
              alt=""
            />
          </Link>
          {/* Sepet */}
          <button className="lg:hidden md:hidden flex items-center">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-2xl text-gray-700"
            />
            <span className=" relative -left-[32px] -top-[18px] w-5 h-5 bg-red-600 text-white text-[12px] flex items-center justify-center rounded-full">
              0
            </span>
          </button>
        </div>
        {/* Search - Mobilde tam genişlikte */}
        <div className="lg:hidden md:hidden ">
          <div className="flex rounded-full border-2 border-zinc-400 overflow-hidden w-full h-12 mx-auto font-[sans-serif]">
            <input
              type="email"
              placeholder="Aradığınız ürünü yazınız..."
              className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3 uppercase"
            />
          </div>
        </div>
        {/* SEARCH */}
        <div className=" rounded-md border-2 border-zinc-400 overflow-hidden w-full h-12 mx-auto font-[sans-serif] hidden md:flex lg:flex">
          <input
            type="email"
            placeholder="Aradığınız ürünü yazınız..."
            className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
          />
          <button
            type="button"
            className="flex items-center justify-center bg-[#919191] px-5 text-white hover:bg-neutral-400 "
          >
            Ara
          </button>
        </div>

        <div className=" grid grid-cols-2 gap-2 flex">
          {/* HESAP */}
          <Menu
            as="div"
            className="relative  m-auto text-left hidden md:inline-block lg:inline-block"
          >
            <div>
              <MenuButton className="inline-flex w-32 h-12 justify-center items-center gap-x-1.5 rounded-md bg-white text-[#919191] px-3 py-2 text-md font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <FontAwesomeIcon
                  className="text-[#919191] text-2xl"
                  icon={faUser}
                />
                HESAP
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 size-6 text-[#919191]"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Account settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Support
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    License
                  </a>
                </MenuItem>
                <form action="#" method="POST">
                  <MenuItem>
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Sign out
                    </button>
                  </MenuItem>
                </form>
              </div>
            </MenuItems>
          </Menu>
          {/* SEPET */}
          <div className="hidden md:inline-block lg:inline-block">
            <button
              type="button"
              className="inline-flex w-44 h-12 justify-center items-center gap-x-1.5 rounded-md text-white bg-[#919191] px-3 py-2 text-md font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-neutral-400"
            >
              <span className="relative left-[15px] -top-[12px] w-5 h-5 bg-red-600 text-white text-[12px] flex items-center justify-center rounded-full">
                0
              </span>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-2xl text-white"
              />
              SEPET
            </button>
          </div>
        </div>
      </div>
      {/* CATEGORIES */}
      <div className="bg-black uppercase hidden md:block lg:block">
        <div className="mx-auto max-w-6xl grid grid-cols-6 lg:px-0 md:px-10 ">
          {isLoading ? (
            <div className="text-white">Loading...</div>
          ) : (
            categories.map((category) => (
              <div
                key={category.id}
                className="text-white p-2 flex justify-between"
              >
                <Link to={`/categories/${category.id}`}>{category.name}</Link>
              </div>
            ))
          )}
          <div className="text-white p-2 flex justify-between">
            <Link
              to={`/products`} // Kategoriye özel URL
            >
              Tüm Ürünler
            </Link>
          </div>
        </div>
      </div>
      {/* INFO */}
      <div className="container mx-auto max-w-6xl py-2 uppercase text-black text-sm md:grid lg:grid lg:grid-cols-3 md:grid-cols-3 md:px-2 hidden">
        {info.map((info, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="pr-2">
              <img className="" src={info.logo} alt={info.title} />
            </div>
            <div className="font-bold pr-2 ">{info.title}</div>
            <div className=""> - {info.description}</div>
          </div>
        ))}
      </div>
    </>
  );
}
