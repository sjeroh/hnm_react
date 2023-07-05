import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductsAll = () => {
  const [list, setList] = useState([]);
  const [qurey, setQuery] = useSearchParams();

  const getProducts = async () => {
    const searchQuery = qurey.get("q") || "";
    const url = `https://my-json-server.typicode.com/sjeroh/hnm_react/products?q=${searchQuery}`;
    let responsive = await fetch(url);
    //await 함수는 비동기로 돌아간다. 비동기란
    //청소를 하는데 무인청소기로 청소를 명령하면 나는 가만히 청소가
    //끝날때까지 기다린다. 세탁기도 다 할때까지 기다리는.= 그다음에
    //내가 뭘 하는것. 이런게 동기적 js 속성인데
    //비동기 = setinterbval, await도 똑같죠 async await할때 꼭 붙여줘야한다.
    let data = await responsive.json();
    console.log(data, responsive);
    setList(data);
  };
  useEffect(() => {
    getProducts();
  }, [qurey]);

  return (
    <div>
      <div className="container productAll">
        <div className="row">
          {list.map((tm) => {
            return (
              <div key={tm.id} className="col-md-3 col-12">
                <ProductCard item={tm} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsAll;
