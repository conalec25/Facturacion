import React from 'react';

const CrearFactura: React.FC = () => {
    // State to hold invoice data
    const [invoiceData, setInvoiceData] = React.useState({
        customerName: '',
        invoiceItems: [{}],
        totalAmount: 0,
    });

    // Function to handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInvoiceData({ ...invoiceData, [name]: value });
    };

    // Function to submit the invoice
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Invoice submitted:', invoiceData);
        // Here you would typically send the data to your server
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Customer Name:</label>
                <input type="text" name="customerName" value={invoiceData.customerName} onChange={handleInputChange} />
            </div>
            {/* Add additional fields as necessary */}
            {/* For simplicity, here we just have customer name */}
            <button type="submit">Create Invoice</button>
        </form>
    );
};

export default CrearFactura;