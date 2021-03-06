// import "./App.css";
import AuthProvider from "./contexts/AuthContext";
import Routes from "./Routes";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </div>
    );
}

export default App;
