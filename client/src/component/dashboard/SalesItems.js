import { useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Table from '../../component/Table'
import { getProducts } from '../../actions/productActions'
export const SalesItems = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
  }, []);

  const products = useSelector(state => state.product)
  const companyLookup = [...new Set(products.products.map(n => n.name))];
  const categoryLookup = [...new Set(products.products.map(n => n.category))];
  const modelLookup = [...new Set(products.products.map(n => n.description))];
  let [companyLookupSelected, setCompanySelected] = useState("")
  let [categoryLookupSelected, setCategorySelected] = useState("")
  let [modelLookupSelected, setModelSelected] = useState("")
  let filter = [];
  let productData = 0;
  filter.push({ field: "name", value: companyLookupSelected });
  filter.push({ field: "category", value: categoryLookupSelected });
  filter.push({ field: "description", value: modelLookupSelected });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getFilterData = (products) => {
    filter.forEach(f => {
      if (!['select', 'na'].includes(f.value.toLowerCase()) || f.value.toLowerCase().split(' ').includes('select')) {
        productData = products.products.filter(x => x[f.field].toLowerCase() === f.value.toLowerCase())
      }
    })
    products.products = productData.length > 0 ? productData : products.products
  }
  useEffect(() => {
    debugger
    getFilterData(products.products);
  }, [companyLookup, categoryLookup, modelLookup,]);
  const clearFilter = () => {
    setCompanySelected("");
    setCategorySelected("");
    setModelSelected("");
  }
  return (

    <div>
      <div className="form-row">

        {/* <div className="form-group col-md-2">
          <select className="form-control" onChange={e => e.target.value.split(' ').includes('select') ? 'NA' : setCompanySelected(e.target.value)}>
            <option value="⬇️ Select a Company ⬇️"> -- Select a Company -- </option>
            {companyLookup.map((name) => <option key={name} value={name}>{name}</option>)}
          </select>
        </div> */}
        <div className="form-group col-md-2">
          <label>Select Category</label>
          <select className="form-control" onChange={e => e.target.value.split(' ').includes('select') ? 'NA' : setCategorySelected(e.target.value)}>

            {categoryLookup.map((category) => <option key={category} value={category}>{category}</option>)}
          </select>
        </div>
        <div className="form-group col-md-2">
          <label>Select Model</label>
          <select className="form-control" onChange={e => e.target.value.split(' ').includes('select') ? 'NA' : setModelSelected(e.target.value)}>

            {modelLookup.map((description) => <option key={description} value={description}>{description}</option>)}
          </select>
        </div>
        <div className="form-group col-md-2">
          <label>Clear All</label>
          <button className="form-control" onClick={e => clearFilter(e)}>
            Clear Filters
          </button>
        </div>
      </div>
      {/* <Table data={getFilterData(products)} rowsPerPage={10} /> */}
      {/* <Table /> */}
    </div>
  )
}