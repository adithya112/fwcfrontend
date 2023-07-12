import React, { Component } from 'react';
import MapFoodComp from './MapFoodComp';

class MapFood extends Component {
	constructor() {
		super();
		this.state = {
            lat: 12.5173,
            lng: 76.8800
		};
	  }
	render() {
		return(
			<div style={{ margin: '20px' }}>
				<MapFoodComp
					google={this.props.google}
					center={{lat:this.props.items.lat, lng: this.props.items.lng}}
					height='390px'  
					zoom={15}
				/>
			</div>
		);
	}
}

export default MapFood;