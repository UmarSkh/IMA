import React, { useState } from "react";
import axios from "axios";

const InvoiceForm = () => {
  const [invoiceData, setInvoiceData] = useState({
    invoice_number: "",
    customer_name: "",
    date: "",
    details: [],
  });

  const handleChange = (e) => {
    setInvoiceData({ ...invoiceData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/invoices/", invoiceData);
      alert("Invoice created successfully! Refresh to see the changes");
    } catch (error) {
      console.error("Error creating invoice:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="invoice_number"
        placeholder="Invoice Number"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="customer_name"
        placeholder="Customer Name"
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        onChange={handleChange}
        required
      />
      <button type="submit">Create Invoice</button>
    </form>
  );
};

export default InvoiceForm;
