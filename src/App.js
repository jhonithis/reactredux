import { Component } from "react";
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

import {Provider} from "react-redux"
import store from "./store"

import Video from "./components/Video";
import Sidebar from "./components/Sidebar";
import { Container, Grid } from "@material-ui/core";

class App extends Component {

  render() {
    return (
      <Provider store={store} >
        <MuiThemeProvider theme={createMuiTheme()}>
          <Container className="App">
            <Grid container spacing={3}>

              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Sidebar />
              </Grid>

              <Grid item xs={12} sm={6} md={2} lg={6}>
                <Video />
              </Grid>

            </Grid>
          </Container>
        </MuiThemeProvider>
      </Provider>
    )
  }

}

export default App;