import * as THREE from 'three'
import Disco from "../Disco.js"

export default class Environment {
    
    constructor() {
        this.disco = new Disco()
        this.scene = this.disco.scene
        this.resources = this.disco.resources
        this.world = this.disco.world
        this.time = this.disco.time

        this.setEnvironmentMap()
        this.setTextures()
        this.setLights()
    }

    setTextures(){
        this.resources.items.discoMapTexture.minFilter = THREE.LinearFilter
        this.resources.items.discoMapTexture.magFilter = THREE.LinearFilter
        this.resources.items.discoMapTexture.colorSpace = THREE.SRGBColorSpace

        this.resources.items.ceilingLightTexture.minFilter = THREE.LinearFilter
        this.resources.items.ceilingLightTexture.magFilter = THREE.LinearFilter
        this.resources.items.ceilingLightTexture.colorSpace = THREE.SRGBColorSpace
    }

    setLights() {

        // back wall projection image
        this.spotLight = new THREE.SpotLight(0xffffff)
        this.spotLight.intensity = 80
        this.spotLight.distance = 100
        this.spotLight.angle = Math.PI / 3
        this.spotLight.penumbra = 1
        this.spotLight.decay = 1
        this.spotLight.castShadow = true
        this.spotLight.position.set(-2,4,8)
        this.spotLight.shadow.mapSize.width = 1024
        this.spotLight.shadow.mapSize.height = 1024
        this.spotLight.map = this.resources.items.discoMapTexture

        // amplitude. play with field of view. spotlight uses a cone (perspectiveCamera) instead of orthographic
        // may not work with latest versions of three.js
        this.spotLight.shadow.camera.fov = 30
        this.spotLight.shadow.camera.near = 1
        this.spotLight.shadow.camera.far = 5

        this.scene.add(this.spotLight)

        // ceiling disco reflection mapping
        this.ceilingSpotlight = new THREE.SpotLight(0xffffff)
        this.ceilingSpotlight.intensity = 100
        this.ceilingSpotlight.distance = 20
        this.ceilingSpotlight.angle = Math.PI / 3.5 
        this.ceilingSpotlight.penumbra = 0.5
        this.ceilingSpotlight.decay = 1
        this.ceilingSpotlight.shadow.mapSize.width = 1024
        this.ceilingSpotlight.shadow.mapSize.height = 1024
        this.ceilingSpotlight.map = this.resources.items.ceilingLightTexture

        // amplitude. play with field of view. spotlight uses a cone (perspectiveCamera) instead of orthographic
        // may not work with latest versions of three.js
        this.ceilingSpotlight.shadow.camera.fov = 75
        this.ceilingSpotlight.shadow.camera.near = 6
        this.ceilingSpotlight.shadow.camera.far = 7

        this.scene.add(this.ceilingSpotlight)

        // equivalent of lookAt. target must be added to scene before moving
        this.scene.add(this.spotLight.target)

        // back wall reflection projection
        this.backReflect1 = new THREE.SpotLight(0xffffff)
        this.backReflect1.intensity = 100
        this.backReflect1.distance = 100
        this.backReflect1.angle = Math.PI / 3
        this.backReflect1.penumbra = 1
        this.backReflect1.decay = 1
        this.backReflect1.position.set(0,3,0)
        this.backReflect1.shadow.mapSize.width = 1024
        this.backReflect1.shadow.mapSize.height = 1024
        this.backReflect1.map = this.resources.items.backWallReflectionTexture

        // amplitude. play with field of view. spotlight uses a cone (perspectiveCamera) instead of orthographic
        // may not work with latest versions of three.js
        this.backReflect1.shadow.camera.fov = 75
        this.backReflect1.shadow.camera.near = 1
        this.backReflect1.shadow.camera.far = 3

        this.scene.add(this.backReflect1)

        this.scene.add(this.backReflect1.target)
        this.backReflect1.target.position.y = 3
        this.backReflect1.target.position.x = 0
        this.backReflect1.target.position.z = -10

        // back wall reflection projection
        this.backReflect2 = new THREE.SpotLight(0xffffff)
        this.backReflect2.intensity = 50
        this.backReflect2.distance = 100
        this.backReflect2.angle = Math.PI / 3
        this.backReflect2.penumbra = 1
        this.backReflect2.decay = 1
        this.backReflect2.position.set(0,3,0)
        this.backReflect2.shadow.mapSize.width = 1024
        this.backReflect2.shadow.mapSize.height = 1024
        this.backReflect2.map = this.resources.items.backWallReflectionTexture

        // amplitude. play with field of view. spotlight uses a cone (perspectiveCamera) instead of orthographic
        // may not work with latest versions of three.js
        this.backReflect2.shadow.camera.fov = 75
        this.backReflect2.shadow.camera.near = 1
        this.backReflect2.shadow.camera.far = 3

        this.scene.add(this.backReflect2)

        this.scene.add(this.backReflect2.target)
        this.backReflect2.target.position.y = 3
        this.backReflect2.target.position.x = 10

        // back wall reflection projection
        this.backReflect3 = new THREE.SpotLight(0xffffff)
        this.backReflect3.intensity = 50
        this.backReflect3.distance = 100
        this.backReflect3.angle = Math.PI / 3
        this.backReflect3.penumbra = 1
        this.backReflect3.decay = 1
        this.backReflect3.position.set(0,3,0)
        this.backReflect3.shadow.mapSize.width = 1024
        this.backReflect3.shadow.mapSize.height = 1024
        this.backReflect3.map = this.resources.items.backWallReflectionTexture

        // amplitude. play with field of view. spotlight uses a cone (perspectiveCamera) instead of orthographic
        // may not work with latest versions of three.js
        this.backReflect3.shadow.camera.fov = 75
        this.backReflect3.shadow.camera.near = 1
        this.backReflect3.shadow.camera.far = 3

        this.scene.add(this.backReflect3)

        this.scene.add(this.backReflect3.target)
        this.backReflect3.target.position.y = 3
        this.backReflect3.target.position.x = 0
        this.backReflect3.target.position.z = 10

        // light #4
        this.backReflect4 = new THREE.SpotLight(0xffffff)
        this.backReflect4.intensity = 50
        this.backReflect4.distance = 100
        this.backReflect4.angle = Math.PI / 3
        this.backReflect4.penumbra = 1
        this.backReflect4.decay = 1
        this.backReflect4.position.set(0,3,0)
        this.backReflect4.shadow.mapSize.width = 1024
        this.backReflect4.shadow.mapSize.height = 1024
        this.backReflect4.map = this.resources.items.backWallReflectionTexture

        // amplitude. play with field of view. spotlight uses a cone (perspectiveCamera) instead of orthographic
        // may not work with latest versions of three.js
        this.backReflect4.shadow.camera.fov = 75
        this.backReflect4.shadow.camera.near = 1
        this.backReflect4.shadow.camera.far = 3

        this.scene.add(this.backReflect4)

        this.scene.add(this.backReflect4.target)
        this.backReflect4.target.position.y = 3
        this.backReflect4.target.position.x = -10
        this.backReflect4.target.position.z = 0


        // Light Helpers
        // const spotLightHelper = new THREE.CameraHelper(this.spotLight.shadow.camera)
        // this.scene.add(spotLightHelper)
        // const backReflect1Helper = new THREE.CameraHelper(this.backReflect1.shadow.camera)
        // this.scene.add(backReflect1Helper)
        // const backReflect2Helper = new THREE.CameraHelper(this.backReflect2.shadow.camera)
        // this.scene.add(backReflect2Helper)
        // const backReflect3Helper = new THREE.CameraHelper(this.backReflect3.shadow.camera)
        // this.scene.add(backReflect3Helper)
        // const backReflect4Helper = new THREE.CameraHelper(this.backReflect4.shadow.camera)
        // this.scene.add(backReflect4Helper)
        // const ceilingSpotLightHelper = new THREE.CameraHelper(this.ceilingSpotlight.shadow.camera)
        // this.scene.add(ceilingSpotLightHelper)
    }

