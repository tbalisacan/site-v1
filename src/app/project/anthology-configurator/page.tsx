import { Container } from "@/components/ui/container";
import { FiChevronRight, FiCheck } from "react-icons/fi";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative pt-32 pb-64 md:pt-48 md:pb-72">
        <Container>
          <div className="max-w-3xl flex flex-col space-y-8">
            <h1 className="font-bold text-gray-800 dark:text-gray-300 leading-none text-3xl sm:text-4xl bg-opacity-50 font-heading">
              Anthology Configurator
            </h1>
            <div>
              <div className="col-span-5 flex flex-col space-y-5 ">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <h2 className="text-gray-800 dark:text-gray-300 font-heading text-sm font-bold mb-1">
                  Roles
                </h2>
                <ul className=" flex flex-col space-y-2">
                  <li className="flex gap-2">
                    <span aria-hidden className="pt-1 text-primary flex-none">
                      <FiCheck />
                    </span>{" "}
                    <span>
                      <span className="font-bold">Front-end Developer</span>
                      <p className="text-sm">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-gray-800 dark:text-gray-300 font-heading text-sm font-bold mb-1">
                  Team Shoutouts
                </h2>
                <ul className="flex flex-col space-y-2">
                  <li className="flex gap-2">
                    <span aria-hidden className="pt-1 text-primary flex-none">
                      <FiChevronRight />
                    </span>{" "}
                    <span>
                      <span className="font-bold">WebriQ</span>
                      <p className="text-sm">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span aria-hidden className="pt-1 text-primary flex-none">
                      <FiChevronRight />
                    </span>{" "}
                    <span>
                      <span className="font-bold">Belwith Marketing</span>
                      <p className="text-sm">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-24">
            {images?.map((item, i) => (
              <div
                className="rounded-xl border dark:border-white/10 dark:bg-black/10 group shadow-box-inset p-7"
                key={i}
              >
                <div className="duration:300 transition aspect-[80/57] relative">
                  <Image
                    src={item?.path}
                    fill
                    className="object-cover "
                    alt={item?.alt ?? "thumbnail"}
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </div>
            ))}
            <div className="rounded-xl border dark:border-white/10 dark:bg-black/10 group shadow-box-inset p-7 grid grid-cols-1 sm:grid-cols-4 gap-7">
              {mobileImages?.map((item, i) => (
                <div
                  className="rounded-xl overflow-hidden w-full max-w-3xs mx-auto sm:max-w-full"
                  key={i}
                >
                  <div className="duration:300 transition aspect-[390/777] relative">
                    <Image
                      src={item?.path}
                      fill
                      className="object-cover "
                      alt={item?.alt ?? "thumbnail"}
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

const images = [
  {
    path: "/images/dev-work/anthology-configurator/1.jpg",
    alt: "",
  },
  {
    path: "/images/dev-work/anthology-configurator/2.jpg",
    alt: "",
  },
  {
    path: "/images/dev-work/anthology-configurator/3.jpg",
    alt: "",
  },
  {
    path: "/images/dev-work/anthology-configurator/4.jpg",
    alt: "",
  },
];

const mobileImages = [
  {
    path: "/images/dev-work/anthology-configurator/mobile-1.jpg",
    alt: "",
  },
  {
    path: "/images/dev-work/anthology-configurator/mobile-2.jpg",
    alt: "",
  },
  {
    path: "/images/dev-work/anthology-configurator/mobile-3.jpg",
    alt: "",
  },
  {
    path: "/images/dev-work/anthology-configurator/mobile-4.jpg",
    alt: "",
  },
];
