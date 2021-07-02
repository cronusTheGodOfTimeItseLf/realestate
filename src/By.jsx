import React from 'react';

function By()
{
return(
<React.Fragment>
<div className="container-fluid">
  <div className="text-center">
    <h2>donating</h2>
    <h4>Choose a donation plan that works for you</h4>
  </div>
  <div className="row">
    <div className="col-sm-4">
      <div className="panel panel-default text-center">
        <div className="panel-heading">
          <h1>help 10 person</h1>
        </div>
        <div className="panel-footer">
          <h3>$200</h3>
          <h4>per month</h4>
          <button className="btn btn-warning">donate now</button>
        </div>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="panel panel-default text-center">
        <div className="panel-heading">
          <h1>help 100 people</h1>
        </div>
        <div className="panel-footer">
          <h3>$600</h3>
          <h4>per year</h4>
          <button className="btn btn-warning">donate now</button>
        </div>
      </div>
    </div>
   <div className="col-sm-4">
      <div className="panel panel-default text-center">
        <div className="panel-heading">
          <h1>help 10000 people</h1>
        </div>
        <div className="panel-footer">
          <h3>$4000</h3>
          <h4>per 10 years</h4>
          <button className="btn btn-lg">donate now</button>
        </div>
      </div>
    </div>
  </div>
</div>
</React.Fragment>
);

}

export default By

