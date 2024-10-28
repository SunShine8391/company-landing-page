import Image from "next/image";

export default function TrackSection() {
  return (
    <div className=" mb-10 relative">
      <div className=" w-full h-full">
        <Image
          src="/images/track-bg.jpg"
          alt="track image"
          width={2000}
          height={2000}
          className=" max-w-full min-h-[450px] bg-cover brightness-50"
          priority
        />
      </div>

      <div className=" absolute top-0 left-0  z-10 text-white p-10">
        <div className=" container mx-auto">
          <h1 className=" text-lg mb-3 z-10 font-bold lg:text-3xl lg:mb-8">
            Track Your Shipment
          </h1>
          <p className=" text-sm mb-3 w-full lg:mb-8 lg:text-lg lg:w-[40%]">
            Iste reprehenderit maiores facilis saepe cumque molestias. Labore
            iusto excepturi, laborum aliquid pariatur veritatis autem, mollitia
            sint nesciunt hic error porro. Deserunt officia unde repellat beatae
            ipsum sed. Aperiam tempora consectetur voluptas magnam maxime
            asperiores quas similique repudiandae, veritatis reiciendis harum
            fuga atque.
          </p>
          <div className=" lg:flex">
            <input
              type="text"
              placeholder="Enter Your Tracking Number"
              className=" p-3 mb-3"
            />
            <div className="btn">
              <button
                aria-label="track-button"
                className=" bg-primary text-white p-3"
              >
                TRACK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
