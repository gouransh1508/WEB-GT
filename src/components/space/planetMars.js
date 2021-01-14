import React, { Component } from 'react';
import * as THREE from 'three';

import bk from '../../assets/images/dusk_bk.jpg'
import dn from '../../assets/images/dusk_dn.jpg'
import ft from '../../assets/images/dusk_ft.jpg'
import lf from '../../assets/images/dusk_lf.jpg'
import rt from '../../assets/images/dusk_rt.jpg'
import up from '../../assets/images/dusk_up.jpg'
import back from '../../assets/images/back.png'


const OrbitControls = require('three-orbitcontrols');



class planetMars extends Component {
    componentDidMount() {
        
       let scene = new THREE.Scene();
       let  camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 45, 30000);
        camera.position.set(-2500, -1000, -2500);
       let renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        let controls = new OrbitControls(camera, renderer.domElement);
            controls.addEventListener('change', renderer);
            controls.minDistance = 500;
            controls.maxDistance = 1500;
        
            let materialArray = [];
            let texture_ft = new THREE.TextureLoader().load(ft);
            let texture_bk = new THREE.TextureLoader().load(bk);
            let texture_up = new THREE.TextureLoader().load(up);
            let texture_dn = new THREE.TextureLoader().load(dn);
            let texture_rt = new THREE.TextureLoader().load(rt);
            let texture_lf = new THREE.TextureLoader().load(lf);
              
            materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
            materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
            materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
            materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
            materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
            materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));

            for (let i = 0; i < 6; i++){
            materialArray[i].side = THREE.BackSide;
            }

            function animate() {
                renderer.render(scene,camera);
                requestAnimationFrame(animate);
                skybox.rotation.y += 0.009;
              }

         let skyboxGeo = new THREE.BoxGeometry( 10000, 10000, 10000);
         let skybox = new THREE.Mesh( skyboxGeo, materialArray );
         scene.add( skybox );  
         animate();

         window.addEventListener('resize', onResize, false);

         function onResize() {
           camera.aspect = window.innerWidth / window.innerHeight;
           camera.updateProjectionMatrix();
           renderer.setSize(window.innerWidth, window.innerHeight);
         }

         let back = document.querySelector('#back');;
         back.addEventListener('click',e =>{
             console.log(this.props);
             this.props.history.push('/space');
             window.location.reload(false);
         })


         

         
    }

    render() {
        return (
            <div className='center'>
                                     <img id='back' src={back} alt ='Back'></img>

            </div>
        )
    }
}

export default planetMars;