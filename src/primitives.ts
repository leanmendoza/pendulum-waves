export function spawnCube(
  position: Vector3,
  size: Vector3,
  color: Color3 | Color4 = Color3.White(),
  parent?: Entity
) {
  const cube = new Entity()
  cube.addComponent(new Transform({ position, scale: size }))

  const material = new Material()
  material.albedoColor = color

  cube.addComponent(material)
  cube.addComponent(new BoxShape())

  if (parent) {
    cube.setParent(parent)
  }

  engine.addEntity(cube)
  return cube
}

export function spawnBall(
  position: Vector3,
  size: Vector3,
  color: Color3 = Color3.White()
) {
  const cube = new Entity()
  cube.addComponent(new Transform({ position, scale: size }))

  const material = new Material()
  material.albedoColor = color

  cube.addComponent(material)
  cube.addComponent(new SphereShape())

  engine.addEntity(cube)
  return cube
}
