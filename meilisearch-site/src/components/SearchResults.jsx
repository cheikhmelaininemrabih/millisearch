import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const SearchResults = ({ results }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {results.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography variant="h5">{item.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SearchResults;
