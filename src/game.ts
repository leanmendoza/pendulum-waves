import { makeStructure } from './structure'
import { ColorableSystem, PendulumSystem } from './systems'

engine.addSystem(new ColorableSystem())
engine.addSystem(new PendulumSystem())

makeStructure(new Vector3(8, 0, 8))
