import { useSelector } from 'react-redux'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Table from '../../component/Table'

export const ListItems = () => {
  const products = useSelector(state => state.product)
  return (

    <div>
      <Table data={products.products} rowsPerPage={10} />
      {/* <Table /> */}
    </div>
  )
}