import React from 'react';
import Section from "./section";
import {Stack, styled, Typography as MuiTypography} from "@mui/material";

const MySection = styled(Section)`
  background-image: linear-gradient(to top right, #ec1212, #cd1313);
`

const Typography = styled(MuiTypography)`
  color: whitesmoke;
  text-align: center;
  padding-bottom: 1em;
  padding-top: 1em;
`

function SectionInfoBoard() {
    return (
        <MySection>
            <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={1.5}
                width={"100%"}
                flexWrap={"wrap"}
            >
                <Typography>Contract Address<br/>0xaFf35436558E8ea27f6b4c728d042B22381bc038</Typography>
                <Typography>Token Supply<br/>1,000,000,000,000,000</Typography>
                <Typography>Max Wallet<br/>
                    1%</Typography>
                <Typography>Initial burn<br/>
                    40%</Typography>
                <Typography>Burn per transaction<br/>
                    1%<br/>(auto deflationary)</Typography>
                <Typography>Official email<br/>
                    support@catfun.io</Typography>
            </Stack>
        </MySection>
    );
}

export default SectionInfoBoard;
