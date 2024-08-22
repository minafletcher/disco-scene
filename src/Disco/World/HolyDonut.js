import * as THREE from 'three'
import Disco from '../Disco.js'

export default class HolyDonut {

    constructor(direction){
        this.disco = new Disco()
        this.scene = this.disco.scene
        this.resources = this.disco.resources
        this.direction = direction

        this.setGeometry()
        this.setMaterials()
        this.setMesh()
    }

    setGeometry(){
        this.geometry = new THREE.TorusGeometry(8, 0.5)
    }

    setMaterials(){
        this.material = new THREE.MeshBasicMaterial({ color: new THREE.Color("#ffffff"), transparent: true, opacity: 0.3})
    }

    setMesh(){

        this.mesh = new THREE.Mesh(this.geometry, this.material)

        this.mesh.layers.enable(1)
        this.mesh.scale.set(2,2)

        if(this.direction == "up"){
            this.mesh.rotation.y = Math.PI / 2
        }

        else if(this.direction == "side"){
            this.mesh.rotation.x = Math.PI / 2
        }

        this.scene.add(this.mesh)
    }
}