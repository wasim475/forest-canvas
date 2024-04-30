
import slider1 from "../../../assets/slide1.jpg"
import slider3 from "../../../assets/slide3.webp"
import slider4 from "../../../assets/slide4.webp"
import slider5 from "../../../assets/slide5.webp"
const Banner = () => {
    return (
        <>
        <div className="container mx-auto p-2">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item w-full relative h-[100vh]">
                    <img src={slider3} className="w-full rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="lg:w-2/6 md:w-4/6 border-2 rounded-lg p-4 w-full text-center absolute bottom-6 right-0 md:right-3 text-white">
                        <h1 className="text-2xl font-bold font-playfair mb-2">Mystic Woodland Haven</h1>
                        <p className="font-playfair text-gray-400">
                        Embrace serenity in this enchanted forest retreat, a captivating masterpiece that invites tranquility seekers to immerse themselves..

                        </p>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full h-[100vh]">
                    <img src={slider4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className="lg:w-2/6 md:w-4/6 w-full text-center absolute bottom-6 right-0 md:right-3 text-blue-100 border-2 rounded-lg p-4">
                        <h1 className="text-2xl font-bold font-playfair mb-2">Forest and River Converge</h1>
                        <p className="font-playfair text-white font-semibold">
                        A picturesque harmony where verdant trees meet flowing waters, offering a tranquil haven for nature enthusiasts.

                        </p>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full h-[100vh]">
                    <img src={slider1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>

                    <div className="lg:w-2/6 md:w-4/6 w-full text-center absolute bottom-6 right-0 md:right-3 text-white border-2 rounded-lg p-4">
                        <h1 className="text-2xl font-bold font-playfair mb-2">Embrace Natures Symphony</h1>
                        <p className="font-playfair text-white">
                        Elevate your space with this captivating riverside forest scene, where tranquility and beauty merge in harmonious allure.

                        </p>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full h-[100vh]">
                    <img src={slider5} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>

                    <div className="lg:w-2/6 md:w-4/6 w-full border-2 rounded-lg p-4 text-center absolute bottom-6 right-0 md:right-3 text-white">
                        <h1 className="text-2xl font-bold font-playfair mb-2">Large Canvas Wall Art</h1>
                        <p className="font-playfair text-white">
                        Mystical Forest Abstract Print Modern Painting Print Large Canvas Wall Art Golden Sparks Nature Scene Wall Decor Mysterious Woodland Poster.

                        </p>
                    </div>
                </div>
            </div>

            </div>
        </>
    );
};

export default Banner;