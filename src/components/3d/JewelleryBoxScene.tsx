import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { BrassChokerModel, AntiqueBrassMaterial, GoldHighlightMaterial } from './BrassJewelleryModels';
import { Particles } from './Particles';

interface JewelleryBoxSceneProps {
  progress?: number; // 0 (closed) to 1 (fully open & elevated)
  interactive?: boolean;
  onOpenToggle?: (isOpen: boolean) => void;
  reducedMotion?: boolean;
}

// Internal 3D Canvas Contents
const BoxAndJewellery: React.FC<{
  openProgress: number;
  reducedMotion?: boolean;
}> = ({ openProgress, reducedMotion = false }) => {
  const lidGroupRef = useRef<THREE.Group>(null);
  const jewelleryGroupRef = useRef<THREE.Group>(null);
  const spotLightRef = useRef<THREE.SpotLight>(null);

  // Smooth lerp towards openProgress
  const currentProgress = useRef(0);

  useFrame((state, delta) => {
    // Smooth dampening towards target progress
    const target = openProgress;
    const speed = reducedMotion ? 1 : 4.5 * delta;
    currentProgress.current = THREE.MathUtils.lerp(currentProgress.current, target, Math.min(speed, 1));
    const p = currentProgress.current;

    // 1. Lid opens along back edge: rotation around X axis
    if (lidGroupRef.current) {
      // Rotation from 0 to -1.35 radians (approx -77 degrees)
      lidGroupRef.current.rotation.x = -p * 1.35;
    }

    // 2. Emerging jewellery rises up from velvet cushion and floats
    if (jewelleryGroupRef.current) {
      // Base rise from y=0.15 to y=1.45
      const baseY = 0.15 + p * 1.3;
      const floatOffset = p > 0.4 && !reducedMotion ? Math.sin(state.clock.elapsedTime * 1.5) * 0.08 : 0;
      jewelleryGroupRef.current.position.y = baseY + floatOffset;
      jewelleryGroupRef.current.position.z = p * 0.35;
      jewelleryGroupRef.current.scale.setScalar(0.75 + p * 0.45);
      
      // Subtle sway
      if (!reducedMotion) {
        jewelleryGroupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.25;
      }
    }

    // 3. Spotlight intensity brightens as box opens
    if (spotLightRef.current) {
      spotLightRef.current.intensity = 1.5 + p * 4.5;
    }
  });

  return (
    <group position={[0, -0.6, 0]}>
      {/* 1. LOWER BOX BASE */}
      <group position={[0, 0, 0]}>
        {/* Main box outer body - Deep Dark Lacquered Green */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[3.4, 0.9, 2.6]} />
          <meshStandardMaterial
            color="#081A0B"
            roughness={0.25}
            metalness={0.15}
          />
        </mesh>

        {/* Velvet interior cushion in deepest forest green */}
        <mesh position={[0, 0.28, 0]}>
          <boxGeometry args={[3.1, 0.4, 2.3]} />
          <meshStandardMaterial
            color="#030C04"
            roughness={0.88}
            metalness={0.05}
          />
        </mesh>

        {/* Antique Gold Trim along bottom rim */}
        <mesh position={[0, -0.42, 0]}>
          <boxGeometry args={[3.44, 0.08, 2.64]} />
          <GoldHighlightMaterial />
        </mesh>

        {/* Corner Gold Brass Accents */}
        {[
          [-1.7, 0, -1.3],
          [1.7, 0, -1.3],
          [-1.7, 0, 1.3],
          [1.7, 0, 1.3]
        ].map(([x, y, z], i) => (
          <mesh key={i} position={[x, y, z]}>
            <cylinderGeometry args={[0.06, 0.06, 0.94, 8]} />
            <GoldHighlightMaterial />
          </mesh>
        ))}

        {/* Front Brass Ornate Clasp Base */}
        <mesh position={[0, 0.1, 1.32]}>
          <boxGeometry args={[0.42, 0.28, 0.05]} />
          <GoldHighlightMaterial />
        </mesh>
      </group>

      {/* 2. HINGED LID (Pivoting at back edge z = -1.3, y = 0.45) */}
      <group position={[0, 0.45, -1.3]}>
        <group ref={lidGroupRef}>
          {/* Lid shifted forward relative to hinge */}
          <group position={[0, 0.25, 1.3]}>
            {/* Lid Shell */}
            <mesh castShadow receiveShadow>
              <boxGeometry args={[3.44, 0.5, 2.64]} />
              <meshStandardMaterial
                color="#081A0B"
                roughness={0.22}
                metalness={0.2}
              />
            </mesh>

            {/* Lid Gold Bevel Perimeter */}
            <mesh position={[0, 0.26, 0]}>
              <boxGeometry args={[3.2, 0.04, 2.4]} />
              <GoldHighlightMaterial />
            </mesh>

            {/* Top Ornamental Gold Medallion on Lid Exterior */}
            <mesh position={[0, 0.29, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <circleGeometry args={[0.65, 32]} />
              <AntiqueBrassMaterial />
            </mesh>

            {/* Lid Inner Velvet Lining */}
            <mesh position={[0, -0.24, 0]}>
              <boxGeometry args={[3.2, 0.04, 2.4]} />
              <meshStandardMaterial
                color="#041206"
                roughness={0.8}
              />
            </mesh>

            {/* Front Latch Toggle */}
            <mesh position={[0, -0.15, 1.33]}>
              <boxGeometry args={[0.26, 0.18, 0.04]} />
              <GoldHighlightMaterial />
            </mesh>
          </group>

          {/* Brass Hinges at the pivot line */}
          {[-1.0, 1.0].map((x, i) => (
            <mesh key={i} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.07, 0.07, 0.35, 12]} />
              <GoldHighlightMaterial />
            </mesh>
          ))}
        </group>
      </group>

      {/* 3. FLOATING EMERGING JEWELLERY (The Hero Piece) */}
      <group ref={jewelleryGroupRef} position={[0, 0.15, 0]}>
        <BrassChokerModel floatSpeed={0.9} interactive={!reducedMotion} />
      </group>

      {/* 4. CINEMATIC LIGHTING */}
      {/* Warm Golden Spotlight emerging directly above */}
      <spotLight
        ref={spotLightRef}
        position={[0, 5, 1.5]}
        angle={0.65}
        penumbra={0.7}
        intensity={2}
        color="#FFE5B4"
        castShadow
      />

      {/* Rim light from behind to highlight brass contours */}
      <directionalLight position={[0, 3, -4]} intensity={1.8} color="#D2A870" />

      {/* Soft warm bounce from beneath */}
      <pointLight position={[0, 0.5, 0.5]} intensity={1.2} color="#C39C69" distance={4} />

      {/* Ambient forest green fill */}
      <ambientLight intensity={0.6} color="#0E2E14" />
    </group>
  );
};

