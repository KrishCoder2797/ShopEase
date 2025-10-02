// Importing MUI

import {InputBase,Box,styled} from '@mui/material' ;
import SearchIcon from '@mui/icons-material/Search' ;

// Applying CSS

const SearchContainer = styled(Box)`
background:#fff;
width:38%;
border-radius:2px;
margin-left:10px;
display:flex
`;

const InputSearchBase = styled(InputBase)`
padding-left :20px;
width:100%;
font-size :unset
` ;

const SearchIconWrapper = styled(Box)`
color:blue;
padding :5px;

`;

// Search Bar
const search = ()=>{

    return(
        <SearchContainer>
        <InputSearchBase
        placeholder='search for products,brands and more'
        />
        <SearchIconWrapper>
            < SearchIcon/>
        </SearchIconWrapper>
        </SearchContainer>
        )
}

export default search ;