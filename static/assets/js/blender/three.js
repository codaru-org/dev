/** pug import map **/
/*
script(type="importmap").
    {
       	"imports": {
      		"three": "https://cdn.jsdelivr.net/npm/three@0.172.0/build/three.module.js",
      		"three/addons/": "https://cdn.jsdelivr.net/npm/three@0.172.0/examples/jsm/"
       	}
    }
*/
/** three.js code **/
/*
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { AsciiEffect } from './AsciiEffect.js';

let camera, scene, renderer, effect;
let container;
let mouseX = 0, mouseY = 0;
const hero = document.getElementsByClassName("hero")[0];

function lerp (val, targ, amt) {
	return ((targ - val) * amt) + val
}
void function () {
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
	
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0, 0, 0);

    // Lights setup remains the same
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(50, 50, 50);
    scene.add(pointLight);

    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
    hemisphereLight.position.set(0, 50, 0);
    scene.add(hemisphereLight);

    const loader = new GLTFLoader();
	
    loader.load('/assets/js/blender/planet.gltf', (gltf) => {
        const mesh = gltf.scene;
        const box = new THREE.Box3().setFromObject(mesh);
        const center = box.getCenter(new THREE.Vector3());

        container = new THREE.Group();
        mesh.position.sub(center);
        container.scale.set(4, 4, 4);
        container.add(mesh);
        scene.add(container);

        // Position camera at model's center
        camera.position.set(0, 0, 0);
    });

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 2, window.innerHeight);
    renderer.setAnimationLoop(animate);

    effect = new AsciiEffect(renderer, ' .:-+*=%@#', {
        invert: true,
        color: true,
        scale: 17,
    });
    effect.setSize(window.innerWidth / 2, window.innerHeight);
    hero.appendChild(effect.domElement);
    const computedSize = window.getComputedStyle(effect.domElement);
    effect.setSize(parseInt(computedSize.width), parseInt(computedSize.height));

    // Mouse move listener
    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onWindowResize);
}();

function onMouseMove(event) {
	// Normalize mouse coordinates to [-1, 1]
	mouseX = (event.clientX / window.innerWidth) * 2 - 1;
	mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
	effect.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
	// Update model rotation based on mouse position
	if (container) {
		container.rotation.y = lerp(container.rotation.y, mouseX * Math.PI / 2, 0.15);
		container.rotation.x = lerp(container.rotation.x, mouseY * Math.PI / 2, 0.15);
	}
	effect.render(scene, camera);
}
*/