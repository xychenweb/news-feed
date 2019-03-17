import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import Feeds from "./feed/feed";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                  <Grid centered columns={3} stretched>
                      <Grid.Column verticalAlign='middle'>
                          <Segment>
                            <Feeds/>
                          </Segment>
                      </Grid.Column>
                  </Grid>
            </div>
        );
    }
}

export default App;
