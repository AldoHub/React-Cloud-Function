import React from "react";
import { Switch, Route} from "react-router-dom";

//import components
import Main from "./components/main";
import AddPhrase from "./components/addPhrase";

const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/addphrase" component={AddPhrase} />
          
        </Switch>
    </div>    
) 

export default Routes;