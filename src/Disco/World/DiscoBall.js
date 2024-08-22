import * as THREE from 'three'
import Disco from "../Disco.js";

export default class DiscoBall {

    constructor() {
        this.disco = new Disco()
        this.scene = this.disco.scene
        this.resources = this.disco.resources
        this.time = this.disco.time

        // Setup
        this.resource = this.resources.items.discoModel

        this.setModel()
    }
    
    setModel(){
        this.model = this.resource.scene
        this.model.scale.set(2,2,2)
        this.model.position.y = 3
        this.scene.add(this.model)

        this.model.traverse((child) => {
            if(child instanceof THREE.Mesh){
                child.castShadow = true
            }
        })
    }

    update() {

        if (this.model){
            this.model.rotation.y += this.time.delta * 0.0002
        }
    }

}