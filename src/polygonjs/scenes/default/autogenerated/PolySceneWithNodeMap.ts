
import {PolyScene} from '@polygonjs/polygonjs/src/engine/scene/PolyScene';
// obj
import {GeoObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/Geo';
import {HemisphereLightObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/HemisphereLight';
import {MaterialsNetworkObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/MaterialsNetwork';
import {PerspectiveCameraObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/PerspectiveCamera';
import {PolarTransformObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/PolarTransform';
import {SpotLightObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/SpotLight';
// sop
import {AttribCreateSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/AttribCreate';
import {AttribPromoteSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/AttribPromote';
import {BoxSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Box';
import {CopySopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Copy';
import {EventsNetworkSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/EventsNetwork';
import {JitterSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Jitter';
import {MaterialSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Material';
import {MergeSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Merge';
import {PhysicsRbdAttributesSopNode} from '@polygonjs/plugin-physics/dist/src/engine/nodes/sop/PhysicsRbdAttributes';
import {PhysicsSolverSopNode} from '@polygonjs/plugin-physics/dist/src/engine/nodes/sop/PhysicsSolver';
import {ScatterSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Scatter';
import {TextSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Text';
import {TransformSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Transform';
// event
import {CameraOrbitControlsEventNode} from '@polygonjs/polygonjs/src/engine/nodes/event/CameraOrbitControls';
// mat
import {MeshStandardBuilderMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/MeshStandardBuilder';
import {MeshStandardMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/MeshStandard';

export class PolySceneWithNodeMap_default extends PolyScene {
	node(path: '/hemisphereLight1'): HemisphereLightObjNode;
	node(path: '/polarTransform1'): PolarTransformObjNode;
	node(path: '/spotLight1'): SpotLightObjNode;
	node(path: '/perspectiveCamera1'): PerspectiveCameraObjNode;
	node(path: '/perspectiveCamera1/events1'): EventsNetworkSopNode;
	node(path: '/perspectiveCamera1/events1/cameraOrbitControls1'): CameraOrbitControlsEventNode;
	node(path: '/MAT'): MaterialsNetworkObjNode;
	node(path: '/MAT/meshStandard1'): MeshStandardMatNode;
	node(path: '/MAT/meshStandardBuilder1'): MeshStandardBuilderMatNode;
	node(path: '/physics'): GeoObjNode;
	node(path: '/physics/box1'): BoxSopNode;
	node(path: '/physics/text1'): TextSopNode;
	node(path: '/physics/scatter1'): ScatterSopNode;
	node(path: '/physics/copy1'): CopySopNode;
	node(path: '/physics/physicsRbdAttributes1'): PhysicsRbdAttributesSopNode;
	node(path: '/physics/physicsSolver1'): PhysicsSolverSopNode;
	node(path: '/physics/box2'): BoxSopNode;
	node(path: '/physics/transform1'): TransformSopNode;
	node(path: '/physics/physicsRbdAttributes2'): PhysicsRbdAttributesSopNode;
	node(path: '/physics/merge1'): MergeSopNode;
	node(path: '/physics/transform2'): TransformSopNode;
	node(path: '/physics/transform3'): TransformSopNode;
	node(path: '/physics/material1'): MaterialSopNode;
	node(path: '/physics/material2'): MaterialSopNode;
	node(path: '/physics/attribCreate1'): AttribCreateSopNode;
	node(path: '/physics/attribPromote1'): AttribPromoteSopNode;
	node(path: '/physics/jitter1'): JitterSopNode;
	node(path: '/physics/box3'): BoxSopNode;
	node(path: '/physics/transform4'): TransformSopNode;
	node(path: '/physics/physicsRbdAttributes3'): PhysicsRbdAttributesSopNode;
	node(path: '/physics/transform5'): TransformSopNode;
	node(path: '/physics/merge2'): MergeSopNode;
	node(path: '/physics/attribCreate2'): AttribCreateSopNode;
	node(path: '/physics/attribCreate3'): AttribCreateSopNode;
	node(path: string):any /* we need any for now as otherwise an error occurs when adding plugins to the overloaded methods */ {
		return super.node(path);
	}
}
