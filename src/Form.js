import React from 'react';
import './Form.scss';

// The <Form> component should:
// Use it’s own .scss file for styling
// Accept user input for a URL and store it in state
// Allow the user to choose a method and store it in state
// This can be done with radio buttons or clickable elements
// Display the user’s choices on screen in a separate <div> or <section> under the form

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userMethod: '',
            userURL: '',
        }
    }

    handleChanges = e => {
        this.state.userURL = e.target.value;
        // console.log(this.state.userURL)
        // let method = e.target.value;
        // this.setState({ userURL: URL })
    }
    handleClickBtns = e => {
        e.preventDefault();
        let userURL = this.state.userURL;
        this.setState({ userURL })
    }

    handleMethod = e => {
        e.preventDefault();
        let method = e.target.value;
        // let method = e.target.value;
        this.setState({ userMethod: method })
    }


    render() {
        return (
            <div className="formc">
                <form>
                    <div className="fdiv">
                        URL:<input type="url" onChange={this.handleChanges}></input>
                        <button type="submit" onClick={this.handleClickBtns}>Go</button>
                    </div>

                    <br></br>
                    <div className="sdiv">
                        <button onClick={this.handleMethod} value="GET">GET</button>
                        <button onClick={this.handleMethod} value="POST">POST</button>
                        <button onClick={this.handleMethod} value="PUT">PUT</button>
                        <button onClick={this.handleMethod} value="DELETE">DELETE</button>
                    </div>

                </form>
                <section>
                    <div> {this.state.userMethod} {this.state.userURL}</div>
                </section>
            </div>
        )
    }
}
// const Form = () => {
//     return (
//         <div>
//             <form>
//                 URL:<input type="url"></input>
//                 <button type="submit">Go</button>
//                 <br></br>
//                 <button>GET</button>
//                 <button>POST</button>
//                 <button>PUT</button>
//                 <button>DELETE</button>
//             </form>
//             <section>
//                 <textarea name="" id="" cols="30" rows="10"></textarea>
//             </section>
//         </div>

//     )
// }

export default Form;