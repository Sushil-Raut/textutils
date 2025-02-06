import React from 'react';

function Alert(props) {
  return (
    <>
      {props.alert && (
        <div  className="alert alert-success d-flex align-items-center" role="alert">
          <strong style={{textAlign:"center"}}>{props.alert.type}</strong>: {props.alert.message}
          <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"></svg>
        </div>
      )}
    </>
  );
}

export default Alert;
