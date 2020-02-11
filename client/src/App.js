import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './ui/screens/Home';
import Stream from './ui/screens/Stream';
// import Contact from './ui/screens/Contact';
import NavBar from './ui/components/NavBar';
import Footer from './ui/components/Footer';
// import ScrollToTop from './ui/components/ScrollToTop';
import './styles/styles.scss';

function App() {
    return (

        <Router>
            {/* <ScrollToTop> */}
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/stream" component={Stream} />
                </Switch>
                <Footer />
            {/* </ScrollToTop> */}
        </Router>
    );
}

export default App;
