import {Poly} from '@polygonjs/polygonjs/dist/src/engine/Poly';
import {AllExpressionsRegister} from '@polygonjs/polygonjs/dist/src/engine/poly/registers/expressions/All';
import {configurePolygonjs} from '../../PolyConfig';
// modules
import {ModuleName} from '@polygonjs/polygonjs/dist/src/engine/poly/registers/modules/Common';
import {SVGLoader} from '@polygonjs/polygonjs/dist/src/modules/three/examples/jsm/loaders/SVGLoader';
// event
import {CameraOrbitControlsEventNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls';
// mat
import {MeshStandardMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandard';
import {MeshStandardBuilderMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandardBuilder';
// obj
import {GeoObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo';
import {HemisphereLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/HemisphereLight';
import {MaterialsNetworkObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/MaterialsNetwork';
import {PerspectiveCameraObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/PerspectiveCamera';
import {PolarTransformObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/PolarTransform';
import {SpotLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/SpotLight';
// sop
import {AttribCreateSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/AttribCreate';
import {AttribPromoteSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/AttribPromote';
import {BoxSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Box';
import {CopySopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Copy';
import {EventsNetworkSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/EventsNetwork';
import {JitterSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Jitter';
import {MaterialSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material';
import {MergeSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge';
import {ScatterSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Scatter';
import {TextSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Text';
import {TransformSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Transform';
export class PolyRegister {
	static run() {
		AllExpressionsRegister.run(Poly);
		// modules
		Poly.modulesRegister.register(ModuleName.SVGLoader, SVGLoader);
		// event
		Poly.registerNode(CameraOrbitControlsEventNode);
		// mat
		Poly.registerNode(MeshStandardMatNode);
		Poly.registerNode(MeshStandardBuilderMatNode);
		// obj
		Poly.registerNode(GeoObjNode);
		Poly.registerNode(HemisphereLightObjNode);
		Poly.registerNode(MaterialsNetworkObjNode);
		Poly.registerNode(PerspectiveCameraObjNode);
		Poly.registerNode(PolarTransformObjNode);
		Poly.registerNode(SpotLightObjNode);
		// sop
		Poly.registerNode(AttribCreateSopNode);
		Poly.registerNode(AttribPromoteSopNode);
		Poly.registerNode(BoxSopNode);
		Poly.registerNode(CopySopNode);
		Poly.registerNode(EventsNetworkSopNode);
		Poly.registerNode(JitterSopNode);
		Poly.registerNode(MaterialSopNode);
		Poly.registerNode(MergeSopNode);
		Poly.registerNode(ScatterSopNode);
		Poly.registerNode(TextSopNode);
		Poly.registerNode(TransformSopNode);
		// custom configuration
		configurePolygonjs(Poly);
	}
}
