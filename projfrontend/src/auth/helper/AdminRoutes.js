import React from "react";
import {Route, Redirect} from "react-router-dom";

import {isAutheticated} from "./index";


//only logged in user will able to see this route
const AdminRoute= ({ component: Component, ...rest }) => {
   
    return (
      <Route
        {...rest}
        render={props =>
          isAutheticated() && isAutheticated().user.role===1 ? (
            
            <Component  {...props}/>
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

  export default AdminRoute;