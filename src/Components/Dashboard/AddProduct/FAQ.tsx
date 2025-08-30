// components/FAQSection.tsx
import React from "react";
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const faqs = [
    {
        question: "How much does it cost? Is it one-time or recurring?",
        answer:
            "The submission fee is a one-time payment of $99. There are no recurring charges. Your tool will be listed on our platform forever.",
    },
    {
        question: "How long does it take to appear?",
        answer:
            "Your tool will be reviewed and published within 48 hours of successful payment. We prioritize paid submissions, so there is no long queue.",
    },
    {
        question: "Does the listing expire?",
        answer:
            "No, your listing does not expire. The one-time fee ensures your tool is listed on our platform permanently.",
    },
];

const FAQSection: React.FC = () => {
    return (
        <Box sx={{ py: 8, px: { xs: 2, md: 8 }, textAlign: "center" }}>
            {/* Heading */}
            <Typography variant="h4" fontWeight={700} gutterBottom>
                Frequently Asked Questions
            </Typography>

            {/* Accordion List */}
            <Box sx={{ mt: 4, maxWidth: 800, mx: "auto" }}>
                {faqs.map((faq, index) => (
                    <Accordion key={index} sx={{ mb: 2, boxShadow: "none", borderRadius: 2 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            sx={{
                                backgroundColor: "#F9FAFB",
                                borderRadius: 2,
                                px: 3,
                                py: 1.5,
                            }}
                        >
                            <Typography fontWeight={600}>{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ px: 3, py: 2 }}>
                            <Typography color="text.secondary">{faq.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Box>
    );
};

export default FAQSection;
