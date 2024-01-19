"use client";

import axios from "axios"
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setDomLoaded(true);

    const fetchData = async () => {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
      setTableData(data)
      setDomLoaded(false);
    }
    fetchData()

  }, []);
  // console.log("tableData", tableData)
  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true
    },
    {
      name: 'NAME',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'USERNAME',
      selector: row => row.username,
      sortable: true
    },
    {
      name: 'EMAIL',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'CITY',
      selector: row => row.address.city,
      sortable: true,
    },
    {
      name: 'WEBSITE',
      selector: row => row.website,
      sortable: true,
    },

  ];
  return (
    <div className="max-w-7xl overflow-x-auto mx-auto my-5">
      <div className=" p-10 border border-slate-200 rounded-md ">
        {<div>
          <DataTable
            className="text-center"
            columns={columns}
            data={tableData}
            progressPending={domLoaded}
            pagination
            paginationRowsPerPageOptions={[2, 4, 6, 8, 10]}
            paginationPerPage={5} // default Rows Per Page
          />
        </div>}
      </div>
    </div>
  )
}
