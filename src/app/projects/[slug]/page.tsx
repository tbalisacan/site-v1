import { notFound } from "next/navigation";
import { projects } from "@/lib/constants";
import { Project, ProjectRole, ImageType, ProjectTeam } from "@/types";
import { Container } from "@/components/ui/container";
import React from "react";
import Image from "next/image";
import { RiArrowRightSLine, RiCheckLine } from "react-icons/ri";

export default async function Post(props: Params) {
  const params = await props.params;
  const content = projects?.find((item) => item?.slug === params.slug);

  if (!content) {
    return notFound();
  }

  const { title, desc, roles, team, images, mobileImages }: Project = content;

  return (
    <section className="relative pt-32 pb-64 md:pt-48 md:pb-72">
      <Container>
        <div className="max-w-3xl flex flex-col space-y-8">
          <h1 className="font-bold text-gray-800 dark:text-gray-300 leading-none text-3xl sm:text-4xl bg-opacity-50 font-heading">
            {title}
          </h1>
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
              <h2 className="text-gray-800 dark:text-gray-300 font-heading text-sm font-bold mb-1">
                Roles
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
                        <p className="text-sm">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {team && (
              <div>
                <h2 className="text-gray-800 dark:text-gray-300 font-heading text-sm font-bold mb-1">
                  Team Shoutouts
                </h2>
                <ul className="flex flex-col space-y-2">
                  {team?.map((team: ProjectTeam, i: number) => (
                    <li className="flex gap-2" key={`team-${i}`}>
                      <span aria-hidden className="pt-1 text-primary flex-none">
                        <RiArrowRightSLine />
                      </span>{" "}
                      <span>
                        <span className="font-bold">{team?.name}</span>
                        {team?.desc && <p className="text-sm">{team?.desc}</p>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        {(images || mobileImages) && (
          <div className="grid grid-cols-1 gap-6 mt-24">
            {images && (
              <>
                {images?.map((image: ImageType, i: number) => (
                  <div
                    className="rounded-xl border dark:border-white/10 group p-7 relative overflow-hidden"
                    key={i}
                  >
                    <div className="border-2 dark:border-white/10 rounded-lg overflow-hidden relative z-10">
                      <div
                        className="px-3 py-3 w-full bg-foreground dark:bg-border flex space-x-1"
                        aria-hidden
                      >
                        {new Array(3).fill(undefined).map((_, i) => (
                          <span
                            key={i}
                            className="w-2 h-2 rounded-full border dark:border-white/20"
                          />
                        ))}
                      </div>
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
                    <div className="absolute w-full h-[calc(100%-0.5px)] inset-0 bg-gradient-to-b from-black/15 dark:from-white/5 dark:to-black/10 to-muted" />
                  </div>
                ))}
              </>
            )}
            {mobileImages?.length && (
              <div className="rounded-xl border dark:border-white/10 group p-7 grid grid-cols-1 sm:grid-cols-4 gap-7 relative overflow-hidden">
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
      </Container>
    </section>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};
