import Image from "next/image";
import Container from "@/src/components/Container";
import { TeamMembers } from "./team";
import { Instagram, Linkedin } from "@/src/components/Icons";

export default function Team() {
  return (
    <Container>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight sm:text-2xl text-center">
          Meet our team
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
          We&rsquo;re a dynamic and diverse group of passionate individuals
          dedicated to transforming education through technology. Bringing
          together experts from various fields, our team boasts a wealth of
          experience in education and technology development.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {TeamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-3xl p-10 flex flex-col items-center"
          >
            <div className="w-64 h-64 relative bg-gray-300 rounded-full">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-base text-gray-300">{member.name}</h3>
            <div className="mt-6 flex gap-x-4 text-gray-400">
              <a href={member.socials.insta} target="_blank" rel="noopener">
                <span className="sr-only">Instagram</span>
                <Instagram size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
