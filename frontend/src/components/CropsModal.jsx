import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './css/CropsModal.css';

const CropsModal = (props) => {
  console.log(props.news);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.news.News}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img width="100%" src={props.news["Img url"]} />
        <p className='modal-p'>{props.news.Description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button className='crops-btn-popup' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CropsModal