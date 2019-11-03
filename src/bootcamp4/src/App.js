import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      buildings: props.data,
    };
  }

  filterUpdate = value => {
    this.setState({
      ...this.state,
      filterText: value,
    })
    //Here you will need to set the filterText property of state to the value passed into this function
  }

  selectedUpdate = id => {
    this.setState({
      ...this.state,
      selectedBuilding: id,
    })
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
  }

  deleteBuilding = id => {
    this.setState({
      ...this.state,
      buildings: this.state.buildings.filter(b => b.id !== id),
    })
  }

  addBuilding = newBuilding => {
    const newId = this.state.buildings.reduce((agg, building) => building.id > agg.id ? building : agg).id + 1
    newBuilding.id = newId
    this.setState({
      ...this.state,
      buildings: [newBuilding, ...this.state.buildings]
    })
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search onChange={this.filterUpdate}/>
        <main>
          <div className="row">
            <div className="column1">
            <AddBuilding onAdd={this.addBuilding}></AddBuilding>

              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.buildings}
                    filter={this.state.filterText}
                    deleteBuilding={this.deleteBuilding}
                    onSelectBuilding={this.selectedUpdate}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding selectedBuilding={this.state.selectedBuilding} data={this.state.buildings} />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
