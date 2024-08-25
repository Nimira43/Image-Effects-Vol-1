import * as THREE from 'three'
import './style.css'

const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({
  color: 0xff4500,
  // wireframe: true
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// mesh.position.x = -2
// mesh.position.y = 1
// mesh.position.z = -5

mesh.position.set(0.4, 1, -1.3)
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
mesh.scale.set(0.4, 1, -1.3)

mesh.rotation.reorder('ZXY')
mesh.rotation.x = Math.PI * 0.75
mesh.rotation.y = Math.PI * 0.75
mesh.rotation.z = Math.PI * -0.25
// mesh.rotation.set(0.4, 1, -1.3)

const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

const sizes = {
  width: 800,
  height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

camera.position.z = 3
camera.position.y = -0.51
camera.position.x = -1
scene.add(camera)
camera.lookAt(mesh.position)

const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)