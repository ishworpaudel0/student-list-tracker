import './Header.css'
interface HeaderProps{
    title:string;
    description:string;
    logo:string;
}
const Header=({title,description,logo}: HeaderProps)=> {
    return(
        <header className='header'>
            <div className='header-container'>
                <img src={logo} alt="School Logo" className="header-logo" />
                <div className='header-text'>
                    <h1 className='header-title'>{title}</h1>
                    <p className='header-description'>{description}</p>
                </div>
            </div>

           
        </header>
    )
    
}
export default Header;