import React from "react";

export interface Project {
  idx: number;
  title: string;
  slug: string;
  coverImage?: string;
  shortDesc?: string;
  desc?: React.ReactNode;
  roles?: ProjectRole[];
  team?: ProjectTeam[];
  images?: Image[];
  mobileImages?: Image[];
  bgColor?: string;
}

export interface ProjectRole {
  title: string;
  desc?: string;
}

export interface ProjectTeam {
  name: string;
  desc?: string;
}

export interface Image {
  path: string;
  alt: string;
}
