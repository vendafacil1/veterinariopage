import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ className = '' }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Verifica se já existe um tempo salvo no localStorage
    const savedEndTime = localStorage.getItem('promotionEndTime');
    let endTime: number;

    if (savedEndTime) {
      endTime = parseInt(savedEndTime);
    } else {
      // Define o fim da promoção para 48 horas a partir de agora
      endTime = Date.now() + (48 * 60 * 60 * 1000);
      localStorage.setItem('promotionEndTime', endTime.toString());
    }

    const timer = setInterval(() => {
      const now = Date.now();
      const difference = endTime - now;

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        // Quando o tempo acabar, reinicia para 48 horas
        const newEndTime = Date.now() + (48 * 60 * 60 * 1000);
        localStorage.setItem('promotionEndTime', newEndTime.toString());
        setTimeLeft({ hours: 48, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`bg-red-600 text-white p-4 rounded-lg shadow-lg ${className}`}>
      <div className="flex items-center justify-center gap-3 mb-2">
        <Clock className="h-5 w-5 animate-pulse" />
        <span className="font-semibold">⚡ PROMOÇÃO TERMINA EM:</span>
      </div>
      <div className="flex justify-center gap-4 text-center">
        <div className="bg-white/20 px-3 py-2 rounded">
          <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
          <div className="text-xs">HORAS</div>
        </div>
        <div className="flex items-center text-2xl font-bold">:</div>
        <div className="bg-white/20 px-3 py-2 rounded">
          <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
          <div className="text-xs">MIN</div>
        </div>
        <div className="flex items-center text-2xl font-bold">:</div>
        <div className="bg-white/20 px-3 py-2 rounded">
          <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
          <div className="text-xs">SEG</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;