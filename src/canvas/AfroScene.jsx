import React, {useEffect, useRef} from "react";
import * as THREE from "three";
import {gsap} from "gsap";

export default function AfroScene({seed = "sunrise rhythm"}) {
    const mountRef = useRef(null);

    useEffect(() =>{
        const el = mountRef.current;
        const width = el.clientWidth;
        const height = el.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, width/height, 0.1, 1000);
        camera.position.z = 6;

        const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
        renderer.setSize(width, height);
        el.appendChild(renderer.domElement);

        const palette = ["#FF6B35", "#FFB03B", "#1B998B", "#2D3047", "#6A0572"];

        //ambient and point lights
        scene.add(new THREE.AmbientLight(0xffffff, 0.6));
        const pLight = new THREE.PointLight(0xffffff, 0.8);
        pLight.position.set(5, 5, 5);
        scene.add(pLight);

        //Create three nodes with different geometry/material
        const group = new THREE.Group();
        scene.add(group);
        const geometries = [
            new THREE.IcosahedronGeometry(0.8, 1),
            new THREE.TorusKnotGeometry(0.45, 0.15, 100, 16),
            new THREE.OctahedronGeometry(0.6, 32, 32)
        ];

        const meshes = geometries.map((geo, i) => {
            const mat = new THREE.MeshStandardMaterial({
                color: palette[i ],
                metalness: 0.6,
                roughness: 0.3,
                emissive: new THREE.Color(palette[i ]).multiplyScalar(0.8)
            });
            const m = new THREE.Mesh(geo, mat);
            m.position.x = (i - 1) * 2.2;
            group.add(m);
            return m;
        });

        //subtle background gradient using CSS clear color
        renderer.setClearColor(0x000000, 0);
    });   
}
