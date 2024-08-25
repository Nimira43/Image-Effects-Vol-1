import * as THREE from 'three'

const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({
  color: 0xff4500,
})
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

const sizes = {
  width: 800,
  height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

camera.position.z = 3
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)

let time = Date.now()

const tick = () => {
  const currentTime = Date.now()
  const deltaTime = currentTime - time
  time = currentTime

  mesh.rotation.y += 0.003 * deltaTime

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()