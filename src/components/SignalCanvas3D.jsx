import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * SignalCanvas3D
 * Custom Three.js WebGL Particle Tensor & Waveform Field.
 * Implements the "Signal vs. Noise" concept: a vast coherent point field where
 * micro-anomalies deviate in elevation, velocity, and chromatic frequency.
 * Responds dynamically to mouse coordinates and scroll displacement.
 */
export default function SignalCanvas3D({ currentSection = 0 }) {
  const mountRef = useRef(null);
  const [anomalyCount, setAnomalyCount] = useState(1);
  const [mode, setMode] = useState('ANOMALY_TRACK'); // 'ANOMALY_TRACK' | 'COHERENT' | 'HIGH_SENSITIVITY'
  const modeRef = useRef(mode);
  modeRef.current = mode;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 22, 38);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Grid Dimensions
    const GRID_X = 64;
    const GRID_Z = 64;
    const TOTAL_POINTS = GRID_X * GRID_Z;
    const SPACING = 1.25;

    const positions = new Float32Array(TOTAL_POINTS * 3);
    const colors = new Float32Array(TOTAL_POINTS * 3);
    const originalY = new Float32Array(TOTAL_POINTS);

    // Color Palettes
    const colorCyan = new THREE.Color(0x00f0ff);
    const colorDeepBlue = new THREE.Color(0x1e3a8a);
    const colorAlertRed = new THREE.Color(0xff3344);
    const colorMuted = new THREE.Color(0x27273a);

    // Target Anomaly Centers (Simulating fraud/distress micro-signals)
    const anomalyCenter = { x: 8, z: -4 };

    let idx = 0;
    for (let ix = 0; ix < GRID_X; ix++) {
      for (let iz = 0; iz < GRID_Z; iz++) {
        const x = (ix - GRID_X / 2) * SPACING;
        const z = (iz - GRID_Z / 2) * SPACING;
        const y = 0;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;
        originalY[idx] = y;

        // Base color gradient: coherent cyan fading to deep blue
        const distFromCenter = Math.sqrt(x * x + z * z);
        const t = Math.min(distFromCenter / 45, 1);
        const c = colorCyan.clone().lerp(colorDeepBlue, t * 0.7);

        // Distance from anomaly center
        const distAnomaly = Math.sqrt(
          (x - anomalyCenter.x) ** 2 + (z - anomalyCenter.z) ** 2
        );

        if (distAnomaly < 4.2) {
          // Anomaly cluster: alert red accent (Strictly for risk/deviation)
          c.lerp(colorAlertRed, 0.95);
        }

        colors[idx * 3] = c.r;
        colors[idx * 3 + 1] = c.g;
        colors[idx * 3 + 2] = c.b;

        idx++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom Canvas Texture for Crisp Circular WebGL Points
    const createPointTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.3, 'rgba(255,255,255,0.85)');
      gradient.addColorStop(0.65, 'rgba(255,255,255,0.25)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(32, 32, 30, 0, Math.PI * 2);
      ctx.fill();
      return new THREE.CanvasTexture(canvas);
    };

    const material = new THREE.PointsMaterial({
      size: 1.1,
      vertexColors: true,
      map: createPointTexture(),
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Subtle Vector Coordinate Guides
    const gridHelper = new THREE.GridHelper(80, 20, 0x00f0ff, 0x111624);
    gridHelper.position.y = -3.5;
    gridHelper.material.opacity = 0.22;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    // Mouse Interaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouse.targetX = (clientX / container.clientWidth) * 2 - 1;
      mouse.targetY = -(clientY / container.clientHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Scroll tracking
    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const time = prefersReducedMotion ? 1.0 : clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Adjust camera tilt based on cursor & scroll
      const scrollFactor = Math.min(scrollY / 1200, 2.5);
      camera.position.x = mouse.x * 6;
      camera.position.y = 22 + mouse.y * 3 - scrollFactor * 4;
      camera.position.z = 38 - scrollFactor * 6;
      camera.lookAt(0, -scrollFactor * 2, 0);

      const posAttr = geometry.attributes.position;
      const colAttr = geometry.attributes.color;

      const currentMode = modeRef.current;

      for (let i = 0; i < TOTAL_POINTS; i++) {
        const x = posAttr.getX(i);
        const z = posAttr.getZ(i);

        // Wave formula: Coherent signal baseline
        const wave1 = Math.sin(x * 0.18 + time * 1.4) * Math.cos(z * 0.18 + time * 1.1);
        const wave2 = Math.sin((x + z) * 0.1 + time * 0.8) * 1.5;

        // Interaction cursor ripple
        const distFromCursor = Math.sqrt((x - mouse.x * 25) ** 2 + (z - mouse.y * 25) ** 2);
        const cursorImpact = Math.max(0, 1 - distFromCursor / 16) * 3.5;

        // Anomaly deviation
        const distAnomaly = Math.sqrt(
          (x - anomalyCenter.x) ** 2 + (z - anomalyCenter.z) ** 2
        );
        let anomalyImpact = 0;
        if (distAnomaly < 6.5) {
          // Sudden high-frequency spike representing anomaly / fraud / distress
          anomalyImpact = Math.sin(time * 6.0) * (6.5 - distAnomaly) * 0.9;
        }

        let newY = (wave1 + wave2) * 1.2 + cursorImpact;

        if (currentMode === 'ANOMALY_TRACK') {
          newY += anomalyImpact;
        } else if (currentMode === 'HIGH_SENSITIVITY') {
          newY += anomalyImpact * 2.2 + Math.sin(time * 8.0 + x) * 0.4;
        }

        posAttr.setY(i, newY);

        // Dynamic color update on anomaly spike
        if (distAnomaly < 5.0 && (currentMode === 'ANOMALY_TRACK' || currentMode === 'HIGH_SENSITIVITY')) {
          const pulse = (Math.sin(time * 5.0) + 1) * 0.5;
          colAttr.setXYZ(i, colorAlertRed.r, colorAlertRed.g * pulse, colorAlertRed.b * pulse);
        } else {
          // Normal coherent gradient
          const distFromCenter = Math.sqrt(x * x + z * z);
          const t = Math.min(distFromCenter / 45, 1);
          const c = colorCyan.clone().lerp(colorDeepBlue, t * 0.7);
          colAttr.setXYZ(i, c.r, c.g, c.b);
        }
      }

      posAttr.needsUpdate = true;
      colAttr.needsUpdate = true;

      // Slight rotation of field
      particles.rotation.y = time * 0.04 + mouse.x * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      <div ref={mountRef} className="w-full h-full" />

      {/* Interactive Signal Telemetry Overlay */}
      <div className="absolute bottom-6 right-6 pointer-events-auto flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10 rounded font-mono text-xs text-slate-400">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ff3344] animate-ping" />
          <span className="text-white/80">ANOMALY DETECTOR:</span>
        </span>
        <button
          onClick={() => {
            const nextMode =
              mode === 'ANOMALY_TRACK'
                ? 'HIGH_SENSITIVITY'
                : mode === 'HIGH_SENSITIVITY'
                ? 'COHERENT'
                : 'ANOMALY_TRACK';
            setMode(nextMode);
          }}
          className="text-[#00f0ff] hover:underline cursor-pointer bg-white/5 px-2 py-0.5 rounded border border-[#00f0ff]/30"
          title="Toggle signal tensor simulation mode"
          aria-label={`Toggle 3D signal tensor simulation mode. Current mode is ${mode}`}
        >
          MODE: [{mode}]
        </button>
        <span className="text-slate-500">|</span>
        <span className="text-slate-400">FPS: 60 [WEBGL]</span>
      </div>
    </div>
  );
}
