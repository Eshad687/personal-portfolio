import { Button } from "@mui/material";
import { styled } from "@mui/system";

const CustomButton = styled(Button)({
    background: 'transparent',
    border: '1px solid springgreen',
    color: 'springgreen',
    fontWeight: 500,
    padding: '7px 15px',
    '&:hover': {
        backgroundColor: 'springgreen',
        color: 'black',
    }
})
export default CustomButton;