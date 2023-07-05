import React from "react";
import ProductsDetail from "../page/ProductsDetail";
import { Navigate } from "react-router-dom";

// 컴포넌트 중에서 특정페이지로 강제 방향 설정하는 컴포넌트 {Navigate}

const PrevateRoute = ({ authenticate }) => {
  return authenticate == true ? <ProductsDetail /> : <Navigate to="/login" />;
};

export default PrevateRoute;
