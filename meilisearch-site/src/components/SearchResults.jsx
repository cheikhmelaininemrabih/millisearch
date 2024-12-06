import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const SearchResults = ({ results }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((item) => (
          <Card
            key={item.id}
            className="cursor-pointer hover:shadow-lg"
            onClick={() => handleOpen(item)}
          >
            <CardContent>
              <Typography variant="h5" className="font-bold">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedItem && (
            <>
              <Typography variant="h4" className="mb-4">
                {selectedItem.title}
              </Typography>
              <Typography variant="body1">{selectedItem.description}</Typography>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default SearchResults;
