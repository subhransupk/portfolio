"use client";

import React, { useEffect, useRef } from 'react';

interface WebPoint {
    x: number;
    y: number;
    radius: number;
}

const BackgroundWebs: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const drawIrregularWeb = (ctx: CanvasRenderingContext2D, center: WebPoint, radius: number) => {
        // Add slight randomness to center point
        const centerX = center.x + (Math.random() - 0.5) * 20;
        const centerY = center.y + (Math.random() - 0.5) * 20;

        // Create main structure
        const numMainSpokes = Math.floor(Math.random() * 5) + 6; // 6-10 main spokes
        const mainSpokes: { x: number; y: number }[] = [];

        // Draw main spokes with slight irregularity
        for (let i = 0; i < numMainSpokes; i++) {
            const baseAngle = (i * 2 * Math.PI) / numMainSpokes;
            const angle = baseAngle + (Math.random() - 0.5) * 0.2; // Add slight angle variation
            const spokeLength = radius * (0.8 + Math.random() * 0.4); // Vary spoke length
            const endX = centerX + Math.cos(angle) * spokeLength;
            const endY = centerY + Math.sin(angle) * spokeLength;
            
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            
            // Add slight curve to spokes
            const controlX = centerX + Math.cos(angle) * spokeLength * 0.5 + (Math.random() - 0.5) * 20;
            const controlY = centerY + Math.sin(angle) * spokeLength * 0.5 + (Math.random() - 0.5) * 20;
            
            ctx.quadraticCurveTo(controlX, controlY, endX, endY);
            ctx.stroke();
            
            mainSpokes.push({ x: endX, y: endY });
        }

        // Draw spiral connecting threads
        const numSpirals = Math.floor(Math.random() * 8) + 8; // 8-15 spiral lines
        let currentRadius = radius * 0.2; // Start from inner radius
        const radiusStep = (radius * 0.8) / numSpirals;

        for (let i = 0; i < numSpirals; i++) {
            ctx.beginPath();
            let firstPoint = true;
            const angleOffset = Math.random() * Math.PI * 2; // Random starting angle for each spiral

            for (let j = 0; j <= mainSpokes.length; j++) {
                const idx = j % mainSpokes.length;
                const spoke = mainSpokes[idx];
                const angle = Math.atan2(spoke.y - centerY, spoke.x - centerX);
                
                // Calculate point on the current spiral
                const spiralRadius = currentRadius * (1 + Math.random() * 0.1); // Slight radius variation
                const x = centerX + Math.cos(angle + angleOffset) * spiralRadius;
                const y = centerY + Math.sin(angle + angleOffset) * spiralRadius;

                if (firstPoint) {
                    ctx.moveTo(x, y);
                    firstPoint = false;
                } else {
                    // Add slight curve between points
                    const prevIdx = (j - 1 + mainSpokes.length) % mainSpokes.length;
                    const prevSpoke = mainSpokes[prevIdx];
                    const prevAngle = Math.atan2(prevSpoke.y - centerY, prevSpoke.x - centerX);
                    const controlX = centerX + Math.cos((angle + prevAngle) / 2) * spiralRadius * 1.1;
                    const controlY = centerY + Math.sin((angle + prevAngle) / 2) * spiralRadius * 1.1;
                    
                    ctx.quadraticCurveTo(controlX, controlY, x, y);
                }
            }
            ctx.stroke();
            currentRadius += radiusStep;
        }

        // Add random small detail threads
        const numDetails = Math.floor(Math.random() * 10) + 5;
        for (let i = 0; i < numDetails; i++) {
            const startSpoke = mainSpokes[Math.floor(Math.random() * mainSpokes.length)];
            const endSpoke = mainSpokes[Math.floor(Math.random() * mainSpokes.length)];
            
            ctx.beginPath();
            ctx.moveTo(startSpoke.x, startSpoke.y);
            
            // Add random control points for natural curves
            const controlX = (startSpoke.x + endSpoke.x) / 2 + (Math.random() - 0.5) * 30;
            const controlY = (startSpoke.y + endSpoke.y) / 2 + (Math.random() - 0.5) * 30;
            
            ctx.quadraticCurveTo(controlX, controlY, endSpoke.x, endSpoke.y);
            ctx.stroke();
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size to window size
        const updateCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        updateCanvasSize();
        window.addEventListener('resize', updateCanvasSize);

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Set web style
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 0.3;

        // Generate random web points with varying sizes
        const numWebs = Math.floor(Math.random() * 8) + 8; // 8-15 webs
        for (let i = 0; i < numWebs; i++) {
            const webPoint: WebPoint = {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 150 + 100, // 100-250px radius for larger variation
            };
            drawIrregularWeb(ctx, webPoint, webPoint.radius);
        }

        return () => {
            window.removeEventListener('resize', updateCanvasSize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
            style={{ opacity: 0.7 }}
        />
    );
};

export default BackgroundWebs; 