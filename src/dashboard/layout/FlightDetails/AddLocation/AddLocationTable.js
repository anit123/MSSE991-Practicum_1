import axios from "axios";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import { baseURl } from "../../../../constants/apiContact";

const columns = [
  {
    name: "S.N",
    cell: (row, index, column, id) => <p>{index + 1}</p>,
  },
  {
    name: "Country",
    selector: "country",
  },
  {
    name: "City",
    selector: "city",
  },
];
const AddLocationTable = () => {
  const [location, setLocation] = useState([]);
  React.useEffect(() => {
    axios.get(`${baseURl}api/v1/location`).then((res) => {
      console.log(res);
      setLocation(res.data.data.data);
    });
  }, []);
  return (
    <TableWrapper>
      <h2 className="text-center mb-3"> Location Details</h2>
      <DataTable
        // title="Arnold Movies"
        columns={columns}
        data={location || []}
        persistTableHead
        noHeader
      />
    </TableWrapper>
  );
};
const TableWrapper = styled.div`
  .rdt_TableHeadRow {
    background-color: #043559 !important;
    min-height: initial;
  }
  .rdt_TableCol,
  .rdt_TableCol_Sortable {
    color: #fff !important;
    font-weight: bold;
  }
  .rdt_TableHead {
    height: 45px;
  }
`;
export default AddLocationTable;
