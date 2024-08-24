import React, { useEffect, useRef } from 'react';

const SkullHeader = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const particles = [];
        const particleCount = 100;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1,
                color: `hsl(${Math.random() * 60 + 180}, 100%, 50%)`,
                velocity: {
                    x: (Math.random() - 0.5) * 3,
                    y: (Math.random() - 0.5) * 3
                }
            });
        }

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();

                particle.x += particle.velocity.x;
                particle.y += particle.velocity.y;

                if (particle.x < 0 || particle.x > canvas.width) particle.velocity.x *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.velocity.y *= -1;
            });

            animationFrameId = requestAnimationFrame(drawParticles);
        };

        drawParticles();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-black">
            <canvas ref={canvasRef} className="absolute inset-0" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="relative">
                    <svg className="w-96 h-96 sm:w-128 sm:h-128 lg:w-160 lg:h-160" viewBox="0 0 5000 5000">
                        {/* Skull base outline with continuous draw animation */}
                        <circle cx="2500" cy="2500" r="1000" fill="none" stroke="#00ffea" strokeWidth="50"
                            strokeDasharray="6283" strokeDashoffset="6283">
                            <animate attributeName="stroke-dashoffset" from="6283" to="0" dur="2s" repeatCount="indefinite" />
                        </circle>

                        {/* Skull base fill */}
                        <circle cx="2500" cy="2500" r="1000" fill="#FFFFFF" />

                        {/* Eyes with color matching your logo */}
                        <circle cx="2150" cy="2300" r="200" fill="#00cfff" opacity="0">
                            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="2850" cy="2300" r="200" fill="#00cfff" opacity="0">
                            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                        </circle>

                        {/* Teeth moved slightly to the left */}
                        <polygon points="2200,3100 2250,3300 2300,3100" fill="#000000" />
                        <polygon points="2300,3100 2350,3300 2400,3100" fill="#A9A9A9" />
                        <polygon points="2400,3100 2450,3300 2500,3100" fill="#A9A9A9" />
                        <polygon points="2500,3100 2550,3300 2600,3100" fill="#A9A9A9" />
                        <polygon points="2600,3100 2650,3300 2700,3100" fill="#A9A9A9" />
                        <polygon points="2700,3100 2750,3300 2800,3100" fill="#A9A9A9" />
                        <polygon points="2800,3100 2850,3300 2900,3100" fill="#A9A9A9" />
                        <polygon points="2900,3100 2950,3300 3000,3100" fill="#A9A9A9" />

                        {/* Teeth animation */}
                        <polygon points="2200,3100 2250,3300 2300,3100" fill="#000000" stroke="none" opacity="0">
                            <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="2s" repeatCount="indefinite" />
                        </polygon>
                        <polygon points="2300,3100 2350,3300 2400,3100" fill="#A9A9A9" stroke="none" opacity="0">
                            <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="2.1s" repeatCount="indefinite" />
                        </polygon>
                        <polygon points="2400,3100 2450,3300 2500,3100" fill="#A9A9A9" stroke="none" opacity="0">
                            <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="2.2s" repeatCount="indefinite" />
                        </polygon>
                        <polygon points="2500,3100 2550,3300 2600,3100" fill="#A9A9A9" stroke="none" opacity="0">
                            <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="2.3s" repeatCount="indefinite" />
                        </polygon>
                        <polygon points="2600,3100 2650,3300 2700,3100" fill="#A9A9A9" stroke="none" opacity="0">
                            <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="2.4s" repeatCount="indefinite" />
                        </polygon>
                        <polygon points="2700,3100 2750,3300 2800,3100" fill="#A9A9A9" stroke="none" opacity="0">
                            <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="2.5s" repeatCount="indefinite" />
                        </polygon>
                        <polygon points="2800,3100 2850,3300 2900,3100" fill="#A9A9A9" stroke="none" opacity="0">
                            <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="2.6s" repeatCount="indefinite" />
                        </polygon>
                        <polygon points="2900,3100 2950,3300 3000,3100" fill="#A9A9A9" stroke="none" opacity="0">
                            <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="2.7s" repeatCount="indefinite" />
                        </polygon>
                    </svg>
                </div>
                <h1 className="text-5xl sm:text-7xl lg:text-9xl font-extrabold text-white glitch-3d mt-8" data-text="MERCH">
                    MERCH
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl text-cyan-400 animate-pulse mt-4">
                    Unleash Your Style
                </p>
            </div>
        </div>
    );
};

export default SkullHeader;
