"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import useDeviceDetect from "@/hooks/useDeviceDetect";
import clsx from "clsx";

interface AnimBackProps {
    topLayerClassName?: string;
}

interface Shape {
    id: number,
    x: number,
    y: number,
    size: number,
    color: string,
    duration: number,
    delay: number,
    type: "circle" | "square" | "triangle"
}

export default function AnimatedBackground({ topLayerClassName = "backdrop-blur-lg" }: AnimBackProps) {
    const [shapes, setShapes] = useState<Shape[]>([])

    const { isMobile } = useDeviceDetect();

    useEffect(() => {
        // Generate random shapes
        const newShapes: Shape[] = [];
        const colors = [
            "#6366f1",
            "#3b82f6",
            "#0ea5e9",
            "#f97316",
            "#f59e0b",
            "#eab308",
        ];
        const types: ("circle" | "square" | "triangle")[] = ["circle", "square", "triangle"];

        const shapeCount = isMobile ? 12 : 20;

        for (let i = 0; i < shapeCount; i++) {
            newShapes.push({
                id: i,
                x: Math.random() * 120,
                y: Math.random() * 120,
                size: Math.random() * 160 + 100,
                color: colors[Math.floor(Math.random() * colors.length)],
                duration: Math.random() * 20 + 10,
                delay: Math.random() * 5,
                type: types[Math.floor(Math.random() * types.length)],
            })
        }

        setShapes(newShapes);
    }, [])

    const renderShape = (shape: Shape) => {
        switch (shape.type) {
            case "circle":
                return (
                    <motion.div
                        key={shape.id}
                        className="absolute rounded-full"
                        style={{
                            width: shape.size,
                            height: shape.size,
                            backgroundColor: shape.color,
                            opacity: 0.3,
                            left: `${shape.x}%`,
                            top: `${shape.y}%`,
                        }}
                        animate={{
                            x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
                            y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
                            rotate: [0, Math.random() * 360, Math.random() * -360, 0],
                            scale: [1, Math.random() + 0.5, Math.random() + 0.5, 1],
                        }}
                        transition={{
                            duration: shape.duration,
                            ease: "easeInOut",
                            repeat: Number.POSITIVE_INFINITY,
                            delay: shape.delay,
                        }}
                    />
                )
            case "square":
                return (
                    <motion.div
                        key={shape.id}
                        className="absolute"
                        style={{
                            width: shape.size,
                            height: shape.size,
                            backgroundColor: shape.color,
                            opacity: 0.3,
                            left: `${shape.x}%`,
                            top: `${shape.y}%`,
                        }}
                        animate={{
                            x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
                            y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
                            rotate: [0, Math.random() * 360, Math.random() * -360, 0],
                            scale: [1, Math.random() + 0.5, Math.random() + 0.5, 1],
                        }}
                        transition={{
                            duration: shape.duration,
                            ease: "easeInOut",
                            repeat: Number.POSITIVE_INFINITY,
                            delay: shape.delay,
                        }}
                    />
                )
            case "triangle":
                return (
                    <motion.div
                        key={shape.id}
                        className="absolute"
                        style={{
                            width: 0,
                            height: 0,
                            borderLeft: `${shape.size / 2}px solid transparent`,
                            borderRight: `${shape.size / 2}px solid transparent`,
                            borderBottom: `${shape.size}px solid ${shape.color}`,
                            opacity: 0.3,
                            left: `${shape.x}%`,
                            top: `${shape.y}%`,
                        }}
                        animate={{
                            x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
                            y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
                            rotate: [0, Math.random() * 360, Math.random() * -360, 0],
                            scale: [1, Math.random() + 0.5, Math.random() + 0.5, 1],
                        }}
                        transition={{
                            duration: shape.duration,
                            ease: "easeInOut",
                            repeat: Number.POSITIVE_INFINITY,
                            delay: shape.delay,
                        }}
                    />
                )
            default:
                return null
        }
    }

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
            {shapes.map((shape) => renderShape(shape))}
            <div className={clsx("fixed w-full h-full overflow-hidden", topLayerClassName)} />
        </div>
    )
}
