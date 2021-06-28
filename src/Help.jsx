import React from 'react';

class Help extends React.Component {
    render() {
        return (
            <React.Fragment>


                <h2>
                    Contact us:
                    wafaadirawe@gmail.com
                </h2>

                <h3>How To Use RESTy App ?</h3>
                <ul>
                    <li>Go to the home page and put an API link in the input url feild</li>
                    <li>Choose a method ( GET, POST, PUT, DLELETE )</li>
                    <li>You can get data from previosly submited APIS from History section or History page</li>
                </ul>
            </React.Fragment>

        )
    }
}

export default Help;