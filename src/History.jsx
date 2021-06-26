// import React from 'react';
// class History extends React.Component {
//     constructor(props) {
//         super(props)
//         this.hisClickHandler = this.hisClickHandler.bind(this);

//     }

//     hisClickHandler = e => {
//         e.preventDefault()
//         let array2 = []
//         let oldResult = JSON.parse(localStorage.getItem('request'))
//         if (oldResult) {
//             Object.values(oldResult).map((item) => {
//                 if (!array2.includes(item)) {
//                     array2.push(item)
//                 }
//             });
//             let meth = e.target.method.value;
//             let ur = e.target.url.value;
//             let bod = e.target.body.value;

//             // this.props.historyHandler(meth, ur ,bod );
//             this.props.after(meth, ur, bod)

//         };
//     }






//     render() {
//         return (
//             <React.Fragment>

//                 <ul>
//                     {
//                         this.props.arr.map(item => {
//                             let str = item.split(',')
//                             let method = str[0];
//                             let url = str[1];
//                             let body;
//                             if (str[2]) {

//                                 body = str[2]
//                             }
//                             if (str.length > 3) {
//                                 for (let i = 3; i < str.length; i++) {
//                                     body = body + str[i]
//                                 }
//                             }
//                             return (
//                                 <React.Fragment>

//                                     <form onSubmit={this.hisClickHandler}>
//                                         <input type="hidden" value={str[0]} name="method" />
//                                         <input type="hidden" value={str[1]} name="url" />
//                                         <input type="hidden" value={str[2] + str[3]} name="body" />
//                                         <li><button type='submit'>{method}</button>   {url} , body is {body}</li>
//                                     </form>



//                                 </React.Fragment>

//                             )
//                         })

//                     }
//                 </ul>

//             </React.Fragment>

//         )

//     }
// }



// export default History

///////////////////////////

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