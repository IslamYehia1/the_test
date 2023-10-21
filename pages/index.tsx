import { Editor, Frame, Element } from "@craftjs/core";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { NextSeo } from "next-seo";
import React from "react";

import { Viewport, RenderNode } from "../components/editor";
import { Container, Text } from "../components/selectors";
import { Button } from "../components/selectors/Button";
import { Custom1, OnlyButtons } from "../components/selectors/Custom1";
import { Custom2, Custom2VideoDrop } from "../components/selectors/Custom2";
import { Custom3, Custom3BtnDrop } from "../components/selectors/Custom3";
import { Video } from "../components/selectors/Video";
import Image from "components/editor/Toolbar/Image";
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "acumin-pro",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
  palette: {
    text: {
      primary: "#808080",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="h-full h-screen">
        <NextSeo
          title="Craft.js"
          description="A React framework for building drag-n-drop page editors."
          canonical="https://craft.js.org/"
          twitter={{
            site: "craft.js.org",
            cardType: "summary_large_image",
          }}
        />
        <Editor
          resolver={{
            Container,
            Text,
            Custom1,
            Custom2,
            Custom2VideoDrop,
            Custom3,
            Custom3BtnDrop,
            OnlyButtons,
            Button,
            Video,
            Image,
          }}
          enabled={false}
          onRender={RenderNode}
        >
          <Viewport>
            <Frame>
              <Element
                canvas
                is={Container}
                width="800px"
                height="auto"
                background={{ r: 255, g: 255, b: 255, a: 1 }}
                padding={["40", "0", "40", "0"]}
                custom={{ displayName: "App" }}
              >
                <Element
                  canvas
                  is={Container}
                  flexDirection="row"
                  width="100%"
                  height="auto"
                  padding={["40", "40", "40", "40"]}
                  margin={["0", "0", "40", "0"]}
                  custom={{ displayName: "Introduction" }}
                >
                  <Element
                    canvas
                    is={Container}
                    width="40%"
                    height="100%"
                    padding={["0", "20", "0", "20"]}
                    custom={{ displayName: "Heading" }}
                  >
                    <Text
                      fontSize="18"
                      fontWeight="400"
                      text="Hello Team, this is prototype quickly hacked together as a test."
                    ></Text>
                    <Button background={"#2D9D78"} />
                  </Element>
                  <Element
                    canvas
                    is={Container}
                    width="60%"
                    height="100%"
                    padding={["0", "20", "0", "20"]}
                    custom={{ displayName: "Description" }}
                  >
                    <Video />
                    <Text
                      fontSize="16"
                      fontWeight="400"
                      text="Just my favourite song"
                    ></Text>
                  </Element>
                </Element>

                <Element
                  canvas
                  is={Container}
                  background={{ r: 39, g: 41, b: 41, a: 1 }}
                  flexDirection="column"
                  width="100%"
                  height="auto"
                  padding={["40", "40", "40", "40"]}
                  margin={["0", "0", "40", "0"]}
                  custom={{ displayName: "ComplexSection" }}
                >
                  <Element
                    canvas
                    background={{
                      r: 76,
                      g: 78,
                      b: 78,
                      a: 0,
                    }}
                    is={Container}
                    flexDirection="row"
                    margin={["0", "0", "0", "0"]}
                    width="100%"
                    height="auto"
                    alignItems="center"
                    custom={{ displayName: "Wrapper" }}
                  >
                    <Element
                      canvas
                      background={{
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0,
                      }}
                      is={Container}
                      alignItems="center"
                      padding={["0", "0", "0", "0"]}
                      flexDirection="row"
                      width="350px"
                      height="250px"
                      custom={{ displayName: "Square" }}
                    >
                      <Image src="https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?cs=srgb&dl=pexels-pixabay-265667.jpg&fm=jpg&w=640&h=413" />
                    </Element>
                    <Element
                      canvas
                      background={{
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0,
                      }}
                      is={Container}
                      padding={["0", "0", "0", "20"]}
                      flexDirection="column"
                      width="55%"
                      height="100%"
                      fillSpace="yes"
                      custom={{ displayName: "Content" }}
                    >
                      <Text
                        color={{
                          r: "255",
                          g: "255",
                          b: "255",
                          a: "1",
                        }}
                        margin={["0", "0", "18", "0"]}
                        fontSize="20"
                        text="You can customize anything using this set of tools"
                      ></Text>
                      <Text
                        color={{
                          r: "255",
                          g: "255",
                          b: "255",
                          a: "1",
                        }}
                        margin={["0", "0", "18", "0"]}
                        fontSize="16"
                        text="This demo is built using all open source tools"
                      ></Text>
                    </Element>
                  </Element>
                </Element>
              </Element>
            </Frame>
          </Viewport>
        </Editor>
      </div>
    </ThemeProvider>
  );
}

export default App;
