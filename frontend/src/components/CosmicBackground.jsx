import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/*
 * Professional Persistent 3D Developer Workspace & Dual-Theme Cosmic System
 * 
 * Architecture & Features:
 * 1. Persistent 3D Developer Workstation:
 *    - Precision Laptop Chassis (Base, Key Deck, 115° Open Display Bezel, Trackpad)
 *    - Active Code Editor Screen (Sharp CanvasTexture with IDE syntax highlighting & terminal)
 *    - Floating Glass Developer UI Panels (Git status & Full-Stack API metrics)
 *    - Ergonomic Precision Mouse with glowing LED
 *    - Floating 3D Network/Code Nodes
 *    - Circular Cybernetic Pedestal
 * 2. Reversible 1234321 Scroll-State Engine:
 *    Hero (1) -> Featured (2) -> About (3) -> Skills (4) -> Projects (3) ->
 *    Journey (2) -> Education (1) -> Hackathon (2) -> Achievements (3) ->
 *    Resume (2) -> Contact (1)
 *    - Measured directly from real DOM section positions for responsive layout fidelity.
 *    - Never completely disappears; smoothly transitions, rotates, and shifts perspective.
 * 3. Section-Dependent Dual-Theme Ambient Lighting:
 *    - Dark Mode: Deep obsidian/navy with sky/cyan rim lights and subtle violet haze.
 *    - Light Mode: Layered colorful ambient studio lighting (soft blue, cyan, lavender, indigo).
 * 4. Smooth Damped Mouse Parallax & Normalized Scroll Interpolation
 * 5. Adaptive Hardware Quality Tiers & Page Visibility API
 */

// Generate crisp IDE code editor screen texture
function createScreenTexture(isDark = true) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  // IDE Background
  ctx.fillStyle = isDark ? '#090d16' : '#ffffff';
  ctx.fillRect(0, 0, 1024, 640);

  // Top Title Bar & Window Controls
  ctx.fillStyle = isDark ? '#0f172a' : '#f1f5f9';
  ctx.fillRect(0, 0, 1024, 48);

  // Mac Window Controls
  const buttonColors = ['#ef4444', '#f59e0b', '#22c55e'];
  buttonColors.forEach((color, i) => {
    ctx.beginPath();
    ctx.arc(28 + i * 22, 24, 6, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  });

  // Active File Tab
  ctx.fillStyle = isDark ? '#1e293b' : '#e2e8f0';
  ctx.roundRect(100, 10, 220, 38, [6, 6, 0, 0]);
  ctx.fill();

  ctx.font = 'bold 15px "JetBrains Mono", Menlo, monospace';
  ctx.fillStyle = isDark ? '#38bdf8' : '#0284c7';
  ctx.fillText('App.tsx — Ansh Kapoor', 118, 34);

  // Code Gutter
  ctx.fillStyle = isDark ? '#0b1120' : '#f8fafc';
  ctx.fillRect(0, 48, 56, 440);

  ctx.font = '14px "JetBrains Mono", Menlo, monospace';
  ctx.fillStyle = isDark ? '#475569' : '#94a3b8';
  for (let i = 1; i <= 14; i++) {
    ctx.fillText(`${i}`, 24, 80 + (i - 1) * 26);
  }

  // Syntax Highlighted TypeScript Lines
  const codeLines = [
    { text: 'import', color: isDark ? '#c084fc' : '#9333ea', x: 74, y: 80 },
    { text: ' { createPortfolio } ', color: isDark ? '#f8fafc' : '#0f172a', x: 135, y: 80 },
    { text: 'from', color: isDark ? '#c084fc' : '#9333ea', x: 310, y: 80 },
    { text: " '@ansh/developer';", color: isDark ? '#34d399' : '#059669', x: 355, y: 80 },

    { text: 'const', color: isDark ? '#38bdf8' : '#0284c7', x: 74, y: 106 },
    { text: ' anshProfile = {', color: isDark ? '#f8fafc' : '#0f172a', x: 122, y: 106 },

    { text: "  name: 'Ansh Kapoor',", color: isDark ? '#38bdf8' : '#0284c7', x: 74, y: 132 },
    { text: "  role: 'Full-Stack Developer',", color: isDark ? '#38bdf8' : '#0284c7', x: 74, y: 158 },
    { text: "  education: 'B.Tech CSE @ JMIT',", color: isDark ? '#fbbf24' : '#d97706', x: 74, y: 184 },
    { text: "  stack: ['React', 'Node.js', 'C++', 'MongoDB'],", color: isDark ? '#34d399' : '#059669', x: 74, y: 210 },
    { text: '  status: ', color: isDark ? '#f8fafc' : '#0f172a', x: 74, y: 236 },
    { text: "'Building High-Performance Software',", color: isDark ? '#38bdf8' : '#0284c7', x: 145, y: 236 },
    { text: '};', color: isDark ? '#f8fafc' : '#0f172a', x: 74, y: 262 },

    { text: 'export default', color: isDark ? '#c084fc' : '#9333ea', x: 74, y: 314 },
    { text: ' createPortfolio(anshProfile);', color: isDark ? '#60a5fa' : '#2563eb', x: 200, y: 314 },
  ];

  codeLines.forEach((line) => {
    ctx.fillStyle = line.color;
    ctx.fillText(line.text, line.x, line.y);
  });

  // Integrated Terminal at Bottom
  ctx.fillStyle = isDark ? '#020617' : '#f1f5f9';
  ctx.fillRect(0, 488, 1024, 152);

  ctx.strokeStyle = isDark ? '#1e293b' : '#cbd5e1';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, 488);
  ctx.lineTo(1024, 488);
  ctx.stroke();

  ctx.font = 'bold 13px "JetBrains Mono", Menlo, monospace';
  ctx.fillStyle = isDark ? '#94a3b8' : '#475569';
  ctx.fillText('TERMINAL — vite v5.4 dev server', 24, 514);

  ctx.font = '13px "JetBrains Mono", Menlo, monospace';
  ctx.fillStyle = isDark ? '#22c55e' : '#16a34a';
  ctx.fillText('➜  Local:   http://localhost:5173/', 24, 545);
  ctx.fillStyle = isDark ? '#38bdf8' : '#0284c7';
  ctx.fillText('✓  Compiled 424 modules successfully · 0 errors', 24, 574);
  ctx.fillStyle = isDark ? '#e2e8f0' : '#1e293b';
  ctx.fillText('⚡ System Status: Active · 3D Workspace Online', 24, 603);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  texture.minFilter = THREE.LinearFilter;
  return texture;
}

