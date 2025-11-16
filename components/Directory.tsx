import React, { useState, useMemo } from 'react';
import { Resident } from '../types';

const mockResidents: Resident[] = [
    { id: 1, name: 'Alice Johnson', apartment: '1A', phone: '555-0101', email: 'alice.j@email.com', isBoardMember: true },
    { id: 2, name: 'Bob Williams', apartment: '1B', phone: '555-0102', email: 'bob.w@email.com', isBoardMember: false },
    { id: 3, name: 'Carlos Rodriguez', apartment: '2A', phone: '555-0103', email: 'carlos.r@email.com', isBoardMember: false },
    { id: 4, name: 'Diana Miller', apartment: '2B', phone: '555-0104', email: 'diana.m@email.com', isBoardMember: false },
    { id: 5, name: 'Ethan Garcia', apartment: '3A', phone: '555-0105', email: 'ethan.g@email.com', isBoardMember: true },
    { id: 6, name: 'Fiona Chen', apartment: '3B', phone: '555-0106', email: 'fiona.c@email.com', isBoardMember: false },
    { id: 7, name: 'George Lee', apartment: '4A', phone: '555-0107', email: 'george.l@email.com', isBoardMember: false },
    { id: 8, name: 'Jane Doe', apartment: '5B', phone: '555-0108', email: 'jane.d@email.com', isBoardMember: false },
];


const Directory: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredResidents = useMemo(() => {
        return mockResidents.filter(resident =>
            resident.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resident.apartment.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    return (
        <div className="bg-surface rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b">
                <h3 className="text-2xl font-bold text-on-surface">Directorio de Residentes</h3>
                <p className="text-muted mt-1">Encuentra la información de contacto de tus vecinos.</p>
                <div className="mt-4">
                    <input
                        type="text"
                        placeholder="Buscar por nombre o apartamento..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full min-w-max text-sm text-left text-gray-600">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">Nombre</th>
                            <th scope="col" className="px-6 py-3">Apartamento</th>
                            <th scope="col" className="px-6 py-3">Teléfono</th>
                            <th scope="col" className="px-6 py-3">Correo Electrónico</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredResidents.map((resident) => (
                            <tr key={resident.id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    <div className="flex items-center">
                                        <span>{resident.name}</span>
                                        {resident.isBoardMember && (
                                            <span className="ml-2 text-xs font-semibold bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded-full">
                                                Junta Directiva
                                            </span>
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-4">{resident.apartment}</td>
                                <td className="px-6 py-4">{resident.phone}</td>
                                <td className="px-6 py-4">
                                    <a href={`mailto:${resident.email}`} className="text-primary hover:underline">
                                        {resident.email}
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                 {filteredResidents.length === 0 && (
                    <div className="text-center p-6 text-muted">
                        No se encontraron residentes que coincidan con la búsqueda.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Directory;
