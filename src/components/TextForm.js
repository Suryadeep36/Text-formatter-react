import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function TextForm(props) {
    const handleClick = (req) => {
        if(!text){
            setMessage("Hey Suryadeep Enter some text")
            return;
        }
        switch(req){
            case "upper":
                setText(text.toUpperCase())
                setMessage("Converted text to uppercase!!!")
                break;
            case "lower":
                setText(text.toLowerCase())
                setMessage("Converted text to lowercase!!!")
                break;
            case "clear":
                setText("")
                setMessage("Hey Suryadeep Enter some text")
                break;
            case "camel":
                setText(text.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
                    return index == 0 ? word.toLowerCase() : word.toUpperCase();
                }).replace(/\s+/g, ''))
                setMessage("Converted text to camelcase!!")
                break;
        }
    }
    const handleChange = (e) => {
        setText(e.target.value);
    }
    const [text, setText] = useState("");
    const [message, setMessage] = useState(props.heading);
  return (
    <>
    <div className={`container my-3 ${props.mode}`}>
        <h1 className="my-3">{message}</h1>
        <Form>
            <Form.Group className="mb-3" >
            <Form.Control as="textarea" rows={8} placeholder="Enter text here" value={text} onChange={handleChange}/>
            </Form.Group>
        </Form>
        
    </div>
    <div className="container mb-3">
        <button type="button" className="btn btn-primary" onClick={() => {handleClick("upper")}}>Convert text to Uppercase</button>
        <button type="button" className="btn btn-primary mx-3" onClick={() => {handleClick("lower")}}>Convert text to Lowercase</button>
        <button type="button" className="btn btn-primary" onClick={() => {handleClick("camel")}}>Convert text to camelCase</button> 
        <button type="button" className="btn btn-danger mx-3" onClick={() => {handleClick("clear")}}>Clear</button>
    </div>
    <div className={`container ${props.mode}`}>
        <h2>Your text Analyser</h2>
        <p>Words: {text.split(" ").length}</p>
        <p>Characters: {text.length} </p>
    </div>
    </>
  );
}

export default TextForm;