import * as THREE from 'three'
import Disco from './Disco.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Camera {

    constructor() {
        this.disco = new Disco()
        this.debug = this.disco.debug
        this.sizes = this.disco.sizes
        this.scene = this.disco.scene
        this.canvas = this.disco.canvas

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('camera')
        }

        this.setInstance()
        this.setOrbitControls()
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(
            35,
            this.sizes.width / this.sizes.height,
            0.1,
            100
        )
        this.instance.position.set(10, -5, 20)
    
        this.scene.add(this.instance)

        // this.instance.target.position.x = -0.75
        // this.instance.target.position.y = 2
        // this.instance.target.position.z = 0

        // this.instance.lookAt(target)

        // this.scene.add(this.instance.target)

        if(this.debug.active)
        {
            this.debugFolder
                .add(this.instance.position, 'x')
                .name('cameraX')
                .min(-10)
                .max(100)
                .step(0.1)
            
            this.debugFolder
                .add(this.instance.position, 'y')
                .name('cameraY')
                .min(-50)
                .max(10)
                .step(0.1)
            
            this.debugFolder
                .add(this.instance.position, 'z')
                .name('cameraZ')
                .min(-10)
                .max(100)
                .step(0.1)

            // this.debugFolder
            // .add(this.instance.target, 'x')
            // .name('lookAtX')
            // .min(-10)
            // .max(10)
            // .step(0.1)

            // this.debugFolder
            // .add(this.instance.target, 'y')
            // .name('lookAtY')
            // .min(-10)
            // .max(10)
            // .step(0.1)

            // this.debugFolder
            // .add(this.instance.target, 'z')
            // .name('lookAtZ')
            // .min(-10)
            // .max(10)
            // .step(0.1)
        }

    }

    setOrbitControls() {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
    }

    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update() {
        this.controls.update()
    }
}