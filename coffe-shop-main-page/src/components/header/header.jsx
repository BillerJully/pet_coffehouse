import './header.css'


function Header () {
    return (
    <header className='header'>
        <div className="container">
            <div className="header_row">
                <div className="main_name">
                    <h2>CoffeShop</h2>
                    </div>
               <nav className="header_nav">
                    <ul>
                        <li>
                            <a href='#!'>Main</a>
                        </li>
                        <li>
                            <a href='#!'>Coffee</a>
                        </li>
                        <li>
                            <a href='#!'>Menu</a>
                        </li>
                        <li>
                            <a href='#!'>Career</a>
                        </li>
                        <li>
                            <a href='#!'>Contact</a>
                        </li>
                    </ul>
               </nav>
               <div className="header_lang">
                    <span>ENG|RU</span>
               </div>
            </div>
        </div>   
    </header>
    )
}


export default Header
