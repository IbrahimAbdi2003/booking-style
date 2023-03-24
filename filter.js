handleClick = (rating) => {
    if (rating === "3") {
      this.setState({ filteredAttractions: this.state.attractions.filter(attraction => attraction.ratings <= 3) });
    } else if (rating === "4") {
      this.setState({ filteredAttractions: this.state.attractions.filter(attraction => attraction.ratings === 4) });
    } else if (rating === "5") {
      this.setState({ filteredAttractions: this.state.attractions.filter(attraction => attraction.ratings === 5) });
    } else {
      this.setState({ filteredAttractions: this.state.attractions });
    }
  }

  <div className='filter-buttons'>
            <button onClick={() => this.handleClick("3")}>3 Stars or Less</button>
            <button onClick={() => this.handleClick("4")}>4 Stars</button>
            <button onClick={() => this.handleClick("5")}>5 Stars</button>
            <button onClick={() => this.handleClick("all")}>All Attractions</button>
          </div>
// class Filter extends Component {
//   handleClick = (rating) => {
//     // Call the onFilter function passed in as a prop with the selected rating
//     this.props.onFilter(rating);
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={() => this.handleClick(3)}>3 Stars or Less</button>
//         <button onClick={() => this.handleClick(4)}>4 Stars</button>
//         <button onClick={() => this.handleClick(5)}>5 Stars</button>
//       </div>
//     );
//   }
// }

// fix the 404 issue


<Switch>
        <Route path="/" exact>
          <Showcase/>
          <br/>
          <br/>
          <Home />
          <Middle />
          <br />
          <Slider />
          <br />
        </Route>
        <Route exact path="/attractions" component={Attractions} />
        <Route path="/addattractions" component={addAttractions} />
        <Route path="/booking" component={Booking} />
        <Route path="/about" component={About} />
        <Route path="/contactus" component={Contact} />
        <Route exact path='/attractions/:id' component={oneAttraction} />
        <Route component={page} />
      </Switch>
      <Footer />
    </Router>
  );
}