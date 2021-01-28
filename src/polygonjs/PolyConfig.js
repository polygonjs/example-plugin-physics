import { polyPluginPhysics } from "@polygonjs/plugin-physics/dist/src/index";

export function configurePolygonjs(poly) {
	// configure the engine
	poly.registerPlugin(polyPluginPhysics);
}
export function configureScene(scene) {
	// configure the scene
}
