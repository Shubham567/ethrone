import React from 'react';

const Paginated = ({pageNumber,onPrev,onNext}) => {
  return (
    <div className="btn-group">
      {pageNumber > 1 && onPrev && <button className="btn" onClick={onPrev}>«</button>}
      <button className="btn">Page {pageNumber}</button>
      {onNext && <button className="btn" onClick={onNext}>»</button>}
    </div>
  );
};

export default Paginated;
