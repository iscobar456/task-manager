class ActivityCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>

                <style jsx>{`
                    div {
                        display: grid;
                        grid-area: ${this.props.rowStart} / ${this.props.colStart} / span ${this.props.rowSpan} / span ${this.props.colSpan};
                        background-color: var(--brown);
                    }
                `}</style>
            </div>
        )
    }
}

export default ActivityCard;