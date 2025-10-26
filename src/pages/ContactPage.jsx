import React from "react";
import ContactForm from "../components/ContactForm";

export default function ContactPage(){
  return (
    <div style={{padding:40, maxWidth:800, margin:'0 auto'}}>
      <h2 style={{color:'#bfefff'}}>Оставьте заявку</h2>
      <ContactForm />
    </div>
  )
}
