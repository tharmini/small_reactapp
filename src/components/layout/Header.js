import React from 'react'
import { Link} from 'react-router-dom'
function Header(){
    return(
        <header style={headerstyle}>
            <h1>Todo List</h1>
            <Link style={headerstyle} to="/">Home</Link> |
            <Link  style={headerstyle} to="/about">About</Link>

        </header>
    )

}
const headerstyle={
    backgroundColor:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'5px 10px',
    border:'none',
    float:'up',
    cursor:'pointer'
}
export default Header;  