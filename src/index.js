import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
class App extends React.Component {
    state = { lat: null, long: null, errorMessage: '' }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({
                lat: position.coords.latitude,
                long: position.coords.longitude
            }),
            (error) => this.setState({
                errorMessage: error.message
            })

        )
    }

    renderContent() {
        // Show error
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        // Show data
        if (!this.state.errorMessage && this.state.lat && this.state.long) {
            return <SeasonDisplay lat={this.state.lat} long={this.state.long} />
        }


        return <Spinner message="Please accept location request" />
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))

if (module.hot) {
    module.hot.accept()
}