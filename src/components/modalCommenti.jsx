import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch,useSelector } from 'react-redux';


import { ListGroup } from 'react-bootstrap';
import { openModal } from './reducers/api';





export default function ModalCommenti({ asin }) {
  const dispatch = useDispatch();
  const commenti = useSelector((state) => state.api.commenti);

  const handleModal = () => {
    dispatch(openModal());
  };

  

  return (
    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Commenti</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {commenti&&commenti.map((commento) => (
            // Assicurati di includere l'istruzione return qui
            <ListGroup key={commento._id} className="d-flex justify-content-center align-items-center">
              <div>
                <p>{commento.comment}</p>
                <p>{commento.rate}</p>
                <p>{commento.author}</p>
              </div>
            </ListGroup>
          ))}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
