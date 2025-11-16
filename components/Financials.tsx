import React from 'react';
import { Transaction } from '../types';

const mockTransactions: Transaction[] = [
    { id: 't001', date: '2024-08-01', description: 'Cuota Mensual del Condominio', charge: 540.50, payment: null, balance: 540.50 },
    { id: 't002', date: '2024-08-05', description: 'Pago Recibido - Gracias', charge: null, payment: 540.50, balance: 0.00 },
    { id: 't003', date: '2024-08-15', description: 'Cuota Especial - Renovación del Vestíbulo', charge: 150.00, payment: null, balance: 150.00 },
    { id: 't004', date: '2024-09-01', description: 'Cuota Mensual del Condominio', charge: 540.50, payment: null, balance: 690.50 },
    { id: 't005', date: '2024-09-03', description: 'Cargo por Mora Aplicado', charge: 25.00, payment: null, balance: 715.50 },
    { id: 't006', date: '2024-09-06', description: 'Pago Recibido - Gracias', charge: null, payment: 715.50, balance: 0.00 },
];

const Financials: React.FC = () => {
  const currentBalance = mockTransactions[mockTransactions.length - 1].balance;

  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-surface p-6 rounded-lg shadow-md text-center">
                <h4 className="text-muted text-lg">Saldo Actual</h4>
                <p className={`text-3xl font-bold ${currentBalance > 0 ? 'text-red-600' : 'text-green-600'}`}>${currentBalance.toFixed(2)}</p>
            </div>
            <div className="bg-surface p-6 rounded-lg shadow-md text-center">
                <h4 className="text-muted text-lg">Próximo Vencimiento</h4>
                <p className="text-3xl font-bold text-on-surface">1 de Octubre, 2024</p>
            </div>
            <div className="bg-surface p-6 rounded-lg shadow-md text-center flex flex-col justify-center">
                <button className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-focus transition-colors duration-300">
                    Realizar un Pago
                </button>
            </div>
        </div>

        <div className="bg-surface rounded-lg shadow-md overflow-hidden">
            <h3 className="text-xl font-semibold text-on-surface p-6 border-b">Historial de Transacciones</h3>
            <div className="overflow-x-auto">
                <table className="w-full min-w-max text-sm text-left text-gray-600">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">Fecha</th>
                            <th scope="col" className="px-6 py-3">Descripción</th>
                            <th scope="col" className="px-6 py-3 text-right">Cargo</th>
                            <th scope="col" className="px-6 py-3 text-right">Pago</th>
                            <th scope="col" className="px-6 py-3 text-right">Saldo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockTransactions.slice().reverse().map((tx) => (
                            <tr key={tx.id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4">{tx.date}</td>
                                <td className="px-6 py-4 font-medium text-gray-900">{tx.description}</td>
                                <td className="px-6 py-4 text-right font-medium text-red-600">{tx.charge ? `$${tx.charge.toFixed(2)}` : '-'}</td>
                                <td className="px-6 py-4 text-right font-medium text-green-600">{tx.payment ? `$${tx.payment.toFixed(2)}` : '-'}</td>
                                <td className="px-6 py-4 text-right font-bold text-on-surface">{`$${tx.balance.toFixed(2)}`}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};

export default Financials;