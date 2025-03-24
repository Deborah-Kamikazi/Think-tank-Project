"use client";

import Link from "next/link";
import Container from "../components/Container";
import Image from "next/image";
import OurJourney from "./about/OurJourney";

export default function Home() {
  return (
    <section id="home">
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2 bg-[url(/images/graphics/shades.png)] bg-top bg-contain bg-no-repeat">
          <div className="max-w-2xl py-12">
            <h1 className="text-2xl app-name font-bold lg:text-5xl uppercase">
              Visionary vibes
            </h1>
            <p className="py-10 text-sm leading-normal text-zinc-600 lg:text-base">
              Unlocking Potential, One Byte at a Time: Empowering Education to
              Shape Future Leaders and Transform Lives!
            </p>

            <Link
              href="/challenges"
              className="px-8 py-4 text-sm font-medium bg-primary text-white"
            >
              See our Challenges
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="h-96 w-full relative">
            <Image
              src={"/images/hero.svg"}
              fill
              className="object-contain"
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </Container>
      {/* mission statement */}
      <Container className="pt-8">
        <div
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
          id="mission"
        >
          <div className="flex flex-col items-center justify-center bg-[url(/images/graphics/mission-pattern.png)] bg-contain bg-no-repeat bg-bottom">
            <h4 className="text-3xl uppercase font-semibold text-primary">
              Mission <br />
              Statement
            </h4>
          </div>
          <div className="bg-[url(/images/graphics/green-circle.png)] min-h-[430px] bg-contain bg-no-repeat flex flex-col justify-center items-center py-24">
            <p className="text-2xl text-white max-w-[270px] text-center">
            Visionary Vibes empowers Rwandan women, especially in rural areas, through skills, resources, and community support.
            </p>
          </div>
        </div>
      </Container>
      {/* problem statement */}
      <Container className="py-28">
        <div className="flex gap-6 justify-between items-baseline pb-12">
          <div className="w-1/12 max-w-[60px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 80"
              fill="none"
            >
              <path
                d="M26.966 41.2338H11.3327C11.5993 56.8004 14.666 59.3671 24.2327 65.0338C25.3327 65.7004 25.6993 67.1004 25.0327 68.2338C24.3993 69.3338 22.966 69.7004 21.866 69.0338C10.5993 62.3671 6.66602 58.3004 6.66602 38.9338L6.66602 20.9671C6.66602 15.2671 11.2993 10.6671 16.966 10.6671H26.966C32.8327 10.6671 37.266 15.1004 37.266 20.9671V30.9671C37.266 36.8004 32.8327 41.2338 26.966 41.2338Z"
                fill="url(#paint0_linear_202_634)"
              />
              <path
                d="M63.0326 41.2338H47.3992C47.6659 56.8004 50.7326 59.3671 60.2992 65.0338C61.3992 65.7004 61.7659 67.1004 61.0992 68.2338C60.4326 69.3338 59.0326 69.7004 57.8992 69.0338C46.6326 62.3671 42.6992 58.3004 42.6992 38.9004L42.6992 20.9338C42.6992 15.2337 47.3325 10.6337 52.9992 10.6337H62.9992C68.8659 10.6337 73.2992 15.0671 73.2992 20.9338V30.9338C73.3326 36.8004 68.8992 41.2338 63.0326 41.2338Z"
                fill="url(#paint1_linear_202_634)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_202_634"
                  x1="41.9116"
                  y1="-356.752"
                  x2="-37.067"
                  y2="-353.49"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.25249" stopColor="#253929" />
                  <stop offset="0.637527" stopColor="#808080" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_202_634"
                  x1="77.945"
                  y1="-356.994"
                  x2="-1.03422"
                  y2="-353.734"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.25249" stopColor="#253929" />
                  <stop offset="0.637527" stopColor="#808080" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h4 className="uppercase text-primary font-semibold text-3xl text-center">
            Problem statement
          </h4>
          <div className="w-1/12 max-w-[60px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 80"
              fill="none"
            >
              <path
                d="M53.034 38.7662H68.6673C68.4007 23.1996 65.334 20.6329 55.7673 14.9662C54.6673 14.2996 54.3007 12.8996 54.9673 11.7662C55.6007 10.6662 57.034 10.2996 58.134 10.9662C69.4007 17.6329 73.334 21.6996 73.334 41.0662V59.0329C73.334 64.7329 68.7007 69.3329 63.034 69.3329H53.034C47.1673 69.3329 42.734 64.8996 42.734 59.0329V49.0329C42.734 43.1996 47.1673 38.7662 53.034 38.7662Z"
                fill="url(#paint0_linear_202_628)"
              />
              <path
                d="M16.9674 38.7662H32.6008C32.3341 23.1996 29.2674 20.6329 19.7008 14.9662C18.6008 14.2996 18.2341 12.8996 18.9008 11.7662C19.5674 10.6662 20.9674 10.2996 22.1008 10.9662C33.3674 17.6329 37.3008 21.6996 37.3008 41.0996V59.0662C37.3008 64.7663 32.6675 69.3663 27.0008 69.3663H17.0008C11.1341 69.3663 6.70078 64.9329 6.70078 59.0662V49.0662C6.66745 43.1996 11.1008 38.7662 16.9674 38.7662Z"
                fill="url(#paint1_linear_202_628)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_202_628"
                  x1="38.0884"
                  y1="436.752"
                  x2="117.067"
                  y2="433.49"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.25249" stopColor="#253929" />
                  <stop offset="0.637527" stopColor="#808080" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_202_628"
                  x1="2.05502"
                  y1="436.994"
                  x2="81.0342"
                  y2="433.734"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.25249" stopColor="#253929" />
                  <stop offset="0.637527" stopColor="#808080" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <p className="text-lg w-10/12 mx-auto text-zinc-600">
        In Mbandazi Village, Rusororo, many children and youth continually
         face limited educational opportunities due to inadequate teaching
          resources, untrained educators, and outdated methods, resulting
           in poor literacy and school retention rates. This problem affects
            approximately 500 students and their families, occurring daily
             in overcrowded classrooms with insufficient materials. It 
             persists due to poverty, low funding, and lack of community
              engagement, which restrict access to modern tools and professional
               development for teachers. This issue is very critical because it
                traps the community in a cycle of poverty, limiting future economic
                 and social growth. By addressing this, we aim to improve literacy
                  rates and increase retention by 15% within two years, aligning with Rwanda’s
                   Vision 2050 education goals. Resolving this will empower the community,
                    break poverty cycles, and foster sustainable development by 2027
        </p>
      </Container>
      {/* solution */}
      <div className="bg-primary text-white py-14 ">
        <Container>
          <div className="grid col-span-1 md:grid-cols-4 lg:grid-cols-7 items-center">
            <div className="hidden md:flex col-span-1 lg:col-span-2 items-center">
              <div className="h-2 w-2 rounded-full bg-white"></div>
              <hr className="w-full" />
            </div>
            <div className="col-span-2 lg:col-span-3">
              <h4 className="uppercase font-semibold text-3xl text-center">
                solution
              </h4>
            </div>
            <div className="hidden md:flex col-span-1 lg:col-span-2 items-center">
              <hr className="w-full" />
              <div className="h-2 w-2 rounded-full bg-white"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center pt-12">
            <div>
              <h6 className="uppercase font-semibold text-xl pb-5">Briefly</h6>
              <p className="text-base max-w-md">
              We will partner with universities to deliver relevant, in-demand courses for secondary students in Mbandazi Village, while allowing companies to post skills needs and provide internal training, enhancing educational quality and bridging the skills gap.
                while allowing companies to post skills need in employees and
                provide internal training on our platform.
              </p>
              <div className="pt-4 text-base">
                {/* link to prototype (open in new tab) */}
                <a
                  href="https://www.figma.com/proto/6YcdDtSkQAWJrqjZzo42P9/SKI-Sol?type=design&node-id=4-154&t=WXjifwuoSC5kRmDE-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=4%3A154"
                  target="_blank"
                  className="text-white font-bold underline"
                >
                  View Prototype
                </a>
              </div>
            </div>
            <div className="h-96 bg-[url(/images/graphics/egg.png)] bg-no-repeat flex flex-col justify-center">
              <p className="text-xl text-primary max-w-sm ml-20">
            We are addressing the skills gaps faced by high school students in Mbandazi Village by integrating technical skills training with job placement programs, ensuring better employability and helping break the cycle of poverty.
              </p>
            </div>
          </div>
        </Container>
      </div>
      {/* our journey */}
      <Container>
        <div className="grid col-span-1 md:grid-cols-4 lg:grid-cols-7 items-center pt-12">
          <div className="hidden md:flex col-span-1 lg:col-span-2 items-center">
            <div className="h-2 w-2 rounded-full bg-primary"></div>
            <hr className="w-full" />
          </div>
          <div className="col-span-2 lg:col-span-3">
            <h4 className="uppercase font-semibold text-3xl text-center">
              Our Journey
            </h4>
          </div>
          <div className="hidden md:flex col-span-1 lg:col-span-2 items-center">
            <hr className="w-full" />
            <div className="h-2 w-2 rounded-full bg-primary"></div>
          </div>
        </div>
        <div className="pt-10">
          <OurJourney />
        </div>
      </Container>
    </section>
  );
}
