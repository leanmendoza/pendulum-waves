import { Colorable } from './components'
import { spawnOscilattor } from './pendulum'
import { spawnCube } from './primitives'

export function makeStructure(structurePosition: Vector3 = Vector3.Zero()) {
  // Root
  const R = new Entity()
  R.addComponent(new Transform({ position: structurePosition }))
  engine.addEntity(R)

  // Base
  const baseSize = new Vector3(15, 0.2, 6)
  spawnCube(Vector3.Zero(), baseSize, Color3.FromHexString('#8dcbcc'), R)

  // Columns
  const columnSize = new Vector3(0.2, 6, 0.2)
  const columnPosition1 = new Vector3(
    6 - columnSize.x / 2,
    columnSize.y / 2 + baseSize.y / 2,
    3 - columnSize.z / 2
  )
  const columnPosition2 = new Vector3(
    -6 + columnSize.x / 2,
    columnSize.y / 2 + baseSize.y / 2,
    3 - columnSize.z / 2
  )

  const columnPosition3 = new Vector3(
    -6 + columnSize.x / 2,
    columnSize.y / 2 + baseSize.y / 2,
    -3 + columnSize.z / 2
  )

  const columnPosition4 = new Vector3(
    6 - columnSize.x / 2,
    columnSize.y / 2 + baseSize.y / 2,
    -3 + columnSize.z / 2
  )

  spawnCube(columnPosition1, columnSize, Color3.FromHexString('#bdcc8d'), R)
  spawnCube(columnPosition2, columnSize, Color3.FromHexString('#bdcc8d'), R)
  spawnCube(columnPosition3, columnSize, Color3.FromHexString('#bdcc8d'), R)
  spawnCube(columnPosition4, columnSize, Color3.FromHexString('#bdcc8d'), R)

  // Beams
  const beamSize = new Vector3(0.2, 0.2, 6)
  const beamPosition1 = new Vector3(
    6 - columnSize.x / 2,
    columnSize.y + baseSize.y / 2,
    0
  )

  const beamPosition2 = new Vector3(
    -6 + columnSize.x / 2,
    columnSize.y + baseSize.y / 2,
    0
  )

  spawnCube(beamPosition1, beamSize, Color3.FromHexString('#bdcc8d'), R)
  spawnCube(beamPosition2, beamSize, Color3.FromHexString('#bdcc8d'), R)

  // Middle beams
  const middlebeamSize = new Vector3(12, 0.2, 0.2)
  const middlebeamPosition = new Vector3(0, columnSize.y + baseSize.y / 2, 0)

  const middlebeam = spawnCube(
    middlebeamPosition,
    middlebeamSize,
    Color3.FromHexString('#adcc8d'),
    R
  )
  middlebeam.addComponent(new Colorable())

  const oscPosition = new Vector3(0, columnSize.y + baseSize.y - 0.1, 0)

  const arr = [0, 1, 2, 3, 4, -1, -2, -3, -4].sort((a, b) => a - b)
  for (const i of arr) {
    const initialPhase = Math.PI
    const freq = 2.0 + i * (Math.PI / (2 * arr.length + 1))
    const osc = spawnOscilattor(
      oscPosition.add(new Vector3(1.2 * i, 0, 0)),
      freq,
      initialPhase
    )
    osc.setParent(R)
  }
}
