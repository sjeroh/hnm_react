import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductsDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductsDetail = async () => {
    let url = `https://my-json-server.typicode.com/sjeroh/hnm_react/products/${id}`;
    let responsive = await fetch(url);
    let data = await responsive.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductsDetail();
  }, []);
  //의존성 배열이 비어있다면 컴포넌트가 실행될때 한번만 함수가 실행됨
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 d-flex justify-content-end">
          <img src={product?.img} />
        </div>
        <div className="col-6 ps-5 pt-3 d-flex flex-column gap-3">
          <div className="fw-bolder">{product?.title}</div>
          <div>{product?.price}</div>
          <div>{product?.choice ? "Conscious choice" : ""}</div>
          <div>{product?.new ? "신제품" : ""}</div>
          <div>
            <select className="form-select" aria-label="Default select example">
              <option selected>Size</option>
              {product?.size.length > 0 &&
                product.size.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
            </select>
          </div>
          <button className="btn btn-info">추가</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
