import React from "react";
import { HasChildren } from "../../types/HasChildren";

export interface IRenderIfProps extends HasChildren {
  condition: boolean;
  elseDisplay?: React.ReactNode;
}

const RenderIf: React.FC<IRenderIfProps> = ({
  condition,
  elseDisplay,
  children,
}) => {
  return <>{condition ? children : elseDisplay}</>;
};

export default RenderIf;