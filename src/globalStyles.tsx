import GlobalStyles from "@mui/material/GlobalStyles";

export const inputGlobalStyles = (
  <GlobalStyles
    styles={{
      ["html, body"]: {
        margin: 0,
        padding: 0,
        height: "100%",
        width: "100%",
      },
      ["*"]: {
        boxSizing: "border-box",
        scrollbarColor: "#7177F8 #E7E8FE",
        scrollbarWidth: "thin",
      },
      ["#root"]: {
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        color: "black",
      },
      ["a"]: {
        textDecoration: "none",
        color: "initial",
      },
      ["ul"]: {
        padding: "10px",
        margin: "10px",
      },
      ["input::-webkit-outer-spin-button, input::-webkit-inner-spin-button"]: {
        "-webkit-appearance": "none",
        margin: 0,
      },
      ["input[type=number]"]: {
        "-moz-appearance": "textfield",
      },
      ['input[type="date"]::-webkit-calendar-picker-indicator']: {
        background: "transparent",
        bottom: 0,
        color: "transparent",
        cursor: "pointer",
        height: "auto",
        left: 0,
        position: "absolute",
        right: 0,
        top: 0,
        width: "auto",
      },
    }}
  />
);
