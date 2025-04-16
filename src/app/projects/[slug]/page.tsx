import { notFound } from "next/navigation";
import { projects } from "@/lib/constants";
import { Project, ProjectRole, ImageType, ProjectTeam } from "@/types";
import { Container } from "@/components/ui/container";
import React, { JSX } from "react";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      <section className="relative pt-32 md:pt-48 overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60 z-20"
          fill="var(--primary)"
        />
        <Container className="relative z-20">
          <div>
            <div className="max-w-3xl">
              <div className="mb-8">
                <p className="uppercase font-heading font-bold text-heading-color mb-2">
                  <Link
                    href="/#works"
                    className="text-primary font-bold items-center gap-1 flex w-fit"
                  >
                    <RiArrowLeftLine />
                    Projects
                  </Link>
                </p>
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
                <div className="mb-8">
                  <div
                    className="col-span-5 flex flex-col space-y-5"
                    dangerouslySetInnerHTML={{ __html: desc }}
                  ></div>
                </div>
              )}
              <div className="grid grid-cols-1 gap-6">
                <div>
                  {!team && (
                    <>
                      <h2 className="font-heading font-bold mb-3">
                        My Role{roles?.length > 1 && "s"}
                      </h2>
                      <RoleList listItems={roles} />
                    </>
                  )}

                  {roles && team && (
                    <Accordion type="multiple">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                        <AccordionItem value="roles" className="h-fit">
                          <AccordionTrigger>
                            My Role{roles?.length > 1 && "s"}
                          </AccordionTrigger>
                          <AccordionContent>
                            <RoleList
                              listItems={roles}
                              icon={<RiCheckLine />}
                            />
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="team" className="h-fit">
                          <AccordionTrigger>Team Shoutout</AccordionTrigger>
                          <AccordionContent>
                            <RoleList
                              listItems={team}
                              icon={<RiArrowRightSLine />}
                            />
                          </AccordionContent>
                        </AccordionItem>
                      </div>
                    </Accordion>
                  )}
                </div>
              </div>
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
                      className="rounded-xl border group p-7 relative overflow-hidden"
                      key={i}
                    >
                      <div className="border-2 rounded-lg overflow-hidden relative z-10">
                        <div className="duration:300 transition aspect-[80/57] relative">
                          <Image
                            src={image?.path}
                            fill
                            className="object-cover object-top"
                            alt={image?.alt ?? "thumbnail"}
                            sizes="(min-width: 640px) 25vw, 50vw"
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
          <div className="mt-12 pb-2 border-b text-center">
            <Link
              href="/#works"
              className="text-primary font-bold items-center gap-1 flex w-fit"
            >
              <RiArrowLeftLine />
              Back to projects
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2">
            <div>
              {prev && (
                <div className="flex items-center space-x-4 relative w-fit">
                  <div className="border dark:shadow-inset p-2 rounded w-12 h-12 flex flex-none items-center justify-center">
                    <RiArrowLeftLine />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-bold items-center gap-1 flex">
                      Previous
                    </p>
                    <p className="leading-tight">
                      <Link
                        href={`/projects/${prev?.slug}`}
                        className="font-bold text-primary font-heading ml-auto after:absolute after:inset-0 after:w-full after:h-full"
                      >
                        {prev.title}
                      </Link>
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="text-right">
              {next && (
                <div className="flex items-center space-x-4 relative w-fit ml-auto">
                  <div>
                    <p className="font-heading text-sm font-bold items-center gap-1 flex justify-end">
                      Next
                    </p>
                    <p className="leading-tight">
                      <Link
                        href={`/projects/${next?.slug}`}
                        className="font-bold text-primary font-heading ml-auto after:absolute after:inset-0 after:w-full after:h-full"
                      >
                        {next.title}
                      </Link>
                    </p>
                  </div>
                  <div className="border dark:shadow-inset p-2 rounded w-12 h-12 flex flex-none items-center justify-center">
                    <RiArrowRightLine />
                  </div>
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

interface RoleListProps {
  listItems: ProjectRole[] | ProjectTeam[];
  icon?: JSX.Element;
}

const RoleList = ({ listItems, icon }: RoleListProps) => {
  return (
    <ul className=" flex flex-col space-y-4">
      {listItems.map((item, i) => (
        <li className="flex space-x-2" key={`item-${i}`}>
          <span aria-hidden className="pt-1 text-primary flex-none">
            {icon ?? <RiCheckLine />}
          </span>{" "}
          <span>
            <span className="font-bold block mb-1">{item?.name}</span>
            {item?.desc && (
              <p
                dangerouslySetInnerHTML={{ __html: item?.desc }}
                className="text-sm"
              />
            )}
          </span>
        </li>
      ))}
    </ul>
  );
};
