import Container from "@/src/components/Container";
import Image from "next/image";
import React from "react";

export default function Gallery() {
  return (
    <Container>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-y-5">
          <div className="relative w-full h-1/2 bg-gray-300">
            <Image
              alt="team"
              src="/images/gallery/image1.webp"
              fill
              objectFit="cover"
            />
          </div>
          <div className="relative w-full h-1/2 bg-gray-300">
            <Image
              alt="team"
              src="/images/gallery/image2.webp"
              fill
              objectFit="cover"
            />
          </div>
        </div>
        <div className="relative w-full h-[480px] bg-gray-300">
          <Image
            alt="team"
            src="/images/gallery/image3.webp"
            fill
            objectFit="cover"
          />
        </div>
        <div className="relative w-full h-[480px] bg-gray-300">
          <Image
            alt="team"
            src="/images/gallery/image4.webp"
            fill
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="relative w-full h-1/2 bg-gray-300">
            <Image
              alt="team"
              src="/images/gallery/image5.webp"
              fill
              objectFit="cover"
            />
          </div>
          <div className="relative w-full h-1/2 bg-gray-300">
            <Image
              alt="team"
              src="/images/gallery/image6.webp"
              fill
              objectFit="cover"
            />
          </div>
        </div>

        <div className="relative col-span-2 h-[480px] bg-gray-300">
          <Image
            alt="team"
            src="/images/gallery/image7.webp"
            fill
            objectFit="cover"
          />
        </div>
        <div className="relative col-span-2 h-[480px] bg-gray-300">
          <Image
            alt="team"
            src="/images/gallery/image8.webp"
            fill
            objectFit="cover"
          />
        </div>
      </section>
    </Container>
  );
}
