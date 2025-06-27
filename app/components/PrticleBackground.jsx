'use client';

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground({ type = "stars" }) {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const configs = {
        stars: {
            fullScreen: { enable: true, zIndex: -1 },
            background: { color: "#000" },
            particles: {
                number: { value: 80 },
                color: { value: "#ffffff" },
                shape: { type: "star" },
                size: { value: 2 },
                move: { enable: true, speed: 0.5 },
            },
        },
        bubbles: {
            fullScreen: { enable: true, zIndex: -1 },
            background: { color: "#1e1e2f" },
            particles: {
                number: { value: 40 },
                color: { value: "#00ffff" },
                shape: { type: "circle" },
                size: { value: 10 },
                opacity: { value: 0.4 },
                move: { enable: true, speed: 1 },
            },
        },
        snow: {
            fullScreen: { enable: true, zIndex: -1 },
            background: { color: "#001f3f" },
            particles: {
                number: { value: 100 },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                size: { value: 2 },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "bottom",
                    straight: false,
                },
            },
        },
        fireflies: {
            fullScreen: { enable: true, zIndex: -1 },
            background: { color: "#000000" },
            particles: {
                number: { value: 60 },
                color: { value: "#ffff99" },
                size: { value: 3 },
                move: { enable: true, speed: 1 },
                opacity: {
                    value: 0.8,
                    animation: { enable: true, speed: 1, minimumValue: 0.3 },
                },
            },
        },
        lines: {
            fullScreen: { enable: true, zIndex: -1 },
            background: { color: "#0e0e52" },
            particles: {
                number: { value: 100 },
                color: { value: "#ffffff" },
                links: { enable: true, color: "#ffffff", distance: 150 },
                shape: { type: "circle" },
                size: { value: 2 },
                move: { enable: true, speed: 1 },
            },
        },
        triangles: {
            fullScreen: { enable: true, zIndex: -1 },
            background: { color: "#111111" },
            particles: {
                number: { value: 80 },
                color: { value: "#fca311" },
                shape: { type: "triangle" },
                size: { value: 4 },
                move: { enable: true, speed: 2 },
            },
        },
        confetti: {
            fullScreen: { enable: true, zIndex: -1 },
            background: { color: "#222222" },
            particles: {
                number: { value: 150 },
                color: { value: ["#e63946", "#f1faee", "#a8dadc", "#457b9d"] },
                shape: { type: "square" },
                size: { value: 5 },
                move: {
                    enable: true,
                    direction: "bottom",
                    speed: 2,
                },
            },
        },
        floatingEmoji: {
            fullScreen: { enable: true, zIndex: -1 },
            background: { color: "#fff0f6" },
            particles: {
                number: { value: 30 },
                shape: {
                    type: "char",
                    character: ["❤️", "🔥", "💯", "🚀"],
                },
                size: { value: 24 },
                move: { enable: true, speed: 1, direction: "top", outModes: { default: "out" } },
            },
        },
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={configs[type] || configs["stars"]}
        />
    );
}
