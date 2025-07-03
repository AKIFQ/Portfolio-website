"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import ButtonLink from './ButtonLink';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Line, OrbitControls, Sphere as DreiSphere, Box, Cylinder } from '@react-three/drei';
import { Physics, RigidBody, CylinderCollider } from '@react-three/rapier';
import * as THREE from 'three';
import { useRef, useState, useEffect, useMemo, createRef } from 'react';

function CodeNetwork() {
  const ref = useRef<THREE.Group>(null);
  return (
    <group ref={ref}>
      <Line
        points={[
          new THREE.Vector3(-2, 0, 0),
          new THREE.Vector3(0, 2, 0),
          new THREE.Vector3(2, 0, 0),
          new THREE.Vector3(0, -2, 0),
          new THREE.Vector3(-2, 0, 0)
        ]}
        color="#00d4ff"
        lineWidth={2}
      />
      <Line
        points={[new THREE.Vector3(0, 0, -2), new THREE.Vector3(0, 0, 2)]}
        color="#2edb8e"
        lineWidth={1}
      />
    </group>
  );
}

function InteractivePhysicsScene({ canvasPointer }: { canvasPointer: THREE.Vector3 | null }) {
  const { viewport } = useThree();
  const cursorRef = useRef<any>(null);
  const dynamicRefs = useRef<Array<React.RefObject<any>>>(
    Array.from({ length: 30 }, () => createRef<any>())
  );

  const physicsObjects = useMemo(() => dynamicRefs.current.map((ref, i) => {
    const type = i % 3;
    const color = new THREE.Color(`hsl(${i * 15}, 80%, 65%)`);
    const size = 0.8 + Math.random() * 0.7;
    const y = Math.random() * 10 + 10;
    const x = (Math.random() - 0.5) * 20;
    const z = (Math.random() - 0.5) * 5;
    if (type === 0) return (
      <RigidBody key={i} ref={ref} colliders="cuboid" mass={size} position={[x, y, z]} restitution={0.6} linearDamping={0} angularDamping={0}>
        <Box args={[size, size, size]}>
          <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} />
        </Box>
      </RigidBody>
    );
    if (type === 1) return (
      <RigidBody key={i} ref={ref} colliders="ball" mass={size} position={[x, y, z]} restitution={0.6} linearDamping={0} angularDamping={0}>
        <DreiSphere args={[size/2, 32, 32]}>
          <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} />
        </DreiSphere>
      </RigidBody>
    );
    return (
      <RigidBody key={i} ref={ref} mass={size} position={[x, y, z]} restitution={0.6} linearDamping={0} angularDamping={0}>
        <Cylinder args={[size/2, size, 32]}>
          <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} />
        </Cylinder>
        <CylinderCollider args={[size/2, size]} />
      </RigidBody>
    );
  }), []);

  useFrame(() => {
    if (!canvasPointer || !cursorRef.current) return;
    let cur;
    try { cur = cursorRef.current.translation(); } catch { return; }
    const tx = THREE.MathUtils.lerp(cur.x, canvasPointer.x, 0.02);
    const ty = THREE.MathUtils.lerp(cur.y, canvasPointer.y, 0.02);
    cursorRef.current.setNextKinematicTranslation({ x: tx, y: ty, z: canvasPointer.z || 0 });
    if (!dynamicRefs.current.length) return;
    dynamicRefs.current.forEach(ref => {
      if (!ref.current) return;
      let op;
      try { op = ref.current.translation(); } catch { return; }
      const dist = cur.distanceTo(op);
      const radius = 5, strength = 0.3;
      if (dist < radius) {
        const rv = op.clone().sub(cur).normalize();
        const mag = (1 - dist/radius)*strength;
        try { ref.current.applyImpulse(rv.multiplyScalar(mag), true); } catch {}
      }
    });
  });

  useEffect(() => {
    dynamicRefs.current.forEach(ref => {
      if (ref.current) {
        const impulse = new THREE.Vector3(
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2
        );
        try { ref.current.applyImpulse(impulse, true); } catch {}
        const torque = new THREE.Vector3(
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.5
        );
        try { ref.current.applyTorqueImpulse(torque, true); } catch {}
      }
    });
  }, []);

  return (
    <Physics gravity={[0,0,0]} debug={false}>
      <RigidBody ref={cursorRef} type="kinematicPosition" colliders="ball">
        <DreiSphere args={[0.9,32,32]}>
          <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.4} transparent opacity={0.9} />
        </DreiSphere>
      </RigidBody>
      {physicsObjects}
    </Physics>
  );
}

export default function Hero() {
  const [mp, setMp] = useState<{ x: number; y: number }>(() => ({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
  }));
  const [cp, setCp] = useState<THREE.Vector3|null>(null);
  useEffect(() => {
    const u = (e:MouseEvent) => setMp({ x:e.clientX, y:e.clientY });
    window.addEventListener('mousemove', u);
    return () => window.removeEventListener('mousemove', u);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background text-text overflow-hidden cursor-none">
      <motion.div className="fixed z-50 pointer-events-none rounded-full" style={{ left:mp.x, top:mp.y, translateX:'-50%',translateY:'-50%', width:'28px',height:'28px', border:'2px solid rgba(0,212,255,0.8)', backgroundColor:'transparent', boxShadow:'0 0 15px rgba(0,212,255,0.7),0 0 30px rgba(0,212,255,0.5)' }} animate={{ scale:[1,1.1,1], opacity:[0.9,1,0.9]}} transition={{repeat:Infinity,duration:1.8,ease:'easeInOut'}}/>
      <motion.div className="fixed z-50 pointer-events-none rounded-full" style={{ left:mp.x, top:mp.y, translateX:'-50%',translateY:'-50%', width:'6px',height:'6px', backgroundColor:'#00d4ff' }}/>
      <div className="absolute inset-0 opacity-70 cursor-none">
        <Canvas camera={{ position:[0,0,15], fov:75 }} onPointerMove={(e: any) => setCp(e.point)} className="cursor-none">
          <ambientLight intensity={0.5}/>
          <pointLight position={[10,10,10]} intensity={1}/>
          <InteractivePhysicsScene canvasPointer={cp}/>
          <OrbitControls enableZoom={false}/>
        </Canvas>
      </div>
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div className="space-y-6" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,ease:'easeOut'}}>
          <motion.p className="text-accent text-lg font-mono" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2,duration:0.6}}>Hello, I'm</motion.p>
          <motion.h1 className="text-6xl lg:text-7xl font-bold font-sans text-text leading-tight" initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{delay:0.4,duration:0.6}}>Akif Qureshi</motion.h1>
          <motion.div className="space-y-2" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.6,duration:0.6}}>
            <p className="text-2xl text-secondary_accent font-sans">Software Developer</p>
            <p className="text-gray-400 font-sans">Crafting elegant solutions through code.</p>
          </motion.div>
          <motion.div className="flex gap-4 pt-6" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.8,duration:0.6}}>
            <ButtonLink href="/Akif-Qureshi-Resume.pdf">Download Resume</ButtonLink>
            <ButtonLink variant="primary" href="#contact">Contact Me</ButtonLink>
          </motion.div>
        </motion.div>
        <motion.div className="flex justify-center lg:justify-end" initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{duration:0.8,ease:'easeOut'}}>
          <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-accent shadow-smooth">
            <Image src="/profile-pic.png" layout="fill" objectFit="cover" alt="Akif Qureshi" priority/>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
