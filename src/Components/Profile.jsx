import React, { useContext, useState } from 'react';
import { Avatar, Box, Typography, Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Dp from './Dp';
import Settings from './Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import Password from './Password';
import userContext from '../auth/userContext';

export default function Profile() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [isCentered, setIsCentered] = useState(true);
  const userData = useContext(userContext);

  const handleMenuClick = (section) => {
    setSelectedSection(section);
    setIsCentered(false);
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'Recent Bookings':
        return (
          <Box textAlign="center" p={4}
            sx={{
              borderRadius: '16px',
              bgcolor: '#f1f8e9',
            }}>
            <Typography variant="h6" mt={2}>No Orders Found</Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              No orders yet. Start your journey now!
            </Typography>
          </Box>
        );
      case 'Settings':
        return (
          <Box p={4}
            sx={{
              borderRadius: '16px',
              bgcolor: '#f1f8e9',
            }}>
            <Typography variant="h6"><Password /></Typography>
          </Box>
        );


      case 'My Profile':
        return (
          <Box p={4}
            sx={{
              borderRadius: '16px',
              bgcolor: '#f1f8e9',
            }}>
            <Typography variant="h6"><Settings /></Typography>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box display="flex" minHeight="100vh">
      {/* Sidebar */}
      <Box
        sx={{
          width: isCentered ? '100%' : 450,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: isCentered ? 'center' : 'flex-start',
          bgcolor: '#f5f7fa',
          p: 3,
          transition: 'all 0.5s ease',
          margin: '5px 5px 5px 5px',
          borderRadius: '16px',

        }}
      >
        {/* Profile */}
        <Box textAlign="center" mb={4}>
          <Avatar sx={{ width: 120, height: 120, mx: 'auto', bgcolor: '#90a4ae', fontSize: 32 }}>
            <Dp />
          </Avatar>
          <Typography variant="h6" mt={2}>{userData.user.name}</Typography>
          <Typography variant="body2" color="text.secondary">{userData.user.email}</Typography>
        </Box>

        {/* Menu List */}
        <List sx={{ width: '50%' }}>
          {[
            { text: 'Recent Bookings', icon: <LocalShippingIcon /> },
            { text: 'My Profile', icon: <AccountCircleIcon /> },
            { text: 'Settings', icon: <PasswordIcon /> },
          ].map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => handleMenuClick(item.text)}
              sx={{
                mb: 1,
                borderRadius: 2,
                bgcolor: selectedSection === item.text ? '#e3f2fd' : 'transparent',
              }}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    fontWeight={selectedSection === item.text ? 600 : 400}
                    color={selectedSection === item.text ? '#2196f3' : 'inherit'}
                  >
                    {item.text}
                  </Typography>
                }
              />
              <ChevronRightIcon />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Main Content */}
      {!isCentered && (
        <Box flexGrow={1} bgcolor="#fff" p={4}
          sx={{
            borderRadius: '16px',
            margin: '5px 5px 5px 5px',
            transition: 'all 0.5s ease',
          }}>
          {renderContent()}
        </Box>
      )}
    </Box>
  );
}
