import React, { Component } from 'react';

class Main extends Component {

state = {
    phrases: []
}



componentDidMount = async() => {
   //https://us-central1-cloudcrud-f3419.cloudfunctions.net/fireCrud
   //fetch to the firestore cloud function
   await fetch("https://us-central1-cloudcrud-f3419.cloudfunctions.net/fireCrud/documents")
   .then(response => {
       //return the response
       return response.json()
   })
   .then((data) => {
       console.log(data);
       //set the state
        this.setState({phrases: data.data});
        //console.log(this.state.phrases);
   })
   .catch(err => {
       console.log(err);
   })
}



render() {
    return (
      <React.Fragment>
          <h2>Phrases</h2>
          <div className="phrasesContainer">
            {
                this.state.phrases.map((phrase, index) => {
                    return(
                        <div className="phrase" key={phrase.docID}>
                          <span>{index + 1}</span>  {phrase.phrase.phrase}
                        </div>
                    )
                })
            } 
          </div>
      </React.Fragment>
    );
  }
}

export default Main;
