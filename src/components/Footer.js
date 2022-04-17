import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link'


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>

            <Link href="https://twitter.com/SonyaHammemi"  target="_blank" >
              <TwitterIcon />
            </Link>
            <Link href="https://www.pinterest.fr/soniafarhani/"  target="_blank" >
              <PinterestIcon />
            </Link>
            <Link href="https://www.instagram.com/soniahammemi/?hl=fr"  target="_blank" >
              <InstagramIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/sonia-hammemi/"  target="_blank" >
              <LinkedInIcon />
            </Link>
      
            <Link href="https://github.com/sonyahammemi"  target="_blank" >
              <GitHubIcon /> 
            </Link>

            <Link href="https://www.facebook.com/farhani.sonia/"  target="_blank" >
              <FacebookIcon />
            </Link>

        </div>
        <p> &copy; 2022 TunisianFood.com 😋 with ❤️ </p>
    </div>
  )
}

export default Footer