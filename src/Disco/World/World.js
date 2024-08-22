import Disco from "../Disco.js"
import Environment from './Environment.js'
import Ceiling from './Ceiling.js'
import Wall from './Wall.js'
import DiscoBall from './DiscoBall.js'
import HolyDonut from "./HolyDonut.js"

export default class World {

    constructor() {
        this.disco = new Disco()
        this.scene = this.disco.scene
        this.resources = this.disco.resources

        // wait for resources
        this.resources.on('ready', () =>
        {

            this.environment = new Environment()

            // Setup
            this.ceiling = new Ceiling()
            this.wallBack = new Wall("back")
            this.wallBack = new Wall("left")
            //this.holyDonut1 = new HolyDonut("up")
            //this.holyDonut2 = new HolyDonut("side")

            this.discoBall = new DiscoBall()
        })
    }

    update() {
        if(this.discoBall){
            this.discoBall.update()
        }

        if(this.environment){
            this.environment.update()
        }
    }
}