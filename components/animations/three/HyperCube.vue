<template>
  <div id="webgl" :style="{ opacity: ready ? 1 : 0 }"></div>
</template>

<script>
export default {
  data() {
    return {
      ready: false
    }
  },
  async mounted() {
    const THREE = await import('three').then(m => m.default || m)
    const { OrbitControls } = await import(
      'three/examples/jsm/controls/OrbitControls.js' /* webpackChunkName: "gem" */
    ).then(m => m.default || m)

    // Canvas
    const container = document.getElementById('webgl')

    let group
    const particlesData = []
    let camera, scene, renderer
    let positions, colors
    let particles
    let pointCloud
    let particlePositions
    let linesMesh

    const maxParticleCount = 300
    const particleCount = 50
    const r = 777
    const rHalf = r / 2

    const effectController = {
      showDots: true,
      showLines: true,
      minDistance: 150,
      limitConnections: false,
      maxConnections: 20,
      particleCount: 50
    }

    // Settings
    const sizes = {
      width: 320,
      height: 320
    }

    // Colors
    const coloring = {
      edges: 0x00d9ff,
      particles: 0x00a6ff,
      lines: 0x00a6ff
    }

    // eslint-disable-next-line no-unused-vars
    const colorpicker = '#00d9ff'
    // const colorpicker = '#00ff8d'

    init()
    this.ready = true
    animate()

    function init() {
      camera = new THREE.PerspectiveCamera(
        45,
        sizes.width / sizes.height,
        1,
        4000
      )
      camera.position.z = 1750

      const controls = new OrbitControls(camera, container)
      controls.minDistance = 1000
      controls.maxDistance = 3000

      scene = new THREE.Scene()

      group = new THREE.Group()
      scene.add(group)

      const helper = new THREE.BoxHelper(
        new THREE.Mesh(new THREE.BoxGeometry(r, r, r))
      )
      helper.material.color.setHex(coloring.edges)
      helper.material.blending = THREE.AdditiveBlending
      helper.material.transparent = true
      group.add(helper)

      const segments = maxParticleCount * maxParticleCount

      positions = new Float32Array(segments * 3)
      colors = new Float32Array(segments * 3)

      const pMaterial = new THREE.PointsMaterial({
        color: coloring.particles,
        blending: THREE.AdditiveBlending,
        transparent: true,
        // sizeAttenuation: false,
        // size: 9,
        size: 42
      })

      particles = new THREE.BufferGeometry()
      particlePositions = new Float32Array(maxParticleCount * 3)

      for (let i = 0; i < maxParticleCount; i++) {
        const x = Math.random() * r - r / 2
        const y = Math.random() * r - r / 2
        const z = Math.random() * r - r / 2

        particlePositions[i * 3] = x
        particlePositions[i * 3 + 1] = y
        particlePositions[i * 3 + 2] = z

        // add it to the geometry
        particlesData.push({
          velocity: new THREE.Vector3(
            -1 + Math.random() * 2,
            -1 + Math.random() * 2,
            -1 + Math.random() * 2
          ),
          numConnections: 0
        })
      }

      particles.setDrawRange(0, particleCount)
      particles.setAttribute(
        'position',
        new THREE.BufferAttribute(particlePositions, 3).setUsage(
          THREE.DynamicDrawUsage
        )
      )

      // create the particle system
      pointCloud = new THREE.Points(particles, pMaterial)
      group.add(pointCloud)

      const geometry = new THREE.BufferGeometry()

      geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage)
      )
      geometry.setAttribute(
        'color',
        new THREE.BufferAttribute(colors, 3).setUsage(THREE.DynamicDrawUsage)
      )

      geometry.computeBoundingSphere()

      geometry.setDrawRange(0, 0)

      const material = new THREE.LineBasicMaterial({
        vertexColors: true,
        color: coloring.lines,
        blending: THREE.AdditiveBlending,
        transparent: true
      })

      linesMesh = new THREE.LineSegments(geometry, material)
      group.add(linesMesh)

      renderer = new THREE.WebGLRenderer({
        antialiasing: true,
        container,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(sizes.width, sizes.height)
      renderer.outputEncoding = THREE.sRGBEncoding

      container.appendChild(renderer.domElement)
    }

    function animate() {
      let vertexpos = 0
      let colorpos = 0
      let numConnected = 0

      for (let i = 0; i < particleCount; i++)
        particlesData[i].numConnections = 0

      for (let i = 0; i < particleCount; i++) {
        // get the particle
        const particleData = particlesData[i]

        particlePositions[i * 3] += particleData.velocity.x
        particlePositions[i * 3 + 1] += particleData.velocity.y
        particlePositions[i * 3 + 2] += particleData.velocity.z

        if (
          particlePositions[i * 3 + 1] < -rHalf ||
          particlePositions[i * 3 + 1] > rHalf
        )
          particleData.velocity.y = -particleData.velocity.y

        if (
          particlePositions[i * 3] < -rHalf ||
          particlePositions[i * 3] > rHalf
        )
          particleData.velocity.x = -particleData.velocity.x

        if (
          particlePositions[i * 3 + 2] < -rHalf ||
          particlePositions[i * 3 + 2] > rHalf
        )
          particleData.velocity.z = -particleData.velocity.z

        if (
          effectController.limitConnections &&
          particleData.numConnections >= effectController.maxConnections
        )
          continue

        // Check collision
        for (let j = i + 1; j < particleCount; j++) {
          const particleDataB = particlesData[j]
          if (
            effectController.limitConnections &&
            particleDataB.numConnections >= effectController.maxConnections
          )
            continue

          const dx = particlePositions[i * 3] - particlePositions[j * 3]
          const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1]
          const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2]
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (dist < effectController.minDistance) {
            particleData.numConnections++
            particleDataB.numConnections++

            const alpha = 1.0 - dist / effectController.minDistance

            positions[vertexpos++] = particlePositions[i * 3]
            positions[vertexpos++] = particlePositions[i * 3 + 1]
            positions[vertexpos++] = particlePositions[i * 3 + 2]

            positions[vertexpos++] = particlePositions[j * 3]
            positions[vertexpos++] = particlePositions[j * 3 + 1]
            positions[vertexpos++] = particlePositions[j * 3 + 2]

            colors[colorpos++] = alpha
            colors[colorpos++] = alpha
            colors[colorpos++] = alpha

            colors[colorpos++] = alpha
            colors[colorpos++] = alpha
            colors[colorpos++] = alpha

            numConnected++
          }
        }
      }

      linesMesh.geometry.setDrawRange(0, numConnected * 2)
      linesMesh.geometry.attributes.position.needsUpdate = true
      linesMesh.geometry.attributes.color.needsUpdate = true

      pointCloud.geometry.attributes.position.needsUpdate = true

      requestAnimationFrame(animate)

      render()
    }

    function render() {
      const time = Date.now() * 0.001

      group.rotation.y = time * 0.1
      renderer.render(scene, camera)
    }
  }
}
</script>

<style scoped>
#webgl {
  outline: none;
  width: 320px;
  height: 320px;
  opacity: 0;
  transition: opacity 1s ease;
}
</style>
