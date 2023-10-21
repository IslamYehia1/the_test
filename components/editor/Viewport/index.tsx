import { useEditor } from "@craftjs/core";
import cx from "classnames";
import React, { useEffect } from "react";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Toolbox } from "./Toolbox";
import styled from "styled-components";

const Container = styled("div")`
  background-color: #141414;
`;
const CanvasDiv = styled("div")`
  background-color: #0f0f0f;
`;

export const Viewport: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const {
    enabled,
    connectors,
    actions: { setOptions },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  useEffect(() => {
    if (!window) {
      return;
    }

    window.requestAnimationFrame(() => {
      // Notify doc site
      window.parent.postMessage(
        {
          LANDING_PAGE_LOADED: true,
        },
        "*"
      );

      setTimeout(() => {
        setOptions((options) => {
          options.enabled = true;
        });
      }, 200);
    });
  }, [setOptions]);

  return (
    <div className="viewport">
      <div
        className={cx(["flex h-full overflow-hidden flex-row w-full fixed"])}
      >
        <Toolbox />
        <Container className="page-container flex flex-1 h-full flex-col">
          <Header />
          <CanvasDiv
            className={cx([
              "craftjs-renderer flex-1 h-full w-full transition pb-8 overflow-auto",
              // {
              //   "bg-renderer-black": enabled,
              // },
            ])}
            ref={(ref) => connectors.select(connectors.hover(ref, null), null)}
          >
            <div className="relative flex-col flex items-center pt-8">
              {children}
            </div>
          </CanvasDiv>
        </Container>
        <Sidebar />
      </div>
    </div>
  );
};
