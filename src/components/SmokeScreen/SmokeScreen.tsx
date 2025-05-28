/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef } from "react";
import "./SmokeScreen.css";

const SmokeSimulation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    let gl = canvas.getContext("webgl2") || canvas.getContext("webgl");

    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    // WebGL Configuration
    const config = {
      TEXTURE_DOWNSAMPLE: 1,
      DENSITY_DISSIPATION: 0.98,
      VELOCITY_DISSIPATION: 0.99,
      PRESSURE_DISSIPATION: 0.8,
      PRESSURE_ITERATIONS: 25,
      CURL: 30,
      SPLAT_RADIUS: 0.005,
    };

    // Initialize pointers and WebGL setup
    let pointers: any[] = [];
    let splatStack: any[] = [];

    function pointerPrototype() {
      this.id = -1;
      this.x = 0;
      this.y = 0;
      this.dx = 0;
      this.dy = 0;
      this.down = false;
      this.moved = false;
      this.color = [30, 0, 300];
    }

    pointers.push(new pointerPrototype());

    // Resize function
    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }

    window.addEventListener("resize", resizeCanvas);

    // Animation update function
    function update() {
      resizeCanvas();
      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (

    <section className="smoke-screen">
      <div className="smoke-container">
        <canvas ref={canvasRef}></canvas>
        <h1 id="h1">Smoke Simulation</h1>
      </div>
    </section>
  );
};

export default SmokeSimulation;
