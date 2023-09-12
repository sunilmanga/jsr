import Bottom from "../Bottom";
import Navbar from "../Navbar";

const Gallery = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[26.125rem] w-[94.938rem]"
        style={{ backgroundImage: `URL("img/gallerybg.jpg")` }}
      >
        <Navbar />

        <div className="px-[1rem] mx-[11rem] ">
          <div className="flex">
            <div className="px-[1rem]">
              <div className="pt-[10rem] pb-[7.6rem]">
                <h4>
                  Today’s investment is{" "}
                  <span className="stroke">for tomorrows happiness.</span>{" "}
                </h4>
              </div>
            </div>
            <div className="px-[1rem] mx-[11rem] text-right">
              <h1 className="font-black text-8xl text-white">Gallery</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex">
          <img className="w-1/6	" src="gallery/1 (1).jpg" alt="1" />
          <img className="w-1/6	" src="gallery/1 (1).jpg" alt="1" />
          <img className="w-1/6	" src="gallery/1 (1).jpg" alt="1" />
          <img className="w-1/6	" src="gallery/1 (1).jpg" alt="1" />
          <img className="w-1/6	" src="gallery/1 (1).jpg" alt="1" />
          <img className="w-1/6	" src="gallery/1 (1).jpg" alt="1" />
        </div>
        <div className="flex">
          <img className="w-1/6	" src="gallery/1 (1).jpg" alt="1" />
          <img className="w-1/6	" src="gallery/1 (1).jpg" alt="1" />
          <img className="w-1/6	" src="gallery/1 (1).jpg" alt="1" />
          <img className="w-1/6	" src="gallery/1 (1).jpg" alt="1" />
          <img className="w-1/6	" src="gallery/1 (1).jpg" alt="1" />
          <img className="w-1/6	" src="gallery/1 (1).jpg" alt="1" />
        </div>
        <div className="flex">
          <img className="w-1/6	" src="gallery/1 (1).jpg" alt="1" />
          <img className="w-1/6	" src="gallery/1 (1).jpg" alt="1" />
          <img className="w-1/6	" src="gallery/1 (1).jpg" alt="1" />
          <img className="w-1/6	" src="gallery/1 (1).jpg" alt="1" />
          <img className="w-1/6	" src="gallery/1 (1).jpg" alt="1" />
          <img className="w-1/6	" src="gallery/1 (1).jpg" alt="1" />
        </div>
        
      </div>

      <Bottom />
    </div>
  );
};

export default Gallery;
