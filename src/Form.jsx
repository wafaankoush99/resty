import React from 'react';
import './Form.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userMethod: '',
            userURL: '',
            results: []
        }
    }
    
    handleChanges = e => {
        this.state.userURL = e.target.value;
        console.log(this.state.userURL)
        // let method = e.target.value;
        // this.setState({ userURL: URL })
    }


    handleSubmit = async e => {
        e.preventDefault();
        // this.state.userURL = e.target.value;
        let raw = await fetch(this.state.userURL);

        let header= await fetch(this.state.userURL).then((response) => {    
            for (let pair of response.headers.entries()) {
                let length = pair.length
                let string = '';
                for (let i =0;i<length;i++){
                    if (i %2 === 0){
                        string = string + pair[i] + ': ' + pair[i+1]
                    }
                }
                return string;
            }
        }); 


        // console.log('rrrr', raw);
        let data = await raw.json();
        // console.log('ddddd', data);
        const results = data.results;
        // this.state.results = results;
        const count = data.count;
        // const header = data.header;
        // console.log('hhhhhhhhh', results);
        console.log('hhhh', header);
        this.props.handler(results, count, header);
        // this.setState(results)

    }


    // handleClickBtns = e => {
    //     e.preventDefault();
    //     let jsonResult = this.state.results;
    //     this.setState({ jsonResult })

    // }

    handleMethod = e => {
        e.preventDefault();
        let method = e.target.value;
        // let method = e.target.value;
        this.setState({ userMethod: method })
    }


        render() {
        return (
            <div  className="formc">
                <form onSubmit={this.handleSubmit}>
                    <div className="fdiv">
                        URL:<input type="url" onChange={this.handleChanges}></input>
                        <button>Go</button>
                    </div>

                    <br></br>
                    <div className="sdiv">
                        <button onClick={this.handleMethod} value="GET">GET</button>
                        <button onClick={this.handleMethod} value="POST">POST</button>
                        <button onClick={this.handleMethod} value="PUT">PUT</button>
                        <button onClick={this.handleMethod} value="DELETE">DELETE</button>
                    </div>
                    <div> {this.state.userMethod}  :  {this.state.userURL} </div>
                </form>
                
            </div>
        )
    }

}

export default Form;