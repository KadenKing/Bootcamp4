import React from 'react';
import Card from 'react-bootstrap/Card'

class ViewBuilding extends React.Component {
	render() {
		const sb = this.props.data.find(item => item.id === this.props.selectedBuilding)
		return (
			<div>
					{this.props.selectedBuildin === 0 || !sb
						?

						<i>Click on a name to view more information</i>
						:
						<Card>
							<Card.Body>
								<Card.Title>{sb.name}</Card.Title>
								<Card.Subtitle className="mb-2 text-muted">{sb.code}</Card.Subtitle>
								<Card.Text>
									Address: {sb.address ? sb.address : "Unknown"}
    							</Card.Text>
								<Card.Text>
									Lat: {sb.coordinates ? sb.coordinates.latitude : "Unknown"}
    							</Card.Text>
								<Card.Text>
									Long: {sb.coordinates ? sb.coordinates.longitude : "Unknown"}
    							</Card.Text>
							</Card.Body>
						</Card>
					}
			</div>
		);
	}
}
export default ViewBuilding;
