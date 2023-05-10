import * as React from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import logo from "../../img/logo.png";
import MenuIcon from '@mui/icons-material/MenuSharp'
import { useMediaQuery } from "@mui/material";


const StyledAppBar = styled(AppBar)({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  background: "transparent",
  boxShadow: "none",
  transition: "all 0.3s ease-in-out",

  "&.scrolled": {
    background: "white",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    color: "black",
    zIndex: 9999,
  },
});

const StyledTypography = styled(Typography)({
  flexGrow: 1,
  color: "black",
  "&.scrolled": {
    color: 'rgb(214, 137, 16 )',
  },
});

function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const [showIcon,setShowIcon] = React.useState(true);


  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  }

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  }

  return (
    <StyledAppBar className={scrolled ? "scrolled" : ""} position="static">
      <Toolbar>
        <StyledTypography variant="h6" component="div">
          <img
            src={logo}
            style={{ width: "200px", backgroundColor: "white" }}
          />
         <div style={{ display: "flex", justifyContent: "center", color:'rgb(214, 137, 16 )' }}>
  {!isMobile ? (
    <>
      <h6 style={{ marginRight: "30px",backgroundColor:'white',padding:'5px',borderRadius:'8px', textDecoration:'none' }}><a href="#animatetext">WHAT WE OFFER</a></h6>
      <h6 style={{ marginRight: "30px",backgroundColor:'white',padding:'5px',borderRadius:'8px' }}><a href="#carrusel1"> INVESTMENT CRITERIAL</a></h6>
      <h6 style={{ marginRight: "30px",backgroundColor:'white',padding:'5px',borderRadius:'8px' }}><a href="#form">INVESTMENT FORM</a></h6>
      <h6 style={{ marginRight: "30px",backgroundColor:'white',padding:'5px',borderRadius:'8px' }}><a href="#team">TEAM</a></h6>
    </>
  ) : null}
</div>
{showIcon && (
          <IconButton onClick={handleMenuOpen} sx={{ display: { xs: 'block', sm: 'none' } }}>
            
            <MenuIcon />
          </IconButton>
)}
        </StyledTypography>
      </Toolbar>
      {isMenuOpen && (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white', position: 'absolute', top: '64px', left: 0, right: 0, zIndex: 9999 }}>
<p onClick={() => { handleMenuClose()
setShowIcon(true);
}}>x</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem' }}>
        <h6 style={{ marginBottom: '1rem' }}><a href="#animatetext">WHAT WE OFFER</a></h6>
        <h6 style={{ marginBottom: '1rem' }}><a href="#carrusel1"> INVESTMENT CRITERIAL</a></h6>
        <h6 style={{ marginBottom: '1rem' }}><a href="#form">INVESTMENT FORM</a></h6>
        <h6 style={{ marginBottom: '1rem' }}><a href="#team">TEAM</a></h6>
        </div>
        </div>
        )}
        </StyledAppBar>
        );
        }
        
        export default Navbar;
        
        
        
        
        
        
        
