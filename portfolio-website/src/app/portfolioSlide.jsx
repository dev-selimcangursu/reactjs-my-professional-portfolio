import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      image: "",
      title: "CRM Sistemi",
      company: "Wiky Watch Akıllı Çocuk Saatleri Firması",
      subject: "CRM",
    },
    {
      image: "",
      title: "ERP Sistemi",
      company: "Wiky Watch Akıllı Çocuk Saatleri Firması",
      subject: "ERP",
    },
    {
      image: "",
      title: "Resmi Web Site",
      company: "Wiky Watch Akıllı Çocuk Saatleri Firması",
      subject: "Web Site",
    },
    {
      image: "",
      title: "CRM Sistemi",
      company: "Just English Dil Okulları Firması",
      subject: "CRM",
    },
    {
      image: "",
      title: "Resmi Web site",
      company: "Just English Dil Okulları Firması",
      subject: "Web Site",
    },
    {
      image: "",
      title: "Resmi Web site",
      company: "Amerikan Estetik Hastane Firması",
      subject: "Web Site",
    },
    {
      image: "",
      title: "CRM Sistemi",
      company: "Amerikan Estetik Hastane Firması",
      subject: "CRM",
    },
  ],
};

export const portfolioSlide = createSlice({
  name: "portfolio",
  initialState,
  reducers: {},
});

export default portfolioSlide.reducer;
