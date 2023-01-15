import { Dashboard, Error, Landing, Register } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="landing" element={<Landing />} />
			<Route path="register" element={<Register />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
}

export default App;
