import DefaultRouter from "../router/DefaultRouter";
import "./app.css";
import { GlobalStyles } from "@mui/material";

function App() {
    return (
        <div className="App">
            <div className={ "overlay" }>
                <GlobalStyles styles={ { body: { backgroundColor: "rgb(26, 35, 39)" } } }/>
                <DefaultRouter/>
            </div>
        </div>
    );
}

export default App;
