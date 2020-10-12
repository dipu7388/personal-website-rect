import { Component } from "react";
import React from "react";
import "./home.component.scss";
declare var anime: any;
declare var particlesJS: any;
export class HomeComponet extends Component {

  render() {

    particlesJS.load("particles-js", "/particlesjs-config.json", () => {
      console.log("callback - particles.js config loaded");
    });
    let ele= document.querySelector(".ml11 .letters");
    let rect;

    if(ele){
   rect=   ele.getBoundingClientRect();
   if(ele.textContent)
   ele.innerHTML=ele.textContent.replace(
    /([^\x00-\x80]|\w)/g,
    "<span class='letter'>$&</span>"
  );
    }
    // var textWrapper = document.querySelector(".ml11 .letters");
    // textWrapper!.innerHTML =  textWrapper!.textContent!.replace(
    //   /([^\x00-\x80]|\w)/g,
    //   "<span class='letter'>$&</span>"
    // );



    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml11 .line",
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700
      })
      .add({
        targets: ".ml11 .line",
        translateX: [
          0,
       rect ?   rect
            .width + 10 : 0
        ],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
      })
      .add({
        targets: ".ml11 .letter",
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=775",
        delay: (el: any, i: number) => 34 * (i + 1)
      })
      .add({
        targets: ".ml11",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
    return (
        <section className="page section-home">

        <div id="particles-js"><canvas className="particles-js-canvas-el" width="702" height="821"
            style={{width: "100%", height: "100%"}}></canvas></div>
    
        <div className="banner-text">
          <div className="profile-img">
            <img src="img/dheeru.png"  alt="Profile "/> 
          </div>
    
          <h4>Dheerendra Kumar Singh</h4>
    
          <h1 className="ml11">
              <span className="text-wrapper">
                <span className="line line1"></span>
                <span className="letters"> Web Developer</span>
              </span>
            </h1>
    
        </div>
    
      </section>
    );
  }
}