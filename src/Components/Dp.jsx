import React, { useContext, useRef, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { uploadImageProd, USER_IMAGE_RESOURCE_PROD } from '../services/userService';
import userContext from '../auth/userContext';
import { doLogin } from '../auth/authentication'
import { toast } from "react-toastify";

export default function Dp() {
  const fileInputRef = useRef(null);
  const userData = useContext(userContext);

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    uploadImageProd(userData.user.userId, file).then((response) => {
      doLogin(response);
      userData.setUser(response);
    }).catch((error) => {
      toast.error("Something went wrong!");
    })
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
          src={USER_IMAGE_RESOURCE_PROD + userData.user.userImage}
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
        type="file" accept="image/*"
        ref={fileInputRef} onChange={handleImageChange}
        style={{ display: 'none' }}
      />
    </Box>
  );
}
