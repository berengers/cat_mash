import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Index = () => {
  return <div className="btn btn-info">Hello React yeah!</div>;
};

ReactDOM.render(<Index />, document.getElementById("root"));
