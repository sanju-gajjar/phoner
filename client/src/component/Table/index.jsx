import React, { useState } from "react";

import useTable from "./useTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";

import Product from '../dashboard/Product';
const Table = ({ data, rowsPerPage }) => {
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    return (
        <>
            <table className={styles.table}>
                <thead className={styles.tableRowHeader}>
                    <tr>
                        <th className={styles.tableHeader}>#</th>
                        <th className={styles.tableHeader}>Company Name</th>
                        <th className={styles.tableHeader}>Model</th>
                        <th className={styles.tableHeader}>Category</th>
                        <th className={styles.tableHeader}>Quantity</th>
                        <th className={styles.tableHeader}>Type</th>
                        <th className={styles.tableHeader}>Price</th>
                        <th className={styles.tableHeader}>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {slice.map((el, index) => (
                        <Product key={el._id} product={el} index={(page > 1 ? index + ((page - 1) * 10) : index)} />

                    ))}
                </tbody>
            </table>
            <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
        </>
    );
};

export default Table;