export const JewelleryBoxScene: React.FC<JewelleryBoxSceneProps> = ({
  progress = 0,
  interactive = true,
  onOpenToggle,
  reducedMotion = false
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Compute effective progress: either externally passed (via scroll) or internally toggled
  const effectiveProgress = progress > 0 ? progress : (internalOpen ? 1 : 0);

  const handleBoxClick = () => {
    if (progress > 0) return; // If controlled by scroll, ignore click toggle
    const next = !internalOpen;
    setInternalOpen(next);
    if (onOpenToggle) onOpenToggle(next);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full cursor-pointer select-none"
      onClick={handleBoxClick}
      title="Click or scroll to open the living jewellery box"
    >
      <Canvas
        shadows
        camera={{ position: [0, 2.2, 5.2], fov: 42 }}
        className="w-full h-full"
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <BoxAndJewellery
          openProgress={effectiveProgress}
          reducedMotion={reducedMotion}
        />

        {/* Ambient golden dust particles drifting around */}
        <Particles count={70} radius={5} size={0.035} color="#D2A870" />

        {/* Orbit control when user drags (restricted so scene stays elegant) */}
        {interactive && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2 + 0.15}
            minPolarAngle={Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            minAzimuthAngle={-Math.PI / 4}
            rotateSpeed={0.5}
            dampingFactor={0.05}
          />
        )}
      </Canvas>

      {/* Interactive Helper Overlay Pill */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none transition-opacity duration-500">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase bg-[#061507]/80 backdrop-blur-md border border-[#C39C69]/40 text-[#F3EBDD] shadow-gold-glow">
          <span className="w-2 h-2 rounded-full bg-[#D2A870] animate-pulse" />
          {effectiveProgress > 0.5 ? 'Drag to rotate • Click to close' : 'Click or scroll to open the box'}
        </span>
      </div>
    </div>
  );
};
