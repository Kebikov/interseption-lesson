import {useState, Component} from 'react';
import {Container} from 'react-bootstrap';
import './App.scss';

const log = (e) => {
    console.log('target',e.target.value);
}

function App() {
    const [data, setData] = useState({
        mail: "name@example.com",
        text: 'some text'
    });

    return (
        <>
            <Form mail={data.mail} text={data.text}/>
            <button 
                onClick={() => setData({
                    mail: "second@example.com",
                    text: 'another text'
                })}>
                Click me
            </button>
        </>
    );
}

const Form = (props) => {

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <InputComponent mail={props.mail}/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={log}></textarea>
                </div>
            </form>
        </Container>
    )
}

class InputComponent extends Component {
    render() {
        return(
            <input value={this.props.mail} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com" onChange={log}/>
        )
    }
}



export default App;
