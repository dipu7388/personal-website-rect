import React from 'react';
import './App.scss';
import { HeaderComponet } from './components/header/header.component';
import { Route } from 'react-router-dom';
import { AboutComponet } from './components/About/about.component';
import { ResumeComponet } from './components/Resume/resume.component';
import { ContactComponet } from './components/Contact/contact.component';
import { HomeComponet } from './components/home/home.components';

function App() {
  return (
    <div className="App">
    <HeaderComponet />
    <div className="pages-stack" 
    // [ngClass]="{'active':( menuFlag$| async) , 'inactive': !( menuFlag$| async)}"
    >
    <div className="simplebar-scroll-content" >
        <div className="simplebar-content" >
          <Route exact path="/" component={HomeComponet}/>
          <Route path="/About" component={AboutComponet}/>
          <Route path="/Resume" component={ResumeComponet}/>
          <Route path="/Contact" component={ContactComponet}/>

        </div>
      </div>
</div>
    </div>
  );
}

export default App;
