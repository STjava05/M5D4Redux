
import { Button, Card, Row, Col } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';
import {  toggleDesc,openModal } from './reducers/api';
import ModalCommenti from './modalCommenti';



export default function Carton() {
  const dispatch = useDispatch();
  const apiArray = useSelector(state => state.api.apiArray);
 
  

  const handleDesc = (index) => {
    dispatch(toggleDesc(index));
   

  }

  const handleOpenModal = () => {
   dispatch(openModal())
  }

  return (
    <div>
      <Row>
        {apiArray && apiArray.map((carte, index) => (
          <Col key={index}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={carte.img} />
              <Card.Body>
                <Card.Title>{carte.title}</Card.Title>
                <Card.Text>{carte.category}</Card.Text>
                <Card.Text>{carte.price}</Card.Text>



                <Button variant="primary" onClick={() => handleDesc(index)}>commenti</Button>
                <Button variant="primary" onClick={()=> handleOpenModal()}>aggiungi</Button>
              </Card.Body>
            </Card>
            { <ModalCommenti />}
          </Col>
        ))}
      </Row>

    </div>
  );
}
