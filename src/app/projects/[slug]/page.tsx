import { notFound } from "next/navigation";
import { projects } from "@/lib/constants";
import { Project, ProjectRole, ImageType, ProjectTeam } from "@/types";
import { Container } from "@/components/ui/container";
import React from "react";
import Image from "next/image";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiArrowRightSLine,
  RiCheckLine,
} from "react-icons/ri";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function Post(props: Params) {
  const params = await props.params;
  const content = projects?.find((item) => item?.slug === params.slug);

  if (!content) {
    return notFound();
  }

  const {
    idx,
    title,
    launchDate,
    desc,
    roles,
    team,
    images,
    mobileImages,
  }: Project = content;

  const prev = projects?.find((item) => item?.idx === idx - 1) ?? null;
  const next = projects?.find((item) => item?.idx === idx + 1) ?? null;

  return (
    <>
      <section className="relative pt-32 md:pt-48">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60 z-20"
          fill="var(--primary)"
        />
        <Container className="relative z-20 min-h-96">
          <div className="max-w-3xl flex flex-col space-y-8">
            <div>
              <h1 className="font-bold text-heading-color leading-none text-3xl sm:text-4xl bg-opacity-50 font-heading">
                {title}
              </h1>
              {launchDate && (
                <p className="text-sm font-medium font-heading text-muted-foreground mt-1">
                  Launched {launchDate}
                </p>
              )}
            </div>
            {desc && (
              <div>
                <div
                  className="col-span-5 flex flex-col space-y-5"
                  dangerouslySetInnerHTML={{ __html: desc }}
                ></div>
              </div>
            )}
            <div className="grid grid-cols-1 gap-6">
              <div>
                <h2 className="text-heading-color font-heading text-sm font-bold mb-1.5">
                  My Role{roles?.length > 1 && "s"}
                </h2>
                <ul className=" flex flex-col space-y-2">
                  {roles.map((role: ProjectRole, i: number) => (
                    <li className="flex gap-2" key={`role-${i}`}>
                      <span aria-hidden className="pt-1 text-primary flex-none">
                        <RiCheckLine />
                      </span>{" "}
                      <span>
                        <span className="font-bold">{role.title}</span>
                        {role?.desc && (
                          <p
                            dangerouslySetInnerHTML={{ __html: role?.desc }}
                            className="text-sm"
                          />
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              {team && (
                <div>
                  <h2 className="text-heading-color font-heading text-sm font-bold mb-1.5">
                    Team Shoutouts
                  </h2>
                  <ul className="flex flex-col space-y-2">
                    {team?.map((team: ProjectTeam, i: number) => (
                      <li className="flex gap-2" key={`team-${i}`}>
                        <span
                          aria-hidden
                          className="pt-1 text-primary flex-none"
                        >
                          <RiArrowRightSLine />
                        </span>{" "}
                        <span>
                          <span className="font-bold">{team?.name}</span>
                          {team?.desc && (
                            <p className="text-sm">{team?.desc}</p>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </Container>

        <div className="absolute w-full h-96 max-h-full inset-0">
          <div className="absolute h-full bg-gradient-to-b from-transparent to-background w-full bottom-0 z-10"></div>
          <div
            className={cn(
              "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none opacity-5 dark:opacity-100",
              "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
            )}
          />
        </div>
      </section>
      <section className="mt-24 mb-36">
        <Container>
          {(images || mobileImages) && (
            <div className="grid grid-cols-1 gap-6">
              {images && (
                <>
                  {images?.map((image: ImageType, i: number) => (
                    <div
                      className="rounded-xl border group p-7 pb-0 relative overflow-hidden"
                      key={i}
                    >
                      <div className="border-2 rounded-lg rounded-b-none border-b-0 overflow-hidden relative z-10">
                        {/* <div
                        className="px-3 py-3 w-full bg-foreground dark:bg-border flex space-x-1"
                        aria-hidden
                      >
                        {new Array(3).fill(undefined).map((_, i) => (
                          <span
                            key={i}
                            className="w-2 h-2 rounded-full border dark:border-white/20"
                          />
                        ))}
                      </div> */}
                        <div className="duration:300 transition aspect-[80/57] relative">
                          <Image
                            src={image?.path}
                            fill
                            className="object-cover "
                            alt={image?.alt ?? "thumbnail"}
                            sizes="(min-width: 640px) 50vw, 100vw"
                          />
                        </div>
                      </div>
                      <div className="absolute w-full h-[calc(100%-0.5px)] inset-0 bg-gradient-to-b from-black/10 dark:from-white/10 dark:to-black/10 to-muted" />
                    </div>
                  ))}
                </>
              )}
              {mobileImages?.length && (
                <div className="rounded-xl border  group p-7 grid grid-cols-1 sm:grid-cols-4 gap-7 relative overflow-hidden">
                  {mobileImages?.map((mobileImage: ImageType, i: number) => (
                    <div
                      className="rounded-xl overflow-hidden w-full max-w-3xs mx-auto sm:max-w-full border-4 dark:border-foreground/10 border-foreground/20 relative z-10"
                      key={i}
                    >
                      <div className="duration:300 transition aspect-[390/777] relative">
                        <Image
                          src={mobileImage?.path}
                          fill
                          className="object-cover "
                          alt={mobileImage?.alt ?? "thumbnail"}
                          sizes="(min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                  ))}
                  <div className="absolute w-full h-[calc(100%-0.5px)] inset-0 bg-gradient-to-b from-black/15 dark:from-white/5 dark:to-black/10 to-muted" />
                </div>
              )}
            </div>
          )}
          <div className="mt-12 grid grid-cols-2">
            <div>
              {prev && (
                <div>
                  <p className="font-heading text-sm font-bold items-center gap-1 flex">
                    <RiArrowLeftLine /> Previous
                  </p>
                  <Link
                    href={`/projects/${prev?.slug}`}
                    className="font-bold text-primary font-heading ml-auto"
                  >
                    {prev.title}
                  </Link>
                </div>
              )}
            </div>
            <div className="text-right">
              {next && (
                <div>
                  <p className="font-heading text-sm font-bold items-center gap-1 flex justify-end">
                    Next <RiArrowRightLine />
                  </p>
                  <Link
                    href={`/projects/${next?.slug}`}
                    className="font-bold text-primary font-heading ml-auto"
                  >
                    {next.title}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};
