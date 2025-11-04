export interface Color {
  name: string;
  hex: string;
  cssClass: string;
}

export const primaryColors: Color[] = [
  { name: "Orange", hex: "#FA9819", cssClass: "orange" },
  { name: "Blue Tint", hex: "#B6C9CF", cssClass: "blue-tint" },
  { name: "White", hex: "#FFFFFF", cssClass: "white" },
  { name: "Baby Blue", hex: "#C6EBF7", cssClass: "baby-blue" },
];

export const secondaryColors: Color[] = [
  { name: "Navy", hex: "#1E3D59", cssClass: "navy" },
  { name: "Caption", hex: "#48749E", cssClass: "caption" },
  { name: "Sky Blue", hex: "#DEEEFE", cssClass: "sky-blue" },
  { name: "Off-blue", hex: "#E8EBEF", cssClass: "off-blue" },
  { name: "Deep Orange", hex: "#CD4900", cssClass: "deep-orange" },
  { name: "Black", hex: "#040404", cssClass: "black" },
  { name: "Dark Grey", hex: "#A3A3A3", cssClass: "dark-grey" },
  { name: "Grey", hex: "#F5F5E5", cssClass: "grey" },
];