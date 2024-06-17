import { Divider, Button } from "@mui/material";

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
const TitleDivider = (props) => {
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Divider sx={{
            "&::before, &::after": {
                borderColor: "black",
                borderWidth: "1px"
            },
        }}>
            <Button variant="contained" sx={{
                backgroundColor: "black", color: "white", fontSize: isMd ? 25 : 15, borderRadius: 100,
                "&:hover": {
                    backgroundColor: "black"
                }
            }}>
                {props.children}
            </Button>
        </Divider>
    )
}

export default TitleDivider