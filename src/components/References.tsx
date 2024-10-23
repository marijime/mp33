import {styled} from "styled-components";


const StyleMain = styled.main`
    height: 100%;
    background: #7a8e8bFF;
    width: 80%;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
    
`

const StyledTr = styled.tr`
  border: 1px solid black;
    
`

const StyledTh = styled.th`
  border: 1px solid black;
  font-size: calc(2px + 2vw);
    
`

const StyledTd = styled.td`
  border: 1px solid black;
  font-size: calc(2px + 2vw);
    
`
const StyledH2 = styled.h2`
  font-size: calc(10px + 2vw); 
`
const StyledH3 = styled.h3`
  font-size: calc(10px + 1.5vw); 
`
const StyledH4 = styled.h4`
  font-size: calc(10px + 1.5vw);
`

export default function References() {
    return (
        <StyleMain>
            <StyledH2><b>References</b></StyledH2>
            <br/>
            <br/>
            <StyledH3><b>Professional</b></StyledH3>

            <StyledTable>
                <StyledTr>
                    <StyledTh>Name</StyledTh>
                    <StyledTh>email</StyledTh>
                    <StyledTh>Phone Number</StyledTh>
                    <StyledTh>Relation</StyledTh>
                </StyledTr>
                <StyledTr>
                    <StyledTd>Nicholas Anaya</StyledTd>
                    <StyledTd>njanaya@cps.edu</StyledTd>
                    <StyledTd>123-456-7890</StyledTd>
                    <StyledTd>Teacher</StyledTd>
                </StyledTr>
                <StyledTr>
                    <StyledTd>Mayra</StyledTd>
                    <StyledTd>mayra@lacasanorte.org</StyledTd>
                    <StyledTd>312-783-5009</StyledTd>
                    <StyledTd>Boss</StyledTd>
                </StyledTr>
                <StyledTr>
                    <StyledTd>Roshanda Martin</StyledTd>
                    <StyledTd>Roshanda.Martin@mattel.com</StyledTd>
                    <StyledTd>312-288-2837</StyledTd>
                    <StyledTd>Boss</StyledTd>
                </StyledTr>
                <StyledTr>
                    <StyledTd>Andrew</StyledTd>
                    <StyledTd>alex.anderkw@gmail.com</StyledTd>
                    <StyledTd>312-783-5009</StyledTd>
                    <StyledTd>Boss</StyledTd>
                </StyledTr>


            </StyledTable>
            <br/>

            <StyledH4><b>Personal</b></StyledH4>

            <StyledTable>
                <StyledTr>
                    <StyledTh>Name</StyledTh>
                    <StyledTh>email</StyledTh>
                    <StyledTh>Phone Number</StyledTh>
                    <StyledTh>Relation</StyledTh>
                </StyledTr>
                <StyledTr>
                    <StyledTd>Jimmy Lara</StyledTd>
                    <StyledTd>jimmylara@cps.edu</StyledTd>
                    <StyledTd>773-241-9553</StyledTd>
                    <StyledTd>Coworker</StyledTd>
                </StyledTr>


                <StyledTr>
                    <StyledTd>Jazmin Reyes</StyledTd>
                    <StyledTd>jazmiinreyess@bu.edu</StyledTd>
                    <StyledTd>831-537-3760</StyledTd>
                    <StyledTd>Coworker(Data Scientist)</StyledTd>
                </StyledTr>

                <StyledTr>
                    <StyledTd>Casy Krause</StyledTd>
                    <StyledTd>caseykrause@gmail.com</StyledTd>
                    <StyledTd>312-405-3919</StyledTd>
                    <StyledTd>Schuler Outreach director</StyledTd>
                </StyledTr>

            </StyledTable>


        </StyleMain>
    )
}