import React from 'react';

function Slide()
{
return(
<React.Fragment>
<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" height="600" src="https://images.wallpaperscraft.com/image/building_tower_sunset_168584_3840x2400.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" height="600" src="https://hdqwalls.com/wallpapers/tokyo-skycrapper-building-sunset-cityscape-b7.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" height="600" src="http://historyatlanta.com/wp-content/uploads/2013/07/Medical-Arts-Building.jpg" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"/>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"/>
    <span className="sr-only">Next</span>
  </a>
</div>
</React.Fragment>
);

}
export default Slide