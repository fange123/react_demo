import React, { ReactNode, useContext } from "react";
export interface IObj {
  username: string;
  age: number;
}

const obj: IObj = {
  username: "张海玉",
  age: 18,
};

const MyOwnContext = React.createContext<IObj | undefined>(undefined);

MyOwnContext.displayName = "MyContext";

const { Provider } = MyOwnContext;

export const MyProvider = ({ children }: { children: ReactNode }) => {
  return <Provider value={obj}>{children}</Provider>;
};

export const useMyContext = () => {
  return useContext(MyOwnContext) as IObj;
};
