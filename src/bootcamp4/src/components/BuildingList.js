import React from 'react';
import RemoveBuilding from './RemoveBuilding';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data } = this.props;

		const filteredData = this.props.filter !== "" ? data.filter(directory => directory.name.toLowerCase().includes(this.props.filter.toLowerCase())) : data

		const buildingList = filteredData.map(directory => {
			return (
				<tr key={directory.id} >
					<td>{directory.code} </td>
					<td onClick={() => this.props.onSelectBuilding(directory.id)}> {directory.name} </td>
					<td onClick={() => this.props.deleteBuilding(directory.id)}><RemoveBuilding></RemoveBuilding></td>
				</tr>
			);
		});

		return <tbody>{buildingList}</tbody>;
	}
}
export default BuilingList;
