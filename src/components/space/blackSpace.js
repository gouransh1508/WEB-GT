import React, { Component } from 'react'
import { InteractionManager } from "three.interactive";


import p1 from '../../assets/images/download.jpg'
import p2 from '../../assets/images/PngItem_3579834.png'
import p3 from '../../assets/images/2k_moon.jpg'
import p4 from '../../assets/images/2k_mars.jpg'
import p5 from '../../assets/images/blueplanet.jpg'
import p7 from '../../assets/images/2k_earth_clouds.jpg'





import * as THREE from 'three';





class Space extends Component {
    componentDidMount() {

        document.body.style.overflow = 'hidden';
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);

        var renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);


        camera.position.z = 5;
        // camera.rotation.x = Math.PI/2;
        var geometry;


        // geometries
        if(isMobile){
         geometry = new THREE.SphereGeometry(0.8, 64, 64);
        }
        else{
             geometry = new THREE.SphereGeometry(1.5, 64, 64);
        }
        const geometry1 = new THREE.SphereGeometry(0.3, 100, 100);
        const geometry2 = new THREE.SphereGeometry(0.4, 100, 100);




        // sun mesh
        var planetTexture = new THREE.TextureLoader().load(p1);
        planetTexture.wrapS = planetTexture.wrapT = THREE.MirroredRepeatWrapping;
        planetTexture.repeat.set(1, 1);
        var material = new THREE.MeshBasicMaterial({ map: planetTexture });

        // planets mesh
        var planetTexture1 = new THREE.TextureLoader().load(p3);
        planetTexture1.wrapS = planetTexture.wrapT = THREE.MirroredRepeatWrapping;
        planetTexture1.repeat.set(1, 1);
        var material1 = new THREE.MeshBasicMaterial({ map: planetTexture1 });

        var planetTexture2 = new THREE.TextureLoader().load(p4);
        planetTexture2.wrapS = planetTexture.wrapT = THREE.MirroredRepeatWrapping;
        planetTexture2.repeat.set(1, 1);
        var material2 = new THREE.MeshBasicMaterial({ map: planetTexture2 });

        var planetTexture3 = new THREE.TextureLoader().load(p5);
        planetTexture3.wrapS = planetTexture.wrapT = THREE.MirroredRepeatWrapping;
        planetTexture3.repeat.set(1, 1);
        var material3 = new THREE.MeshBasicMaterial({ map: planetTexture3 });

        var planetTexture4 = new THREE.TextureLoader().load(p7);
        planetTexture4.wrapS = planetTexture.wrapT = THREE.MirroredRepeatWrapping;
        planetTexture4.repeat.set(1, 1);
        var material4 = new THREE.MeshBasicMaterial({ map: planetTexture4 });

        // planets 

        let planet = new THREE.Mesh(geometry, material);
        let planet1 = new THREE.Mesh(geometry1, material1);
        let planet2 = new THREE.Mesh(geometry1, material2);
        let planet3 = new THREE.Mesh(geometry1, material3);
        let planet4 = new THREE.Mesh(geometry2, material4);
        planet.name = 'planet';
        planet1.name = 'planet1';
        planet2.name = 'planet2';
        planet3.name = 'planet3';
        planet4.name = 'planet4';

        // planets positions 
        
            planet1.position.set(7, 0.5, -8);
            planet2.position.set(11, 0.5, -8);
            planet3.position.set(15, 0.5, -8);
            planet4.position.set(19.5, 0.5, -8);
        



        // stars

        let starGeo = new THREE.Geometry();
        for (let i = 0; i < 6000; i++) {
            let star = new THREE.Vector3(
                Math.random() * 600 - 300,
                Math.random() * 600 - 300,
                Math.random() * 600 - 300,
            );
            star.velocity = 0;
            star.acceleration = 0.002;
            starGeo.vertices.push(star);
        }

        let sprite = new THREE.TextureLoader().load(p2);
        let starMaterial = new THREE.PointsMaterial({
            color: 0xaaaaaa,
            size: 0.7,
            map: sprite
        });

        let stars = new THREE.Points(starGeo, starMaterial);
        scene.add(stars);

        // light
        var light = new THREE.AmbientLight(0xffffff);
        scene.add(light);

        // adding planets to scene
        scene.add(planet);
        scene.add(planet1, planet2, planet3, planet4);

        ;
        // animations  
        var t1 = 0;
        var t2 = 0;
        var t3 = 0;
        var t4 = 0;

        const animate = function () {
            requestAnimationFrame(animate);

            starGeo.vertices.forEach(p => {
                p.velocity += p.acceleration
                p.x -= p.velocity;
                if (p.x < -200) {
                    p.x = 200;
                    p.velocity = 0;
                }
            })
            starGeo.verticesNeedUpdate = true;
            stars.rotation.y += 0.002;

            planet.rotation.x += 0.005;
            planet.rotation.y += 0.005;
            
                t1 += 0.003;
                t2 += 0.006;
                t3 += 0.009;
                t4 += 0.012;
            
            

            planet1.rotation.x += 0.005;
            planet1.rotation.y += 0.005;
            planet1.position.x = 2 * Math.cos(t1) + 0;
            planet1.position.z = 2 * Math.sin(t1) + 0;

            planet2.rotation.x += 0.005;
            planet2.rotation.y += 0.005;
            planet2.position.x = 3 * Math.cos(t2) + 0;
            planet2.position.z = 3 * Math.sin(t2) + 0;

            planet3.rotation.x += 0.005;
            planet3.rotation.y += 0.005;
            planet3.position.x = 4 * Math.cos(t3) + 0;
            planet3.position.z = 4 * Math.sin(t3) + 0;

            planet4.rotation.x += 0.005;
            planet4.rotation.y += 0.005;
            planet4.position.x = 5 * Math.cos(t4) + 0;
            planet4.position.z = 5 * Math.sin(t4) + 0;



            renderer.render(scene, camera);
        };

        animate();

        const interactionManager = new InteractionManager(
            renderer,
            camera,
            renderer.domElement
          );

          interactionManager.add(planet1);

          interactionManager.add(planet2);

          interactionManager.add(planet3);

          interactionManager.add(planet4);


          planet1.addEventListener("click", e =>{
            this.props.history.push('/planetM1');
            window.location.reload(false);
          })

          planet3.addEventListener("click",e=>{
              this.props.history.push('/planetBlue');
              window.location.reload(false);
          })

          planet4.addEventListener("click",e=>{
            this.props.history.push('/planetDark');
            window.location.reload(false);
        })

        planet2.addEventListener("click",e=>{
            this.props.history.push('/planetRed');
            window.location.reload(false);
        })

          window.addEventListener('resize', onResize, false);

          function onResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
          }

          window.addEventListener('keypress', e=>{
              console.log(e);
            if(e.key === "Escape") {
                this.props.history.push('/space');
                window.location.reload(false);
            }
         } )

            

         
        




    }

    render() {
        return (
            <div className='center'>
                {/*
            <img src={p1} alt="Planet1" className='p1' />
            <img src={p2} alt="Planet2" className='p2' />
            <img src={p3} alt="Planet3" className='p3' />
            <img src={p4} alt="Planet4" className='p4' />
            */}
            </div>
        )
    }
}

export default Space