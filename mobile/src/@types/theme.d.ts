import { THEME } from "../styles/theme";

declare module 'native-base' {
  type CustomThemeType = typeof THEME
  interface ICustomTheme extends CustomThemeType {}
}
