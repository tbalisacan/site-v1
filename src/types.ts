import React from "react";
import { IconType } from "react-icons/lib";

export interface NavItem {
  name: string;
  link: string;
}

export interface Project {
  idx: number;
  title: string;
  slug: string;
  coverImage?: string;
  shortDesc?: string;
  desc?: React.ReactNode;
  roles?: ProjectRole[];
  team?: ProjectTeam[];
  images?: ImageType[];
  mobileImages?: ImageType[];
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

export interface ImageType {
  path: string;
  alt: string;
}

export interface DesignProject {
  title: string;
  link: string;
  thumbnail?: string;
  bgColor?: string;
  key?: string | number;
}

export interface Job {
  company: string;
  logo?: string;
  duration: string;
  position: string;
  duties: string[];
}

export interface ContactDetails {
  email?: string;
  phone?: string;
  links?: IconLink[];
  filePath?: string;
}

export interface IconWithName {
  id: number;
  name: string;
  icon?: IconType;
  // icon?: ReactNode;
}

export interface IconLink extends IconWithName {
  link?: string;
  target?: string;
}
