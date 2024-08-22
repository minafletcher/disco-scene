import * as THREE from 'three'
import Disco from "../Disco.js";

export default class Ceiling {

    constructor(){
        this.disco = new Disco()
        this.scene = this.disco.scene
        this.resources = this.disco.resources

        this.setGeometry()
        this.setTextures()
        this.setMaterial()
        this.setMesh()
    }

    setGeometry(){
        this.geometry = new THREE.PlaneGeometry(20,20)
    }

    setTextures(){
        this.textures = {}

        this.textures.color = this.resources.items.ceilingColorTexture
        this.textures.color.colorSpace = THREE.SRGBColorSpace
        this.textures.color.repeat.set(1.5, 1.5)
        this.textures.color.wrapS = THREE.RepeatWrapping
        this.textures.color.wrapT = THREE.RepeatWrapping

        this.textures.normal = this.resources.items.ceilingNormalTexture
        this.textures.normal.colorSpace = THREE.SRGBColorSpace
        this.textures.normal.repeat.set(1.5, 1.5)
        this.textures.normal.wrapS = THREE.RepeatWrapping
        this.textures.normal.wrapT = THREE.RepeatWrapping

        this.textures.aoRoughnessMetal = this.resources.items.ceilingAoRoughnessMetalTexture
        this.textures.aoRoughnessMetal.colorSpace = THREE.SRGBColorSpace
        this.textures.aoRoughnessMetal.repeat.set(1.5, 1.5)
        this.textures.aoRoughnessMetal.wrapS = THREE.RepeatWrapping
        this.textures.aoRoughnessMetal.wrapT = THREE.RepeatWrapping
        
    }

    setMaterial(){
        this.material = new THREE.MeshStandardMaterial({
            map: this.textures.color,
            normalMap: this.textures.normal,
            aoMap: this.textures.aoRoughnessMetal
        })
    }

    setMesh(){
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.y = 6.7
        this.mesh.rotateX(Math.PI / 2)
        this.scene.add(this.mesh)
    }
}