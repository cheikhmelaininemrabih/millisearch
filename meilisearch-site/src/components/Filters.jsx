import React from 'react';

const Filters = ({ facets, applyFilter }) => {
  return (
    <div>
      {Object.keys(facets).map((facet) => (
        <div key={facet}>
          <h4>{facet}</h4>
          {facets[facet].map((value) => (
            <div key={value}>
              <input
                type="checkbox"
                onChange={() => applyFilter(facet, value)}
              />
              {value}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Filters;
