import React from 'react';
import { AnnouncementsIcon, FinancialsIcon, DocumentsIcon, ReservationsIcon, MaintenanceIcon } from './Icons';

const StatCard: React.FC<{ icon: React.ReactNode; title: string; value: string; color: string }> = ({ icon, title, value, color }) => (
    <div className="bg-surface rounded-xl shadow-lg p-6 flex items-center space-x-4 transition hover:shadow-xl hover:scale-105 duration-300">
        <div className={`p-3 rounded-full ${color}`}>
            {icon}
        </div>
        <div>
            <p className="text-sm font-medium text-muted">{title}</p>
            <p className="text-2xl font-bold text-on-surface">{value}</p>
        </div>
    </div>
);


const Dashboard: React.FC = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold text-on-surface mb-2">¡Bienvenida de nuevo, Jane!</h3>
      <p className="text-muted mb-8">Aquí tienes un resumen rápido de tu portal de condominio.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={<AnnouncementsIcon className="w-7 h-7 text-white" />} title="Anuncios no Leídos" value="3" color="bg-blue-500" />
        <StatCard icon={<FinancialsIcon className="w-7 h-7 text-white" />} title="Próximo Vencimiento" value="$540.50" color="bg-red-500" />
        <StatCard icon={<MaintenanceIcon className="w-7 h-7 text-white" />} title="Mantenimiento Abierto" value="2" color="bg-orange-500" />
        <StatCard icon={<ReservationsIcon className="w-7 h-7 text-white" />} title="Próximas Reservas" value="0" color="bg-green-500" />
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-surface rounded-xl shadow-lg p-6">
            <h4 className="text-xl font-semibold text-on-surface mb-4">Actividad Reciente</h4>
            <ul className="space-y-4">
                 <li className="flex items-center space-x-3">
                    <div className="p-2 bg-orange-100 rounded-full"><MaintenanceIcon className="w-5 h-5 text-orange-600" /></div>
                    <p className="text-gray-700">Nueva solicitud de mantenimiento: <span className="font-bold">"Luz del pasillo parpadea"</span></p>
                    <span className="text-sm text-muted ml-auto">hace 1 día</span>
                </li>
                <li className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-full"><FinancialsIcon className="w-5 h-5 text-green-600" /></div>
                    <p className="text-gray-700">Pago de <span className="font-bold">$540.50</span> recibido.</p>
                    <span className="text-sm text-muted ml-auto">hace 2 días</span>
                </li>
                <li className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-full"><AnnouncementsIcon className="w-5 h-5 text-blue-600" /></div>
                    <p className="text-gray-700">Nuevo anuncio: <span className="font-bold">"Control de Plagas Trimestral"</span></p>
                    <span className="text-sm text-muted ml-auto">hace 4 días</span>
                </li>
                <li className="flex items-center space-x-3">
                    <div className="p-2 bg-yellow-100 rounded-full"><DocumentsIcon className="w-5 h-5 text-yellow-600" /></div>
                    <p className="text-gray-700">Nuevo documento subido: <span className="font-bold">"Acta de Asamblea"</span></p>
                    <span className="text-sm text-muted ml-auto">hace 1 semana</span>
                </li>
            </ul>
        </div>
        <div className="bg-surface rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center">
            <img src="https://picsum.photos/seed/condo/200" alt="Condo Building" className="rounded-lg w-full h-40 object-cover mb-4" />
            <h4 className="text-xl font-semibold text-on-surface">The Grand Towers</h4>
            <p className="text-muted mt-2">¿Tienes una solicitud de mantenimiento? ¿Necesitas contactar a la administración? Encuentra todos los contactos importantes aquí.</p>
            <button className="mt-4 bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-focus transition-colors duration-300">
                Información de Contacto
            </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;