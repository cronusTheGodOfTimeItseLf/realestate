import React from 'react';

const Sign = () =>
{
    return(
        <>
  <h1>Signin form</h1>
<form>
  <div className="form-group">
    <label for="email">Email address:</label>
    <input type="email" className="form-control" placeholder="Enter email" id="email"/>
  </div>
  <div className="form-group">
    <label for="username">username:</label>
    <input type="text" className="form-control" placeholder="Enter username" id="username"/>
  </div>
  <div className="form-group">
    <label for="pincode">Pincode:</label>
    <input type="password" className="form-control" placeholder="Enter pincode" id="pincode"/>
  </div>
  <div className="form-group">
    <label for="pwd">Password:</label>
    <input type="password" className="form-control" placeholder="Enter password" id="pwd"/>
  </div>
  <div className="form-group form-check">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox"/>are u human
    </label>
    <div className="form-group">
    <input type="radio" id="male" name="gender" value="male"/>male<br/>
       <input type="radio" id="female" name="gender" value="female"/>Female<br/>
      <input type="radio" id="other" name="gender" value="other"/>Other<br/>
</div>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<br/>
<br/>
<h1>personal information(optional)</h1>
<form>
  <div className="form-group">
    <label for="first">first name</label>
    <input type="text" className="form-control" placeholder="Enter first name" id="first"/>
  </div>
  <div className="form-group">
    <label for="lastname">last name</label>
    <input type="text" className="form-control" placeholder="Enter lastname" id="lastname"/>
  </div>
  <div className="form-group">
    <h2>enter continet name:(can choose more then one if you moved continet,your home continet and the continet ur living in)</h2>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>asia<br/>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>africa<br/>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>america<br/>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>south america<br/>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>west asia<br/>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>north asia<br/>
  </div>
  <div className="form-group">
    <label for="pwd">Password:</label>
    <input type="password" className="form-control" placeholder="Enter password" id="pwd"/>
  </div>
  <div className="form-group form-check">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox"/>we will mention this data to thank you in interveiws often, are you ok with that?
    </label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</>
    );
};

export default Sign;