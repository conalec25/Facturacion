import React, { useEffect, useState } from 'react';

interface Factura {
    id: number;
    title: string;
    // Add more fields based on your SharePoint list structure
}

const ListaFacturas: React.FC = () => {
    const [facturas, setFacturas] = useState<Factura[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFacturas = async () => {
            try {
                const response = await fetch('YOUR_SHAREPOINT_LIST_API_URL');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setFacturas(data.value); // Adjust based on your data structure
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFacturas();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Lista de Facturas</h2>
            <ul>
                {facturas.map((factura) => (
                    <li key={factura.id}>{factura.title}</li> // Adjust display fields as necessary
                ))}
            </ul>
        </div>
    );
};

export default ListaFacturas;