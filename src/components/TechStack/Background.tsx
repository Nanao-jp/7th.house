export const Background = () => {
  return (
    <div className="absolute -inset-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-float-slow shadow-[0_0_15px_rgba(59,130,246,0.4)]" />
        <div className="absolute top-1/3 left-1/2 w-6 h-6 bg-purple-400 rounded-full animate-float-medium shadow-[0_0_15px_rgba(139,92,246,0.4)]" />
        <div className="absolute top-2/3 left-1/3 w-5 h-5 bg-indigo-400 rounded-full animate-float-fast shadow-[0_0_15px_rgba(99,102,241,0.4)]" />
        <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-blue-400 rounded-full animate-float-medium shadow-[0_0_15px_rgba(59,130,246,0.4)]" />
        <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-purple-400 rounded-full animate-float-slow shadow-[0_0_15px_rgba(139,92,246,0.4)]" />
        <div className="absolute bottom-1/4 right-1/2 w-5 h-5 bg-indigo-400 rounded-full animate-float-fast shadow-[0_0_15px_rgba(99,102,241,0.4)]" />
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
            </defs>
            <path
              d="M-100,100 Q300,400 600,100 T1300,100"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              className="animate-flow-path"
            />
            <path
              d="M-100,300 Q300,0 600,300 T1300,300"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              className="animate-flow-path-delay"
            />
            <path
              d="M-100,500 Q300,200 600,500 T1300,500"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              className="animate-flow-path-delay-2"
            />
          </svg>
        </div>
      </div>

      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0%,rgba(139,92,246,0.08)_35%,transparent_70%)] animate-pulse-optimized"
      />

      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" 
      />

      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/50 to-gray-900/60" />

      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(20px, -20px, 0) scale(1.1); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-25px, 25px, 0) scale(1.15); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(30px, 30px, 0) scale(1.1); }
        }

        @keyframes pulse-optimized {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }

        @keyframes flow-path {
          0% { stroke-dashoffset: 2000; opacity: 0; }
          5% { opacity: 0.6; }
          45% { opacity: 0.6; }
          50% { opacity: 0; stroke-dashoffset: 0; }
          100% { opacity: 0; stroke-dashoffset: 0; }
        }

        .animate-float-slow {
          animation: float-slow 8s steps(120) infinite;
          will-change: transform;
        }
        .animate-float-medium {
          animation: float-medium 6s steps(90) infinite;
          will-change: transform;
        }
        .animate-float-fast {
          animation: float-fast 4s steps(60) infinite;
          will-change: transform;
        }
        .animate-pulse-optimized {
          animation: pulse-optimized 8s steps(120) infinite;
          will-change: opacity;
        }
        .animate-flow-path {
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          animation: flow-path 10s steps(150) infinite;
        }
        .animate-flow-path-delay {
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          animation: flow-path 10s steps(150) infinite;
          animation-delay: 3.33s;
        }
        .animate-flow-path-delay-2 {
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          animation: flow-path 10s steps(150) infinite;
          animation-delay: 6.66s;
        }
      `}</style>
    </div>
  );
}; 