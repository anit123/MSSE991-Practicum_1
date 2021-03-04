import { Modal } from "react-bootstrap";
import React from "react";
import FlightDetailsForm from "./FlightDetailsForm";
import FlightDetailsTable from "./FlightDetailsTable";

const FlightDetails = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="card">
      <div className="card-body ">
        <div>
          <button
            // variant="primary"
            className="btn btn-sm btn-primary "
            onClick={handleShow}
          >
            Add Flight
          </button>
        </div>
        <Modal size="lg" show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Add Flight Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FlightDetailsForm onClose={handleClose} />
          </Modal.Body>
        </Modal>
        <FlightDetailsTable />
      </div>
    </div>
  );
};

export default FlightDetails;
