

import React from 'react';
import './Form.scss';
import IF from "./if";
import Loader from "./Loader";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            section: '',
            method: '',
            body: {},
            results: [],
            flag: false,

        }
        this.submitHandler = this.submitHandler.bind(this);
        this.toggle = this.toggle.bind(this)
    }
    handleInput = e => {
        let section = e.target.value;
        this.setState({ section })
    };

    handleClick = e => {
        e.preventDefault()
        let method = e.target.value;
        this.setState({ method })
    }


    submitHandler = async e => {
        e.preventDefault();



        setTimeout(async () => {


            let raw;
            let submittedMethod;
            let submittedURL;
            let submittedBody;
            if (this.props.method && this.props.url) {
                submittedMethod = this.props.method;
                submittedURL = this.props.url;
                if (this.props.body) {
                    submittedBody = await JSON.stringify(this.props.body)

                } else {
                    submittedBody = e.target.body.value
                }

            } else {
                submittedMethod = this.state.method
                submittedURL = this.state.section
                submittedBody = e.target.body.value

            }
            if ((submittedMethod === 'POST' || submittedMethod === 'PUT')) {
                raw = await fetch(submittedURL, {
                    method: submittedMethod, body: submittedBody, mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            } else if (submittedMethod === 'GET' || submittedMethod === 'DELETE') {

                raw = await fetch(submittedURL, { method: submittedMethod });
            }

            this.setState({ body: submittedBody, flag: !this.state.flag })
            let header = await fetch(submittedURL).then((response) => {
                for (let pair of response.headers.entries()) {
                    let string = '';
                    for (let i = 0; i < pair.length; i++) {
                        if (i % 2 === 0) {
                            string = string + pair[i] + ': ' + pair[i + 1]
                        }
                    }
                    return string;
                }
            });


            let data = await raw.json()
            this.setState({ results: data, body: submittedBody, flag: !this.state.flag });
            let array = [];
            if (data) {
                let str = `${this.state.method},${this.state.section},${submittedBody}`
                let prevResult = JSON.parse(localStorage.getItem('request'))
                if (prevResult) {
                    Object.values(prevResult).map((it) => {
                        if (!array.includes(it)) {
                            array.push(it)
                        }
                    });
                }
                if (!array.includes(str)) {
                    array.push(str)
                    localStorage.setItem('request', JSON.stringify(array));
                }

            }

            let results;
            if (data.results) {
                results = data.results;
            } else {
                results = data
            }
            let count;
            if (data.count) {
                count = data.count;
            } else {
                count = data.length
            }
            let flag = this.state.flag
            this.props.handler(results, count, header, array, flag);

        }, 3000);
    }


    toggle = () => {
        this.setState({ flag: !this.state.flag })
    }



    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.submitHandler}>
                    <label for="url-input">URL : </label>
                    <input id="inputs" type="text" name="inputurl" onChange={this.handleInput} />
                    {/* <div id='formd'>
            
                <h4>{this.props.meth || this.state.method}  :  {this.props.ur || this.state.section} </h4>
                <input id="submit" type="submit" value="Go!"/><br/>
                </div> */}

                    <IF condition={this.state.flag}>
                        <Loader></Loader>
                    </IF>

                    <button id="get" onClick={this.handleClick} value="GET">GET</button>
                    <button id="post" onClick={this.handleClick} value="POST">POST</button>
                    <button id="put" onClick={this.handleClick} value="PUT">PUT</button>
                    <button id="delete" onClick={this.handleClick} value="DELETE">DELETE</button>
                    <textarea rows="4" cols="50" id="textarea" name="body" placeholder="please enter a json body"></textarea>

                    <input type="submit" id="submit" value="GO" />
                </form>

                <h3>
                    {this.props.meth || this.state.method} : {this.props.ur || this.state.section}
                </h3>

            </React.Fragment>
        )
    };

}




export default Form;