import React, { useRef, useState } from 'react';
import {
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Paper,
  Divider,
  Button,
  Box,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


interface SubmissionFormProps {
  onFileSelect?: (file: File) => void;
}

const SubmissionForm: React.FC<SubmissionFormProps> = ({ onFileSelect }) => {
  // Single state for all form data
  const [formData, setFormData] = useState({
    email: '',
    toolName: '',
    website: '',
    category: '',
    description: '',
    contentOption: 'team',
    uploadedImage: null as string | null,
    uploadedDoc: null as File | null,
  });

  const imageInputRef = useRef<HTMLInputElement>(null);
  const docInputRef = useRef<HTMLInputElement>(null);

  // Generic handler for text fields
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Image handlers
  const handleImageClick = () => imageInputRef.current?.click();
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect?.(file);
      setFormData((prev) => ({ ...prev, uploadedImage: URL.createObjectURL(file) }));
    }
  };
  const handleImageDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      onFileSelect?.(file);
      setFormData((prev) => ({ ...prev, uploadedImage: URL.createObjectURL(file) }));
    }
  };
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => event.preventDefault();

  // Doc handlers
  const handleDocClick = () => docInputRef.current?.click();
  const handleDocChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size <= 10 * 1024 * 1024) {
        onFileSelect?.(file);
        setFormData((prev) => ({ ...prev, uploadedDoc: file }));
      } else {
        alert('File must be less than or equal to 10MB');
      }
    }
  };
  const handleDocDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      if (file.size <= 10 * 1024 * 1024) {
        onFileSelect?.(file);
        setFormData((prev) => ({ ...prev, uploadedDoc: file }));
      } else {
        alert('File must be less than or equal to 10MB');
      }
    }
  };

  return (
    <Box sx={{ py: 8 }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
        {/* Left Form Section */}
        <Box sx={{ flex: '1 1 600px', maxWidth: '900px', backgroundColor: '#fff', p: 4, borderRadius: 2 }}>

          {/* Email */}
          <Box mb={3}>
            <Typography>Admin email</Typography>
            <TextField
              fullWidth
              placeholder="Type your mail"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </Box>

          {/* Tool Name */}
          <Box mb={3}>
            <Typography>Tool Name</Typography>
            <TextField
              fullWidth
              placeholder="e.g., Visionary AI"
              value={formData.toolName}
              onChange={(e) => handleInputChange('toolName', e.target.value)}
            />
          </Box>

          {/* Website URL */}
          <Box mb={3}>
            <Typography>Website URL</Typography>
            <TextField
              fullWidth
              placeholder="https://"
              value={formData.website}
              onChange={(e) => handleInputChange('website', e.target.value)}
            />
          </Box>

          {/* Logo Upload */}
          <Typography>logo / Image Upload</Typography>
          <Box mb={3}>
            <Paper
              variant="outlined"
              sx={{
                borderStyle: 'dashed',
                p: 4,
                border: '2px dashed #ccc',
                textAlign: 'center',
                height: '118px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onClick={handleImageClick}
              onDrop={handleImageDrop}
              onDragOver={handleDragOver}
            >
              <input
                type="file"
                accept="image/png,image/jpeg,image/gif"
                ref={imageInputRef}
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />
              {formData.uploadedImage ? (
                <img src={formData.uploadedImage} alt="Uploaded" style={{ maxHeight: '100%', maxWidth: '100%' }} />
              ) : (
                <>
                  <CloudUploadIcon sx={{ fontSize: 40, mb: 1, color: '#888' }} />
                  <Typography>
                    <span style={{ color: '#00bfa5' }}>Upload a file</span> or drag and drop
                  </Typography>
                  <Typography variant="caption">PNG, JPG, GIF up to 10MB</Typography>
                </>
              )}
            </Paper>
          </Box>

          {/* Category */}
          <Box mb={3}>
            <Typography>Category & Tags</Typography>
            <TextField
              fullWidth
              placeholder="e.g., Copywriting, Image Generation"
              helperText="Separate tags with commas. Max 5 tags."
              value={formData.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
            />
          </Box>

          {/* Description */}
          <Box mb={3}>
            <Typography>Short Description</Typography>
            <TextField
              fullWidth
              placeholder="Describe your tool in a few sentences."
              multiline
              rows={3}
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
            />
          </Box>

          {/* Radio options */}
          <Box mb={3}>
            <Typography fontWeight={600} mb={1}>Choose how to generate content:</Typography>
            <RadioGroup
              value={formData.contentOption}
              onChange={(e) => handleInputChange('contentOption', e.target.value)}
              sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
            >
              <FormControlLabel
                value="team"
                sx={{
                  width: '100%', m: 0,
                  border: '1px solid #00A99D', borderRadius: '8px', p: '3px',
                  backgroundColor: formData.contentOption === 'team' ? '#e6fffa' : 'transparent'
                }}
                control={<Radio sx={{ color: '#00bfa5' }} />}
                label={<Typography sx={{ fontWeight: 500 }}>🟢 Generated by our team</Typography>}
              />
              <FormControlLabel
                value="manual"
                sx={{
                  width: '100%', m: 0,
                  border: '1px solid #D1D5DB', borderRadius: '8px', p: '3px',
                }}
                control={<Radio sx={{ color: '#FFA726' }} />}
                label={<Typography sx={{ fontWeight: 500 }}>⚠️ I’ll provide the content manually</Typography>}
              />
            </RadioGroup>
          </Box>

          {/* Upload Word file */}
          <Box>
            <Typography>Our team content file</Typography>
            <Paper
              variant="outlined"
              sx={{
                borderStyle: 'dashed',
                p: 4,
                textAlign: 'center',
                border: '2px dashed #ccc',
                cursor: 'pointer',
              }}
              onClick={handleDocClick}
              onDrop={handleDocDrop}
              onDragOver={handleDragOver}
            >
              <input
                type="file"
                accept=".doc,.docx,.txt"
                ref={docInputRef}
                style={{ display: 'none' }}
                onChange={handleDocChange}
              />
              <CloudUploadIcon sx={{ fontSize: 40, mb: 1, color: '#888' }} />
              <Typography>
                <span style={{ color: '#00bfa5' }}>Upload a file</span> or drag and drop
              </Typography>
              <Typography variant="caption">DOCX, TXT up to 10MB</Typography>
              {formData.uploadedDoc && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Selected: {formData.uploadedDoc.name}
                </Typography>
              )}
            </Paper>
          </Box>
        </Box>

        {/* Right Sidebar */}
        <Box sx={{ flex: '1 1 300px', maxWidth: '360px', backgroundColor: '#F7F9FC', p: 3, border:'1px solid #E5E7EB', borderRadius: 2, height: 'fit-content' }}>
          <Typography variant="h6" fontWeight={600}>Submission Summary</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
            <Typography sx={{ color: '#666' }}>Standard Listing Fee</Typography>
            <Typography sx={{ fontSize: '28px', fontWeight: 700 }}>$99</Typography>
          </Box>
          <Divider sx={{ borderBottomWidth: '3px', my: 2, color: 'black' }} />
          <Typography variant="body2" sx={{ color: '#999', mb: 3 }}>One-time payment for a lifetime listing.</Typography>
          <Button onClick={() => {
            console.log('Form Data:', formData);
          }} fullWidth variant="contained" sx={{ backgroundColor: '#00bfa5', textTransform: 'none', fontWeight: 600, fontSize: '16px', py: 1.5, borderRadius: 2, ':hover': { backgroundColor: '#00a38c' } }}>
            Pay & Submit
          </Button>
          <Typography variant="caption" sx={{ mt: 2, display: 'block', color: '#4caf50' }}>
            ✅ No queue – tool will be live within 48 hours
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SubmissionForm;
