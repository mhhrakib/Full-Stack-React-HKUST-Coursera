// import logo from './logo.svg';
import './App.css';
// import { Navbar, NavbarBrand } from 'reactstrap';
// import Menu from './components/MenuComponent';
// import { DISHES } from './shared/dishes';
// import React, { Component } from "react";
// import DishDetail from './components/DishdetailComponent';


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dishes: DISHES
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         <Navbar dark color="primary">
//           <div className="container">
//             <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//           </div>
//         </Navbar>
//         <Menu dishes={this.state.dishes} />
//       </div>
//     );
//   }
// }

// export default App;


import Main from './components/MainComponent';
import React, { Component } from "react";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
