// CSS
import "./App.css"

// Components
import Dropzone from "./components/Dropzone"

// React-Toastify
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
	return (
		<>
			<Dropzone />
			<ToastContainer />
		</>
	)
}

export default App
