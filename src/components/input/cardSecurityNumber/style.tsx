import { styled } from "@stitches/react";

export const HelpIcon = styled("div", {
  width: "25px",
  height: "25px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px gray",
  borderRadius: "25px",
});

export const SecureBox = styled("div", {
  display: "flex",
  alignItems: "center",
});

export const ToolTip = styled("span", {
  position: "absolute",
  background: "#ecebf1",
  borderRadius: ".4em",
  width: "140px",
  height: "71px",
  left: "43%",
  top: "65%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "&::after": {
    content: "",
    position: "absolute",
    bottom: "0",
    left: "0",
    top: "50%",
    width: "0",
    height: "0",
    border: "35px solid transparent",
    borderRightColor: "#ecebf1",
    borderLeft: "0",
    borderBottom: "0",
    marginTop: "-17.5px",
    marginLeft: "-14px",
  },
});
