import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html, OrbitControls } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import {
  BrassChokerModel,
  BrassJhumkaModel,
  BrassKadaModel,
  BrassRingModel,
  GoldHighlightMaterial
} from './BrassJewelleryModels';
import { Particles } from './Particles';

interface CollectionNode {
  id: string;
  category: string;
  title: string;
  hindiTitle: string;
  count: number;
  position: [number, number, number];
  component: React.ReactNode;
}

const NODES_CONFIG: CollectionNode[] = [
  {
    id: 'necklaces',
    category: 'necklaces',
    title: 'Necklaces & Chokers',
    hindiTitle: 'कंठहार एवं हंसली',
    count: 4,
    position: [-2.6, 0.4, 0],
    component: <BrassChokerModel floatSpeed={0.8} />
  },
  {
    id: 'earrings',
    category: 'earrings',
    title: 'Earrings & Jhumkas',
    hindiTitle: 'कर्णफूल एवं झुमके',
    count: 4,
    position: [0, 0.6, 1.8],
    component: <BrassJhumkaModel floatSpeed={0.9} />
  },
  {
    id: 'bangles',
    category: 'bangles',
    title: 'Bangles & Kadas',
    hindiTitle: 'कंगन एवं गजराज कड़ा',
    count: 2,
    position: [2.6, 0.3, 0],
    component: <BrassKadaModel floatSpeed={0.8} />
  },
  {
    id: 'rings',
    category: 'rings',
    title: 'Rings & Accessories',
    hindiTitle: 'मुद्रिका एवं आभूषण',
    count: 1,
    position: [0, 0.4, -2.0],
    component: <BrassRingModel floatSpeed={0.9} />
  }
];

const OrbitingCluster: React.FC<{
  activeId: string | null;
  setActiveId: (id: string | null) => void;
  onSelect: (category: string) => void;
}> = ({ activeId, setActiveId, onSelect }) => {
  const clusterRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (clusterRef.current && !activeId) {
      clusterRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group ref={clusterRef}>
      {/* Central Sanctuary Glowing Rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.8, 2.84, 64]} />
        <meshBasicMaterial color="#C39C69" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.4, 1.42, 64]} />
        <meshBasicMaterial color="#D2A870" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>

      {/* Nodes */}
      {NODES_CONFIG.map((node) => {
        const isHovered = activeId === node.id;
        const scale = isHovered ? 1.15 : 0.95;

        return (
          <group
            key={node.id}
            position={node.position}
            onPointerOver={(e) => {
              e.stopPropagation();
              setActiveId(node.id);
            }}
            onPointerOut={() => setActiveId(null)}
            onClick={(e) => {
              e.stopPropagation();
              onSelect(node.category);
            }}
          >
            {/* Glowing pedestal disk */}
            <mesh position={[0, -0.9, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <circleGeometry args={[0.7, 32]} />
              <meshBasicMaterial
                color={isHovered ? '#D2A870' : '#0A2310'}
                transparent
                opacity={isHovered ? 0.7 : 0.3}
              />
            </mesh>

            {/* Brass trim ring on pedestal */}
            <mesh position={[0, -0.88, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.68, 0.72, 32]} />
              <GoldHighlightMaterial />
            </mesh>

            {/* 3D Model with scale bounce */}
            <group scale={[scale, scale, scale]}>
              {node.component}
            </group>

            {/* Html Label above object */}
            <Html
              position={[0, 1.4, 0]}
              center
              distanceFactor={8}
              zIndexRange={[100, 0]}
            >
              <div
                onClick={() => onSelect(node.category)}
                className={`cursor-pointer transition-all duration-300 transform select-none text-center pointer-events-auto ${
                  isHovered ? 'scale-110 opacity-100' : 'opacity-85 hover:opacity-100 scale-95'
                }`}
              >
                <div className="px-3 py-1.5 rounded-lg bg-[#061507]/90 backdrop-blur-md border border-[#C39C69]/60 shadow-gold-glow">
                  <div className="text-[10px] uppercase tracking-widest text-[#D2A870]">
                    {node.hindiTitle}
                  </div>
                  <div className="font-serif text-sm font-semibold text-[#F3EBDD] whitespace-nowrap">
                    {node.title}
                  </div>
                  <div className="text-[10px] text-[#C39C69]/80 font-mono">
                    {node.count} Curated Pieces →
                  </div>
                </div>
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
};

export const FloatingUniverseScene: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSelect = (category: string) => {
    navigate(`/shop?category=${category}`);
  };

  return (
    <div className="relative w-full h-[620px] bg-gradient-to-b from-[#061507] via-[#0A1B0D] to-[#061507] overflow-hidden rounded-2xl border border-[#C39C69]/20 shadow-box-depth">
      {/* Background radial warmth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(195,156,105,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Top Section Header inside scene */}
      <div className="absolute top-8 left-8 right-8 z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pointer-events-none">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#C39C69] font-medium block mb-1">
            Spatial Exhibition • त्रिआयामी दर्शन
          </span>
          <h3 className="font-serif text-3xl md:text-4xl text-[#F3EBDD] tracking-wide">
            The Floating Universe
          </h3>
        </div>
        <p className="text-xs text-[#F3EBDD]/70 max-w-xs font-light">
          Drag to orbit 360°. Click any piece to browse that category.
        </p>
      </div>

      <Canvas
        camera={{ position: [0, 2.5, 6.2], fov: 46 }}
        className="w-full h-full"
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} color="#0D2E14" />
        <directionalLight position={[5, 6, 4]} intensity={2.2} color="#FFE6B8" />
        <directionalLight position={[-4, 3, -4]} intensity={1.5} color="#D2A870" />
        <pointLight position={[0, 0, 0]} intensity={1.8} color="#C39C69" distance={6} />

        <OrbitingCluster
          activeId={activeId}
          setActiveId={setActiveId}
          onSelect={handleSelect}
        />

        <Particles count={90} radius={6} size={0.035} color="#D2A870" />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.6}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2 + 0.1}
          dampingFactor={0.05}
        />
      </Canvas>

      {/* Bottom Hint */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 pointer-events-none">
        <span className="text-[11px] uppercase tracking-widest text-[#C39C69]/80 px-4 py-1.5 rounded-full bg-[#061507]/80 backdrop-blur border border-[#C39C69]/30">
          Click on any piece to browse that category
        </span>
      </div>
    </div>
  );
};
