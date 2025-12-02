import '../styles/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedinIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <InstagramIcon />
            <FacebookIcon />
            <LinkedinIcon />
        </div>
        <p> &copy; 2025 wariopizza.com</p>
    </div>)
}