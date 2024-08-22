import * as THREE from 'three'
import Disco from "../Disco.js";

export default class Wall {

    constructor(wallType){
        this.disco = new Disco()
        this.scene = this.disco.scene
        this.resources = this.disco.resources

        this.wallType = wallType

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

        this.textures.color = this.resources.items.wallColorTexture
        this.textures.color.repeat.set(3,3)
        this.textures.color.wrapS = THREE.RepeatWrapping
        this.textures.color.wrapT = THREE.RepeatWrapping

        this.textures.normal = this.resources.items.wallNormalTexture
        this.textures.normal.colorSpace = THREE.SRGBColorSpace
        this.textures.normal.repeat.set(3,3)
        this.textures.normal.wrapS = THREE.RepeatWrapping
        this.textures.normal.wrapT = THREE.RepeatWrapping

        this.textures.ao = this.resources.items.wallAoTexture
        this.textures.ao.colorSpace = THREE.SRGBColorSpace
        this.textures.ao.repeat.set(3,3)
        this.textures.ao.wrapS = THREE.RepeatWrapping
        this.textures.ao.wrapT = THREE.RepeatWrapping
    }

    setMaterial() {
        this.material = new THREE.MeshStandardMaterial({
            map: this.textures.color,
            normalMap: this.textures.normal,
            aoMap: this.textures.ao
        })
    }

    setMesh() {

        this.mesh = new THREE.Mesh(this.geometry, this.material)

        if (this.wallType == "back"){
            this.mesh.position.y = -3.25
            this.mesh.position.z = -10
        }

        else if (this.wallType == "left"){
            this.mesh.position.x = -10
            this.mesh.position.y = -3.25
            this.mesh.rotation.y = Math.PI * 0.5
            this.mesh.rotation.x = Math.PI
        }

        this.mesh.receiveShadow = true
        this.scene.add(this.mesh)
    }
}