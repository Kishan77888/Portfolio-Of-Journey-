import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

// 1. Morphing Iridescent Core (adapts between deep cosmic in dark mode and ethereal crystal in light mode)
const MorphingCore: React.FC<{ mousePos: { x: number; y: number } }> = ({ mousePos }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Gentle floating rotation
      meshRef.current.rotation.y = t * 0.18 + mousePos.x * 0.4;
      meshRef.current.rotation.x = Math.sin(t * 0.12) * 0.2 + mousePos.y * 0.3;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = -t * 0.12 - mousePos.x * 0.3;
      wireframeRef.current.rotation.z = t * 0.08;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Morphing Liquid Mesh with Superconscious Iridescence */}
      <Sphere ref={meshRef} args={[1.5, 64, 64]} scale={1.2}>
        <MeshDistortMaterial
          color={isLight ? '#F3E8FF' : '#7E22CE'}
          emissive={isLight ? '#E9D5FF' : '#581C87'}
          emissiveIntensity={isLight ? 0.25 : 0.7}
          roughness={isLight ? 0.35 : 0.12}
          metalness={isLight ? 0.45 : 0.92}
          distort={0.44}
          speed={2.4}
          wireframe={false}
          transparent={isLight}
          opacity={isLight ? 0.45 : 1}
        />
      </Sphere>

      {/* Surface Starlight Grid / Stippled Dotted Lattice */}
      <Sphere args={[1.53, 40, 40]} scale={1.2}>
        <pointsMaterial
          color={isLight ? '#9333EA' : '#E879F9'}
          size={isLight ? 0.02 : 0.025}
          transparent
          opacity={isLight ? 0.4 : 0.8}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* Outer Glowing Cyber Wireframe Lattice */}
      <Sphere ref={wireframeRef} args={[1.78, 24, 24]} scale={1.25}>
        <meshBasicMaterial
          color={isLight ? '#0284C7' : '#00F0FF'}
          wireframe
          transparent
          opacity={isLight ? 0.12 : 0.22}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* Inner Pulsing Core Glow */}
      <Sphere args={[0.95, 32, 32]}>
        <meshBasicMaterial
          color="#C026D3"
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
    </group>
  );
};

// 2. Cosmic Floating Starfield / Telemetry Dust
const TelemetryDust: React.FC = () => {
  const count = 350;
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 2.5 + Math.random() * 6.5;

      coords[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      coords[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      coords[i * 3 + 2] = radius * Math.cos(phi);
    }
    return coords;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.02) * 0.05;
    }
  });

  return (
    <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00F0FF"
        size={0.035}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

// 3. Orbiting Network Nodes and Geometric Rings
const OrbitingNetworkRings: React.FC = () => {
  const ringRef1 = useRef<THREE.Group>(null);
  const ringRef2 = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ringRef1.current) {
      ringRef1.current.rotation.x = 1.1;
      ringRef1.current.rotation.z = t * 0.15;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.y = 0.8;
      ringRef2.current.rotation.x = -t * 0.1;
    }
  });

  return (
    <>
      <group ref={ringRef1}>
        <mesh>
          <torusGeometry args={[2.5, 0.012, 16, 100]} />
          <meshBasicMaterial color="#A855F7" transparent opacity={0.35} />
        </mesh>
      </group>
      <group ref={ringRef2}>
        <mesh>
          <torusGeometry args={[3.1, 0.008, 16, 100]} />
          <meshBasicMaterial color="#00F0FF" transparent opacity={0.25} />
        </mesh>
      </group>
    </>
  );
};

interface Cyber3DSceneProps {
  mousePos: { x: number; y: number };
}

export const Cyber3DScene: React.FC<Cyber3DSceneProps> = ({ mousePos }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  React.useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, isMobile ? 6 : 5], fov: isMobile ? 42 : 48 }}
        dpr={isMobile ? [1, 1] : [1, 1.5]}
        frameloop={isVisible ? 'always' : 'never'}
        gl={{ 
          antialias: !isMobile, 
          alpha: true, 
          powerPreference: 'high-performance',
          stencil: false,
          depth: true
        }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.8} color="#C084FC" />
        <directionalLight position={[-10, -10, -5]} intensity={1.2} color="#00F0FF" />
        <pointLight position={[0, 0, 2]} intensity={2.2} color="#9333EA" distance={6} />

        <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.8}>
          <MorphingCore mousePos={mousePos} />
          <OrbitingNetworkRings />
        </Float>

        <TelemetryDust />
      </Canvas>
    </div>
  );
};
