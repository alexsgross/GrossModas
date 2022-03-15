import Alert from 'react-bootstrap/Alert'

export default function LoadingBox(props) {
    return (
        <Alert variant={props.varian || 'info'}>{props.children}</Alert>
   );  
}