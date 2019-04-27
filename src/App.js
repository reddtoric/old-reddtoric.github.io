import React, { 
    Component, 
    Suspense, 
    lazy 
} from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

//components
import Nav, { NavToggle } from "components/Nav";


import './App.sass';


//pages
const IndexPage = lazy(() => import('./routes/index.js'));
const ProjectsPage = lazy(() => import('./routes/projects.js'));
const DisorientisPage = lazy(() => import('./routes/projects/disorientis.js'));
const NotFoundPage = lazy(() => import('./routes/404.js'));
const ComingSoonPage = lazy(() => import('./routes/comingsoon.js'));


const pages = [
  {
    id: 0,
    showInNav: true,
    path: "/",
    name: "About",
    component: IndexPage
  },{
    id: 1,
    showInNav: true,
    path: "/projects",
    name: "Projects",
    component: ProjectsPage
  },{
    id: 2,
    path: "/blog",
    name: "Blog",
    component: ComingSoonPage
  },{
    id: 3,
    path: "/projects/disorientis",
    name: "Disorentis",
    component: DisorientisPage
  }
];

// eslint-disable-next-line
{/*
//https://www.peterbe.com/plog/react-16.6-with-suspense-and-lazy-loading-components-with-react-router-dom
function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}
*/}


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
    }
    
    //required bind
    this.toggleNav = this.toggleNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }
  
  toggleNav() {
    this.setState((state) => ({
      showNav: !state.showNav,
    }));
  }
  
  closeNav(){
    this.setState({
      showNav: false,
    });
    
    //allows nav container to hide correctly when user uses keyboard
    document.activeElement.blur();
  }
  
  render(){
    const siteTitle = "Ed Devs";
    
    return(
      <Router>
        <React.Fragment>
          <header>
            <span className="site-title">{siteTitle}</span>
          </header>
          
          <NavToggle showNav={this.state.showNav} handleClick={this.toggleNav} />
          <Nav showNav={this.state.showNav} pages={pages} handleClick={this.closeNav} />
          
          <Suspense fallback={<main>Loading...</main>}>
            <Switch>
              {pages.map(page => (
                <Route 
                  key={page.id}
                  exact
                  path={`${process.env.PUBLIC_URL}${page.path}`}
                  component={page.component}
                />
              ))}
              <Route component={NotFoundPage} />
            </Switch>
          </Suspense>
        
          <footer>
            <span>&copy; 2017-{new Date().getFullYear()} {siteTitle}</span>
          </footer>
        </React.Fragment>
      </Router>
    )
  }
}