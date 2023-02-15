import React from "react";
import styled from "styled-components/native";

export type ISpacerProps = {
  space: number;
};

export const Spacer: React.FC<ISpacerProps> = ({ space }) => {

  const StyledSeperator = styled.View`
    width: ${space}px;
  `;

  return <StyledSeperator />;
};
