import { createMedia } from "@artsy/fresnel";

const AppMedia = createMedia({
  breakpoints: {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
  interactions: {
    hover: "(hover: hover)",
    notHover: "(hover: none)",
    landscape: "not all and (orientation: landscape)",
    portrait: "not all and (orientation: portrait)",
  },
});

export const { Media, MediaContextProvider, createMediaStyle } = AppMedia;
