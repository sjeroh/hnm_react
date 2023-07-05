import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./page/Login";
import ProductsDetail from "./page/ProductsDetail";
import ProductsAll from "./page/ProductsAll";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import PrevateRoute from "./route/PrevateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  // true 로그인 상태, false 로그아웃 상태
  useEffect(() => {
    console.log("로그인");
  }, [authenticate]); // 의존성배열에 값이 있을때 그 값이 바뀔때마다 함수가 다시 실행된다.
  return (
    <>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductsAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrevateRoute authenticate={authenticate} />}
        />
      </Routes>
    </>
  );
}

export default App;
