import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Box,
  Card,
  Grid,
  IconButton,
  Divider,
  Snackbar,
  Alert,
  CircularProgress,
  LinearProgress,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

const Upload: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
  });

  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([
    {
      id: '1',
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
    },
  ]);

  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error' | 'info' | 'warning',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleQuizQuestionChange = (id: string, field: string, value: string | number) => {
    setQuizQuestions((prev) =>
      prev.map((q) =>
        q.id === id
          ? field === 'question'
            ? { ...q, question: value as string }
            : field === 'correctAnswer'
            ? { ...q, correctAnswer: value as number }
            : { ...q, [field]: value }
          : q
      )
    );
  };

  const handleOptionChange = (questionId: string, optionIndex: number, value: string) => {
    setQuizQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId
          ? {
              ...q,
              options: q.options.map((opt, idx) => (idx === optionIndex ? value : opt)),
            }
          : q
      )
    );
  };

  const addQuizQuestion = () => {
    const newQuestion: QuizQuestion = {
      id: Date.now().toString(),
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
    };
    setQuizQuestions((prev) => [...prev, newQuestion]);
  };

  const removeQuizQuestion = (id: string) => {
    setQuizQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.title.trim()) {
      setSnackbar({
        open: true,
        message: 'Please enter a title',
        severity: 'error',
      });
      return;
    }

    setLoading(true);
    setUploadProgress(0);

    try {
      // Create FormData to send data
      const uploadFormData = new FormData();
      uploadFormData.append('title', formData.title);
      uploadFormData.append('description', formData.description);
      uploadFormData.append('date', formData.date);
      
      // Add quiz questions as JSON string
      if (quizQuestions.length > 0 && quizQuestions.some(q => q.question.trim())) {
        uploadFormData.append('quizQuestions', JSON.stringify(quizQuestions));
      }

      // Make API call with progress tracking
      const xhr = new XMLHttpRequest();

      // Track upload progress
      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const percentComplete = (e.loaded / e.total) * 100;
          setUploadProgress(percentComplete);
        }
      });

      // Handle response
      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          setSnackbar({
            open: true,
            message: 'Content uploaded successfully!',
            severity: 'success',
          });
          
          // Reset form
          setFormData({
            title: '',
            description: '',
            date: '',
          });
          setQuizQuestions([
            {
              id: '1',
              question: '',
              options: ['', '', '', ''],
              correctAnswer: 0,
            },
          ]);
          setUploadProgress(0);
        } else {
          let errorMessage = 'Upload failed. Please try again.';
          try {
            const response = JSON.parse(xhr.responseText);
            errorMessage = response.message || errorMessage;
          } catch (e) {
            errorMessage = xhr.statusText || errorMessage;
          }
          setSnackbar({
            open: true,
            message: errorMessage,
            severity: 'error',
          });
        }
        setLoading(false);
      });

      // Handle errors
      xhr.addEventListener('error', () => {
        setSnackbar({
          open: true,
          message: 'Network error. Please check your connection and try again.',
          severity: 'error',
        });
        setLoading(false);
        setUploadProgress(0);
      });

      // Handle abort
      xhr.addEventListener('abort', () => {
        setLoading(false);
        setUploadProgress(0);
      });

      // Open and send request
      xhr.open('POST', 'https://hire-gpt-backend.vercel.app/api/videos/upload');
      xhr.send(uploadFormData);

    } catch (error) {
      console.error('Upload error:', error);
      setSnackbar({
        open: true,
        message: 'An unexpected error occurred. Please try again.',
        severity: 'error',
      });
      setLoading(false);
      setUploadProgress(0);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box sx={{ pb: 4 }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700, 
              mb: 0.5,
              color: "text.primary",
              letterSpacing: "-0.5px"
            }}
          >
            Upload Content
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Create content and quiz questions for your courses
          </Typography>
        </Box>

        <Card
          sx={{
            background: "linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%)",
            borderRadius: "16px",
            p: 4,
            border: "1px solid rgba(0, 0, 0, 0.05)",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Grid container spacing={3}>
            {/* Title */}
            <Grid size={{ xs: 12 }}>
              <Typography sx={{ mb: 1.5, fontWeight: 600, color: "text.primary", fontSize: "14px" }}>
                Title
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter course title"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    background: 'white',
                    '&:hover': {
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'primary.main',
                      },
                    },
                  },
                }}
              />
            </Grid>

            {/* Description */}
            <Grid size={{ xs: 12 }}>
              <Typography sx={{ mb: 1.5, fontWeight: 600, color: "text.primary", fontSize: "14px" }}>
                Description
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                placeholder="Enter course description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    background: 'white',
                    '&:hover': {
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'primary.main',
                      },
                    },
                  },
                }}
              />
            </Grid>

            {/* Date */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography sx={{ mb: 1.5, fontWeight: 600, color: "text.primary", fontSize: "14px" }}>
                Date
              </Typography>
              <TextField
                fullWidth
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                InputProps={{
                  startAdornment: (
                    <Box sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
                      <CalendarTodayIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
                    </Box>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    background: 'white',
                    '&:hover': {
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'primary.main',
                      },
                    },
                  },
                }}
              />
            </Grid>

            {/* Quiz Questions Section */}
            <Grid size={{ xs: 12 }}>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '18px', color: "text.primary", mb: 0.5 }}>
                    Quiz Questions
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "13px" }}>
                    Add questions to test student understanding
                  </Typography>
                </Box>
                <Button
                  startIcon={<AddIcon />}
                  onClick={addQuizQuestion}
                  variant="outlined"
                  sx={{
                    textTransform: 'none',
                    color: 'primary.main',
                    fontWeight: 600,
                    borderColor: 'primary.main',
                    borderRadius: '10px',
                    px: 2.5,
                    py: 1,
                    '&:hover': {
                      bgcolor: 'rgba(0, 182, 211, 0.1)',
                      borderColor: 'primary.dark',
                    },
                  }}
                >
                  Add Question
                </Button>
              </Box>
            </Grid>

            {/* Quiz Questions List */}
            {quizQuestions.map((question, qIndex) => (
              <Grid key={question.id} size={{ xs: 12 }}>
                <Card
                  sx={{
                    p: 3,
                    mb: 2,
                    border: '1px solid',
                    borderColor: 'grey.200',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: '0px 4px 12px rgba(0, 182, 211, 0.15)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography sx={{ fontWeight: 700, color: "text.primary", fontSize: "16px" }}>
                      Question {qIndex + 1}
                    </Typography>
                    {quizQuestions.length > 1 && (
                      <IconButton
                        size="small"
                        onClick={() => removeQuizQuestion(question.id)}
                        sx={{ 
                          color: 'error.main',
                          '&:hover': {
                            bgcolor: 'rgba(239, 68, 68, 0.1)',
                          },
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    )}
                  </Box>

                  {/* Question */}
                  <TextField
                    fullWidth
                    placeholder="Enter your question"
                    value={question.question}
                    onChange={(e) => handleQuizQuestionChange(question.id, 'question', e.target.value)}
                    sx={{ mb: 2 }}
                  />

                  {/* Options */}
                  <Typography sx={{ mb: 1.5, fontWeight: 600, color: "text.primary", fontSize: "13px" }}>
                    Options
                  </Typography>
                  {question.options.map((option, optIndex) => (
                    <Box key={optIndex} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                      <TextField
                        fullWidth
                        placeholder={`Option ${optIndex + 1}`}
                        value={option}
                        onChange={(e) => handleOptionChange(question.id, optIndex, e.target.value)}
                        size="small"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '10px',
                            background: 'white',
                          },
                        }}
                      />
                      <Button
                        variant={question.correctAnswer === optIndex ? 'contained' : 'outlined'}
                        onClick={() => handleQuizQuestionChange(question.id, 'correctAnswer', optIndex)}
                        startIcon={question.correctAnswer === optIndex ? <CheckCircleIcon /> : null}
                        sx={{
                          minWidth: '140px',
                          textTransform: 'none',
                          borderRadius: '10px',
                          bgcolor: question.correctAnswer === optIndex ? 'success.main' : 'transparent',
                          color: question.correctAnswer === optIndex ? 'white' : 'text.secondary',
                          borderColor: question.correctAnswer === optIndex ? 'success.main' : 'grey.300',
                          fontWeight: 600,
                          fontSize: "13px",
                          '&:hover': {
                            bgcolor: question.correctAnswer === optIndex ? 'success.dark' : 'rgba(0, 182, 211, 0.1)',
                            borderColor: question.correctAnswer === optIndex ? 'success.dark' : 'primary.main',
                          },
                        }}
                      >
                        {question.correctAnswer === optIndex ? 'Correct' : 'Mark Correct'}
                      </Button>
                    </Box>
                  ))}
                </Card>
              </Grid>
            ))}

            {/* Upload Progress */}
            {loading && (
              <Grid size={{ xs: 12 }}>
                <Box sx={{ mt: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                    <CircularProgress size={20} />
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: "13px" }}>
                      Uploading... {Math.round(uploadProgress)}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={uploadProgress} 
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      bgcolor: 'rgba(0, 182, 211, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 4,
                        bgcolor: 'primary.main',
                      },
                    }}
                  />
                </Box>
              </Grid>
            )}

            {/* Submit Button */}
            <Grid size={{ xs: 12 }}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3, pt: 3, borderTop: "1px solid", borderColor: "grey.200" }}>
                <Button
                  variant="outlined"
                  disabled={loading}
                  onClick={() => {
                    setFormData({
                      title: '',
                      description: '',
                      date: '',
                    });
                    setQuizQuestions([
                      {
                        id: '1',
                        question: '',
                        options: ['', '', '', ''],
                        correctAnswer: 0,
                      },
                    ]);
                  }}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: '12px',
                    textTransform: 'none',
                    fontWeight: 600,
                    borderColor: 'grey.300',
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: 'primary.main',
                      bgcolor: 'rgba(0, 182, 211, 0.05)',
                    },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  disabled={loading}
                  startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: '12px',
                    textTransform: 'none',
                    fontWeight: 600,
                    bgcolor: 'primary.main',
                    boxShadow: "0px 4px 12px rgba(0, 182, 211, 0.3)",
                    '&:hover': {
                      bgcolor: 'primary.dark',
                      transform: loading ? 'none' : "translateY(-2px)",
                      boxShadow: "0px 6px 16px rgba(0, 182, 211, 0.4)",
                    },
                    '&:disabled': {
                      bgcolor: 'primary.main',
                      opacity: 0.7,
                    },
                  }}
                >
                  {loading ? 'Uploading...' : 'Upload Content'}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{
            width: '100%',
            borderRadius: '12px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Upload;
