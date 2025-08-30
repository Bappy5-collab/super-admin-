// pages/index.tsx
import React from "react";
import {  Container } from "@mui/material";
import AddProduct from "@/Components/Dashboard/AddProduct/AddProduct";


const AddProductPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <AddProduct/>
    </Container>
  );
};

export default AddProductPage;
