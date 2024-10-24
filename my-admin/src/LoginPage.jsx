//Import necessary components from different react libraries
import React from 'react';
import { CreateButton, Login, LoginForm, Resource } from 'react-admin';
import { Avatar } from '@mui/material';

// adding general styles to the login page container for aesthetics
const customStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: '20px',
};

// user login or sign up to use system
export const LoginPage = (props) => (
  
        <Login {...props}>
          <div style={customStyles}>

            {/* removing the default react-admin provided lock icon */}
            <style>{`
                .RaLogin-icon { 
                display: none !important; 
                }
            `}</style>

            {/* insert custom logo to login page */}
            <Avatar
              src="/cape_collegeLogo.PNG"
              sx={{ width: 60, height: 60 }}
              style={{marginBottom:'10px'}}
            />

            CAPE COLLEGE

            {/* Draws existing user data from pocketbase to decide wether login succesful or not  */}
            <LoginForm 
              resource='users'
              style={{  
                width: '100%', 
                maxWidth: '300px', 
                display: 'flex',
                flexDirection: 'column', 
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                marginBottom: '20px', 
              }} 
            />
            
            <div style={{ marginBottom: '10px' }}>
              New around here? Create an account!
            </div>

            {/* Takes new users to create user page to create an account */}
            <CreateButton
              resource='users'
              style={{
                width: '150px', 
                height: '40px', 
                borderRadius: '20px', 
                backgroundColor: '#002050', 
                color: '#fff', 
                border: 'none', 
                cursor: 'pointer', 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Create
            </CreateButton>
          </div>
        </Login>
      );
      
export default LoginPage;
