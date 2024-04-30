
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const EditorPack = () => {
    return (
        <>
        
            <div className="container mx-auto mt-16">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-playfair font-bold mb-3">Editors Pack</h1>
                    <p className="text-lg font-worksans text-gray-500 ">Dive into our Editor Pack section, your arsenal of creative instruments, empowering you to shape your artistic vision effortlessly.</p>
                </div>
                <div className="grid grid-cols-3 border-2 rounded-lg">
                    <section data-aos="zoom-out" data-aos-duration="1000"  data-aos-delay="500" className="grid grid-cols-2 gap-2 p-4">
                        <div className="col-span-2">
                            <h1>Editors pack</h1>
                            <h1 className="text-2xl font-bold mb-3">Earth-conscious finds</h1>
                            <Link to="/allartcraftitems">
                                <p className="flex items-center gap-x-1 font-playfair font-bold"> See more  <FaArrowRightLong/> </p>
                            </Link>
                        </div>
                        <div className="h-40 relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-lg">
                            <img className="h-full w-full rounded-lg max-w-xs transition duration-300 ease-in-out hover:scale-110"  src="https://i.ibb.co/B2PYcCd/img6.jpg"/>
                        </div>
                        <div className="h-40 relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-lg">
                            <img className="h-full w-full rounded-lg max-w-xs transition duration-300 ease-in-out hover:scale-110"  src="https://i.ibb.co/H2wR2tb/img5.jpg"/>
                        </div>
                    </section>
                    <section className="grid grid-cols-2 gap-2" data-aos="zoom-in" data-aos-duration="1000"  data-aos-delay="1000">
                        <div className="h-40 relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-lg">
                            <img className="h-full w-full rounded-lg max-w-xs transition duration-300 ease-in-out hover:scale-110"  src="https://i.ibb.co/NnhLGYk/img1.jpg"/>
                        </div>
                        <div className="h-40 relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-lg">
                            <img className="h-full w-full rounded-lg max-w-xs transition duration-300 ease-in-out hover:scale-110"  src="https://i.ibb.co/m6QBSJZ/img2.jpg"/>
                        </div>
                        <div className="h-40 relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-lg">
                            <img className="h-full w-full rounded-lg max-w-xs transition duration-300 ease-in-out hover:scale-110"  src="https://i.ibb.co/6m9qDww/img3.jpg"/>
                        </div>
                        <div className="h-40 relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-lg">
                            <img className="h-full w-full rounded-lg max-w-xs transition duration-300 ease-in-out hover:scale-110" src="https://i.ibb.co/PDwb88n/img4.jpg"/>
                        </div>
                    </section>
                    <section data-aos="fade-up-right" data-aos-duration="1000"  data-aos-delay="1500">
                    <div className="h-80 text-center p-3 relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-lg">
                        <img className="h-full w-full max-w-xs transition duration-300 ease-in-out hover:scale-90" src="https://i.ibb.co/hC5rf01/The-Forest-Queen.jpg"/>
                    </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default EditorPack;