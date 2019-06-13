import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        primary:  string,
      secondary:  string,
        success:  string,
           info:  string,
        warning:  string,
         danger:  string,
           blue:  string,
         indigo:  string,
         purple:  string,
           pink:  string,
            red:  string,
         orange:  string,
         yellow:  string,
          green:  string,
           teal:  string,
           cyan:  string,
          white:  string,
           gray:  string,
           dark:  string,
       grayDark:  string,
          light:  string,
          //  dark:  string,
          //  bpXS:  string,
          //  bpSM:  string,
          //  bpMD:  string,
          //  bpLG:  string,
          //  bpXL:  string,
    }
  }
}