import { Component } from "react";
import React from "react";
import {  Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FooterComponet } from "../footer/footer.component";
import './header.component.scss';
export let socialItemsArray:Array <{name: string, url: string,icon: string}>=[
    {name:"Fork me on Github", icon: "fab fa-github", url:"https://github.com/dipu7388"},
    {name:"View Profile on Linkedin", icon: "fab  fa-linkedin-in", url:"https://www.linkedin.com/in/dheerendra-kumar-singh-8b8b4b103/"},
    {name:"Follow me on Twitter", icon: "fab fa-twitter", url:"https://twitter.com/dhirend92095087"},
    {name:"Follow me on Facebook", icon: "fa fa-facebook-f", url:"https://www.facebook.com/dipusingh7388"},
    {name:"Follow me on Instagram", icon: "fa fa-instagram", url:"https://www.instagram.com/dheeru.1194/"},
  ];
export class HeaderComponet extends Component {
    menu:Array <{name: string, url: string,icon: string}>=[
        {name: "About", url: "/About", icon: "fas  fa-home"},
        {name: "Resume", url: "/Resume", icon: "fas fa-user"},
        {name: "Contact", url: "/Contact", icon : 'fas fa-envelope'}
      ]
      socialItems= socialItemsArray;
    
  render() {
    return (
      <header>
        <Route
          
          path="/"
          render={() => (
            <Link to="/">
            <span>DK</span>
            </Link>
          )}
        />
           {/* navigation button */}
  <div className="menu-button "
//    #menubutton (click)="toggle()"  [ngClass]="{'active':( menuFlag$| async)}"
   >
    <span></span>
    <span></span>
    <span></span>
  </div>

  {/* <!-- navigation menu --> */}
  <nav className="nav-menu " 
//    [ngClass]="{'active':( menuFlag$| async)}"
>
   
{this.menu.map((m)=>{
      
      return (
       <React.Fragment key={m.name}>
            <div className="nav-menu--links" >
       <Link className="nav-menu--link" to={m.url} 
       //   (click)="close()" href="#home" *ngFor="let m of menu" [routerLink]="[m?.url]" routerLinkActive="active" 
         >
       <i 
       className={m.icon}
         >
       </i>
       <span>{m.name}</span>
       </Link>
       </div>
       </React.Fragment>
      )
      })}

    {/* <!-- social links --> */}
    <div className="social-links">
     {this.socialItems.map((social)=>{
          return(
            <Link className="social-link" key={social.name} title={social.name}
            //    (click)="close()" [title]="social?.name" href="{{social?.url}}" 
            to={social.url}
               >
                <i className={social.icon}></i>
              </Link>
          )
     })}
    </div>
    {/* <!-- footer --> */}
    <FooterComponet/>

  </nav>
      </header>
    );
  }
}
