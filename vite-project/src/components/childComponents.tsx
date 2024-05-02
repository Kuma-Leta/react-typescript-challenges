import React from "react";
export const ChildOne: React.FC<string> = ({ propOne }) => {
  return (
    <>
      <div>this is {propOne}</div>
    </>
  );
};
export const ChildTwo: React.FC<string> = ({ propTwo }) => {
  return (
    <>
      <div>this is {propTwo}</div>
    </>
  );
};
export const ChildThree: React.FC<string> = ({ propThree }) => {
  return (
    <>
      <div>this is {propThree}</div>
    </>
  );
};
