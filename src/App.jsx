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
      count: 0
    }
  }
  handleForm = (results, count) => {
    this.setState({ results, count })
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form handler={this.handleForm} />
        <Result results={this.state.results} />
        <Footer />
      </React.Fragment>
    )

  }
}
export default App;
