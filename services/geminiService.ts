import { GoogleGenAI, Type } from "@google/genai";
import { Announcement } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateAnnouncements = async (): Promise<Announcement[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Genera 5 anuncios realistas para un edificio de condominios, en español. Incluye categorías como 'Mantenimiento', 'Evento Comunitario', 'Alerta de Seguridad' y 'Administrativo'. Proporciona un título, un breve resumen (2-3 frases), una fecha en formato 'Día de Mes de Año', y una categoría para cada uno. Asegúrate de que la salida sea un array JSON válido.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: {
                type: Type.STRING,
                description: 'El título del anuncio.',
              },
              summary: {
                type: Type.STRING,
                description: 'Un breve resumen del contenido del anuncio.',
              },
              date: {
                type: Type.STRING,
                description: 'La fecha del anuncio, ej., "20 de Agosto, 2024".',
              },
              category: {
                type: Type.STRING,
                description: 'La categoría del anuncio (ej., Mantenimiento, Evento Comunitario).',
              },
            },
            required: ["title", "summary", "date", "category"],
          },
        },
      },
    });

    const jsonText = response.text.trim();
    const generatedData = JSON.parse(jsonText);

    // Add IDs to the generated data
    return generatedData.map((item: Omit<Announcement, 'id'>, index: number) => ({
      ...item,
      id: index + 1,
    }));
  } catch (error) {
    console.error("Error generating announcements with Gemini:", error);
    // Return fallback data in case of an API error
    return [
      { id: 1, title: 'Error de API: No se pudieron obtener los datos', summary: 'Hubo un problema al conectar con el servicio de generación de contenido. Por favor, inténtalo de nuevo más tarde. Mostrando datos estáticos de respaldo.', date: new Date().toLocaleDateString(), category: 'Error' },
      { id: 2, title: 'Mantenimiento de Piscina', summary: 'La piscina estará cerrada por mantenimiento anual del 5 al 7 de septiembre.', date: '30 de Agosto, 2024', category: 'Mantenimiento' },
    ];
  }
};