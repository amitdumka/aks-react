import React from "react";
import {useSubheader} from "../../_aks/layout";

export const MyPage = () => {
  const subheader = useSubheader();
  subheader.setTitle(" My Page");
  return (<>
  <div>Welcome to eStore </div>
  {subheader && subheader.title}
  </>);
};
