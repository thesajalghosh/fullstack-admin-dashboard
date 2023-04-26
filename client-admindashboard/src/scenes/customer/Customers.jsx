import React from 'react'
import { useGetCustomersQuery } from 'state/api'
import Header from 'components/header/Header'
import { DataGrid } from '@mui/x-data-grid'

import './Customers.css'



const Customers = () => {

  const { data, isLoading } = useGetCustomersQuery();

  console.log(data);

  const columns = [
    { field: "_id", headerName: "ID", flex:1 },
    { field: "name", headerName: "Name", flex:0.5 },
    { field: "email", headerName: "Email", flex:1 },
    { field: "phoneNumber", headerName: "Phone NUmber", flex:0.5 },
    { field: "country", headerName: "Country", flex:0.4 },
    { field: "occupation", headerName: "Occupation", flex:0.8 },
    { field: "role", headerName: "Role", flex:0.3 },

  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='customer__page'>
      <Header title='CUSTOMERS' subtitle="List of Customers" />
      {  <div className='customar__table'>
     
     <DataGrid
     loading ={isLoading || !data}
      getRowId={(row) => row._id}
       rows={data || []}
       columns={columns}
       
     />

      </div>}

    </div>
  )
}

export default Customers
