import React, { Component } from 'react';
import { Redirect } from 'react-router';

class AddPhrase extends Component {
  

    state = {
        phrase : "",
        redirect: false
    }


    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value });
    }


    sendPhrase = (e) => {
      //avoid refreshing the page
      e.preventDefault();

      //busboy expects form data to be sent
      //create the formdata obj
      let formData = new FormData();

      //pass the formdata obj so busboy can loop through it
      formData.set("phrase", this.state.phrase);

      //make the post request to the cloud function
      fetch("https://us-central1-cloudcrud-f3419.cloudfunctions.net/fireCrud/documents", {
          method: "POST",
          body: formData
      })
      .then(res => {
          return res;
      })
      .then(data => {
          let form = document.getElementsByTagName("form")[0];
          form.reset(); 
          console.log(data);
          this.setState({redirect: true});
        

      })
      .catch(err => {
          console.log(err);
      })
  }
  
  
  
  
  render() {
    const redirect = this.state.redirect;
    if(redirect){
        return <Redirect to="/" />  
    }
    
    return (
     <div>
        <h2>Type a phrase: </h2>
        <form onSubmit={this.sendPhrase}>
            <label htmlFor="phrase">Phrase: </label>
            <input onChange ={this.changeHandler} type="text" name="phrase"  />
            <input type="submit" value="Send" />
        </form>
     </div>
    );
  }
}

export default AddPhrase;
