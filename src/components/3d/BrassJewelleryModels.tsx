import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Realistic Antique Brass PBR Material Helper
export const AntiqueBrassMaterial = ({
  roughness = 0.32,
  metalness = 0.88,
  color = '#C39C69',
  bumpScale = 0.05
}: {
  roughness?: number;
  metalness?: number;
  color?: string;
  bumpScale?: number;
}) => (
  <meshStandardMaterial
    color={color}
    metalness={metalness}
    roughness={roughness}
    envMapIntensity={1.4}
  />
);

export const GoldHighlightMaterial = () => (
  <meshStandardMaterial
    color="#D2A870"
    metalness={0.92}
    roughness={0.22}
    envMapIntensity={2.0}
  />
);

export const RubyAccentMaterial = () => (
  <meshPhysicalMaterial
    color="#8B1E28"
    metalness={0.15}
    roughness={0.1}
    transmission={0.65}
    thickness={0.8}
    reflectivity={0.9}
  />
);

// 1. ROYAL BRASS CHOKER MODEL
export const BrassChokerModel: React.FC<{ floatSpeed?: number; interactive?: boolean }> = ({
  floatSpeed = 1,
  interactive = true
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime() * floatSpeed;
    if (interactive) {
      groupRef.current.position.y = Math.sin(t * 1.2) * 0.08;
      groupRef.current.rotation.y = Math.sin(t * 0.7) * 0.25;
      groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.06;
    }
  });

  return (
    <group ref={groupRef} scale={[1.1, 1.1, 1.1]}>
      {/* Main Collar Arc Band */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.08, 16, 48, Math.PI * 0.95]} />
        <AntiqueBrassMaterial />
      </mesh>

      {/* Secondary Inner Ridge Band */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.06, 0.05]}>
        <torusGeometry args={[1.38, 0.04, 12, 48, Math.PI * 0.92]} />
        <GoldHighlightMaterial />
      </mesh>

      {/* Symmetrical Repoussé Medallions Along the Arc */}
      {[-0.8, -0.5, -0.25, 0, 0.25, 0.5, 0.8].map((angle, i) => {
        const rad = angle * (Math.PI / 3);
        const x = Math.sin(rad) * 1.5;
        const z = Math.cos(rad) * 1.5 - 1.5;
        const isCenter = i === 3;
        const size = isCenter ? 0.32 : 0.22;

        return (
          <group key={i} position={[x, -0.08, z]} rotation={[0, -rad, 0]}>
            {/* Medallion Base Shield */}
            <mesh>
              <cylinderGeometry args={[size, size * 0.8, 0.06, 8]} />
              <AntiqueBrassMaterial roughness={0.35} />
            </mesh>

            {/* Raised Floral Crest */}
            <mesh position={[0, 0, 0.04]} rotation={[Math.PI / 2, 0, 0]}>
              <coneGeometry args={[size * 0.7, 0.08, 6]} />
              <GoldHighlightMaterial />
            </mesh>

            {/* Center Ruby or Polki Accent */}
            <mesh position={[0, 0, 0.08]}>
              <sphereGeometry args={[isCenter ? 0.09 : 0.06, 16, 16]} />
              {isCenter ? <RubyAccentMaterial /> : <GoldHighlightMaterial />}
            </mesh>

            {/* Suspended Golden Droplet Bead */}
            <group position={[0, -size * 1.3, 0]}>
              <mesh>
                <cylinderGeometry args={[0.015, 0.015, 0.15, 8]} />
                <GoldHighlightMaterial />
              </mesh>
              <mesh position={[0, -0.12, 0]}>
                <sphereGeometry args={[0.06, 12, 12]} />
                <GoldHighlightMaterial />
              </mesh>
            </group>
          </group>
        );
      })}

      {/* Fine Filigree Ghunghroo Trim along bottom rim */}
      {Array.from({ length: 28 }).map((_, i) => {
        const angle = (i / 27 - 0.5) * (Math.PI * 0.85);
        const x = Math.sin(angle) * 1.35;
        const z = Math.cos(angle) * 1.35 - 1.45;
        return (
          <mesh key={i} position={[x, -0.22, z]}>
            <sphereGeometry args={[0.035, 8, 8]} />
            <GoldHighlightMaterial />
          </mesh>
        );
      })}
    </group>
  );
};

