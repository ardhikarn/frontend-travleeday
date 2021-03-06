import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/LandingPage/Hero";
import MostPicked from "parts/LandingPage/MostPicked";
import Categories from "parts/LandingPage/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

// Data Dummy
import landingPage from "json/landingPage.json";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    document.title = "Travleeday | Home";
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Categories data={landingPage.categories} />
        <Testimony data={landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}
