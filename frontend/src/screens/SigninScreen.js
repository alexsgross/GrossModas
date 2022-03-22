import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import{ Helmet } from 'react-helmet-async';


export default function SigninScreen(){
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';
    return (
        <Container className="small-container">
            <Helmet>
                <title>Entrar</title>
            </Helmet>
            <h3 className="my-3">Olá! <br></br>Para comprar,<br></br> acesse a sua conta</h3>
            <Form>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label> E-mail </Form.Label>
                    <Form.Control type="email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label> Password </Form.Label>
                    <Form.Control type="password" required />
                </Form.Group>
                <div className="mb-3">
                    <Button type="submit">Entrar</Button>
                </div>
                <div className="mb-3">
                    É novo por aqui? {' '}
                    <Link to={`/signup?redirect=${redirect}`}> Crie sua conta clicando aqui! </Link>
                </div>
            </Form>
        </Container>
    )

}