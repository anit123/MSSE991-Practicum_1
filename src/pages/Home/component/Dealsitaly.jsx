import React from "react";
import { Button, Modal } from "react-bootstrap";

function Dealsitaly() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="card">
        <div className="card-body ">
          <div>
            <button
              // variant="primary"
              className="btn btn-sm btn-primary "
              onClick={handleShow}
            >
              Add Location
            </button>
          </div>
          <Modal size="lg" show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Add Location</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* <AddLocationForm onClose={handleClose} /> */}
            </Modal.Body>
          </Modal>
          {/* <AddLocationTable /> */}
        </div>
      </div>
    </div>
  );
}

export default Dealsitaly;
