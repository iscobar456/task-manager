import Navbar from "../components/Navbar";

const StandardLayout = (props) => {
    return (
        <div>
            <Navbar />
            {props.page}
            <style jsx>{`
                div {
                    width: 100%;
                    min-height: 100vh;
                }
            `}</style>
            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }

                * {
                    box-sizing: border-box;
                }
                
                :root {
                    --dark-blue: #0e1a40;
                    --blue: #222f5b;
                    --gray: #5d5d5d;
                    --brown: #946b2d;
                    --dark: #000000; 
                }
            `}</style>
        </div>
    )
}

export default StandardLayout;