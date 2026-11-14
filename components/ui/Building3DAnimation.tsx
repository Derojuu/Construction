"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export type RenderMode = "blueprint" | "structural" | "solid";

export interface Building3DAnimationProps {
  className?: string;
}

export function Building3DAnimation({ className }: Building3DAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<RenderMode>("structural");
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const prevMousePos = useRef({ x: 0, y: 0 });

  // Refs for Three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const buildingGroupRef = useRef<THREE.Group | null>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(22, 16, 26);
    camera.lookAt(0, 4, 0);
    cameraRef.current = camera;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.4);
    dirLight.position.set(20, 40, 20);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight(0xb9b36d, 0.5);
    fillLight.position.set(-20, 10, -20);
    scene.add(fillLight);

    // 5. Building Group Construction
    const buildingGroup = new THREE.Group();
    buildingGroupRef.current = buildingGroup;
    scene.add(buildingGroup);

    // Grid Floor
    const gridHelper = new THREE.GridHelper(30, 30, 0x000000, 0xd0d0d0);
    gridHelper.position.y = -0.05;
    buildingGroup.add(gridHelper);

    // Materials dictionary
    const materials = {
      concrete: new THREE.MeshStandardMaterial({
        color: 0xf5f5f5,
        roughness: 0.5,
        metalness: 0.1,
      }),
      darkConcrete: new THREE.MeshStandardMaterial({
        color: 0x222222,
        roughness: 0.4,
      }),
      steelGold: new THREE.MeshStandardMaterial({
        color: 0xb9b36d,
        metalness: 0.8,
        roughness: 0.2,
      }),
      steelBlack: new THREE.MeshStandardMaterial({
        color: 0x111111,
        metalness: 0.6,
        roughness: 0.3,
      }),
      glass: new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.25,
        roughness: 0.1,
        transmission: 0.9,
        thickness: 0.5,
      }),
      nodeGlow: new THREE.MeshBasicMaterial({
        color: 0xb9b36d,
      }),
      wireframe: new THREE.LineBasicMaterial({
        color: 0x000000,
        linewidth: 1.5,
      }),
      goldWireframe: new THREE.LineBasicMaterial({
        color: 0xb9b36d,
        linewidth: 2,
      }),
    };

    // Construct architectural floors
    const floorLevels = [0, 3.2, 6.4, 9.6];
    const floorDims = [
      { w: 14, d: 11, x: 0, z: 0 },
      { w: 16, d: 11, x: 1, z: 0 }, // Cantilevered floor 1
      { w: 13, d: 12, x: -0.5, z: 0.5 }, // Cantilevered floor 2
      { w: 9, d: 8, x: 1.5, z: -1 }, // Penthouse terrace
    ];

    floorLevels.forEach((levelY, i) => {
      const dim = floorDims[i];

      // Concrete slab
      const slabGeo = new THREE.BoxGeometry(dim.w, 0.4, dim.d);
      const slabMesh = new THREE.Mesh(slabGeo, materials.concrete);
      slabMesh.position.set(dim.x, levelY, dim.z);
      slabMesh.castShadow = true;
      slabMesh.receiveShadow = true;
      buildingGroup.add(slabMesh);

      // Edges for blueprint aesthetic
      const slabEdges = new THREE.LineSegments(
        new THREE.EdgesGeometry(slabGeo),
        materials.wireframe
      );
      slabEdges.position.set(dim.x, levelY, dim.z);
      buildingGroup.add(slabEdges);

      // Slabs columns / pilotis underneath
      if (i > 0) {
        const prevLevelY = floorLevels[i - 1];
        const colHeight = levelY - prevLevelY;
        const colY = prevLevelY + colHeight / 2;

        const colPositions = [
          [-dim.w / 2 + 1, -dim.d / 2 + 1],
          [dim.w / 2 - 1, -dim.d / 2 + 1],
          [-dim.w / 2 + 1, dim.d / 2 - 1],
          [dim.w / 2 - 1, dim.d / 2 - 1],
          [0, 0],
        ];

        colPositions.forEach(([cx, cz]) => {
          const colGeo = new THREE.CylinderGeometry(0.18, 0.18, colHeight, 16);
          const colMesh = new THREE.Mesh(colGeo, materials.steelBlack);
          colMesh.position.set(dim.x + cx, colY, dim.z + cz);
          colMesh.castShadow = true;
          buildingGroup.add(colMesh);

          // Structural Joint Node
          const nodeGeo = new THREE.SphereGeometry(0.28, 12, 12);
          const nodeMesh = new THREE.Mesh(nodeGeo, materials.nodeGlow);
          nodeMesh.position.set(dim.x + cx, levelY, dim.z + cz);
          buildingGroup.add(nodeMesh);
        });

        // Glass curtain facade wall for level
        const glassGeo = new THREE.BoxGeometry(dim.w * 0.88, colHeight * 0.92, dim.d * 0.88);
        const glassMesh = new THREE.Mesh(glassGeo, materials.glass);
        glassMesh.position.set(dim.x, colY, dim.z);
        buildingGroup.add(glassMesh);
      }
    });

    // Roof architectural trellis/canopy
    const roofY = floorLevels[floorLevels.length - 1] + 3.2;
    const trellisGeo = new THREE.BoxGeometry(10, 0.15, 9);
    const trellisMesh = new THREE.Mesh(trellisGeo, materials.steelGold);
    trellisMesh.position.set(1.5, roofY, -1);
    buildingGroup.add(trellisMesh);

    const trellisEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(trellisGeo),
      materials.goldWireframe
    );
    trellisEdges.position.set(1.5, roofY, -1);
    buildingGroup.add(trellisEdges);

    // Cross-bracing steel truss (seismic/lateral load engineering detail)
    const bracePoints = [
      new THREE.Vector3(-6, 0, 5.5),
      new THREE.Vector3(-6, 9.6, 5.5),
      new THREE.Vector3(6, 0, 5.5),
      new THREE.Vector3(-6, 0, 5.5),
    ];
    const braceGeo = new THREE.BufferGeometry().setFromPoints(bracePoints);
    const braceLine = new THREE.Line(braceGeo, materials.goldWireframe);
    buildingGroup.add(braceLine);

    // Initial orientation
    buildingGroup.rotation.y = Math.PI / 4;

    // 6. Animation loop
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);

      if (buildingGroupRef.current && !isHovered && !isDragging) {
        buildingGroupRef.current.rotation.y += 0.0035;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 7. Resize handler
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isHovered, isDragging]);

  // Update mode shaders/visibility
  useEffect(() => {
    if (!buildingGroupRef.current) return;

    buildingGroupRef.current.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        if (mode === "blueprint") {
          child.visible = child.material instanceof THREE.MeshBasicMaterial;
        } else if (mode === "structural") {
          child.visible = true;
          if (child.material instanceof THREE.MeshStandardMaterial) {
            child.material.wireframe = false;
          }
        } else if (mode === "solid") {
          child.visible = !(child.material instanceof THREE.MeshBasicMaterial);
          if (child.material instanceof THREE.MeshStandardMaterial) {
            child.material.wireframe = false;
          }
        }
      }
    });
  }, [mode]);

  // Interactive mouse controls
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    prevMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !buildingGroupRef.current) return;
    const deltaX = e.clientX - prevMousePos.current.x;
    const deltaY = e.clientY - prevMousePos.current.y;

    buildingGroupRef.current.rotation.y += deltaX * 0.008;
    buildingGroupRef.current.rotation.x = Math.max(
      -0.3,
      Math.min(0.6, buildingGroupRef.current.rotation.x + deltaY * 0.005)
    );

    prevMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`relative w-full aspect-[4/3] rounded-xs bg-[#f8f8f8] border border-black/10 overflow-hidden select-none ${className || ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsDragging(false);
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* 3D Canvas Container */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top HUD Display */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
        <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xs text-white font-PPFraktionMono text-[10px] uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-[#B9B36D] animate-ping" />
          <span>Structural BIM 3D</span>
        </div>

        {/* Mode Selector */}
        <div className="flex gap-1 bg-white/90 backdrop-blur-md p-1 border border-black/10 rounded-xs pointer-events-auto shadow-xs">
          {(
            [
              { id: "structural", label: "Analysis" },
              { id: "blueprint", label: "Wireframe" },
              { id: "solid", label: "Render" },
            ] as const
          ).map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMode(m.id)}
              className={`px-2.5 py-1 font-PPFraktionMono text-[10px] uppercase tracking-wider transition-colors rounded-xs cursor-pointer ${
                mode === m.id
                  ? "bg-black text-white"
                  : "bg-transparent text-black/70 hover:text-black"
              }`}
              suppressHydrationWarning
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Hint HUD */}
      <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center font-PPFraktionMono text-[10px] uppercase tracking-widest text-black/40 pointer-events-none">
        <span>Click &amp; Drag to rotate</span>
        <span className="hidden sm:inline">Calculated Load Paths: 48 Nodes</span>
      </div>
    </div>
  );
}
