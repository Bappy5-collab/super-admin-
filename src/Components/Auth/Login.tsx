import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Link,
  InputAdornment,
  IconButton,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useRouter } from 'next/router';

const Login: React.FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login:', formData);
    // Redirect to dashboard after successful login
    router.push('/dashboard');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        p: 3,
      }}
    >
      <Card
        sx={{
          maxWidth: 480,
          width: '100%',
          borderRadius: '20px',
          boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.1)',
          border: '1px solid',
          borderColor: 'grey.200',
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: 'primary.main',
                mb: 1,
                letterSpacing: '-0.5px',
              }}
            >
              Safi Care
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>
              Welcome Back
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Sign in to your account to continue
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit}>
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ mb: 1.5, fontWeight: 600, color: 'text.primary', fontSize: '14px' }}>
                Email Address
              </Typography>
              <TextField
                fullWidth
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: 'text.secondary' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    background: 'white',
                  },
                }}
                required
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={{ mb: 1.5, fontWeight: 600, color: 'text.primary', fontSize: '14px' }}>
                Password
              </Typography>
              <TextField
                fullWidth
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon sx={{ color: 'text.secondary' }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        sx={{ color: 'text.secondary' }}
                      >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    background: 'white',
                  },
                }}
                required
              />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <input type="checkbox" id="remember" style={{ marginRight: '8px' }} />
                <Typography component="label" htmlFor="remember" sx={{ fontSize: '14px', color: 'text.secondary', cursor: 'pointer' }}>
                  Remember me
                </Typography>
              </Box>
              <Link
                href="#"
                sx={{
                  fontSize: '14px',
                  color: 'primary.main',
                  textDecoration: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Forgot Password?
              </Link>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                py: 1.5,
                borderRadius: '12px',
                bgcolor: 'primary.main',
                fontWeight: 600,
                fontSize: '16px',
                textTransform: 'none',
                boxShadow: '0px 4px 12px rgba(0, 182, 211, 0.3)',
                '&:hover': {
                  bgcolor: 'primary.dark',
                  transform: 'translateY(-2px)',
                  boxShadow: '0px 6px 16px rgba(0, 182, 211, 0.4)',
                },
              }}
            >
              Sign In
            </Button>

            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Typography sx={{ color: 'text.secondary', fontSize: '14px' }}>
                Don't have an account?{' '}
                <Link
                  href="/signup"
                  sx={{
                    color: 'primary.main',
                    textDecoration: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;

