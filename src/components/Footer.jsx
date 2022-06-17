import React from 'react'
import { Instagram } from '@material-ui/icons'
import { Twitter } from '@material-ui/icons'
import { Facebook } from '@material-ui/icons'
import { LinkedIn } from '@material-ui/icons'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <Instagram />
                <LinkedIn />
                <Facebook />
                <Twitter />
            </div>
            <p> &copy; 2022 Neel Ratan Guria</p>
        </div>
    )
}

export default Footer