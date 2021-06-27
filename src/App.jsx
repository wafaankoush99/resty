import React from 'react';
import Header from './Header';
import Form from './Form';
import Result from './Result';
import Footer from './Footer';
import History from './History';

// function App() {
//   return (
//     <React.Fragment>
//       <Header />
//       <Form />
//       <Footer />
//     </React.Fragment>
//   );
// }



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      count: 0,
      header: '',
      array: [],
      method: '',
      url: '',
      body: {},
      flag: false
    }
    this.handleForm = this.handleForm.bind(this)
    this.handleHistory = this.handleHistory.bind(this)
  }
  handleForm = (results, count, header, array, flag) => {
    this.setState({ results, count, header, array, flag })
  }

  handleHistory(arr, flag) {
    this.setState({
      ...this.state,
      arr: arr,
      flag: flag
    })
  }

  afterSubmit = (method, url, body) => {
    this.setState({ method, url, body })
  }

  compDidMount = () => {
    let arr = []

    let prevResult = JSON.parse(localStorage.getItem('request'))
    if (prevResult) {
      Object.values(prevResult).map((it) => {
        if (!arr.includes(it)) {
          arr.push(it)
        }
      });
    }


    this.setState({ arr })
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <History
          historyHandler={this.handleHistory}
          after={this.afterSubmit}
          arr={this.state.array}
          flag={this.state.flag} />
        <Form handler={this.handleForm}
          method={this.state.method}
          url={this.state.url}
          body={this.state.body}
          flag={this.state.flag}
        />
        <Result
          count={this.state.count}
          header={this.state.header}
          results={this.state.results}
        />
        <Footer />
      </React.Fragment>
    )

  }
}
export default App;
