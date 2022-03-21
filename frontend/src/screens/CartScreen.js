import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Store } from '../Store';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageBox from '../components/MessageBox';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function CartScreen() {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;

    return (
        <div>
            <Helmet>
                <title>Carrinho</title>
            </Helmet>
            <h1>Carrinho de Compras</h1>
            <Row>
              <Col md={8}>
                {cartItems.length === 0 ? (
                  <MessageBox>
                    Carrinho vazio. <Link to="/">VOLTAR AS COMPRAS</Link>
                  </MessageBox>
                ) : (
                  <ListGroup>
                    {cartItems.map((item) => (
                      <ListGroup.Item key={item._id}>
                        <Row className="align-items-center">
                            <Col md={4}>
                                <img
                                src={item.image}
                                alt={item.name}
                                className="img-fluid rounded img-thumbnail"
                                ></img>{' '}
                                <Link to={`/product/${item.slug}`}>{item.name}</Link>
                            </Col>
                            <Col md={3}>
                              <Button variant="light" disabled={item.quantity === 1}>
                                <i className="fas fa-minus-circle"></i>
                              </Button>{' '}
                              <span>{item.quantity}</span>{' '}
                              <Button variant="light" disabled={item.quantity === item.countInStock}>
                                <i className="fas fa-plus-circle"></i>
                              </Button>{' '}
                            </Col>
                            <Col md={3}>R$: {item.price}</Col>
                            <Col md={2}>
                              <Button variant="light">
                                <i className="fas fa-trash"></i>
                              </Button>{' '}
                            </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <h3>
                          Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                          items) R$  
                          {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                        </h3>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <div className="d-grid">
                          <Button
                            type="button"
                            variant='primary'
                            disabled={cartItems.length === 0}
                          >
                            Finalizar a compra
                          </Button>
                        </div>
                      </ListGroup.Item>                      
                    </ListGroup>                    
                  </Card.Body>
                </Card>
              </Col>
            </Row>
        </div>
    );
}