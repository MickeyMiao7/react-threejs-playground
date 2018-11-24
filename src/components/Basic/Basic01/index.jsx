import * as React from 'react';
import * as THREE from 'three';

export default class Basic extends React.Component {
  componentDidMount() {
    const container = this.refs['webgl-canvas'];
    const renderer = new THREE.WebGLRenderer();
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
  }
  
  render() {
    return <div ref="webgl-canvas"></div>
  }
}