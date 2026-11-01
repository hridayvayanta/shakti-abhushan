import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import * as THREE from 'three';
import {
  BrassChokerModel,
  BrassJhumkaModel,
  BrassKadaModel,
  BrassRingModel
} from './BrassJewelleryModels';
import { Particles } from './Particles';
import { RotateCw, Sun, Sparkles, RefreshCw } from 'lucide-react';

interface ProductViewer3DProps {
  modelType: 'choker' | 'jhumka' | 'kada' | 'ring' | 'pendant';
  productName: string;
}

export const ProductViewer3D: React.FC<ProductViewer3DProps> = ({ modelType, productName }) => {
  const [autoRotate, setAutoRotate] = useState(true);
  const [lightPreset, setLightPreset] = useState<'darbar' | 'candle' | 'studio'>('darbar');
  const controlsRef = useRef<any>(null);

  const resetView = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  const renderModel = () => {
    switch (modelType) {
      case 'choker':
      case 'pendant':
        return <BrassChokerModel floatSpeed={0.6} interactive={false} />;
      case 'jhumka':
        return <BrassJhumkaModel floatSpeed={0.6} interactive={false} />;
      case 'kada':
        return <BrassKadaModel floatSpeed={0.6} interactive={false} />;
      case 'ring':
        return <BrassRingModel floatSpeed={0.6} interactive={false} />;
      default:
        return <BrassChokerModel floatSpeed={0.6} interactive={false} />;
    }
  };

  const getLighting = () => {
    switch (lightPreset) {
      case 'candle':
        return {
          ambient: '#1A0D03',
          ambientInt: 0.8,
          spot: '#FFB347',
          spotInt: 3.5,
          rim: '#C39C69',
          rimInt: 1.6
        };
      case 'studio':
        return {
          ambient: '#0D2610',
          ambientInt: 1.0,
          spot: '#FFF6E0',
          spotInt: 2.8,
          rim: '#E2C79F',
          rimInt: 2.0
        };
      case 'darbar':
      default:
        return {
          ambient: '#09210E',
          ambientInt: 0.9,
          spot: '#FFE4B5',
          spotInt: 3.2,
          rim: '#D2A870',
          rimInt: 1.8
        };
    }
  };

  const lights = getLighting();

  return (
    <div className="relative w-full h-[520px] bg-gradient-to-b from-[#061507] via-[#0A1B0D] to-[#040D05] rounded-2xl border border-[#C39C69]/30 overflow-hidden shadow-box-depth">
      {/* 3D Model Header Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase bg-[#061507]/90 text-[#D2A870] border border-[#C39C69]/40 backdrop-blur-md">
          <Sparkles className="w-3 h-3 text-[#D2A870]" />
          3D Interactive Model • 360°
        </span>
        <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider text-[#F3EBDD]/60 bg-black/40">
          Drag to rotate • Scroll to zoom
        </span>
      </div>

      {/* Control Tools Bar */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-[#061507]/80 backdrop-blur-md border border-[#C39C69]/30 p-1 rounded-lg">
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`p-2 rounded text-xs transition-colors ${
            autoRotate ? 'bg-[#C39C69] text-[#061507]' : 'text-[#F3EBDD]/80 hover:bg-[#C39C69]/20'
          }`}
          title={autoRotate ? 'Pause auto-rotation' : 'Resume auto-rotation'}
        >
          <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
        </button>

        <button
          onClick={() => {
            const next = lightPreset === 'darbar' ? 'candle' : lightPreset === 'candle' ? 'studio' : 'darbar';
            setLightPreset(next);
          }}
          className="p-2 rounded text-xs text-[#F3EBDD]/80 hover:bg-[#C39C69]/20 transition-colors flex items-center gap-1"
          title={`Lighting: ${lightPreset.toUpperCase()}`}
        >
          <Sun className="w-3.5 h-3.5 text-[#D2A870]" />
          <span className="text-[10px] uppercase font-mono hidden md:inline">{lightPreset}</span>
        </button>

        <button
          onClick={resetView}
          className="p-2 rounded text-xs text-[#F3EBDD]/80 hover:bg-[#C39C69]/20 transition-colors"
          title="Reset View"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 1.2, 4.2], fov: 42 }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={lights.ambientInt} color={lights.ambient} />
        <spotLight
          position={[3, 5, 4]}
          angle={0.5}
          penumbra={0.8}
          intensity={lights.spotInt}
          color={lights.spot}
        />
        <directionalLight position={[-3, 2, -3]} intensity={lights.rimInt} color={lights.rim} />
        <pointLight position={[0, -1, 1]} intensity={1.2} color="#C39C69" />

        <group position={[0, -0.1, 0]}>
          {renderModel()}
        </group>

        <Particles count={50} radius={4} size={0.03} color="#D2A870" />

        <OrbitControls
          ref={controlsRef}
          autoRotate={autoRotate}
          autoRotateSpeed={1.2}
          enableZoom={true}
          minDistance={2.5}
          maxDistance={7}
          enablePan={false}
          dampingFactor={0.05}
        />
      </Canvas>

      {/* Footer Model Label */}
      <div className="absolute bottom-3 left-4 right-4 z-10 flex justify-between items-center text-[11px] text-[#F3EBDD]/60 pointer-events-none">
        <span>Hand-forged Solid Brass • Antique Gold Micron Polish</span>
        <span className="font-mono text-[#D2A870]">Real-time PBR Reflection</span>
      </div>
    </div>
  );
};
