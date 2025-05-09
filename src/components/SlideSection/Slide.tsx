export function Slide() {
  return (
    <>
      <div className="w-full relative z-0">
        {/*<img src="./images/slide.png" className=""></img>*/}
        <img
          src="./images/slide.png"
          className="w-full sm:block hidden"
          alt="Slide desktop"
        />
        <img
          src="./images/mobile-slide.png"
          className="w-full sm:hidden object-cover"
          alt="Slide mobile zoom"
        />

        <div className="absolute top-[25rem] sm:top-[5rem] xl:top-[10rem] md:top-[5rem] xl:left-[25rem] md:left-[5rem] sm:left-[5rem] flex items-center justify-center z-10 w-96 xl:w-80 md:w-48 ">
          <img src="./images/LOGO_Beyaz.png"></img>
        </div>
      </div>
    </>
  );
}
