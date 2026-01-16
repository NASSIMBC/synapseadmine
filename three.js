// 1. Création de la scène et de la caméra
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// 2. Création du cube (Géométrie + Matériau)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// 3. Boucle d'animation
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01; // On fait tourner le cube par le code
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
