
import {AppBar,Toolbar,styled} from '@mui/material';

const Container = styled(AppBar)`
    background-color: #060606
`
const Header = () =>{
    return(
        <Container position="static">
            <Toolbar>
                 hello
            </Toolbar>

        </Container>
    )    
}

export default Header;