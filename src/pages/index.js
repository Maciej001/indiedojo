import React, { Component } from "react";
import { injectGlobal, ThemeProvider } from "styled-components";

import { FluidContainer, Container, ContainerSmall, Row, Cell } from "../components/grid/Grid";
import { Header } from "../components/header/Header";
import { getTheme } from "../components/Theme";
import { WithPadding, H1 } from "../components/components/Base";

import Jumbo from "../components/home/Jumbo";
import Topics from "../components/home/Topics";
import Newsletter from "../components/home/Newsletter";
import WhatIsIt from "../components/home/WhatIsIt";
import Info from "../components/home/Info";
import Program from "../components/home/Program";

import Trainers from "../components/home/Trainers";
import Faqs from "../components/home/Faqs";
import Subscribe from "../components/home/Subscribe";
import Booking from "../components/home/Booking";
import WebsiteHead from '../components/home/WebsiteHead'
import '../components/main.css'

// Sets global css
injectGlobal`
  @font-face {
    font-family: 'Zilla Slab';
    src: url('https://fonts.googleapis.com/css?family=Zilla+Slab:400,400i,700,700i');
  }

  body, html, *, li {
    font-family: 'Zilla Slab', helvetica, sans-serif;
  }
  h1, h2, h3, h4, h5, h6, p{
    margin: 0;
  }
  body, html {
    margin: 0;
    font-size: 16px;
  }
`;

// Some css theme params depend on window width.
class Index extends Component {
  state = {
    windowWidth: 0,
    isMobile: false
  };

  componentDidMount() {
    window.addEventListener("resize", this.onWindowResize);
    this.setState({
      windowWidth: window.innerWidth,
      isMobile: window.innerWidth <= 600
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize);
  }

  onWindowResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
      isMobile: window.innerWidth <= 600
    });
  };

  render() {
    return (
      <ThemeProvider theme={getTheme(this.state.windowWidth)}>
        <div>
          <WebsiteHead />
          <FluidContainer>
            <Jumbo
              isMobile={this.state.isMobile}
              windowWidth={this.state.windowWidth}
            />
            {/*<Subscribe isMobile={this.state.isMobile} />*/}
            <WhatIsIt />
          </FluidContainer>

          <Topics/>

          <Newsletter/>

          <FluidContainer>
            <ContainerSmall>
              <Info isMobile={this.state.isMobile} />
            </ContainerSmall>

            <Container>
              <Program isMobile={this.state.isMobile} />
              <Trainers isMobile={this.state.isMobile} />
            </Container>

            <Container>
              <WithPadding padding="xl">
                <Booking isMobile={this.state.isMobile} />
              </WithPadding>
            </Container>
          </FluidContainer>

          <Faqs isMobile={this.state.isMobile} />
        </div>
      </ThemeProvider>
    );
  }
}

export default Index;
