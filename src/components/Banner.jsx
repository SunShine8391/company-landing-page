import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative mb-10 bg-cover bg-center bg-no-repeat">
      <Image
        src="/images/slider-bg.jpg"
        alt="banner"
        className=" absolute w-full h-full brightness-50"
        width={1000}
        height={1000}
        priority
      />
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 z-30 brightness-100">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Let us find your
            <strong className="block font-extrabold"> Forever Home. </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="flext justify-center items-center w-full py-3">
            <a
              href="#"
              className="w-[300px] rounded px-12 py-3 text-sm font-medium bg-primary text-white shadow hover:opacity-90 focus:outline-none focus:ring"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
