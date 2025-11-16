import React from 'react';
import { Document } from '../types';
import { DownloadIcon } from './Icons';

const mockDocuments: Document[] = [
    { id: 1, name: 'Estatutos del Condominio', url: '#', size: '1.2 MB', lastModified: '2023-01-15', type: 'pdf' },
    { id: 2, name: 'Reglas y Regulaciones', url: '#', size: '850 KB', lastModified: '2023-05-20', type: 'pdf' },
    { id: 3, name: 'Actas de Reuniones', url: '#', size: 'Folder', lastModified: '2024-08-10', type: 'folder' },
    { id: 4, name: 'Estados Financieros 2023', url: '#', size: '2.5 MB', lastModified: '2024-02-28', type: 'pdf' },
    { id: 5, name: 'Certificado de Seguro', url: '#', size: '500 KB', lastModified: '2024-06-01', type: 'pdf' },
    { id: 6, name: 'Formulario de Solicitud de Renovación', url: '#', size: '150 KB', lastModified: '2022-11-10', type: 'doc' },
];

const TypeIcon: React.FC<{ type: 'pdf' | 'doc' | 'folder' }> = ({ type }) => {
    const iconClasses = "w-10 h-10";
    if (type === 'pdf') return <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} viewBox="0 0 24 24" fill="#E53E3E"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.5 18H8v-2.5A1.5 1.5 0 0 1 9.5 14h0A1.5 1.5 0 0 1 11 15.5V18h-1.5v-2.5a.5.5 0 0 0-.5-.5h0a.5.5 0 0 0-.5.5V18zm3-4.5h2.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H14v1h-1.5v-4zm5-1.5H16v4h2.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/></svg>;
    if (type === 'doc') return <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} viewBox="0 0 24 24" fill="#4285F4"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM12 18H8v-2h4v2zm4-4H8v-2h8v2zm0-4H8V8h8v2z"/></svg>;
    if (type === 'folder') return <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="#F6AD55" viewBox="0 0 24 24"><path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>;
    return null;
}

const Documents: React.FC = () => {
  return (
    <div className="bg-surface rounded-lg shadow-md overflow-hidden">
        <h3 className="text-xl font-semibold text-on-surface p-6 border-b">Centro de Documentos</h3>
        <div className="overflow-x-auto">
            <table className="w-full min-w-max text-sm text-left text-gray-600">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">Nombre</th>
                        <th scope="col" className="px-6 py-3">Última Modificación</th>
                        <th scope="col" className="px-6 py-3">Tamaño del Archivo</th>
                        <th scope="col" className="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {mockDocuments.map((doc) => (
                        <tr key={doc.id} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-4 font-medium text-gray-900">
                                <div className="flex items-center space-x-3">
                                    <TypeIcon type={doc.type} />
                                    <span>{doc.name}</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">{doc.lastModified}</td>
                            <td className="px-6 py-4">{doc.size}</td>
                            <td className="px-6 py-4 text-right">
                                <a href={doc.url} download={doc.type !== 'folder'} title={doc.type === 'folder' ? 'Abrir Carpeta' : 'Descargar'} className="text-primary hover:text-primary-focus p-2 rounded-full hover:bg-teal-50 transition-colors">
                                    {doc.type !== 'folder' && <DownloadIcon />}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default Documents;