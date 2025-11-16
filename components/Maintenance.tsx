import React, { useState } from 'react';
import { MaintenanceRequest } from '../types';

const mockMaintenanceRequests: MaintenanceRequest[] = [
    { id: 'm001', date: '2024-08-25', area: 'Piscina', description: 'La bomba del filtro de la piscina hace un ruido extraño.', status: 'Completado' },
    { id: 'm002', date: '2024-09-02', area: 'Gimnasio', description: 'La cinta de correr #2 no enciende.', status: 'En Progreso' },
    { id: 'm003', date: '2024-09-05', area: 'Pasillo Piso 5', description: 'La luz del pasillo cerca del Apto 5B está parpadeando.', status: 'Reportado' },
    { id: 'm004', date: '2024-09-08', area: 'Estacionamiento', description: 'Hay una mancha de aceite grande en el puesto de visitante #3.', status: 'Reportado' },
];

const StatusBadge: React.FC<{ status: MaintenanceRequest['status'] }> = ({ status }) => {
    const statusColors = {
        Reportado: 'bg-yellow-100 text-yellow-800',
        'En Progreso': 'bg-blue-100 text-blue-800',
        Completado: 'bg-green-100 text-green-800',
    };
    return (
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[status]}`}>
            {status}
        </span>
    );
};


const Maintenance: React.FC = () => {
    const [requests, setRequests] = useState<MaintenanceRequest[]>(mockMaintenanceRequests);
    const [newRequest, setNewRequest] = useState({ area: '', description: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewRequest(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!newRequest.area || !newRequest.description) return;

        const submittedRequest: MaintenanceRequest = {
            id: `m${Math.floor(Math.random() * 1000)}`,
            date: new Date().toISOString().split('T')[0],
            ...newRequest,
            status: 'Reportado'
        }
        setRequests(prev => [submittedRequest, ...prev]);
        setNewRequest({ area: '', description: '' });
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
                <div className="bg-surface p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-on-surface mb-2">Reportar un Problema</h3>
                    <p className="text-muted mb-6">¿Ves algo que necesita arreglo? Infórmanos aquí.</p>
                    
                    {isSubmitted ? (
                         <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md" role="alert">
                            <p className="font-bold">Solicitud Enviada</p>
                            <p>Gracias por tu reporte. Lo revisaremos pronto.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="area" className="block text-sm font-medium text-gray-700">Área / Ubicación</label>
                                <input type="text" id="area" name="area" value={newRequest.area} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary" placeholder="Ej: Gimnasio, Apto 5B" />
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción del Problema</label>
                                <textarea id="description" name="description" value={newRequest.description} onChange={handleChange} rows={4} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary" placeholder="Por favor, sé lo más detallado posible..."></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                                    Enviar Solicitud
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
            <div className="lg:col-span-2">
                <div className="bg-surface rounded-xl shadow-lg overflow-hidden">
                    <h3 className="text-xl font-semibold text-on-surface p-6 border-b">Historial de Solicitudes</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-max text-sm text-left text-gray-600">
                             <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Fecha</th>
                                    <th scope="col" className="px-6 py-3">Área</th>
                                    <th scope="col" className="px-6 py-3">Descripción</th>
                                    <th scope="col" className="px-6 py-3">Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {requests.map(req => (
                                    <tr key={req.id} className="bg-white border-b hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">{req.date}</td>
                                        <td className="px-6 py-4 font-medium text-gray-900">{req.area}</td>
                                        <td className="px-6 py-4 max-w-xs truncate" title={req.description}>{req.description}</td>
                                        <td className="px-6 py-4"><StatusBadge status={req.status} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Maintenance;
