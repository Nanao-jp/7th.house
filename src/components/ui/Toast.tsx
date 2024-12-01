import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

interface ToastProps {
  type: 'success' | 'error';
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Toast = ({ type, message, isVisible, onClose }: ToastProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // 5秒後に自動で閉じる

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <div className={`
            flex items-center gap-3 px-6 py-4 rounded-lg shadow-xl
            ${type === 'success' ? 'bg-green-600' : 'bg-red-600'}
            text-white min-w-[300px]
          `}>
            {type === 'success' ? (
              <FaCheckCircle className="w-5 h-5 flex-shrink-0" />
            ) : (
              <FaExclamationCircle className="w-5 h-5 flex-shrink-0" />
            )}
            <p className="flex-1">{message}</p>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast; 