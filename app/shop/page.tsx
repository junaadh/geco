import Image from "next/image";
import B from "@/public/B.jpeg";
import M from "@/public/M.png";
import E from "@/public/E.png";

export default function Shop() {
  return (
    <>
      <div className="min-w-screen h-auto flex items-center overflow-hidden mt-10">
        <div className="w-full max-w-6xl bg-green-500/50 shadow-xl border-green-500/20 rounded-xl mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 md:ml-8 lg:ml-0 mb-10 md:mb-0">
              <div className="relative">
                <Image
                  src={B}
                  className="z-10 rounded-xl border border-t-2 border-b-2 border-l-2 border-green-500/20"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-20 pb-10 lg:mr-10 lg:px-10 py-5">
              <div className="mb-10">
                <h1 className="font-title uppercase text-2xl mb-5">
                  Geco Men{"\u0027"}s
                  <br />
                  Waterproof Jacket
                </h1>
                <p className="text-sm">
                  Made from bio-degradable starch, the Geco Waterproof Jacket is
                  incredibly lightweight and practical, making it the ideal
                  companion for your travels. Disregard the weather predictions
                  – the Geco Waterproof Jacket ensures your comfort and shields
                  you from both wind and light rain. This exceptionally light
                  jacket serves as the ultimate packable shell for your runs,
                  rides, and various outdoor activities.{" "}
                  <a
                    href="/shop/jacket"
                    className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                  >
                    MORE <i className="mdi mdi-arrow-right"></i>
                  </a>
                </p>
              </div>
              <div>
                <div className="inline-block align-bottom mr-5">
                  <span className="text-2xl leading-none align-baseline">
                    RM
                  </span>
                  <span className="font-bold text-5xl leading-none align-baseline">
                    59
                  </span>
                  <span className="text-2xl leading-none align-baseline">
                    .99
                  </span>
                </div>
                <div className="inline-block align-bottom">
                  <a href="/shop/jacket">
                    <button className="bg-green-600/40 border border-green-700/50 opacity-75 hover:opacity-100 text-black hover:text-gray-950 rounded-full px-10 py-2 mt-2 font-semibold">
                      <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-w-screen h-auto flex items-center overflow-hidden mt-10">
        <div className="w-full max-w-6xl bg-green-500/50 shadow-xl border-green-500/20 rounded-xl mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 md:ml-8 lg:ml-0 mb-10 md:mb-0">
              <div className="relative">
                <Image
                  src={E}
                  className="z-10 rounded-xl border border-t-2 border-b-2 border-l-2 border-green-500/20"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-20 pb-10 lg:mr-10 lg:px-10 py-5">
              <div className="mb-10">
                <h1 className="font-title uppercase text-2xl mb-5">
                  Geco Dry Bag
                </h1>
                <p className="text-sm">
                  Meet our trademark Dry Bag – the ultimate adventure companion!
                  Designed for riders, trekkers, campers, and tactical
                  enthusiasts alike, this bag redefines versatility. Crafted
                  from innovative, plant-based plastic Notpla, a bio-degradable
                  solution from seaweed, it{"\u0027"}s not only stylish, but
                  eco-friendly. The lightweight G-hook ensures a swift and
                  secure roll-top closure, withstanding the toughest conditions.
                  Compact, comfortable, and undeniably chic, the Aero Pac is
                  more than a bag – it{"\u0027"}s a statement. Elevate your
                  adventure with the perfect blend of style, while supporting
                  the earth!{" "}
                  <a
                    href="/shop/bag"
                    className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                  >
                    MORE <i className="mdi mdi-arrow-right"></i>
                  </a>
                </p>
              </div>
              <div>
                <div className="inline-block align-bottom mr-5">
                  <span className="text-2xl leading-none align-baseline">
                    RM
                  </span>
                  <span className="font-bold text-5xl leading-none align-baseline">
                    79
                  </span>
                  <span className="text-2xl leading-none align-baseline">
                    .99
                  </span>
                </div>
                <div className="inline-block align-bottom">
                  <a href="/shop/bag">
                    <button className="bg-green-600/40 border border-green-700/50 opacity-75 hover:opacity-100 text-black hover:text-gray-950 rounded-full px-10 py-2 mt-2 font-semibold">
                      <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-screen h-auto flex items-center overflow-hidden mt-10">
        <div className="w-full max-w-6xl bg-green-500/50 shadow-xl border-green-500/20 rounded-xl mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 md:ml-8 lg:ml-0 mb-10 md:mb-0">
              <div className="relative">
                <Image
                  src={M}
                  className="z-10 rounded-xl border border-t-2 border-b-2 border-l-2 border-green-500/20"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-20 pb-10 lg:mr-10 lg:px-10 py-5">
              <div className="mb-10">
                <h1 className="font-title uppercase text-2xl mb-5">
                  Geco Aero
                  <br />
                  Pac Bag
                </h1>
                <p className="text-sm">
                  Meet our trademark Aero Pac Bag – the ultimate adventure
                  companion! Designed for riders, trekkers, campers, and
                  tactical enthusiasts alike, this bag redefines versatility.
                  Crafted from innovative, plant-based plastic Notpla, a
                  bio-degradable solution from seaweed, it{"\u0027"}s not only
                  stylish, but eco-friendly. The lightweight G-hook ensures a
                  swift and secure roll-top closure, withstanding the toughest
                  conditions. Compact, comfortable, and undeniably chic, the
                  Aero Pac is more than a bag – it{"\u0027"}s a statement.
                  Elevate your adventure with the perfect blend of style, while
                  supporting the earth!{" "}
                  <a
                    href="/shop/aero"
                    className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                  >
                    MORE <i className="mdi mdi-arrow-right"></i>
                  </a>
                </p>
              </div>
              <div>
                <div className="inline-block align-bottom mr-5">
                  <span className="text-2xl leading-none align-baseline">
                    RM
                  </span>
                  <span className="font-bold text-5xl leading-none align-baseline">
                    99
                  </span>
                  <span className="text-2xl leading-none align-baseline">
                    .99
                  </span>
                </div>
                <div className="inline-block align-bottom">
                  <a href="/shop/aero">
                    <button className="bg-green-600/40 border border-green-700/50 opacity-75 hover:opacity-100 text-black hover:text-gray-950 rounded-full px-10 py-2 mt-2 font-semibold">
                      <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
