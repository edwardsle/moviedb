import React, {Component} from 'react';
import CarouselPage from './CarouselPage';
import FeaturedToday from './FeaturedToday';
import BrowsePage from './BrowsePage';
import axios from 'axios';

class Home extends Component{
  state = {

  };
  componentDidMount(){
    axios.get("http://localhost:3001/user/isLogin", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      }
    })
    .then((res)=>{
      console.log()
      this.setState({
        user: res.data
      })
    })
  }
  render() {
    console.log(this.state.user);
    return (
      <div className="mt-1">
        <CarouselPage />
        <FeaturedToday />
        <BrowsePage />
      </div>
    );
  }
}

export default Home;
