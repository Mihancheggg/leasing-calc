import React from 'react';

//component
export const UniversalOutput = (props: UniversalOutputPropsType) => {
  return (
    <div>
      <p>{props.title}</p>
      <span>{props.value}</span>
    </div>
  );
};

//types
type UniversalOutputPropsType = {
  title: string,
  value: number
}
