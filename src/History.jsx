
import React from 'react';

class History extends React.Component {
    constructor(props) {
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler = e => {
        e.preventDefault();

        let arr = []

        let prevResult = JSON.parse(localStorage.getItem('request'))

        if (prevResult) {
            Object.values(prevResult).map((it) => {
                if (!arr.includes(it)) {
                    arr.push(it)
                }
            })

            let method = e.target.method.value;
            let body = e.target.body.value;
            let url = e.target.url.value;


            this.props.after(method, url, body)
        }
    }


    render() {
        return (
            <React.Fragment>

                <p>

                    {
                        this.props.arr.map(it => {
                            let str = it.split(',')

                            let method = str[0]

                            let url = str[1]

                            let body;

                            if (str[2]) {
                                body = str[2]
                            }

                            if (str.length > 3) {
                                for (let i = 3; i < str.length; i++) {
                                    body = body + str[i]
                                }
                            }

                            return (
                                <React.Fragment>

                                    <form action="" onSubmit={this.clickHandler}>

                                        <input type="hidden" value={str[0]} name="method" />
                                        <input type="hidden" value={str[1]} name="url" />
                                        <input type="hidden" value={str[2] + str[3]} name="body" />

                                        <button type="submit" >{method}</button>

                                        {url}, body : {body}
                                    </form>
                                </React.Fragment>
                            )
                        })
                    }
                </p>
            </React.Fragment>
        )
    }
}

export default History;