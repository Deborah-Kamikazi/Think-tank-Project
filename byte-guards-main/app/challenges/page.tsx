import Image from "next/image";
import Container from "@/src/components/Container";
import { CHALLENGES } from "./challenges";

export default function Challenges() {
  return (
    <Container>
      <div className="grid grid-col-1 gap-20 my-10">
        {CHALLENGES.map((challenge, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16`}
          >
            <div
              className={`video h-96 relative rounded-xl bg-gray-200 ${
                index % 2 !== 0 ? "md:order-last" : ""
              }`}
            >
              {challenge.image ? (
                <Image
                  src={challenge.image}
                  alt={challenge.title}
                  fill
                  className="rounded-xl object-cover"
                />
              ) : (
                <iframe
                  className="w-full h-96 rounded-xl"
                  src={challenge.link}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
            <div className="desc flex flex-col justify-center">
              <h3 className="mt-4 text-2xl lg:text-3xl font-bold">
                {challenge.title}
              </h3>
              <p className="mt-8 text-base text-gray-500">
                {challenge.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
