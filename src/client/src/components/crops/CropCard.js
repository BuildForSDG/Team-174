import React from 'react';
import { Link } from 'react-router-dom';

const CropCard = ({crop}) => {
  const style = {width: '18rem'}
  return (
   <div className="card" style={style}>
      <img src={crop.image} style={{height:'200px'}} className="card-img-top" alt={crop.name}/>
    <div className="card-body">
          <h5 className="card-title">{crop.name}</h5>
        <p className="card-text">{crop.description.slice(0, 100)}</p>
      <Link to={`/crops/${crop.name}`} className="btn btn-success">Read more</Link>
  </div>
</div>
  )
}

export default CropCard;
