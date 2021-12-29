import { Global } from "@emotion/react"
const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "Zector";
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url("./fonts/zector/Zector.ttf");
      }
      `}
  />
)

export default Fonts