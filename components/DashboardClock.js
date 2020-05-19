
class DashboardClock extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.constructDashClock();
    }

    constructDashClock() {
        const clock = this.refs.dashClock.getContext("2d");

        // Set canvas dimensions equal to grid container
        this.refs.dashClock.height = this.refs.dashClock.parentElement.offsetHeight;
        this.refs.dashClock.width = this.refs.dashClock.parentElement.offsetWidth;
        
        clock
    }

    render() {
        return (
            <div className="dash-clock-container">
                <canvas ref="dashClock" />
                <style jsx>{`
                    .dash-clock-container {
                        display: grid;
                        grid-area: 6 / 4 / 7 / 8;
                        background-color: beige;
                    }
                `}</style>
            </div>
        )
    }
}

export default DashboardClock;