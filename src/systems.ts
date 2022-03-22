import { Colorable, Pendulum } from './components'

export class ColorableSystem {
  t = 0.0
  group = engine.getComponentGroup(Colorable)

  update(dtSeg: number) {
    this.t += dtSeg * 10
    const x = Scalar.Lerp(0, 255, (1 + Math.cos(this.t)) / 2)
    const y = Scalar.Lerp(0, 255, (1 + Math.cos(this.t * 1.2)) / 2)
    const z = Scalar.Lerp(0, 255, (1 + Math.cos(this.t * 1.4)) / 2)
    for (const entity of this.group.entities) {
      const material = entity.getComponent(Material)
      material.albedoColor = Color3.FromInts(x, y, z)
    }
  }
}

export class PendulumSystem {
  t = 0.0
  group = engine.getComponentGroup(Pendulum)

  update(dtSeg: number) {
    this.t += dtSeg
    for (const entity of this.group.entities) {
      const transform = entity.getComponent(Transform)
      const pend = entity.getComponent(Pendulum)
      const x = this.t * pend.freq + pend.phase
      const angle = Math.cos(x)
      transform.rotate(Vector3.Left(), angle)
    }
  }
}
