import axios from "axios";
import React from "react";
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
    selector: "firstName",
  },
  {
    name: "Mobile Number",
    selector: "mobileNumber",
  },
  {
    name: "Email",
    selector: "email",
  },
  {
    name: "Country",
    selector: "country",
  },
  {
    name: "Passanger Doc Number",
    selector: "passDocNumber",
  },
  {
    name: "Passanger Doc Type",
    selector: "passDocType",
  },
];
const BookingDetails = () => {
  const [bookingData, setBookingData] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${baseURl}api/v1/flight-booking`).then((res) => {
      console.log(res);
      setBookingData(res.data.data.data);
    });
  }, []);
  return (
    <div className="card card-body">
      <TableWrapper>
        <h2 className=" mb-3"> Flight Details</h2>
        <DataTable
          // title="Arnold Movies"
          columns={columns}
          data={bookingData || []}
          persistTableHead
          noHeader
          pagination
        />
      </TableWrapper>
    </div>
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

export default BookingDetails;
