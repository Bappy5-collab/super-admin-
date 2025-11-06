import React, { useState, useRef } from 'react';
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
  Avatar,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useRouter } from 'next/router';

const Signup: React.FC = () => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: null as File | null,
  });

  const handleChange = (field: string, value: string | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Handle signup logic here
    console.log('Signup:', formData);
    // Redirect to dashboard after successful signup
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
              Create Account
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Sign up to get started with Safi Care
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit}>
            <Box sx={{ mb: 3, textAlign: 'center' }}>
              <Typography sx={{ mb: 2, fontWeight: 600, color: 'text.primary', fontSize: '14px' }}>
                Profile Picture
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Avatar
                  src={profileImage || undefined}
                  sx={{
                    width: 100,
                    height: 100,
                    border: '3px solid',
                    borderColor: 'primary.main',
                    bgcolor: 'grey.200',
                    cursor: 'pointer',
                    boxShadow: '0px 4px 12px rgba(0, 182, 211, 0.2)',
                    '&:hover': {
                      opacity: 0.8,
                    },
                  }}
                  onClick={handleImageClick}
                >
                  {!profileImage && <PersonIcon sx={{ fontSize: 50 }} />}
                </Avatar>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  style={{ display: 'none' }}
                />
                <Button
                  type="button"
                  variant="outlined"
                  startIcon={<CloudUploadIcon />}
                  onClick={handleImageClick}
                  sx={{
                    borderRadius: '10px',
                    textTransform: 'none',
                    borderColor: 'grey.300',
                    color: 'text.primary',
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: 'primary.main',
                      bgcolor: 'rgba(0, 182, 211, 0.05)',
                    },
                  }}
                >
                  Upload Image
                </Button>
              </Box>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={{ mb: 1.5, fontWeight: 600, color: 'text.primary', fontSize: '14px' }}>
                Full Name
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: 'text.secondary' }} />
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
                placeholder="Create a password"
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

            <Box sx={{ mb: 3 }}>
              <Typography sx={{ mb: 1.5, fontWeight: 600, color: 'text.primary', fontSize: '14px' }}>
                Confirm Password
              </Typography>
              <TextField
                fullWidth
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon sx={{ color: 'text.secondary' }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        edge="end"
                        sx={{ color: 'text.secondary' }}
                      >
                        {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
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

            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <input type="checkbox" id="terms" style={{ marginTop: '4px' }} required />
                <Typography component="label" htmlFor="terms" sx={{ fontSize: '14px', color: 'text.secondary', cursor: 'pointer' }}>
                  I agree to the{' '}
                  <Link href="#" sx={{ color: 'primary.main', textDecoration: 'none' }}>
                    Terms and Conditions
                  </Link>{' '}
                  and{' '}
                  <Link href="#" sx={{ color: 'primary.main', textDecoration: 'none' }}>
                    Privacy Policy
                  </Link>
                </Typography>
              </Box>
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
              Create Account
            </Button>

            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Typography sx={{ color: 'text.secondary', fontSize: '14px' }}>
                Already have an account?{' '}
                <Link
                  href="/login"
                  sx={{
                    color: 'primary.main',
                    textDecoration: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Sign In
                </Link>
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Signup;

