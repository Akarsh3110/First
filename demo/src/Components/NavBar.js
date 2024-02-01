
import {Link,useMatch,useResolvedPath} from 'react-router-dom'
function NavBar() {
  return (
    <nav className='nav'>
        <ul>
        
            <CustomLink to='/' className='home'>Home</CustomLink>
            <CustomLink to='/about' className='about'>About</CustomLink>
            <CustomLink to='/contact' className='contact'>Contact</CustomLink>
            
        </ul>
    </nav>
  )
}

function CustomLink({to,children,...props}){
    const resolvedPath=useResolvedPath(to)
    const isActive=useMatch({path:resolvedPath.pathname,end:true})
    return(
        <li className={path===to?'active':""}>
            <Link to={to}{...props}>
              {children}
            </Link>
        </li>
    )
}

export default NavBar;