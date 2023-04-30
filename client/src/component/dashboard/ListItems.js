import { useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Table from '../../component/Table'
import { getProducts } from '../../actions/productActions'
export const ListItems = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
  }, []);

  const products = useSelector(state => state.product)
  const companyLookup = [...new Set(products.products.map(n => n.name))];
  const categoryLookup = [...new Set(products.products.map(n => n.name))];
  const modelLookup = [...new Set(products.products.map(n => n.name))];
  let [companyLookupSelected, setCompanySelected] = useState("NA")
  let filter = { field: "name", value: companyLookupSelected };
  const getFilterdata = (products) => {
    let productData = products.products.filter(x => x[filter.field].toLowerCase() === filter.value.toLowerCase())
    return productData.length > 0 ? productData : products.products
  }
  return (

    <div>
      <div className="form-group col-md-2">
        <select className="form-control" onChange={e => setCompanySelected(e.target.value)}>
          <option value="⬇️ Select a Company ⬇️"> -- Select a Company -- </option>
          {companyLookup.map((name) => <option key={name} value={name}>{name}</option>)}
        </select>
      </div>
      <Table data={getFilterdata(products)} rowsPerPage={10} />
      {/* <Table /> */}
    </div>
  )
}