// Generate UI badge texture for floating developer panels
function createUIPanelTexture(title, subtitle, accentColor, isDark = true) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  // Glass Card Background
  ctx.fillStyle = isDark ? 'rgba(15, 23, 42, 0.88)' : 'rgba(255, 255, 255, 0.92)';
  ctx.roundRect(10, 10, 492, 236, 16);
  ctx.fill();

  ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)';
  ctx.lineWidth = 4;
  ctx.roundRect(10, 10, 492, 236, 16);
  ctx.stroke();

  // Accent Dot
  ctx.beginPath();
  ctx.arc(45, 55, 12, 0, Math.PI * 2);
  ctx.fillStyle = accentColor;
  ctx.fill();

  // Title
  ctx.font = 'bold 26px "Inter", sans-serif';
  ctx.fillStyle = isDark ? '#f8fafc' : '#0f172a';
  ctx.fillText(title, 72, 64);

  // Subtitle / Metrics
  ctx.font = '19px "JetBrains Mono", monospace';
  ctx.fillStyle = isDark ? '#94a3b8' : '#475569';
  ctx.fillText(subtitle, 45, 130);

  // Progress Bar
  ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)';
  ctx.roundRect(45, 165, 420, 24, 8);
  ctx.fill();

  ctx.fillStyle = accentColor;
  ctx.roundRect(45, 165, 335, 24, 8);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// Generate circular star sprite texture
function createParticleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.25, 'rgba(255, 255, 255, 0.8)');
  gradient.addColorStop(0.55, 'rgba(56, 189, 248, 0.3)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(32, 32, 32, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch {
    return false;
  }
}

