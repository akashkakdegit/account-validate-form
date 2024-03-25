import React, { useState } from "react";
import HeaderTab from "./component/headerTab/HeaderTab";
import SidebarTabs from "./component/sidebarTabs/SidebarTabs";

const App = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const [backTabIndex, setBackTabIndex] = useState(1);
  console.log(tabIndex);
  console.log(backTabIndex);
  return (
    <>
      <HeaderTab tabIndex={tabIndex} setBackTabIndex={setBackTabIndex} />
      <SidebarTabs backTabIndex={backTabIndex} setTabIndex={setTabIndex} />
    </>
  );
};

export default App;
