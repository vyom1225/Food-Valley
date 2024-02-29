import logo from "../../food-mansion.jpg"
const Header = ()=>(
    <div className = "header">
        <div className = "logo-container">
            <img src = {logo} className = "logo"></img>
        </div>
        <div className = "list-container">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Login</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
)
export default Header;