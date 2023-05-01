import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Excel from 'exceljs';

import { getProducts, addProduct } from '../../actions/productActions'

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    qty: 0,
    um: 'pieces',
    price: 0,
    weight: 0,
    description: '',
    category: ''
  })

  const dispatch = useDispatch()

  const handleChange = e => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value
    });
  };
  const handleUploadChange = (e) => {

    const file = e.target.files[0];
    const wb = new Excel.Workbook();
    const reader = new FileReader();

    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      const buffer = reader.result;
      wb.xlsx.load(buffer).then((workbook) => {
        console.log(workbook, 'workbook instance');
        workbook.eachSheet((sheet, id) => {
          sheet.eachRow((row, rowIndex) => {
            if (rowIndex !== 1) {
              dispatch(addProduct({
                name: row.values[1],
                description: row.values[2],
                qty: row.values[3],
                um: row.values[4],
                price: row.values[5],
                category: row.values[6]
              }))
            }
            console.log("Adding data" + row.values[1] + " " + row.values[2]);
          });
          alert("Records added successfully", sheet.length)
        });
      });
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    setNewProduct({
      name: '',
      qty: 0,
      um: '',
      price: 0,
      weight: 0,
      description: '',
      category: ''
    })

    dispatch(addProduct(newProduct))
  }

  const { name, qty, um, price, category, description } = newProduct

  return (
    <div>
      <form className="mb-4" onSubmit={e => handleSubmit(e)}>
        <div className="form-row">
          <div className="form-group col-md-7">
            <label>Company Name</label>
            <input type="text" className="form-control" name="name" placeholder="Company Name" value={name} onChange={e => handleChange(e)} />
          </div>
          <div className="form-group col-md-5">
            <label>Category</label>
            <input type="text" className="form-control" name="category" placeholder="Category Name" value={category} onChange={e => handleChange(e)} />
          </div>
          <div className="form-group col-md-5">
            <label>Model</label>
            <input type="text" className="form-control" name="description" placeholder="Model" value={description} onChange={e => handleChange(e)} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="amount">Quantity</label>
            <input type="text" className="form-control" name="qty" placeholder="Quantity" value={qty} onChange={e => handleChange(e)} />
          </div>
          <div className="form-group col-md-2">
            <label>Type</label>
            <input type="text" className="form-control" name="um" placeholder="Type" value={um} onChange={e => handleChange(e)} />
            {/* <select name="um" className="form-control" value={um} onChange={e => handleChange(e)}>
              <option value='pieces'>pieces</option>
              <option value='sets'>sets</option>
            </select> */}
          </div>
          <div className="form-group col-md-3">
            <label>Price</label>
            <input type="text" className="form-control" name="price" placeholder="Price" value={price} onChange={e => handleChange(e)} />
          </div>
          {/* <div className="form-group col-md-3">
            <label>Weight</label>
            <input type="text" className="form-control" name="weight" placeholder="Weight" value={weight} onChange={e => handleChange(e)} />
          </div> */}
        </div>


        <input type="submit" className="btn btn-primary" value="Add Product" />
      </form>
      <div className="form-group col-md-3">
        OR
        <div>Upload Excel File</div>
        <input type='file' className="btn btn-primary" onChange={(e) => handleUploadChange(e)} />
      </div>
    </div>
  )
}

export default AddProduct;
