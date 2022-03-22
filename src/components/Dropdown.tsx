import * as React from "react";
import styled, { css } from "styled-components";
import { useToggle } from "../custom-hooks/useToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useOnClickOutside } from "custom-hooks/useClickOutside";

interface Props {
  title: string;
  hasIcon?: boolean;
  children?: React.ReactNode;
}

export type DropdownRef = {
  toggleDropdown: () => void;
};

export const Dropdown = React.forwardRef<DropdownRef, Props>(
  ({ title, hasIcon, children }, ref) => {
    const [isCollapsed, toggleDropdown, setToggle] = useToggle(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);
    useOnClickOutside(dropdownRef, () => setToggle(false));
    React.useImperativeHandle(ref, () => ({
      toggleDropdown: () => toggleDropdown(),
    }));

    return (
      <RootDropown ref={dropdownRef}>
        <TitleContainer onClick={toggleDropdown}>
          {hasIcon && (
            <FontAwesomeIcon icon={isCollapsed ? faAngleUp : faAngleDown} />
          )}
          <Title>{title}</Title>
        </TitleContainer>
        <ContentContainer isVisible={isCollapsed}>{children}</ContentContainer>
      </RootDropown>
    );
  }
);

export const RootDropown = styled.div`
  min-width: 250px;
  position: relative;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 7px;
  cursor: pointer;
  border: 1px solid black;
`;

export const Title = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ContentContainer = styled.div<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  flex-direction: column;
  padding: 5px;
  max-height: 250px;
  overflow-y: auto;
  transition: 0.3s ease;
`;
