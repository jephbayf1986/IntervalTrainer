import React from "react";
import { HasChildren } from "../types/HasChildren";

export interface IRenderIfProps extends HasChildren {
  condition: boolean;
  elseDisplay?: React.ReactNode;
}

export const RenderIf: React.FC<IRenderIfProps> = ({
  condition,
  elseDisplay,
  children,
}) => {
  return <>{condition ? children : elseDisplay}</>;
};
