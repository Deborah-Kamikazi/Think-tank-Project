import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./Container";
import { Youtube, Instagram } from "./Icons";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Challenges",
    href: "/challenges",
  },
];

export default function Footer() {
  return (
    <Container className="relative">
      <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-300 dark:border-trueGray-700 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div>
            <Link
              href="/"
              className="flex items-center text-primary space-x-2 text-2xl font-medium"
            >
              <span className="font-black"> visionary vibes </span>
            </Link>
          </div>

          <div className="max-w-md mt-4 text-neutral-600 ">
            We believe in the transformative power of technology to create
            educational experiences that transcend boundaries and empower
            students for a future of limitless possibilities.
          </div>
        </div>

        <div>
          <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
            {navigation.map((item, index) => (
              <p key={index} className="w-full px-4 py-2">
                <Link
                  href={item.href}
                  className="text-neutral-600 rounded-md  hover:text-primary-light focus:text-primary-light focus:outline-none"
                >
                  {item.name}
                </Link>
              </p>
            ))}
          </div>
        </div>

        <div className="">
          <div>Follow us</div>
          <div className="flex mt-5 space-x-5 text-gray-400 dark:text-neutral-600">
            <a
              href="https=htps://www.youtube.com/@VisionaryVibes-i7c"
              target="_blank"
              rel="noopener"
            >
              <span className="sr-only">Youtube</span>
              <Youtube />
            </a>
            <a
              href="https://www.instagram.com/_visinaryvibes_/"
              target="_blank"
              rel="noopener"
            >
              <span className="sr-only">Instagram</span>
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      <div className="my-10 text-sm text-center text-gray-600 ">
        Copyright © {new Date().getFullYear()}. visionary vibes.
      </div>
    </Container>
  );
}
