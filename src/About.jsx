import React from 'react';

function About()
{
return(
<React.Fragment>
<div class="container-fluid">
  <div class="row">
    <div class="col-sm-8">
    <h2>About us</h2>
  <h4>founding</h4>
  <p><b>
      our company was formed by hussain<br/>
      who at the time was in grade 8<br/>
      And was 14 years old at the time<br/></b>
  </p>
      <button class="btn btn-default btn-warning">report a homeless person to save</button>
    </div>
  </div>
</div>

<div class="container-fluid bg-grey">
  <div class="row">
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-globe logo"></span>
    </div>
    <div class="col-sm-8">
  <h2>what we do:</h2>
  <h4><b>MISSION:</b> Our mission is to make homes avalible to the people<br/></h4><br/>
  <p><b>VISION:</b>we invision a future where people can be treated more like<br/>
  people insted of animals,and we are working as hard as we can to make that vision a reality
  </p>
    </div>
  </div>
</div>
</React.Fragment>
);

}
export default About