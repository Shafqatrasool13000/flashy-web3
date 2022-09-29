import React from "react";

export type Encode_Data = {
  encodeData: string[];
  setEncodeData: React.Dispatch<React.SetStateAction<string[]>>;
};

export type Exchange_Items = { Component: React.ComponentType, name: string }[];

export type CubeBodyProps={
    getExchangeBox:(name:string)=>void
  }
