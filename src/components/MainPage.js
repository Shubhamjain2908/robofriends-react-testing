import React, { Component } from 'react';
import CardList from './CardList';
import ErrorBoundry from './ErrorBoundry';
import Header from './Header';
import './MainPage.css';
import Scroll from './Scroll';
import SearchBox from './SearchBox';



class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
      })
  }

  render() {
    const { onSearchChange, isPending } = this.props;
    return (
      <div className='tc'>
        <Header/>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
