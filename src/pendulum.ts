import { Pendulum } from './components'
import { spawnBall, spawnCube } from './primitives'

export function spawnOscilattor(
  position: Vector3,
  freq: number,
  phase: number
) {
  const rodSize = 4
  const ballRadius = 0.4

  // ball
  const pivote = new Entity()
  pivote.addComponent(new Transform({ position }))
  engine.addEntity(pivote)
  const ballRod = spawnCube(
    Vector3.FromArray([0, -rodSize / 2, 0]),
    Vector3.FromArray([0.1, rodSize, 0.1]),
    Color4.FromColor3(Color3.Green(), 1)
  )
  const ball = spawnBall(
    Vector3.FromArray([0, -rodSize, 0]),
    Vector3.One().scale(ballRadius),
    Color3.Random()
  )
  ball.setParent(pivote)
  ballRod.setParent(pivote)

  const pend = new Pendulum()
  pend.freq = freq
  pend.phase = phase
  pivote.addComponent(pend)

  return pivote
}
