import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginHyobin from "./pages/hyobin/Login/Login";
import MainHyobin from "./pages/hyobin/Main/Main";

import LoginYuna from "./pages/yuna/Login/Login";
import MainYuna from "./pages/yuna/Main/Main";

import LoginTaeyoon from "./pages/taeyoon/Login/Login";
import MainTaeyoon from "./pages/taeyoon/Main/Main";

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-hyobin" element={<LoginHyobin />} />
        <Route path="/main-hyobin" element={<MainHyobin />} />
        <Route path="/login-yuna" element={<LoginYuna />} />
        <Route path="/main-yuna" element={<MainYuna />} />
        <Route path="/login-taeyoon" element={<LoginTaeyoon />} />
        <Route path="/main-taeyoon" element={<MainTaeyoon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
