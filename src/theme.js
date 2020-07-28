import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3e2723",
    },
    secondary: {
      main: "#ff8f00",
    },
    error: {
      main: "#c62828",
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
