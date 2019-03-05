import React, { Component } from 'react';
import Header from "./components/header";

//import the routes
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <main className="App">
        <Header />
        <Routes />
        
      </main>
    );
  }
}

export default App;
