const darkTheme = {
    colors: {
        primary: "#007bff",
        secondary: "#6c757d",
        success: "#28a745",
        info: "#17a2b8",
        warning: "#ffc107",
        danger: "#dc3545",
        light: "#f8f9fa",
        dark: "#343a40",
        blue: "#007bff",
        indigo: "#6610f2",
        purple: "#6f42c1",
        pink: "#e83e8c",
        red: "#dc3545",
        orange: "#fd7e14",
        yellow: "#ffc107",
        green: "#28a745",
        teal: "#20c997",
        cyan: "#17a2b8",
        white: "#fff",
        gray: "#6c757d",
        grayDark: "#343a40",
    },
};
const lightTheme = {
    colors: {
        primary: "#007bff",
        secondary: "#6c757d",
        success: "#28a745",
        info: "#17a2b8",
        warning: "#ffc107",
        danger: "#dc3545",
        light: "#f8f9fa",
        dark: "#343a40",
        blue: "#007bff",
        indigo: "#6610f2",
        purple: "#6f42c1",
        pink: "#e83e8c",
        red: "#dc3545",
        orange: "#fd7e14",
        yellow: "#ffc107",
        green: "#28a745",
        teal: "#20c997",
        cyan: "#17a2b8",
        white: "#fff",
        gray: "#6c757d",
        grayDark: "#343a40",
    },
};
export { darkTheme, lightTheme };
const common = {
    "activeText": "#2188c6" // rgb(33,139,198)
};
const dark = {
    ...common,
    "bgColor": "#000",
    "bgHeader": "#000",
    "bgSideBar": "#212121",
    "wg": "#212121",
    "link": "#e10050",
    "textColor": "#bebebe",
    "subText": "#bebebe",
    "headerShadow": "0 0 1.5rem rgb(62,166,255,0.5)",
    "themeToggler": "rgb(62,166,255)",
    "iconTheme": "#1bb",
    "bsLink": "rgb(97,218,251)",
    "IconBarsColor": "#e10050",
    "IconLightbulbColor": "#bebebe",
    "IconSearchColor": "rgb(62,166,255)",
    "IconTimesColor": "#fff",
};
const light = {
    ...common,
    "bgColor": "#fff",
    "bgHeader": "#303030",
    "bgSideBar": "white",
    "wg": "#212121",
    "link": "#e10050",
    "textColor": "#000",
    "subText": "#bebebe",
    "headerShadow": "0 0 1.5rem rgba(0,0,0,0.5)",
    "themeToggler": "#fff",
    "iconTheme": "#e10050",
    "bsLink": "rgb(97,218,251)",
    "IconBarsColor": "#e10050",
    "IconLightbulbColor": "#2188c6",
    "IconSearchColor": "#fff",
    "IconTimesColor": "#000",
};
// bootstrapLinkBlue #61dafb rgb(97,218,251)
// googleLinkBlue rgb(62,166,255)
const themesStore = {
    light,
    dark
};
export default themesStore;
//   --breakpoint-xs: 0;
//   --breakpoint-sm: 576px;
//   --breakpoint-md: 768px;
//   --breakpoint-lg: 992px;
//   --breakpoint-xl: 1200px;
//   --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
//   --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
