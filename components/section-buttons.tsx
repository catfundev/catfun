import React from 'react';
import {Container as MuiContainer, Grid, Stack, styled, Typography as MuiTypography} from "@mui/material";
import Button from "./button";
import Image from "next/image";
import SectionImage from "../assets/TRANSPARANT 2.png";
import Section from "./section";

const Typography = styled(MuiTypography)`
  color: whitesmoke;
`

const Container = styled(MuiContainer)`
  justify-content: center;
  align-items: center;
  margin: auto;
  display: flex;
`

function SectionButtons() {
    return (
        <Section>
            <Grid container spacing={1}>
                <Grid item sm={12} md={6}>
                    <Container>
                        <Stack spacing={1}>
                            <Typography variant={'h6'}>Catcoin with Mcdonald&apos;s, Elon Musk. What kind of sparks will the three produce?</Typography>
                            <Typography variant={"h3"} sx={{fontWeight: 'bold'}}>$CATFUN</Typography>
                            <Typography >ARE YOU READY TO DIE LAUGHING, BECAUSE WE GOING TO MCDONALD&apos;S, JOIN CATFUN COMMUNITY, HAVING FUN WHILE WE EAT BIGMAC MEAL</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Button variant={'outlined'} href={'https://thesphynx.co/launchpad/live/40/56'} >PRESALE</Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button variant={'outlined'} href={'https://pancakeswap.finance/'} >PANCAKESWAP</Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button variant={'outlined'} href={'https://www.dextools.io/app/bsc'} >DEXTOOLS</Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button variant={'outlined'} href={'https://bscscan.com/token/0xaff35436558e8ea27f6b4c728d042b22381bc038'} >BSCSCAN</Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button variant={'outlined'} href={'https://coinmarketcap.com/'} >CMC</Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button variant={'outlined'} href={'https://www.coingecko.com/'} >CG</Button>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Container>
                </Grid>
                <Grid item sm={12} md={6} sx={{margin: 'auto'}}>
                    <Container>
                        <Image alt={'section image'} src={SectionImage} width={'300em'} height={"250em"}
                               />
                    </Container>
                </Grid>
            </Grid>
        </Section>
    );
}

export default SectionButtons;
