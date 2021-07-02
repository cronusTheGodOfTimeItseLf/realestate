import React from 'react';

function Heading()
{
return(
<React.Fragment>
<div className="jumbotron text-center">
<h1>hussain's real estate company</h1>
  <p>we sell buildings for people to buy as in covid alot of homeless people dont have a home to to go to</p>
  <form className="form-inline">
    <div className="input-group">
      <input type="email" className="form-control" size="50" placeholder="Email Address" required/>
      <div className="input-group-btn">
        <button type="button" className="btn btn-danger">Subscribe(only costs 2.99$ a month)</button>
      </div>
    </div>
  </form>
</div>
</React.Fragment>
);

}

export default Heading