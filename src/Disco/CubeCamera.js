import * as THREE from 'three'
import Disco from './Disco.js'

export default class CubeCamera {

    constructor(){
        this.disco = new Disco()
        this.scene = this.disco.scene
        this.renderer = this.disco.renderer

        this.setTextures()
        this.setInstance()
    }

    setTextures(){
        this.cubeRenderTarget = new THREE.WebGLCubeRenderTarget(
            256,
            {
                type: THREE.HalfFloatType
             })
        
        this.scene.environment = this.cubeRenderTarget.texture
    }

    setInstance(){
        this.instance = new THREE.CubeCamera(0.1, 100, this.cubeRenderTarget)
        this.instance.layers.set(1)
    }

    update(){
        this.instance.update(this.renderer.instance, this.scene)
    }
}