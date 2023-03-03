import { MDBBtn } from 'mdb-react-ui-kit';
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter,} from 'mdb-react-ui-kit';

function Dashboard() {
    return (
        <>
            <section >
                <MDBCard d-inline-flex p-2 >
                    <MDBCardHeader>Centre</MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle>Auteur </MDBCardTitle>
                        <MDBCardText>La socité a pour but de .</MDBCardText>
                    </MDBCardBody>
                    <MDBCardFooter className='text-muted'>Light Map</MDBCardFooter>
                </MDBCard>
            </section>
            
        <>
                <MDBBtn className='me-1' color='secondary' href='/Creer'>
                Creer
            </MDBBtn>
            <MDBBtn className='me-2' color='secondary'>
                Modifier
            </MDBBtn>
            <MDBBtn className='me-3' color='secondary'>
                Afficher
            </MDBBtn>
        </></>
        
   );
}

export default Dashboard;