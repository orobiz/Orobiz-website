import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export function Logo({ className = '', size = 'md', showTagline = false }: LogoProps) {
  const sizes = {
    sm: { container: 'w-8 h-8', text: 'text-lg', tagline: 'text-[8px]' },
    md: { container: 'w-12 h-12', text: 'text-2xl', tagline: 'text-[10px]' },
    lg: { container: 'w-20 h-20', text: 'text-4xl', tagline: 'text-xs' }
  };

  const numSegments = 60;
  const segments = Array.from({ length: numSegments }, (_, i) => i);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon - Circular Segments */}
      <motion.div
        className={`relative ${sizes[size].container} flex items-center justify-center`}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{ transform: 'rotate(-90deg)' }}
        >
          {segments.map((i) => {
            const angle = (i / numSegments) * 360;
            const startAngle = angle - 2;
            const endAngle = angle + 2;
            
            const startRad1 = (startAngle * Math.PI) / 180;
            const endRad1 = (endAngle * Math.PI) / 180;
            
            const innerRadius = 28;
            const outerRadius = 42;
            
            const x1 = 50 + innerRadius * Math.cos(startRad1);
            const y1 = 50 + innerRadius * Math.sin(startRad1);
            const x2 = 50 + outerRadius * Math.cos(startRad1);
            const y2 = 50 + outerRadius * Math.sin(startRad1);
            const x3 = 50 + outerRadius * Math.cos(endRad1);
            const y3 = 50 + outerRadius * Math.sin(endRad1);
            const x4 = 50 + innerRadius * Math.cos(endRad1);
            const y4 = 50 + innerRadius * Math.sin(endRad1);
            
            // Create gradient effect - violet to fuchsia to pink
            let color;
            const position = i / numSegments;
            if (position < 0.33) {
              // Violet to Fuchsia
              color = '#8b5cf6'; // violet
            } else if (position < 0.66) {
              // Fuchsia
              color = '#d946ef'; // fuchsia
            } else {
              // Pink
              color = '#ec4899'; // pink
            }
            
            // Fade out at the end for smooth transition
            const opacity = position > 0.85 ? (1 - position) * 6.67 : 1;
            
            return (
              <motion.path
                key={i}
                d={`M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} L ${x4} ${y4} Z`}
                fill={color}
                opacity={opacity}
                initial={{ opacity: 0 }}
                animate={{ opacity: opacity }}
                transition={{ delay: i * 0.01 }}
              />
            );
          })}
          
          {/* Center white circle */}
          <circle cx="50" cy="50" r="22" fill="white" />
        </svg>
        
        {/* Rotating animation overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" style={{ transform: 'rotate(-90deg)' }}>
            {segments.slice(0, 15).map((i) => {
              const angle = (i / numSegments) * 360;
              const startAngle = angle - 2;
              const endAngle = angle + 2;
              
              const startRad1 = (startAngle * Math.PI) / 180;
              const endRad1 = (endAngle * Math.PI) / 180;
              
              const innerRadius = 28;
              const outerRadius = 42;
              
              const x1 = 50 + innerRadius * Math.cos(startRad1);
              const y1 = 50 + innerRadius * Math.sin(startRad1);
              const x2 = 50 + outerRadius * Math.cos(startRad1);
              const y2 = 50 + outerRadius * Math.sin(startRad1);
              const x3 = 50 + outerRadius * Math.cos(endRad1);
              const y3 = 50 + outerRadius * Math.sin(endRad1);
              const x4 = 50 + innerRadius * Math.cos(endRad1);
              const y4 = 50 + innerRadius * Math.sin(endRad1);
              
              return (
                <path
                  key={i}
                  d={`M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} L ${x4} ${y4} Z`}
                  fill="rgba(255, 255, 255, 0.3)"
                  opacity={0.5}
                />
              );
            })}
          </svg>
        </motion.div>
      </motion.div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <motion.span
          className={`${sizes[size].text} font-bold bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent`}
        >
          orobiz
        </motion.span>
        {showTagline && (
          <motion.span
            className={`${sizes[size].tagline} tracking-[0.2em] text-gray-600 uppercase`}
          >
            IR PR
          </motion.span>
        )}
      </div>
    </div>
  );
}