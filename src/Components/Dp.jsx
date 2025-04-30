import React, { useRef, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

export default function Dp() {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box position="relative" display="inline-block">
        <Avatar
          src={image}
          sx={{ width: 120, height: 120 }}
        >
          U
        </Avatar>

        {/* Edit IconButton */}
        <IconButton
          onClick={handleAvatarClick}
          sx={{
            position: 'absolute',
            top: 75,
            right: 8,
            backgroundColor: 'beige',
            border: '1px solid lightgray',
            width: 30,
            height: 30,
            ':hover': { backgroundColor: '#f0f0f0' }
          }}
        >
          <EditIcon />
        </IconButton>
      </Box>

      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleImageChange}
      />
    </Box>
  );
}