// 2. TEMPLE JHUMKA MODEL
export const BrassJhumkaModel: React.FC<{ floatSpeed?: number; interactive?: boolean }> = ({
  floatSpeed = 1,
  interactive = true
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime() * floatSpeed;
    if (interactive) {
      groupRef.current.position.y = Math.sin(t * 1.4) * 0.07;
      groupRef.current.rotation.y = t * 0.4;
      groupRef.current.rotation.z = Math.sin(t * 1.2) * 0.05;
    }
  });

  return (
    <group ref={groupRef} scale={[1.3, 1.3, 1.3]} position={[0, 0.2, 0]}>
      {/* Upper Floral / Peacock Stud */}
      <group position={[0, 0.9, 0]}>
        <mesh>
          <cylinderGeometry args={[0.3, 0.25, 0.06, 12]} />
          <AntiqueBrassMaterial />
        </mesh>
        <mesh position={[0, 0, 0.04]} rotation={[Math.PI / 2, 0, 0]}>
          <coneGeometry args={[0.2, 0.1, 8]} />
          <GoldHighlightMaterial />
        </mesh>
        <mesh position={[0, 0, 0.08]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <RubyAccentMaterial />
        </mesh>
      </group>

      {/* Intermediate Connecting Link */}
      <mesh position={[0, 0.6, 0]}>
        <torusGeometry args={[0.12, 0.025, 8, 24]} />
        <AntiqueBrassMaterial />
      </mesh>

      {/* Grand Resonant Temple Bell Dome (Jhumka) */}
      <group position={[0, 0.2, 0]}>
        {/* Bell outer shell */}
        <mesh rotation={[Math.PI, 0, 0]}>
          <cylinderGeometry args={[0.65, 0.2, 0.55, 24, 1, true]} />
          <AntiqueBrassMaterial roughness={0.28} />
        </mesh>
        {/* Bell Dome Cap */}
        <mesh position={[0, 0.28, 0]}>
          <sphereGeometry args={[0.22, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <GoldHighlightMaterial />
        </mesh>
        {/* Rim Ribbing */}
        <mesh position={[0, -0.28, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.65, 0.04, 12, 32]} />
          <GoldHighlightMaterial />
        </mesh>

        {/* Cascading Ghunghroo Droplets on Rim */}
        {Array.from({ length: 16 }).map((_, i) => {
          const theta = (i / 16) * Math.PI * 2;
          const x = Math.cos(theta) * 0.66;
          const z = Math.sin(theta) * 0.66;
          return (
            <group key={i} position={[x, -0.32, z]}>
              <mesh position={[0, -0.06, 0]}>
                <cylinderGeometry args={[0.01, 0.01, 0.08, 6]} />
                <AntiqueBrassMaterial />
              </mesh>
              <mesh position={[0, -0.12, 0]}>
                <sphereGeometry args={[0.045, 10, 10]} />
                <GoldHighlightMaterial />
              </mesh>
            </group>
          );
        })}

        {/* Central Inner Bell Clapper */}
        <mesh position={[0, -0.35, 0]}>
          <sphereGeometry args={[0.1, 14, 14]} />
          <RubyAccentMaterial />
        </mesh>
      </group>
    </group>
  );
};

// 3. ELEPHANT TERMINAL BRASS KADA (CUFF)
export const BrassKadaModel: React.FC<{ floatSpeed?: number; interactive?: boolean }> = ({
  floatSpeed = 1,
  interactive = true
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime() * floatSpeed;
    if (interactive) {
      groupRef.current.position.y = Math.sin(t * 1.1) * 0.08;
      groupRef.current.rotation.x = 0.5 + Math.sin(t * 0.6) * 0.2;
      groupRef.current.rotation.y = t * 0.5;
    }
  });

  return (
    <group ref={groupRef} scale={[1.2, 1.2, 1.2]}>
      {/* Heavy Openable Torus Arc */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.25, 0.16, 20, 48, Math.PI * 1.6]} />
        <AntiqueBrassMaterial roughness={0.3} />
      </mesh>

      {/* Decorative Ridges along Cuff */}
      {Array.from({ length: 9 }).map((_, i) => {
        const theta = (i / 8 - 0.5) * (Math.PI * 1.3);
        const x = Math.cos(theta) * 1.25;
        const y = Math.sin(theta) * 1.25;
        return (
          <mesh key={i} position={[x, y, 0]} rotation={[0, 0, theta]}>
            <torusGeometry args={[0.18, 0.02, 8, 16]} />
            <GoldHighlightMaterial />
          </mesh>
        );
      })}

      {/* Opposing Elephant / Lion Head Terminals at the Gap */}
      {[-1, 1].map((dir, i) => {
        const angle = dir * (Math.PI * 0.8);
        const x = Math.cos(angle) * 1.25;
        const y = Math.sin(angle) * 1.25;
        return (
          <group key={i} position={[x, y, 0]} rotation={[0, 0, angle + (dir > 0 ? -1.2 : 1.2)]}>
            {/* Sculpted Head */}
            <mesh>
              <boxGeometry args={[0.3, 0.35, 0.3]} />
              <GoldHighlightMaterial />
            </mesh>
            {/* Trunk / Finial */}
            <mesh position={[0, -0.2, 0]} rotation={[0.4 * dir, 0, 0]}>
              <cylinderGeometry args={[0.08, 0.12, 0.3, 10]} />
              <AntiqueBrassMaterial />
            </mesh>
            {/* Eyes */}
            <mesh position={[0.12, 0.05, 0.1]}>
              <sphereGeometry args={[0.035, 8, 8]} />
              <RubyAccentMaterial />
            </mesh>
            <mesh position={[-0.12, 0.05, 0.1]}>
              <sphereGeometry args={[0.035, 8, 8]} />
              <RubyAccentMaterial />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};

// 4. ROYAL LOTUS STATEMENT RING MODEL
export const BrassRingModel: React.FC<{ floatSpeed?: number; interactive?: boolean }> = ({
  floatSpeed = 1,
  interactive = true
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime() * floatSpeed;
    if (interactive) {
      groupRef.current.position.y = Math.sin(t * 1.3) * 0.07;
      groupRef.current.rotation.x = 0.4 + Math.sin(t * 0.7) * 0.15;
      groupRef.current.rotation.y = t * 0.6;
    }
  });

  return (
    <group ref={groupRef} scale={[1.4, 1.4, 1.4]}>
      {/* Ring Shank Band */}
      <mesh position={[0, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.55, 0.08, 16, 32]} />
        <AntiqueBrassMaterial />
      </mesh>

      {/* Elevated Flower Mount */}
      <mesh position={[0, -0.05, 0]}>
        <cylinderGeometry args={[0.35, 0.15, 0.25, 12]} />
        <AntiqueBrassMaterial />
      </mesh>

      {/* Tier 1: Outer Lotus Petals */}
      {Array.from({ length: 8 }).map((_, i) => {
        const rad = (i / 8) * Math.PI * 2;
        const x = Math.cos(rad) * 0.48;
        const z = Math.sin(rad) * 0.48;
        return (
          <mesh
            key={i}
            position={[x, 0.08, z]}
            rotation={[Math.PI / 4, rad, 0]}
          >
            <boxGeometry args={[0.22, 0.32, 0.04]} />
            <AntiqueBrassMaterial roughness={0.3} />
          </mesh>
        );
      })}

      {/* Tier 2: Inner Golden Lotus Petals */}
      {Array.from({ length: 6 }).map((_, i) => {
        const rad = (i / 6) * Math.PI * 2 + Math.PI / 6;
        const x = Math.cos(rad) * 0.28;
        const z = Math.sin(rad) * 0.28;
        return (
          <mesh
            key={i}
            position={[x, 0.16, z]}
            rotation={[Math.PI / 3, rad, 0]}
          >
            <boxGeometry args={[0.18, 0.24, 0.04]} />
            <GoldHighlightMaterial />
          </mesh>
        );
      })}

      {/* Center Crown / Gemstone Dome */}
      <mesh position={[0, 0.24, 0]}>
        <sphereGeometry args={[0.2, 20, 20]} />
        <RubyAccentMaterial />
      </mesh>
    </group>
  );
};
