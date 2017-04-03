//In the components/Spaceship.js file, create a Spaceship React component
//This component has several props:
//name (string)
//speed (number)
//hasRockets (boolean, defaults to false)
//colors (array of strings, defaults to ['black', 'red'])

const React = require('react')

class Spaceship extends React.Component {
	render() {
		return(
			<div>
				<h1>{this.props.name}</h1>
				<p>{this.props.speed}</p>
				<p>{this.props.hasRockets ? 'yes' : 'no'}</p>
				<p>{this.props.colors.join(', ')}</p>
			</div>
		)
	}
}

Spaceship.defaultProps = {
	hasRockets: false,
	colors: ['black', 'red']
}

module.exports = Spaceship