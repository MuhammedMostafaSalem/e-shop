import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
    state = {clicked : false}
    handleClick=()=> {
        this.setState({clicked: !this.state.clicked})
    }
    

    render(){

        const activeLink = ({isActive})=> (isActive ? "activeLink" : '');

        return(
            <header className='sticky-top py-3'>
                <Container>
                    <div className='d-flex'>
                        <div className='logo'>
                            <Link to="/" className='Link text-decoration-none'>
                                <h3 className='text-white'>e<span>Shop</span>.</h3>
                            </Link>
                        </div>

                        <Nav className='nav ms-auto'>
                            <ul id='listGroup' className={this.state.clicked ? "active" : "#listGroup"}>
                                <li>
                                    <NavLink to='/' className={activeLink} end>home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/contact' className={activeLink} >contact us</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/login' className={activeLink} >log-in</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/register' className={activeLink} >register</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/order-history' className={activeLink} >my order</NavLink>
                                </li>
                                <li>
                                    <Link to='/cart' className='text-decoration-none text-white d-flex'>
                                        cart <span><FontAwesomeIcon icon={faCartShopping} /></span>
                                        <p>0</p>
                                    </Link>
                                </li>
                            </ul>
                        </Nav>

                        <div className='menuIcon text-white fs-4 d-none' onClick={this.handleClick}>
                            <i id='bar' className={this.state.clicked ? 'fa-solid fa-times' : 'fa-solid fa-bars'}></i>
                        </div>
                    </div>
                </Container>
            </header>
        )

    }
}
export default Header;