export function  Banner(){

    return(
        <>
        <div className="w-full relative z-0">

            <img className=" lg:object-cover object-contain w-full sm:block hidden" 
                 src="/public/images/banner/banner1.jpg">
            </img>

            <img className="object-contain sm:hidden" 
                 src="/public/images/banner/banner-mobile.jpg">
            </img>
        </div>
        </>
    )

}