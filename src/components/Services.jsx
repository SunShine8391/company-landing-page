import Service from "./Service";

export default function Services() {
  return (
    <div className=" p-2 md:container md:mx-auto mb-10">
      <div className=" my-3 mb-10">
        <h1 className=" text-xl font-bold my-2 lg:text-3xl">
          Our <span className=" text-primary">Services</span>
        </h1>
        <p className="text-sm text-gray lg:text-lg">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration
        </p>
      </div>
      <div className=" grid grid-cols-1 grid-rows-4 text-sm p-2 gap-10 md:p-0 md:text-lg md:grid-cols-2 md:grid-rows-2">
        <Service src="/images/s1.png" title="AIR TRANSPORT" />

        <Service src="/images/s2.png" title="CARGO TRANSPORT" />

        <Service src="/images/s3.png" title="TRUCKS TRANSPORT" />

        <Service src="/images/s4.png" title="TRAIN TRANSPORT" />
      </div>
    </div>
  );
}
