export type Page = 'Inicio' | 'Anuncios' | 'Finanzas' | 'Documentos' | 'Reservas' | 'Mantenimiento' | 'Directorio';

export interface Announcement {
  id: number;
  title: string;
  summary: string;
  date: string;
  category: string;
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  charge: number | null;
  payment: number | null;
  balance: number;
}

export interface Document {
    id: number;
    name: string;
    url: string;
    size: string;
    lastModified: string;
    type: 'pdf' | 'doc' | 'folder';
}

export interface Reservation {
    area: string;
    date: string;
    time: string;
    notes: string;
}

export interface MaintenanceRequest {
  id: string;
  date: string;
  area: string;
  description: string;
  status: 'Reportado' | 'En Progreso' | 'Completado';
}

export interface Resident {
    id: number;
    name: string;
    apartment: string;
    phone: string;
    email: string;
    isBoardMember: boolean;
}