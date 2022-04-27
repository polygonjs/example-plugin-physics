import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
const manifest = {
	properties: '1651077305485',
	root: '1611791922380',
	nodes: {
		perspectiveCamera1: '1619274456387',
		'perspectiveCamera1/events1': '1617634778259',
		MAT: '1617634778259',
		'MAT/meshStandardBuilder1': '1651077305485',
		physics: '1651077305485',
	},
};

export const loadSceneData_default = async (options = {}) => {
	const sceneDataRoot = options.sceneDataRoot || './polygonjs/scenes';
	return await SceneDataManifestImporter.importSceneData({
		sceneName: 'default',
		urlPrefix: sceneDataRoot + '/' + 'default',
		manifest: manifest,
		onProgress: options.onProgress,
	});
};
