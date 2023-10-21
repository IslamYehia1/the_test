import React from "react";
import styled from "styled-components";

const SidebarItemDiv = styled.div<{ visible?: boolean; height?: string }>`
  height: ${"100%"};
  flex: ${(props) =>
    props.visible && props.height && props.height === "full" ? `1` : "unset"};
  color: white;
`;
// color: #545454;

export type SidebarItemProps = {
  title: string;
  height?: string;
  icon: string;
  visible?: boolean;
  onChange?: (bool: boolean) => void;
  children?: React.ReactNode;
};

const HeaderDiv = styled.div`
  color: #615c5c;
  height: 45px;
  background-color: #141414;
  border-bottom: 1px solid #272727;
  svg {
    fill: #707070;
  }
`;

export const SidebarItem: React.FC<SidebarItemProps> = ({
  visible,
  icon,
  title,
  children,
  height,
  onChange,
}) => {
  return (
    <SidebarItemDiv height={height} className="flex flex-col">
      <HeaderDiv
        onClick={() => {
          if (onChange) onChange(!visible);
        }}
        className={`cursor-pointer last:border-b-0 flex items-center px-2 ${
          visible ? "shadow-sm" : ""
        }`}
      >
        <div className="flex-1 flex items-center">
          {React.createElement(icon, { className: "w-4 h-4 mr-2" })}
          <h2 className="text-xs uppercase">{title}</h2>
        </div>
        {/* <Chevron visible={visible}>
          <Arrow />
        </Chevron> */}
      </HeaderDiv>
      {/* {visible ? ( */}
      <div className="w-full flex-1 overflow-auto">{children}</div>
      {/* ) : null} */}
    </SidebarItemDiv>
  );
};
