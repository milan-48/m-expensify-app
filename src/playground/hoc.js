// HOC -> Higher Order Component - A component (HOC) that renders another component
// Reuse code 
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props)  => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WraappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, please don't share!</p>}
            <WraappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WraappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WraappedComponent {...props}/>) : (<p>Please login to view info</p>)}
        </div>
    ); 
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />,  document.getElementById("app"));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />,  document.getElementById("app"));