import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const DevNoticeModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Modal show={show} onHide={() => setShow(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Notice</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          This website is still under development.<br />
          Cheers!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DevNoticeModal; 