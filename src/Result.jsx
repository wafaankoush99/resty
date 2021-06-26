import React from 'react';
import JSONPretty from 'react-json-pretty';
import './Result.scss';


class Result extends React.Component {

    render() {
        // console.log("child : ", this.props.results)
        return (
            <>
                <section id="results">
                    Serch Result :
                    {/* console.log(this.props); */}
                    Count : {this.props.count}
                    <br />
                    Header: {this.props.header}
                     <JSONPretty id="json-pretty" data={this.props.results}></JSONPretty>
                </section>

            </>
        )
    }
}

export default Result;

