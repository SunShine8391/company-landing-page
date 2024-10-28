import Image from "next/image";

export default function AboutUs() {
  return (
    <div className=" container mx-auto mb-10">
      <div className=" grid grid-cols-1 p-5 lg:grid-cols-2 grid-rows-1 gap-10">
        <div className=" w-full">
          <h1 className="text-lg mb-4 lg:text-3xl lg:mb-8">
            About<span className=" text-primary">Us</span>
          </h1>
          <p className=" mb-8">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which donot look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there {" isn't "} anything embarrassing hidden in
            the middle of text. All
          </p>
          <button className=" bg-primary text-white px-5 py-3 rounded-sm">
            Read More
          </button>
        </div>
        <div className="about-image w-full relative">
          <Image
            src="/images/about-img.jpg"
            alt="about image"
            width={1000}
            height={1000}
            className=" w-[100%] z-10 relative"
            priority
          />
        </div>
      </div>
    </div>
  );
}
