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
    name: "Name",
    selector: "name",
  },
  {
    name: "To",
    selector: "to",
  },
  {
    name: "From",
    selector: "from",
  },
  {
    name: "Price",
    selector: "price",
  },
  {
    name: "Start Date",
    selector: "startDate",
  },
  {
    name: "Ending Date",
    selector: "endingDate",
  },
  {
    name: "Passanger Size",
    selector: "maxPassanger",
  },
  {
    name: "time",
    selector: "time",
  },
];
const FlightDetailsTable = () => {
  const [flight, setflight] = useState([]);
  React.useEffect(() => {
    axios.get(`${baseURl}api/v1/flight`).then((res) => {
      console.log(res);
      setflight(res.data.data.data);
    });
  }, []);
  return (
    <TableWrapper>
      <h2 className="text-center mb-3"> Flight Details</h2>
      <DataTable
        // title="Arnold Movies"
        columns={columns}
        data={flight || []}
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
export default FlightDetailsTable;
