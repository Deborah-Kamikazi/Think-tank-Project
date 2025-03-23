import Image from "next/image";
import Container from "@/src/components/Container";
import { Instagram, Linkedin } from "@/src/components/Icons";
import { TeamMembers } from "../team/team";

export default function AboutUs() {
  return (
    <Container>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl lg:text-4xl text-primary font-bold tracking-tight text-center">
          Meet our team
        </h2>
        <p className="mt-6 text-lg leading-8 text-zinc-600 text-center">
          We&rsquo;re a dynamic and diverse group of passionate individuals
          committed to enhancing education and empowering women through
          innovative technology. By uniting experts from various fields, our
          team brings a wealth of experience in education and technology
          development to create transformative opportunities for women in
          education
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20">
        {TeamMembers.map((member, index) => (
          <section
            key={index}
            className="py-12 px-6 md:px-8 lg:px-12 border-b odd:border-r last-of-type:border-b-0 border-primary border-opacity-50 grid lg:grid-cols-3 items-center gap-6"
          >
            <div className="p-3">
              <div className="w-28 h-28 xl:w-40 xl:h-40 relative bg-gray-300 rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <h5 className="mt-4 text-base font-semibold text-primary uppercase">
                {member.name}
              </h5>
              <p className="text-zinc-600 text-xs py-3">{member.mission}</p>
              <p className="text-sm text-zinc-600 font-medium">
                {member.title}
              </p>
              <div className="mt-6 flex gap-x-4 text-zinc-700">
                <a href={member.socials.insta} target="_blank" rel="noopener">
                  <span className="sr-only">Instagram</span>
                  <Instagram size={20} />
                </a>
                <a
                  href={member.socials.linkedIn}
                  target="_blank"
                  rel="noopener"
                >
                  <span className="sr-only">Linkedin</span>
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}
