import StandardLayout from "../layouts/StandardLayout";
import ActivityCard from "../components/ActivityCard";
import DashboardClock from "../components/DashboardClock";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const dashboard = (
            <main>
                <div className="card-container">
                    <ActivityCard rowStart={1} colStart={1} rowSpan={2} colSpan={3} />
                    <ActivityCard rowStart={1} colStart={6} rowSpan={2} colSpan={3} />
                    <ActivityCard rowStart={3} colStart={2} rowSpan={2} colSpan={3} />
                    <ActivityCard rowStart={3} colStart={4} rowSpan={2} colSpan={3} />
                    <DashboardClock />

                </div>
                <style jsx>{`
                    main {
                        height: calc(100vh - 4rem);
                    }
                    .card-container {
                        display: grid;
                        width: 100%;
                        height: 100%;
                        background-color: var(--gray);
                        grid-template-columns: repeat(10, 1fr);
                        grid-template-rows: repeat(6, 1fr);
                    }
                `}</style>
            </main>
        )

        return (
            <StandardLayout page={dashboard} />
        )
    }
}

export default Dashboard;