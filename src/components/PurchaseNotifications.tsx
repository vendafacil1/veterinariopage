import React, { useState, useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface Notification {
  id: number;
  name: string;
  city: string;
  timeAgo: string;
}

const PurchaseNotifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);

  const purchaseData = [
    { name: "Maria Silva", city: "São Paulo, SP", timeAgo: "há 2 minutos" },
    { name: "João Santos", city: "Rio de Janeiro, RJ", timeAgo: "há 3 minutos" },
    { name: "Ana Costa", city: "Belo Horizonte, MG", timeAgo: "há 1 minuto" },
    { name: "Carlos Oliveira", city: "Porto Alegre, RS", timeAgo: "há 4 minutos" },
    { name: "Fernanda Lima", city: "Salvador, BA", timeAgo: "há 2 minutos" },
    { name: "Roberto Alves", city: "Brasília, DF", timeAgo: "há 3 minutos" },
    { name: "Juliana Pereira", city: "Curitiba, PR", timeAgo: "há 1 minuto" },
    { name: "Pedro Rodrigues", city: "Fortaleza, CE", timeAgo: "há 5 minutos" },
    { name: "Camila Ferreira", city: "Recife, PE", timeAgo: "há 2 minutos" },
    { name: "Lucas Martins", city: "Goiânia, GO", timeAgo: "há 3 minutos" },
    { name: "Patrícia Souza", city: "Manaus, AM", timeAgo: "há 1 minuto" },
    { name: "Rafael Costa", city: "Belém, PA", timeAgo: "há 4 minutos" }
  ];

  useEffect(() => {
    const showNotification = () => {
      const randomPurchase = purchaseData[Math.floor(Math.random() * purchaseData.length)];
      const notification: Notification = {
        id: Date.now(),
        ...randomPurchase
      };

      setCurrentNotification(notification);
      setNotifications(prev => [notification, ...prev.slice(0, 4)]);

      // Remove a notificação após 5 segundos
      setTimeout(() => {
        setCurrentNotification(null);
      }, 5000);
    };

    // Primeira notificação após 3 segundos
    const initialTimeout = setTimeout(showNotification, 3000);

    // Notificações subsequentes a cada 7 segundos
    const interval = setInterval(showNotification, 7000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const closeNotification = () => {
    setCurrentNotification(null);
  };

  if (!currentNotification) return null;

  return (
    <div className="fixed bottom-24 left-6 z-50 animate-slide-in-left">
      <div className="bg-white border border-gray-200 rounded-lg shadow-xl p-4 max-w-sm">
        <div className="flex items-start gap-3">
          <div className="bg-green-100 p-1 rounded-full flex-shrink-0">
            <CheckCircle className="h-5 w-5 text-green-600" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {currentNotification.name}
                </p>
                <p className="text-xs text-gray-600">
                  {currentNotification.city}
                </p>
                <p className="text-xs text-green-600 font-medium mt-1">
                  ✅ Acabou de se matricular {currentNotification.timeAgo}
                </p>
              </div>
              <button
                onClick={closeNotification}
                className="text-gray-400 hover:text-gray-600 flex-shrink-0 ml-2"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseNotifications;