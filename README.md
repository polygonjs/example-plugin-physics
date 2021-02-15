# Polygonjs Plugin Physics Example

This repository shows how to use the [Physics Plugin](https://github.com/polygonjs/plugin-physics) for the WebGL engine [Polygonjs](https://github.com/polygonjs/polygonjs).

![Physics Example](https://github.com/polygonjs/example-plugin-physics/blob/main/doc/physics_examples.jpg?raw=true)

## Open the scene in the WebGL editor

`yarn && yarn polygon`

This will open the scene saved in this repo. It is a simple scene with the following setup:

The right branch, which creates the moving rigid bodies:

- a Text node to create the geometry of a word
- a Scatter node to create points on the text
- a AttribCreate to add the `pscale` attribute on each point, with the expression `1*rand(@ptnum+945)+0.5`, which will give a random scale to each rigid body.
- a Copy node to create boxes on all the points
- a PhysicsRbdAttributes to add the attributes necessary to the simulation
- another AttribCreate node to randomize the `restitution` attribute.

The left branch, which creates the static rigid bodies:

- a box node to create a box
- a transform to scale the geometry
- a second transform to position the object
- a PhysicsRbdAttributes to set the attributes for the simulation. The difference to the moving RBDs is that `active` is set to false, and `mass` is set to a very high number.
- both boxes are merged (make sure to have the merge node set to `separate objects` by setting `compact` to false), so that their geometries are not merged into a single object.

and finally both branches are merged into the `PhysicsSolver`, where all attributes are set to default.

![Physics plugin example in the Polygonjs node-based Editor](https://github.com/polygonjs/example-plugin-physics/blob/main/doc/physics_example_in_editor.jpg?raw=true)

## Open the export scene without the editor

`yarn && yarn run snowpack dev`

