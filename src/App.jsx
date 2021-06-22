import React from 'react';
import Header from './Header';
import Form from './Form';
import Result from './Result';
import Footer from './Footer';

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
      header:''
    }
    this.handleForm = this.handleForm.bind(this)
  }
  handleForm = (results, count, header) => {
    this.setState({ results, count, header })
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form handler={this.handleForm} />
        <Result
        count={this.state.count}
        results={this.state.results}
        header={this.state.header} />
        <Footer />
      </React.Fragment>
    )

  }
}
export default App;
