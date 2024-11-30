export const Background = () => {
  return (
    <div className="absolute -inset-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-float-slow shadow-[0_0_25px_rgba(59,130,246,0.7)]" />
        <div className="absolute top-1/3 left-1/2 w-6 h-6 bg-purple-400 rounded-full animate-float-medium shadow-[0_0_35px_rgba(139,92,246,0.7)]" />
        <div className="absolute top-2/3 left-1/3 w-5 h-5 bg-indigo-400 rounded-full animate-float-fast shadow-[0_0_30px_rgba(99,102,241,0.7)]" />
        <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-blue-400 rounded-full animate-float-medium shadow-[0_0_35px_rgba(59,130,246,0.7)]" />
        <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-purple-400 rounded-full animate-float-slow shadow-[0_0_25px_rgba(139,92,246,0.7)]" />
        <div className="absolute bottom-1/4 right-1/2 w-5 h-5 bg-indigo-400 rounded-full animate-float-fast shadow-[0_0_30px_rgba(99,102,241,0.7)]" />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full opacity-40">
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="1" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path
              d="M-100,100 Q300,400 600,100 T1300,100"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              filter="url(#glow)"
              className="animate-flow-path"
            />
            <path
              d="M-100,300 Q300,0 600,300 T1300,300"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              filter="url(#glow)"
              className="animate-flow-path-delay"
            />
            <path
              d="M-100,500 Q300,200 600,500 T1300,500"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              filter="url(#glow)"
              className="animate-flow-path-delay-2"
            />
          </svg>
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,rgba(139,92,246,0.1)_25%,transparent_50%)] animate-pulse-slow" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.15)_0%,rgba(79,70,229,0.1)_25%,transparent_50%)] animate-pulse-medium" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem]" />

      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/70 to-gray-900/50" />

      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.2); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 40px) scale(1.3); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, 50px) scale(1.25); }
        }
        @keyframes flow-path {
          0% { stroke-dashoffset: 2000; opacity: 0; }
          5% { opacity: 1; }
          45% { opacity: 1; }
          50% { opacity: 0; stroke-dashoffset: 0; }
          100% { opacity: 0; stroke-dashoffset: 0; }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 8s ease-in-out infinite;
        }
        .animate-pulse-medium {
          animation: pulse 6s ease-in-out infinite;
        }
        .animate-flow-path {
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          animation: flow-path 6s linear infinite;
        }
        .animate-flow-path-delay {
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          animation: flow-path 6s linear infinite;
          animation-delay: 2s;
        }
        .animate-flow-path-delay-2 {
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          animation: flow-path 6s linear infinite;
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}; 