    setEnvironmentMap() {
        this.environmentMap = {}
        this.environmentMap.texture = this.resources.items.environmentMapTexture
        this.environmentMap.mapping = THREE.EquirectangularReflectionMapping
        this.environmentMap.texture.colorSpace = THREE.SRGBColorSpace

        this.scene.background = this.environmentMap.texture

        this.environmentMap.updateMaterials = () => {
            this.scene.traverse((child) => {
                if(child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial){
                    child.material.envMap = this.environmentMap.texture
                    child.material.envMapIntensity = this.environmentMap.intensity
                    child.material.needsUpdate = true
                }
            })
        }

        this.environmentMap.updateMaterials()
    }

    update() {
        this.spotLight.target.position.y = 2

        this.ceilingSpotlight.target.position.y = 100
        this.ceilingSpotlight.position.x = Math.cos(this.time.elapsed * 0.0002) * 0.01
        this.ceilingSpotlight.position.y = - 1
        this.ceilingSpotlight.position.z = -Math.sin(this.time.elapsed * 0.0002) * 0.01

        this.backReflect1.target.position.x = -Math.cos(this.time.elapsed * 0.0002) * 90
        this.backReflect1.target.position.z = Math.sin(this.time.elapsed * 0.0002) * 90

        this.backReflect2.target.position.x = (Math.cos(this.time.elapsed * 0.0002) * 90)
        this.backReflect2.target.position.z = -(Math.sin(this.time.elapsed * 0.0002) * 90)

        this.backReflect3.target.position.x = (-Math.sin(this.time.elapsed * 0.0002) * 90)
        this.backReflect3.target.position.z = -(Math.cos(this.time.elapsed * 0.0002) * 90)

        this.backReflect4.target.position.x = (Math.sin(this.time.elapsed * 0.0002) * 90)
        this.backReflect4.target.position.z = (Math.cos(this.time.elapsed * 0.0002) * 90)

        // spotLight.position.x = Math.sin(elapsedTime / 2)
        // // spotLight.position.y = -20
        // spotLight.position.y = Math.cos(elapsedTime / 2)
    }
}