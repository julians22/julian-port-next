import { Layouts } from "react-grid-layout";

export const layouts: Record<string, Layouts> = {
  all: {
    lg: [
      { i: "avatar", x: 0, y: 0, w: 2, h: 2 },
      { i: "themeSwitch", x: 2, y: 0, w: 1, h: 2 },
      { i: "mapComponent", x: 3, y: 0, w: 1, h: 2 },
      { i: "iconCloud", x: 0, y: 1, w: 1, h: 2 },
      { i: "paper", x: 1, y: 1, w: 2, h: 2 },
      { i: "project-slider", x: 0, y: 2, w: 4, h: 2 },
    ],
    md: [
      { i: "avatar", x: 0, y: 0, w: 2, h: 2 },
      { i: "themeSwitch", x: 1, y: 1, w: 1, h: 2 },
      { i: "mapComponent", x: 2, y: 1, w: 1, h: 2 },
      { i: "iconCloud", x: 2, y: 3, w: 1, h: 2 },
      { i: "paper", x: 3, y: 4, w: 1, h: 2 },
    ],
    sm: [
      { i: "avatar", x: 0, y: 0, w: 2, h: 2 },
      { i: "themeSwitch", x: 0, y: 1, w: 1, h: 1 },
      { i: "chatBot", x: 0, y: 3, w: 2, h: 1 },
      { i: "paper", x: 0, y: 7, w: 1, h: 1 },
      { i: "mapComponent", x: 0, y: 6, w: 2, h: 1 },
    ],
    xs: [
      { i: "avatar", x: 0, y: 0, w: 2, h: 2 },
      { i: "themeSwitch", x: 0, y: 1, w: 1, h: 1 },
      { i: "iconCloud", x: 0, y: 6, w: 1, h: 1 },
      { i: "paper", x: 0, y: 7, w: 1, h: 1 },
      { i: "mapComponent", x: 0, y: 6, w: 2, h: 1 },
    ],
    xxs: [
      { i: "avatar", x: 0, y: 0, w: 2, h: 2 },
      { i: "themeSwitch", x: 0, y: 1, w: 1, h: 1 },
      { i: "iconCloud", x: 0, y: 6, w: 1, h: 1 },
      { i: "paper", x: 0, y: 7, w: 1, h: 1 },
      { i: "mapComponent", x: 0, y: 6, w: 2, h: 1 },
    ],
  },

  about: {
    lg: [
      { i: "avatar", x: 0, y: 0, w: 2, h: 2 },
      { i: "mapComponent", x: 3, y: 1, w: 1, h: 2 },
      { i: "iconCloud", x: 1, y: 1, w: 1, h: 2 },
      { i: "themeSwitch", x: 0, y: 1, w: 1, h: 2 },
      { i: "paper", x: 1, y: 1, w: 1, h: 2 },
      { i: "project-slider", x: 3, y: 1, w: 2, h: 2 },
    ],
    md: [
      { i: "avatar", x: 0, y: 0, w: 2, h: 2 },
      { i: "iconCloud", x: 1, y: 1, w: 1, h: 2 },
      { i: "themeSwitch", x: 1, y: 2, w: 1, h: 2 },
      { i: "mapComponent", x: 2, y: 1, w: 1, h: 2 },
      { i: "paper", x: 0, y: 3, w: 1, h: 2 },
    ],
    sm: [
      { i: "avatar", x: 0, y: 0, w: 2, h: 2 },
      { i: "themeSwitch", x: 0, y: 6, w: 1, h: 1 },
      { i: "iconCloud", x: 0, y: 2, w: 1, h: 1 },
      { i: "mapComponent", x: 0, y: 3, w: 2, h: 1 },
      { i: "paper", x: 0, y: 6, w: 1, h: 1 },
    ],
    xs: [
      { i: "avatar", x: 0, y: 0, w: 2, h: 2 },
      { i: "themeSwitch", x: 0, y: 6, w: 1, h: 1 },
      { i: "iconCloud", x: 0, y: 2, w: 1, h: 1 },
      { i: "mapComponent", x: 0, y: 3, w: 2, h: 1 },
      { i: "paper", x: 0, y: 6, w: 1, h: 1 },
    ],
    xxs: [
      { i: "avatar", x: 0, y: 0, w: 2, h: 2 },
      { i: "themeSwitch", x: 0, y: 6, w: 1, h: 1 },
      { i: "iconCloud", x: 0, y: 2, w: 1, h: 1 },
      { i: "mapComponent", x: 0, y: 3, w: 2, h: 1 },
      { i: "paper", x: 0, y: 6, w: 1, h: 1 },
    ],
  },

  projects: {
    lg: [
      { i: "paper", x: 1, y: 1, w: 1, h: 2 },
      { i: "avatar", x: 0, y: 2, w: 2, h: 2 },
      { i: "iconCloud", x: 3, y: 3, w: 1, h: 2 },
      { i: "themeSwitch", x: 1, y: 3, w: 1, h: 2 },
      { i: "mapComponent", x: 2, y: 3, w: 1, h: 2 },
      { i: "project-slider", x: 0, y: 0, w: 4, h: 2 },
    ],
    md: [
      { i: "paper", x: 1, y: 1, w: 1, h: 2 },
      { i: "avatar", x: 0, y: 2, w: 2, h: 2 },
      { i: "iconCloud", x: 3, y: 3, w: 1, h: 2 },
      { i: "themeSwitch", x: 1, y: 3, w: 1, h: 2 },
      { i: "mapComponent", x: 2, y: 3, w: 1, h: 2 },
    ],
    sm: [
      { i: "avatar", x: 0, y: 5, w: 2, h: 2 },
      { i: "themeSwitch", x: 1, y: 4, w: 1, h: 1 },
      { i: "paper", x: 1, y: 3, w: 1, h: 1 },
      { i: "iconCloud", x: 0, y: 8, w: 1, h: 1 },
      { i: "mapComponent", x: 0, y: 7, w: 2, h: 1 },
    ],
    xs: [
      { i: "avatar", x: 0, y: 5, w: 2, h: 2 },
      { i: "themeSwitch", x: 1, y: 4, w: 1, h: 1 },
      { i: "paper", x: 1, y: 3, w: 1, h: 1 },
      { i: "iconCloud", x: 0, y: 8, w: 1, h: 1 },
      { i: "mapComponent", x: 0, y: 7, w: 2, h: 1 },
    ],
    xxs: [
      { i: "avatar", x: 0, y: 5, w: 2, h: 2 },
      { i: "themeSwitch", x: 1, y: 4, w: 1, h: 1 },
      { i: "paper", x: 1, y: 3, w: 1, h: 1 },
      { i: "iconCloud", x: 0, y: 8, w: 1, h: 1 },
      { i: "mapComponent", x: 0, y: 7, w: 2, h: 1 },
    ],
  },
};

export const selectedCard: Record<string, Record<string, boolean>> = {
  all: {
    avatar: true,
    themeSwitch: true,
    mapComponent: true,
    iconCloud: true,
    paper: true,
    "project-slider": true,
  },
  about: {
    avatar: true,
    themeSwitch: false,
    mapComponent: true,
    iconCloud: true,
    paper: false,
  },
  projects: {
    avatar: false,
    themeSwitch: false,
    mapComponent: false,
    iconCloud: false,
    paper: true,
  },
};
