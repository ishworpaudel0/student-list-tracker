import { Outlet } from "react-router-dom";
import './StudentDetailLayout.css'

const StudentDetailLayout = () => {
    return (
        <div className="Layout">
            {/* This is just a placeholder for different components to be rendered based on the nested route. Please select an option above. */}
            <Outlet />
        </div>
    )
}

export default StudentDetailLayout