import * as THREE from 'three'
import './style.css'

const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()

const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({
    color: 0xff4500
  })
)
group.add(cube1)
cube1.position.x = -1
cube1.position.y = 1.25
cube1.position.z = -3
cube1.rotation.x = -1.5
cube1.rotation.y = 2.75
cube1.rotation.z = -5.75

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({
    color: 0x87ceeb
  })
)
group.add(cube2)
cube2.position.x = -1.5
cube2.position.y = -1.5
cube2.position.z = -1.5
cube2.rotation.x = 1.5
cube2.rotation.y = -1.75
cube2.rotation.z = -0.75

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({
    color: 0xccff88
  })
)
group.add(cube3)
cube3.position.x = 1
cube3.position.y = 1
cube3.position.z = 1
cube3.rotation.x = -1.5
cube3.rotation.y = 1.75
cube3.rotation.z = -2.75

const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

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
renderer.render(scene, camera)