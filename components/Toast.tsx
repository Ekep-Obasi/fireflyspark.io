'use client';

import { useEffect } from 'react';

interface ToastProps {
  message: string;
  duration?: number;
  onClose: () => void;
}

export default function Toast({ message, duration = 3000, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="toast toast-top toast-center">
      <div className="bg-brand text-[#03320D] px-6 py-3 rounded-lg font-semibold">
        <span>{message}</span>
      </div>
    </div>
  );
}
