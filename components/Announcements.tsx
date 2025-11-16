import React, { useState, useEffect } from 'react';
import { generateAnnouncements } from '../services/geminiService';
import { Announcement } from '../types';

const AnnouncementCard: React.FC<{ announcement: Announcement }> = ({ announcement }) => {
    const categoryColors: { [key: string]: string } = {
        'Mantenimiento': 'bg-yellow-100 text-yellow-800 border-yellow-300',
        'Evento Comunitario': 'bg-green-100 text-green-800 border-green-300',
        'Alerta de Seguridad': 'bg-red-100 text-red-800 border-red-300',
        'Administrativo': 'bg-blue-100 text-blue-800 border-blue-300',
        'Error': 'bg-gray-100 text-gray-800 border-gray-300',
    };

    const color = categoryColors[announcement.category] || categoryColors['Error'];

    return (
        <div className="bg-surface rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className={`border-l-8 ${color.replace('bg-', 'border-').replace('text-', 'border-')} p-6`}>
                <div className="flex justify-between items-start">
                    <h4 className="text-xl font-bold text-on-surface">{announcement.title}</h4>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${color}`}>
                        {announcement.category}
                    </span>
                </div>
                <p className="text-sm text-muted mt-1 mb-4">{announcement.date}</p>
                <p className="text-gray-700">{announcement.summary}</p>
            </div>
        </div>
    );
};

const LoadingSkeleton: React.FC = () => (
    <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
        <div className="flex justify-between items-start">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/4"></div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mt-2 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-full mt-1"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 mt-1"></div>
    </div>
)

const Announcements: React.FC = () => {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAnnouncements = async () => {
            setIsLoading(true);
            const data = await generateAnnouncements();
            setAnnouncements(data);
            setIsLoading(false);
        };

        fetchAnnouncements();
    }, []);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                {isLoading ? (
                    Array.from({ length: 5 }).map((_, i) => <LoadingSkeleton key={i} />)
                ) : (
                    announcements.map((ann) => (
                        <AnnouncementCard key={ann.id} announcement={ann} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Announcements;