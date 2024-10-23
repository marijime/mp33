import {styled} from "styled-components";
import {Link} from "react-router-dom";



const StyledNav = styled.nav`
    width: 20%;
    display: flex;
    flex-direction: column;
    background-color: gray; /* gray background for the navbar */
    @media screen and (max-width: 750px) {
        width: 100%;
    }
    
`
const StyledUnordered = styled.ul`
    list-style-type: none;
    padding-left: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 0 auto;
    }
`

const StyledItem = styled.li`
    padding: 1% 3%;
    background-color: #567572FF; /* Sets the background color */
    margin: 10% auto;
    border: 5px solid white;
    @media screen and (max-width: 750px) {
        padding: 3% 1%;
    }
`

const StyledNavLink = styled(Link)`
    text-decoration: none;  /* No underline */
    color: black;  /* Text stays black */
    display: block;
    text-align: left;
    font-size: calc(2px + 1.5vw) ;
`


const NavLink = ({to, children}: {to: string, children: React.ReactNode}) => {
    return (

        <Link style={{padding: "0.5rem", margin: "0.25"}} to={to}>
            {children}
        </Link>
    )
}


export default function Navbar() {
    return (
            <StyledNav>
                <StyledUnordered>

                    <StyledItem>
                        <StyledNavLink to={`/`}> Home </StyledNavLink>
                    </StyledItem>

                    <StyledItem>
                        <StyledNavLink to={`/Education.tsx`}>Education</StyledNavLink>
                    </StyledItem>

                    <StyledItem>
                        <StyledNavLink to={`/Employment.tsx`}>Employment</StyledNavLink>
                    </StyledItem>

                    <StyledItem>
                        <StyledNavLink to={`/Achievements.tsx`}>Achievements</StyledNavLink>
                    </StyledItem>

                    <StyledItem>
                        <StyledNavLink to={`/references`}>References</StyledNavLink>
                    </StyledItem>

                    <StyledItem>
                        <StyledNavLink to={`/Projects.tsx`}>Projects</StyledNavLink>
                    </StyledItem>

                </StyledUnordered>

            </StyledNav>


    )

}

