import React from 'react';

const Footer=()=> {
    const date = new Date();
    const year = date.getFullYear()
    return(
        <footer className='py-3'>
            <div className='text-white text-center text-capitalize'>&copy; {year} copy right by MuhammedMostafaSalem</div>
        </footer>
    )
}
export default Footer;