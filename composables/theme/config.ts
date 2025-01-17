import tinycolor from "tinycolor2";

export const themeOverrides = () => {
  const root = document.documentElement;

  const primaryColor = tinycolor("#1877F2");
  const infoColor = tinycolor("#1da1f2");

  root.style.setProperty("--primary-color", primaryColor.toHexString());

  return {
    common: {
      primaryColor: primaryColor.toHexString(),
      primaryColorHover: primaryColor.lighten(5).toHexString(),
      primaryColorPressed: primaryColor.darken(20).toHexString(),
      primaryColorSuppl: primaryColor.desaturate(20).spin(10).toRgbString(),
      infoColor: infoColor.toHexString(),
      infoColorHover: infoColor.lighten(10).toHexString(),
      infoColorPressed: infoColor.darken(10).toHexString(),
      infoColorSuppl: infoColor.desaturate(20).spin(10).toRgbString(),
    },
  };
};
