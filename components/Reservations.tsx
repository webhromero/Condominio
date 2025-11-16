import React, { useState } from 'react';
import { Reservation } from '../types';

const Reservations: React.FC = () => {
    const [reservation, setReservation] = useState<Reservation>({
        area: '',
        date: '',
        time: '',
        notes: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setReservation(prevState => ({...prevState, [name]: value}));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to a server
        console.log('Reservation Submitted:', reservation);
        setIsSubmitted(true);
        // Reset form after a delay
        setTimeout(() => {
            setIsSubmitted(false);
            setReservation({ area: '', date: '', time: '', notes: '' });
        }, 5000);
    };

    if (isSubmitted) {
        return (
            <div className="bg-surface max-w-2xl mx-auto p-8 rounded-xl shadow-lg text-center">
                <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-4 text-2xl font-bold text-on-surface">¡Solicitud Enviada!</h3>
                <p className="mt-2 text-muted">Su solicitud de reserva para el área <span className="font-semibold text-gray-700">{reservation.area}</span> ha sido recibida. Recibirá un correo electrónico de confirmación una vez que sea aprobada por la administración.</p>
            </div>
        )
    }

  return (
    <div className="bg-surface max-w-2xl mx-auto p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-on-surface mb-2">Reservar un Área Común</h2>
        <p className="text-muted mb-6">Complete el siguiente formulario para solicitar una reserva.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="area" className="block text-sm font-medium text-gray-700">Área Común</label>
                <select id="area" name="area" value={reservation.area} onChange={handleChange} required className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md">
                    <option value="">Seleccione un área...</option>
                    <option value="Salón de Fiestas">Salón de Fiestas</option>
                    <option value="Parrillera 1">Parrillera 1</option>
                    <option value="Parrillera 2">Parrillera 2</option>
                    <option value="Cancha de Tenis">Cancha de Tenis</option>
                    <option value="Suite de Huéspedes">Suite de Huéspedes</option>
                </select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">Fecha</label>
                    <input type="date" id="date" name="date" value={reservation.date} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700">Franja Horaria</label>
                    <input type="time" id="time" name="time" value={reservation.time} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                </div>
            </div>

            <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notas (opcional)</label>
                <textarea id="notes" name="notes" rows={4} value={reservation.notes} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" placeholder="Cualquier solicitud o detalle especial..."></textarea>
            </div>

            <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300">
                    Enviar Solicitud de Reserva
                </button>
            </div>
        </form>
    </div>
  );
};

export default Reservations;