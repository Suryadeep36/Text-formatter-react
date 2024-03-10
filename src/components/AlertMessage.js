import Alert from 'react-bootstrap/Alert';

function AlertMessage(props) {
  return (
    props.alert && <>
        <Alert key={props.alert.type} variant={props.alert.type}>
          {props.alert.type} : {props.alert.message}
        </Alert>
    </>
  );
}

export default AlertMessage;
