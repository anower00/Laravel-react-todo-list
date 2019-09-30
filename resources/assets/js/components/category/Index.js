import React, { Component } from 'react';
import {BrowserRouter as Router, Link ,Route} from 'react-router-dom';
import Add from './Add';
import Listing from './Listing';
import Edit from './Edit';

export default class About extends Component {
    render() {
        return (
            <div>
                <Router>
                    <hr />
                <Link to="/category" className="btn btn-primary">Listing </Link> &nbsp;
                <Link to="/category/Add" className="btn btn-primary">Add </Link>


                <Route exact path='/category' component={Listing} />
                <Route exact path='/category/add' component={Add} />
                <Route exact path='/category/edit/:id' component={Edit} />
                </Router>
            </div>
        );
    }
}

