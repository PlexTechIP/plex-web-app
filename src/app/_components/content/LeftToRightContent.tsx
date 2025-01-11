import React, { ReactNode } from "react";

interface LeftToRightContentProps {
  leftChildren: ReactNode;
  rightChildren: ReactNode;
  styles?: string;
}

const LeftToRightContent: React.FC<LeftToRightContentProps> = ({
  leftChildren,
  rightChildren,
  styles,
}) => {

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${styles}`}>
      <div>{leftChildren}</div>
      <div>{rightChildren}</div>
    </div>
  );
};

export default LeftToRightContent;
