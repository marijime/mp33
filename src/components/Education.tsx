import {styled} from "styled-components";


const StyleMain = styled.main`
    height: 100%;
    background: #7a8e8bFF;
    width: 80%;

    @media screen and (max-width: 750px) {
        width: 100%;
    }
`
const Styleimages = styled.img`
    max-width: 100%;
    width: auto;
    height: auto;
    max-height: 300px;
    @media screen and (max-width: 750px) {
        max-width: 100%;
    }
    
`

const StyleimgWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 25%; /* Set your desired width */
    height: auto;
    margin-right: 10px;
`

const Stylefont = styled.div`
    font-size: calc(10px + 1vw);
`

export default function Education() {
    return (

        <StyleMain>
            <h2><b></b></h2>

            <StyleimgWrapper>

                <Styleimages src="logo.png" alt="Logo"/>
                <Styleimages src="boston-university.png" alt="Boston University"/>


            </StyleimgWrapper>
            <br/>
            <Stylefont>
            <p><b>June 2021</b></p>
            <p> Graduated from High School: Lindblom Math and Science Academy </p>
            <br/>
            <p> Boston University 2025: Bachelors of Arts and Sciences degree: Computer Science and Economics </p>
            <br/>
            <br/>

            <h3> Experiences</h3>
            <br/>
            <p> Scholar Program (2017 - Present) For first-generation students, students of color, and low-income
                students,
                the educational system presents challenges. These students, despite being high achievers, remain
                underrepresented
                at top colleges in the US. As of 2017 I have been a part of the Schuler Program.</p>
            <br/>
            <p> Global Glimpse Brave New Leaders Virtual Summer Academy (2020) Global Glimpse is all about facilitating
                meaningful connections between people from different backgrounds, even in the virtual world. Global
                Glimpse
                is a study abroad program based on both high school and college students. </p>
            <br/>
            <p> FLIP First-generation and/or low-income (2021 - present) College Organization that aims to help
                underrepresented
                groups in higher education. Boston University is a student-centered advocacy organization, unlike First
                Gen Connect,
                an administrative project.</p>
            <br/>

            <p>Alianza Latina (2021 - present) Alianza Latina is Boston University's largest Latinx student organization
                and, we are dedicated to providing BU students with programming that fosters community and encourages
                students to learn more about Latinx culture and identity, regardless of their own race or ethnicity.
            </p>

            </Stylefont>
        </StyleMain>

    )
}
