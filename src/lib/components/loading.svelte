<script>
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';

	export let isLoading = true;
	let container;
	let scene, camera, renderer;
	let animationFrameId;
	let grid;
	let startTime;
	const DURATION = 3000;
	const ENTRY_DURATION = 1000;
	const ANIMATION_DURATION = 1000;
	const EXIT_DURATION = 1000;

	onMount(() => {
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setPixelRatio(window.devicePixelRatio);
		if (container) {
			container.appendChild(renderer.domElement);
		}

		camera.position.z = 2.5;

		const gridSize = 50;
		const spacing = 0.15;
		const positions = new Float32Array(gridSize * gridSize * 3);
		const originalPositions = new Float32Array(gridSize * gridSize * 3);

		let k = 0;
		for (let i = 0; i < gridSize; i++) {
			for (let j = 0; j < gridSize; j++) {
				const x = (i - gridSize / 2) * spacing;
				const y = 0;
				const z = (j - gridSize / 2) * spacing;
				positions[k] = x;
				positions[k + 1] = y;
				positions[k + 2] = z;

				originalPositions[k] = x;
				originalPositions[k + 1] = y;
				originalPositions[k + 2] = z;
				k += 3;
			}
		}

		const geometry = new THREE.BufferGeometry();
		geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
		const material = new THREE.PointsMaterial({
			color: 0xffffff,
			size: 0.02,
			sizeAttenuation: true,
			blending: THREE.AdditiveBlending,
			transparent: true,
			opacity: 0
		});

		grid = new THREE.Points(geometry, material);
		grid.scale.set(0, 0, 0);
		scene.add(grid);

		startTime = Date.now();

		const animate = () => {
			animationFrameId = requestAnimationFrame(animate);
			const elapsedTime = Date.now() - startTime;
			const progress = Math.min(1, elapsedTime / DURATION);

			if (elapsedTime <= ENTRY_DURATION) {
				const entryProgress = Math.min(1, elapsedTime / ENTRY_DURATION);
				grid.scale.set(entryProgress, entryProgress, entryProgress);
				material.opacity = entryProgress;
			} else if (elapsedTime <= ENTRY_DURATION + ANIMATION_DURATION) {
				const t = (elapsedTime - ENTRY_DURATION) * 0.005;
				const positionAttribute = grid.geometry.attributes.position;
				const positionsArray = positionAttribute.array;
				for (let i = 0; i < positionsArray.length; i += 3) {
					const originalX = originalPositions[i];
					const originalZ = originalPositions[i + 2];
					const newY = Math.sin(t * 3 + originalX * 2 + originalZ * 2) * 0.2;
					positionsArray[i + 1] = newY;
				}
				positionAttribute.needsUpdate = true;
			} else if (elapsedTime > ENTRY_DURATION + ANIMATION_DURATION) {
				const exitElapsedTime = elapsedTime - (ENTRY_DURATION + ANIMATION_DURATION);
				const exitProgress = Math.min(1, exitElapsedTime / EXIT_DURATION);
				const scaleFactor = 1 + exitProgress * 3;
				grid.scale.set(scaleFactor, scaleFactor, scaleFactor);
				material.opacity = 1 - exitProgress;
				if (exitProgress >= 1) {
					isLoading = false;
					cancelAnimationFrame(animationFrameId);
				}
			}

			renderer.render(scene, camera);
		};

		animate();

		const onWindowResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};
		window.addEventListener('resize', onWindowResize);

		return () => {
			window.removeEventListener('resize', onWindowResize);
			cancelAnimationFrame(animationFrameId);
			if (container && renderer.domElement) {
				container.removeChild(renderer.domElement);
			}
			if (renderer) renderer.dispose();
			if (geometry) geometry.dispose();
			if (material) material.dispose();
		};
	});
</script>

<div class="loading-overlay" class:hide={!isLoading}>
	<div bind:this={container} class="threejs-container"></div>
</div>

<style>
	.loading-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: #0a0a0a;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 9999;
		opacity: 1;
		transition: opacity 1s ease-in-out;
		pointer-events: auto;
		overflow: hidden;
	}

	.loading-overlay.hide {
		opacity: 0;
		pointer-events: none;
	}

	.threejs-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
