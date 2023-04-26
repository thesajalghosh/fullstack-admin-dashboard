import React, { useState } from 'react'
import { useGetTransactionsQuery } from 'state/api'
import Header from 'components/header/Header'
import "./Transactions.css"
import { DataGrid } from '@mui/x-data-grid'



const Transactions = () => {

  const [page, setpage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setsort] = useState({});
  const [search, setsearch] = useState("")

  const { data, isLoading } = useGetTransactionsQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  })

  console.log(data)

  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    { field: "userId", headerName: "User ID", flex: 0.5 },
    { field: "createdAt", headerName: "CreatedAt", flex: 1 },
    { field: "products", headerName: "# of Products", flex: 0.4, sortable: false, renderCell: (params) => params.value.length },
    {
      field: "cost", headerName: "Cost", flex: 0.8,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`
    },


  ];
  return (
    <div className='transactions'>
      <Header title="TRANSACTIONS" subtitle="Entire list of transactions" />

      <div className='transactions__table'>
          <DataGrid
          loading={isLoading || !data}
          getRowId = {(row) => row._id}
          rows={(data && data.transactions) || []}
          columns = {columns}
          rowCount={(data && data.total) || 0}
          pagination
          page={page}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
          onPageChange={(newPage) => setpage(newPage)}
          onPageSizeChange = {(newPageSize) => setPageSize(newPageSize)}
          onSortModelChange = {(newSortMode) => setsort(...newSortMode)}

          />
      </div>

    </div>
  )
}

export default Transactions