export default function CosmicBackground({ theme = 'dark' }) {
  const containerRef = useRef(null);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    if (!isWebGLAvailable()) {
      setWebGLSupported(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // ── 1. Hardware Quality Detection ──
    const width = window.innerWidth;
    const isMobile = width < 768 || /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    const cores = navigator.hardwareConcurrency || 4;

    let qualityTier = 'high';
    if (isMobile || width < 600 || cores <= 2) {
      qualityTier = 'low';
    } else if (width < 1024 || cores <= 4) {
      qualityTier = 'medium';
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDarkMode = theme !== 'light';

    // ── 2. Scene, Camera & WebGL Renderer ──
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      52,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 13.5);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: qualityTier === 'high',
        powerPreference: 'high-performance',
      });
    } catch {
      setWebGLSupported(false);
      return;
    }

    const maxPixelRatio = isMobile ? 1.2 : 1.5;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxPixelRatio));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = isDarkMode ? 1.15 : 1.05;
    container.appendChild(renderer.domElement);

    const disposables = {
      geometries: [],
      materials: [],
      textures: [],
    };

    // ── 3. Theme-Aware PBR Lighting System ──
    const ambientLight = new THREE.AmbientLight(
      isDarkMode ? 0x0f172a : 0xf8fafc,
      isDarkMode ? 1.6 : 2.5
    );
    scene.add(ambientLight);

    // Key Light (Soft Studio Key)
    const keyLight = new THREE.DirectionalLight(
      isDarkMode ? 0xffffff : 0xffffff,
      isDarkMode ? 2.6 : 3.2
    );
    keyLight.position.set(5, 8, 7);
    scene.add(keyLight);

    // Fill Light (Deep Blue in Dark, Soft Sky in Light)
    const fillLight = new THREE.PointLight(
      isDarkMode ? 0x0055ff : 0x93c5fd,
      isDarkMode ? 3.0 : 2.0,
      28
    );
    fillLight.position.set(-6, 2, 5);
    scene.add(fillLight);

    // Rim / Back Light (Electric Cyan in Dark, Lavender/Cyan in Light)
    const rimLight = new THREE.PointLight(
      isDarkMode ? 0x00f0ff : 0x7dd3fc,
      isDarkMode ? 4.0 : 2.5,
      22
    );
    rimLight.position.set(6, -2, -2);
    scene.add(rimLight);

    // ── 4. 3D Developer Workspace Model Construction ──
    const workspaceGroup = new THREE.Group();

    // Material definitions
    const aluminumMaterial = new THREE.MeshStandardMaterial({
      color: isDarkMode ? 0x1e293b : 0xe2e8f0,
      metalness: isDarkMode ? 0.9 : 0.8,
      roughness: isDarkMode ? 0.25 : 0.35,
    });
    disposables.materials.push(aluminumMaterial);

    const darkTrimMaterial = new THREE.MeshStandardMaterial({
      color: isDarkMode ? 0x090d16 : 0xcbd5e1,
      metalness: 0.85,
      roughness: 0.3,
    });
    disposables.materials.push(darkTrimMaterial);

    const keyboardBaseMaterial = new THREE.MeshStandardMaterial({
      color: isDarkMode ? 0x0f172a : 0xf1f5f9,
      metalness: 0.5,
      roughness: 0.5,
    });
    disposables.materials.push(keyboardBaseMaterial);

    const keyCapMaterial = new THREE.MeshStandardMaterial({
      color: isDarkMode ? 0x1e293b : 0xffffff,
      metalness: 0.3,
      roughness: 0.4,
    });
    disposables.materials.push(keyCapMaterial);

    const ledGlowMaterial = new THREE.MeshBasicMaterial({
      color: isDarkMode ? 0x00f0ff : 0x0284c7,
    });
    disposables.materials.push(ledGlowMaterial);

    // A. LAPTOP BASE / CHASSIS
    const laptopBaseGeo = new THREE.BoxGeometry(4.8, 0.22, 3.4);
    disposables.geometries.push(laptopBaseGeo);
    const laptopBase = new THREE.Mesh(laptopBaseGeo, aluminumMaterial);
    laptopBase.position.set(0, -0.6, 0);
    workspaceGroup.add(laptopBase);

    // Trackpad
    const trackpadGeo = new THREE.BoxGeometry(1.6, 0.02, 1.1);
    disposables.geometries.push(trackpadGeo);
    const trackpad = new THREE.Mesh(trackpadGeo, darkTrimMaterial);
    trackpad.position.set(0, -0.48, 0.95);
    workspaceGroup.add(trackpad);

    // Keyboard Area Deck
    const keyDeckGeo = new THREE.BoxGeometry(4.2, 0.02, 1.8);
    disposables.geometries.push(keyDeckGeo);
    const keyDeck = new THREE.Mesh(keyDeckGeo, keyboardBaseMaterial);
    keyDeck.position.set(0, -0.48, -0.45);
    workspaceGroup.add(keyDeck);

    // Key Rows
    const keyRows = 5;
    const keyCols = 12;
    const keyBoxGeo = new THREE.BoxGeometry(0.28, 0.05, 0.25);
    disposables.geometries.push(keyBoxGeo);

    for (let r = 0; r < keyRows; r++) {
      for (let c = 0; c < keyCols; c++) {
        const key = new THREE.Mesh(keyBoxGeo, keyCapMaterial);
        key.position.set(-1.7 + c * 0.31, -0.45, -1.1 + r * 0.32);
        workspaceGroup.add(key);
      }
    }

    // B. LAPTOP OPEN SCREEN DISPLAY (Angled at 115 degrees)
    const screenHinge = new THREE.Group();
    screenHinge.position.set(0, -0.48, -1.65);
    screenHinge.rotation.x = -0.38;

    const lidGeo = new THREE.BoxGeometry(4.8, 3.2, 0.15);
    disposables.geometries.push(lidGeo);
    const lid = new THREE.Mesh(lidGeo, aluminumMaterial);
    lid.position.set(0, 1.6, 0);
    screenHinge.add(lid);

    const logoGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.02, 24);
    disposables.geometries.push(logoGeo);
    const logoMesh = new THREE.Mesh(logoGeo, ledGlowMaterial);
    logoMesh.rotation.x = Math.PI / 2;
    logoMesh.position.set(0, 1.6, -0.09);
    screenHinge.add(logoMesh);

    const screenFrameGeo = new THREE.BoxGeometry(4.55, 2.95, 0.02);
    disposables.geometries.push(screenFrameGeo);
    const screenFrame = new THREE.Mesh(screenFrameGeo, darkTrimMaterial);
    screenFrame.position.set(0, 1.6, 0.08);
    screenHinge.add(screenFrame);

    const screenTexture = createScreenTexture(isDarkMode);
    if (screenTexture) disposables.textures.push(screenTexture);

    const displayMat = new THREE.MeshBasicMaterial({ map: screenTexture });
    disposables.materials.push(displayMat);

    const displayGeo = new THREE.PlaneGeometry(4.35, 2.75);
    disposables.geometries.push(displayGeo);
    const displayMesh = new THREE.Mesh(displayGeo, displayMat);
    displayMesh.position.set(0, 1.6, 0.1);
    screenHinge.add(displayMesh);

    const displayGlow = new THREE.PointLight(
      isDarkMode ? 0x00f0ff : 0x0284c7,
      isDarkMode ? 1.5 : 0.9,
      6
    );
    displayGlow.position.set(0, 1.6, 0.6);
    screenHinge.add(displayGlow);

    workspaceGroup.add(screenHinge);

    // C. PRECISION MOUSE
    const mouseGeo = new THREE.CapsuleGeometry(0.42, 0.65, 12, 16);
    disposables.geometries.push(mouseGeo);
    const mouseMesh = new THREE.Mesh(mouseGeo, aluminumMaterial);
    mouseMesh.rotation.x = Math.PI / 2;
    mouseMesh.position.set(3.4, -0.55, 0.3);
    workspaceGroup.add(mouseMesh);

    const mouseLedGeo = new THREE.BoxGeometry(0.06, 0.02, 0.5);
    disposables.geometries.push(mouseLedGeo);
    const mouseLed = new THREE.Mesh(mouseLedGeo, ledGlowMaterial);
    mouseLed.position.set(3.4, -0.32, 0.3);
    workspaceGroup.add(mouseLed);

    // D. FLOATING GLASS DEVELOPER UI PANELS
    const panel1Tex = createUIPanelTexture('Git Branch: main', '⚡ Commit: clean build · 0 errors', '#22c55e', isDarkMode);
    const panel2Tex = createUIPanelTexture('Full-Stack React + Node', '✦ API Response: 200 OK · 24ms', '#38bdf8', isDarkMode);
    if (panel1Tex) disposables.textures.push(panel1Tex);
    if (panel2Tex) disposables.textures.push(panel2Tex);

    const panelGeo = new THREE.PlaneGeometry(2.4, 1.2);
    disposables.geometries.push(panelGeo);

    const panel1Mat = new THREE.MeshBasicMaterial({
      map: panel1Tex,
      transparent: true,
      opacity: isDarkMode ? 0.88 : 0.82,
    });
    disposables.materials.push(panel1Mat);
    const panel1 = new THREE.Mesh(panelGeo, panel1Mat);
    panel1.position.set(-3.2, 1.8, 1.2);
    panel1.rotation.y = 0.32;
    workspaceGroup.add(panel1);

    const panel2Mat = new THREE.MeshBasicMaterial({
      map: panel2Tex,
      transparent: true,
      opacity: isDarkMode ? 0.88 : 0.82,
    });
    disposables.materials.push(panel2Mat);
    const panel2 = new THREE.Mesh(panelGeo, panel2Mat);
    panel2.position.set(3.6, 2.2, -0.4);
    panel2.rotation.y = -0.35;
    workspaceGroup.add(panel2);

    // E. 3D NETWORK NODES
    const nodeCount = qualityTier === 'high' ? 32 : 16;
    const nodeGeo = new THREE.BufferGeometry();
    const nodePos = new Float32Array(nodeCount * 3);
    for (let i = 0; i < nodeCount; i++) {
      nodePos[i * 3] = (Math.random() - 0.5) * 8.5;
      nodePos[i * 3 + 1] = Math.random() * 4.5 + 0.4;
      nodePos[i * 3 + 2] = (Math.random() - 0.5) * 6.5;
    }
    nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePos, 3));
    disposables.geometries.push(nodeGeo);

    const nodeMat = new THREE.PointsMaterial({
      size: 0.22,
      color: isDarkMode ? 0x00f0ff : 0x0284c7,
      transparent: true,
      opacity: 0.75,
    });
    disposables.materials.push(nodeMat);
    const nodeCluster = new THREE.Points(nodeGeo, nodeMat);
    workspaceGroup.add(nodeCluster);

    // F. SUBTLE PEDESTAL
    const pedestalGeo = new THREE.RingGeometry(3.5, 5.5, 32);
    disposables.geometries.push(pedestalGeo);
    const pedestalMat = new THREE.MeshBasicMaterial({
      color: isDarkMode ? 0x0055ff : 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: isDarkMode ? 0.12 : 0.08,
      side: THREE.DoubleSide,
    });
    disposables.materials.push(pedestalMat);
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.rotation.x = Math.PI / 2;
    pedestal.position.set(0, -0.75, 0);
    workspaceGroup.add(pedestal);

    scene.add(workspaceGroup);

    // ── 5. Restrained Atmospheric Cosmic Starfield ──
    const starTexture = createParticleTexture();
    if (starTexture) disposables.textures.push(starTexture);

    const starCount = qualityTier === 'high' ? 700 : qualityTier === 'medium' ? 380 : 160;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starCols = new Float32Array(starCount * 3);

    const starColors = isDarkMode
      ? [
          new THREE.Color(0x00ADB5),
          new THREE.Color(0x6B2352),
          new THREE.Color(0xA55778),
          new THREE.Color(0xEEEEEE),
        ]
      : [
          new THREE.Color(0xcbd5e1),
          new THREE.Color(0x93c5fd),
          new THREE.Color(0x7dd3fc),
          new THREE.Color(0xc4b5fd),
        ];

    for (let i = 0; i < starCount; i++) {
      starPos[i * 3] = (Math.random() - 0.5) * 80;
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 80;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 50 - 20;

      const col = starColors[i % starColors.length];
      starCols[i * 3] = col.r;
      starCols[i * 3 + 1] = col.g;
      starCols[i * 3 + 2] = col.b;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starCols, 3));
    disposables.geometries.push(starGeo);

    const starMat = new THREE.PointsMaterial({
      size: qualityTier === 'high' ? 0.32 : 0.38,
      vertexColors: true,
      transparent: true,
      opacity: isDarkMode ? 0.45 : 0.15,
      map: starTexture,
      blending: isDarkMode ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite: false,
    });
    disposables.materials.push(starMat);
    const starfield = new THREE.Points(starGeo, starMat);
    scene.add(starfield);

    // ── 5.5 Premium Glass Bubbles (Light Mode Only) ──
    const bubbleGroup = new THREE.Group();
    scene.add(bubbleGroup);
    
    let bubbleMesh = null;
    const bubbleData = [];
    
    // ── 5.5 Premium Glass Bubbles (Both Modes) ──
    const bubbleCount = qualityTier === 'high' ? 65 : (qualityTier === 'medium' ? 35 : 15);
    const sphereGeo = new THREE.SphereGeometry(1, 32, 32);
    
    // Optimized Standard Material (Beautiful but extremely fast, guarantees 60fps)
    const bubbleMat = new THREE.MeshStandardMaterial({
      roughness: 0.15,
      metalness: 0.25,
      transparent: true,
      opacity: isDarkMode ? 0.35 : 0.45,
    });
    
    disposables.geometries.push(sphereGeo);
    disposables.materials.push(bubbleMat);
    
    bubbleMesh = new THREE.InstancedMesh(sphereGeo, bubbleMat, bubbleCount);
    bubbleMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    
    const customPalette = isDarkMode
      ? [
          new THREE.Color(0x00ADB5), // Teal
          new THREE.Color(0x6B2352), // Magenta
          new THREE.Color(0xA55778), // Mauve
          new THREE.Color(0x00f0ff), // Cyan glow
          new THREE.Color(0x0f172a), // Navy slate
        ]
      : [
          new THREE.Color(0x35A7FF), // Bright Blue
          new THREE.Color(0x8BEAF8), // Light Cyan
          new THREE.Color(0xDCF8B2), // Pale Lime
          new THREE.Color(0xC1F2C6), // Pale Mint
          new THREE.Color(0xFFE4F3), // Soft Pink
        ];
    
    const dummy = new THREE.Object3D();
    
    for (let i = 0; i < bubbleCount; i++) {
      let x, y, z;
      do {
         x = (Math.random() - 0.5) * 50;
         y = (Math.random() - 0.5) * 35;
         z = (Math.random() - 0.5) * 40 - 10;
      } while (Math.abs(x) < 6.0 && Math.abs(y) < 5.0 && z > -15); // Wider center safe zone so text is readable
      
      const scale = Math.random() * 2.2 + 0.3; // Much wider variety of sizes
      const depthLayer = Math.random();
      const parallaxFactor = depthLayer > 0.7 ? 1.8 : (depthLayer > 0.3 ? 0.9 : 0.4);
      const floatSpeed = Math.random() * 0.5 + 0.1;
      const phase = Math.random() * Math.PI * 2;
      
      bubbleData.push({ x, y, z, scale, parallaxFactor, floatSpeed, phase });
      
      dummy.position.set(x, y, z);
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      bubbleMesh.setMatrixAt(i, dummy.matrix);
      bubbleMesh.setColorAt(i, customPalette[i % customPalette.length]);
    }
    
    bubbleMesh.instanceMatrix.needsUpdate = true;
    if (bubbleMesh.instanceColor) bubbleMesh.instanceColor.needsUpdate = true;
    bubbleGroup.add(bubbleMesh);

    // ── 6. Exact 1234321 Reversible State Mapping Definitions ──
    const isSmallScreen = width < 768;
    const isMediumScreen = width >= 768 && width < 1200;

    // 4 Distinct State Parameter Presets
    const STATE_PRESETS = {
      1: { // State 1: Hero / Education / Contact (Prominent, front/3-quarter, closest)
        pos: isSmallScreen ? [0.0, 1.4, -2.0] : (isMediumScreen ? [2.8, -0.15, -0.4] : [3.8, -0.1, 0.0]),
        rot: [-0.05, -0.28, 0.0],
        scale: isSmallScreen ? 0.65 : (isMediumScreen ? 0.85 : 1.0),
        camZ: 13.5,
        panelOpacity: 0.88,
        panel1Offset: [-3.2, 1.8, 1.2],
        panel2Offset: [3.6, 2.2, -0.4],
        displayGlow: 1.6,
      },
      2: { // State 2: Featured Work / Journey / Hackathon / Resume (Slightly farther, tilted)
        pos: isSmallScreen ? [0.0, 1.0, -2.8] : (isMediumScreen ? [2.3, -0.35, -1.2] : [3.2, -0.35, -1.0]),
        rot: [0.08, -0.42, 0.02],
        scale: isSmallScreen ? 0.58 : (isMediumScreen ? 0.78 : 0.92),
        camZ: 14.0,
        panelOpacity: 0.78,
        panel1Offset: [-3.5, 1.9, 1.0],
        panel2Offset: [3.8, 2.3, -0.6],
        displayGlow: 1.8,
      },
      3: { // State 3: About / Projects / Achievements (Deeper in Z, angular 3/4 perspective)
        pos: isSmallScreen ? [0.0, 0.7, -3.4] : (isMediumScreen ? [1.8, 0.1, -2.2] : [2.4, 0.15, -2.2]),
        rot: [0.14, -0.65, 0.04],
        scale: isSmallScreen ? 0.52 : (isMediumScreen ? 0.72 : 0.85),
        camZ: 14.6,
        panelOpacity: 0.65,
        panel1Offset: [-3.8, 2.1, 0.8],
        panel2Offset: [4.2, 2.5, -0.9],
        displayGlow: 1.4,
      },
      4: { // State 4: Skills (Peak Transformation: Centered/elevated, monitor & floating panels bloom)
        pos: isSmallScreen ? [0.0, 0.4, -3.8] : (isMediumScreen ? [0.0, 0.3, -3.0] : [0.0, 0.35, -2.8]),
        rot: [0.20, -0.10, 0.0],
        scale: isSmallScreen ? 0.48 : (isMediumScreen ? 0.68 : 0.80),
        camZ: 15.0,
        panelOpacity: 0.95,
        panel1Offset: [-4.6, 2.3, 1.5],
        panel2Offset: [4.8, 2.6, 0.2],
        displayGlow: 2.2,
      },
    };


    // 11 Continuous Checkpoints corresponding to the 10 homepage sections
    // Sequence: 1 -> 2 -> 3 -> 4 -> 3 -> 2 -> 1 -> 2 -> 3 -> 2 -> 1
    const CHECKPOINT_DEFINITIONS = isDarkMode ? [
      { state: 1, selector: '#home .hero', lightFill: 0x6B2352, lightRim: 0x00ADB5 },          // 0: Hero
      { state: 2, selector: '#home .home-section', lightFill: 0x351C35, lightRim: 0xA55778 },  // 1: Featured Work
      { state: 3, selector: '#about', lightFill: 0x00ADB5, lightRim: 0x6B2352 },               // 2: About
      { state: 4, selector: '#skills', lightFill: 0xA55778, lightRim: 0x351C35 },              // 3: Skills (Peak)
      { state: 3, selector: '#projects', lightFill: 0x6B2352, lightRim: 0x00ADB5 },            // 4: Projects
      { state: 2, selector: '#journey', lightFill: 0x351C35, lightRim: 0xA55778 },             // 5: Journey
      { state: 1, selector: '#education', lightFill: 0x00ADB5, lightRim: 0x6B2352 },           // 6: Education
      { state: 2, selector: '#hackathon', lightFill: 0xA55778, lightRim: 0x351C35 },           // 7: Hackathon
      { state: 3, selector: '#achievements', lightFill: 0x6B2352, lightRim: 0x00ADB5 },        // 8: Achievements
      { state: 2, selector: '#resume', lightFill: 0x351C35, lightRim: 0xA55778 },              // 9: Resume
      { state: 1, selector: '#contact', lightFill: 0x00ADB5, lightRim: 0x6B2352 },             // 10: Contact
    ] : [
      { state: 1, selector: '#home .hero', lightFill: 0x35A7FF, lightRim: 0x8BEAF8 },          // 0: Hero
      { state: 2, selector: '#home .home-section', lightFill: 0x8BEAF8, lightRim: 0xC1F2C6 },  // 1: Featured Work
      { state: 3, selector: '#about', lightFill: 0xC1F2C6, lightRim: 0xDCF8B2 },               // 2: About
      { state: 4, selector: '#skills', lightFill: 0xDCF8B2, lightRim: 0x35A7FF },              // 3: Skills (Peak)
      { state: 3, selector: '#projects', lightFill: 0x8BEAF8, lightRim: 0x35A7FF },            // 4: Projects
      { state: 2, selector: '#journey', lightFill: 0x35A7FF, lightRim: 0xC1F2C6 },             // 5: Journey
      { state: 1, selector: '#education', lightFill: 0xDCF8B2, lightRim: 0x8BEAF8 },           // 6: Education
      { state: 2, selector: '#hackathon', lightFill: 0x8BEAF8, lightRim: 0xC1F2C6 },           // 7: Hackathon
      { state: 3, selector: '#achievements', lightFill: 0x35A7FF, lightRim: 0xDCF8B2 },        // 8: Achievements
      { state: 2, selector: '#resume', lightFill: 0xC1F2C6, lightRim: 0x8BEAF8 },              // 9: Resume
      { state: 1, selector: '#contact', lightFill: 0x35A7FF, lightRim: 0xDCF8B2 },             // 10: Contact
    ];

    // Helper: calculate continuous fractional scroll index across checkpoints
    function getScrollCheckpointProgress() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const targetCenter = scrollY + windowHeight * 0.45;

      const offsets = CHECKPOINT_DEFINITIONS.map((cp) => {
        const el = document.querySelector(cp.selector);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return rect.top + scrollY + rect.height * 0.35;
      });

      // If DOM elements aren't ready yet, fallback to document scroll fraction
      const validOffsets = offsets.filter((o) => o !== null);
      if (validOffsets.length < 4) {
        const maxScroll = Math.max(1, document.documentElement.scrollHeight - windowHeight);
        const norm = Math.min(1, Math.max(0, scrollY / maxScroll));
        return norm * (CHECKPOINT_DEFINITIONS.length - 1);
      }

      // Check if before first checkpoint
      if (targetCenter <= offsets[0]) return 0.0;

      // Find active interval
      for (let i = 0; i < offsets.length - 1; i++) {
        const start = offsets[i] ?? (i * (document.documentElement.scrollHeight / 11));
        const end = offsets[i + 1] ?? ((i + 1) * (document.documentElement.scrollHeight / 11));

        if (targetCenter >= start && targetCenter <= end) {
          const span = Math.max(1, end - start);
          const localFraction = (targetCenter - start) / span;
          return i + Math.min(1, Math.max(0, localFraction));
        }
      }

      return CHECKPOINT_DEFINITIONS.length - 1;
    }

    // ── 7. Mouse Parallax & Window Listeners ──
    const targetMouse = { x: 0, y: 0 };
    const currentMouse = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // ── 8. Page Visibility API ──
    let isTabVisible = !document.hidden;
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // ── 9. Render Loop with Exact 1234321 State Interpolation ──
    let animationFrameId;
    const clock = new THREE.Clock();
    const animDummy = new THREE.Object3D();

    // Current animated transform buffers for smooth lerping
    const curPos = new THREE.Vector3(...STATE_PRESETS[1].pos);
    const curRot = new THREE.Euler(...STATE_PRESETS[1].rot);
    let curScale = STATE_PRESETS[1].scale;
    let curCamZ = STATE_PRESETS[1].camZ;
    let curPanelOpacity = STATE_PRESETS[1].panelOpacity;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isTabVisible) return;

      const t = clock.getElapsedTime();

      if (prefersReducedMotion) {
        renderer.render(scene, camera);
        return;
      }

      // Smooth mouse damping
      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.035;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.035;

      // Continuous section mapping across the 11 checkpoints
      const fractionalProgress = getScrollCheckpointProgress();
      const lowerIdx = Math.floor(fractionalProgress);
      const upperIdx = Math.min(CHECKPOINT_DEFINITIONS.length - 1, lowerIdx + 1);
      const stepAlpha = fractionalProgress - lowerIdx;

      const lowerDef = CHECKPOINT_DEFINITIONS[lowerIdx];
      const upperDef = CHECKPOINT_DEFINITIONS[upperIdx];

      const lowerState = STATE_PRESETS[lowerDef.state];
      const upperState = STATE_PRESETS[upperDef.state];

      // Target position, rotation, scale, camera interpolation
      let targetPosX = THREE.MathUtils.lerp(lowerState.pos[0], upperState.pos[0], stepAlpha);
      let targetPosY = THREE.MathUtils.lerp(lowerState.pos[1], upperState.pos[1], stepAlpha);
      let targetPosZ = THREE.MathUtils.lerp(lowerState.pos[2], upperState.pos[2], stepAlpha);

      const targetRotX = THREE.MathUtils.lerp(lowerState.rot[0], upperState.rot[0], stepAlpha);
      const targetRotY = THREE.MathUtils.lerp(lowerState.rot[1], upperState.rot[1], stepAlpha);
      const targetRotZ = THREE.MathUtils.lerp(lowerState.rot[2], upperState.rot[2], stepAlpha);

      let targetScale = THREE.MathUtils.lerp(lowerState.scale, upperState.scale, stepAlpha);
      const targetCamZ = THREE.MathUtils.lerp(lowerState.camZ, upperState.camZ, stepAlpha);
      const targetPanelOpacity = THREE.MathUtils.lerp(lowerState.panelOpacity, upperState.panelOpacity, stepAlpha);

      // Target position, rotation, scale, camera interpolation

      // Lerp current values toward targets (smooth fluid continuous transition)
      const lerpSpeed = 0.06;
      curPos.x += (targetPosX - curPos.x) * lerpSpeed;
      curPos.y += (targetPosY - curPos.y) * lerpSpeed;
      curPos.z += (targetPosZ - curPos.z) * lerpSpeed;

      curRot.x += (targetRotX - curRot.x) * lerpSpeed;
      curRot.y += (targetRotY - curRot.y) * lerpSpeed;
      curRot.z += (targetRotZ - curRot.z) * lerpSpeed;

      curScale += (targetScale - curScale) * lerpSpeed;
      curCamZ += (targetCamZ - curCamZ) * lerpSpeed;
      curPanelOpacity += (targetPanelOpacity - curPanelOpacity) * lerpSpeed;

      // Subtle organic breathing idle
      const idleFloatY = Math.sin(t * 0.8) * 0.04;
      const idleFloatRot = Math.cos(t * 0.6) * 0.012;

      // Apply transforms to workspace group
      workspaceGroup.position.set(
        curPos.x + currentMouse.x * 0.15,
        curPos.y + idleFloatY + currentMouse.y * 0.12,
        curPos.z
      );

      workspaceGroup.rotation.set(
        curRot.x - currentMouse.y * 0.08,
        curRot.y + currentMouse.x * 0.12 + idleFloatRot,
        curRot.z
      );

      workspaceGroup.scale.setScalar(curScale);

      // Camera parallax & depth
      camera.position.x = currentMouse.x * 0.45;
      camera.position.y = currentMouse.y * 0.35;
      camera.position.z = curCamZ;
      camera.lookAt(0, 0, 0);

      // Starfield gentle cosmic drift
      starfield.rotation.y = t * 0.006 + fractionalProgress * 0.04;
      starfield.rotation.x = t * 0.003;

      // Pedestal slow rotation
      pedestal.rotation.z = t * 0.08;

      // Floating panels dynamic offset & opacity
      panel1Mat.opacity = curPanelOpacity * (isDarkMode ? 0.9 : 0.85);
      panel2Mat.opacity = curPanelOpacity * (isDarkMode ? 0.9 : 0.85);
      panel1.position.y = 1.8 + Math.sin(t * 1.1) * 0.06;
      panel2.position.y = 2.2 + Math.cos(t * 1.0) * 0.06;
      
      // Animate Glass Bubbles (Both Modes)
      if (bubbleMesh) {
        for (let i = 0; i < bubbleData.length; i++) {
          const b = bubbleData[i];
          const driftY = Math.sin(t * b.floatSpeed + b.phase) * 1.5;
          const driftX = Math.cos(t * b.floatSpeed * 0.8 + b.phase) * 0.5;
          const parallaxX = currentMouse.x * 3.0 * b.parallaxFactor;
          const parallaxY = currentMouse.y * 3.0 * b.parallaxFactor;
          const scrollParallaxY = fractionalProgress * 4.0 * b.parallaxFactor;
          
          animDummy.position.set(
            b.x + driftX + parallaxX, 
            b.y + driftY + parallaxY + scrollParallaxY, 
            b.z
          );
          animDummy.scale.setScalar(b.scale);
          animDummy.rotation.x = t * b.floatSpeed * 0.5;
          animDummy.rotation.y = t * b.floatSpeed * 0.3;
          animDummy.updateMatrix();
          bubbleMesh.setMatrixAt(i, animDummy.matrix);
        }
        bubbleMesh.instanceMatrix.needsUpdate = true;
      }

      // Dynamic Section-Dependent Ambient Lighting Shift
      if (lowerDef && upperDef) {
        const fillColA = new THREE.Color(lowerDef.lightFill);
        const fillColB = new THREE.Color(upperDef.lightFill);
        fillLight.color.lerpColors(fillColA, fillColB, stepAlpha);

        const rimColA = new THREE.Color(lowerDef.lightRim);
        const rimColB = new THREE.Color(upperDef.lightRim);
        rimLight.color.lerpColors(rimColA, rimColB, stepAlpha);
      }

      renderer.render(scene, camera);
    };

    animate();

    // ── 10. WebGL Context Loss & Clean Disposal ──
    const handleContextLost = (e) => {
      e.preventDefault();
      cancelAnimationFrame(animationFrameId);
    };
    const handleContextRestored = () => {
      animate();
    };

    const glCanvas = renderer.domElement;
    glCanvas.addEventListener('webglcontextlost', handleContextLost, false);
    glCanvas.addEventListener('webglcontextrestored', handleContextRestored, false);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      glCanvas.removeEventListener('webglcontextlost', handleContextLost);
      glCanvas.removeEventListener('webglcontextrestored', handleContextRestored);

      disposables.geometries.forEach((g) => g.dispose());
      disposables.materials.forEach((m) => m.dispose());
      disposables.textures.forEach((t) => t.dispose());

      if (renderer) {
        renderer.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
    };
  }, [theme]);

  if (!webGLSupported) {
    return <div className="cosmic-fallback-background" aria-hidden="true" />;
  }

  return (
    <div
      ref={containerRef}
      className="cosmic-background-container"
      aria-hidden="true"
    />
  );
}
