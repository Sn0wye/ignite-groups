import { defaultTheme } from '@theme/default';
import 'styled-components/native';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
