'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ParticleBackground() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    // Pitch black fog for high contrast
    scene.fog = new THREE.FogExp2(0x000000, 0.0015)

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    // Position for a "flight" view
    camera.position.set(0, 5, 20)
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    mountRef.current.appendChild(renderer.domElement)

    // Digital Landscape (Terrain)
    const geometry = new THREE.PlaneGeometry(100, 100, 40, 40)
    const count = geometry.attributes.position.count
    
    // Add randomness to vertices for terrain effect
    const positions = geometry.attributes.position.array as Float32Array
    for(let i = 0; i < count; i++) {
        positions[i * 3 + 2] = Math.random() * 2.5 // Z height variation
    }
    geometry.computeVertexNormals()

    // Wireframe Mesh for that "Tron" / Cyberpunk look
    const material = new THREE.MeshBasicMaterial({ 
        color: 0x00f3ff, // Neon Cyan
        wireframe: true,
        transparent: true,
        opacity: 0.3 
    })

    const terrain = new THREE.Mesh(geometry, material)
    terrain.rotation.x = -Math.PI / 2
    terrain.position.y = -5
    scene.add(terrain)

    // Second layer (Top grid/ceiling)
    const ceiling = terrain.clone()
    ceiling.position.y = 15
    scene.add(ceiling)

    // Particles "Data Stream" in the middle
    const particlesGeo = new THREE.BufferGeometry()
    const pCount = 1000
    const pPos = new Float32Array(pCount * 3)
    for(let i=0; i<pCount * 3; i++) {
        pPos[i] = (Math.random() - 0.5) * 60
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    const pMat = new THREE.PointsMaterial({
        color: 0xff00ff, // Neon Magenta for contrast
        size: 0.1,
        transparent: true,
        opacity: 0.8
    })
    const particles = new THREE.Points(particlesGeo, pMat)
    scene.add(particles)

    const clock = new THREE.Clock()

    const animate = () => {
      const time = clock.getElapsedTime()

      // Flight simulation movement
      terrain.position.z = (time * 5) % 10
      ceiling.position.z = (time * 5) % 10
      
      // Particles flowing
      particles.rotation.z = time * 0.1
      particles.position.z = (time * 8) % 20

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      particlesGeo.dispose()
      pMat.dispose()
    }
  }, [])

  return <div ref={mountRef} className="fixed inset-0 -z-10 bg-black" />
}
