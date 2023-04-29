import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { getProducts } from '../../actions/productActions'

import Product from './Product';

const Table = (filters) => {
  const [tableRange, setTableRange] = useState([]);
  const [slice, setSlice] = useState([]);
  let products = useSelector(state => state.product.products)
  const dispatch = useDispatch()
  if (filters != null) {
    switch (filters.key) {
      case "company":
        products = products.filters(x => x.company === filters.value)
        break;
      default:
        break;
    }
  }
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  const calculateRange = (data, rowsPerPage) => {
    const range = [];
    const num = Math.ceil(data.length / rowsPerPage);
    let i = 1;
    for (let i = 1; i <= num; i++) {
      range.push(i);
    }
    return range;
  };
  const sliceData = (data, page, rowsPerPage) => {
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  };
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Company Name</th>
            <th scope="col">Model</th>
            <th scope="col">Category</th>
            <th scope="col">Quantity</th>
            <th scope="col">Type</th>
            <th scope="col">Price</th>
            <th scope="col">Total Price</th>
            {/* <th scope="col">Weight</th> */}
            {/* <th scope="col">Total Weight</th> */}

            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (products.map((product, index) => {
            return <Product key={product._id} product={product} index={index} />
          })) : (<tr><th className="table-active">No Products</th></tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Table
