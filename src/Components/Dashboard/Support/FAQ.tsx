import { Box, Card, CardContent, Typography, Grid } from "@mui/material";

export default function FAQSection() {
    const faqs = [
        { q: "How do I update my AI tool?", a: "Go to Product Settings and click 'Upload New Version'. Ensure your new version is compatible with existing users." },
        { q: "When do I receive payments?", a: "Payments are processed monthly on the 15th. You'll receive an email notification when payment is sent." },
        { q: "How can I increase my tool's visibility?", a: "Maintain high ratings, respond to reviews, and keep your product description updated with relevant keywords." },
        { q: "What are the platform fees?", a: "We charge a $100 listing fee and 3% transaction fee on sales. No hidden charges or monthly fees." },
        { q: "Can I offer free trials?", a: "Yes! You can set up trial periods in your pricing settings. This often increases conversion rates." },
        { q: "How do I handle user support?", a: "You can respond to reviews directly or provide support contact info in your product description." },
    ];

    return (
        <Card sx={{ borderRadius: 2, mt: 2 }}>
            <CardContent>
                <Typography fontWeight={600} mb={2}>
                    Frequently Asked Questions
                </Typography>
                <Grid container spacing={2}>
                    {faqs.map((item, i) => (
                        <Grid size={{ xs: 12, md: 6 }} key={i}>
                            <Box
                                sx={{
                                    borderLeft: "4px solid #00B6D3",
                                    pl: 2, 
                                    mb: 2, 
                                }}
                            >
                                <Typography fontWeight={600} >
                                    {item.q}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.a}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>

    );
}
