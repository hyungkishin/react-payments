import { styled } from "lib/stitches.config";

export const Wrapper = styled("div", {
  backgroundColor: "#fff",
  width: "375px",
  minWidth: "375px",
  height: "700px",
  position: "relative",
  borderRadius: "15px",
});

export const SubWrapper = styled("div", {
  height: "100%",
  padding: "16px 24px",
  variants: {
    flex: {
      no: {},
      yes: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  },
});

export const Input = styled("input", {
  backgroundColor: "#ecebf1",
  height: "45px",
  width: "100%",
  textAlign: "center",
  outline: "2px solid transparent",
  outlineOffset: "2px",
  borderColor: "#9ca3af",
  border: "none",
  borderRadius: "0.25rem",
  marginRight: "8px",
  variants: {
    width: {
      w_100: {
        width: "100%",
      },
      w_75: {
        width: "75%",
      },
      w_50: {
        width: "50%",
      },
      w_25: {
        width: "25%",
      },
      w_15: {
        width: "15%",
      },
    },
  },
});

export const InputContainer = styled("div", {
  margin: "16px 0",
});

export const InputTitle = styled("span", {
  display: "flex",
  alignItems: "center",

  fontSize: "12px",
  lineHeight: "14px",

  marginBottom: "4px",

  color: "#525252",
});
