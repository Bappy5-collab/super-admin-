
import { Box } from "@mui/material";
import React from "react";
import FAQSection from "./FAQ";
import SubmitToolSection from "./SubnitTools";
import AddHero from "./AddHero";
import SubmissionForm from "./Submission";


const AddProduct: React.FC = () => {
    return (
        <Box>
            <AddHero/>
            <SubmissionForm/>
            <SubmitToolSection/>
            <FAQSection/>
        </Box>

    );
};

export default AddProduct;
