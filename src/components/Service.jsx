import Image from "next/image";

export default function Service({ src, title }) {
  return (
    <div className="bg-subgray p-5 h-fit rounded-md md:h-full lg:flex lg:justify-evenly lg:items-center">
      <div className=" mb-10 lg:mb-0 w-[120px] min-w-[75px] h-[75px] mr-[25px]">
        <Image
          src={src}
          alt="service image"
          width={75}
          height={100}
          className=" max-w-full max-h-full"
          priority
        />
      </div>
      <div className=" lg:ml-10">
        <h1 className=" my-3">{title}</h1>
        <p className=" text-wrap my-3 w-full text-[1rem]">
          fact that a reader will be distracted by the readable content of a
          page when looking at its layout. The point of using
        </p>
        <p className=" cursor-pointer hover:text-primary w-full">Read More</p>
      </div>
    </div>
  );
}
