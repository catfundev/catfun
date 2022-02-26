import Section from "./section";
import {Stack, styled, Typography as MuiTypography} from "@mui/material";
import Card from "./card";

const Typography = styled(MuiTypography)`
  color: whitesmoke;
`

const MyStack = styled(Stack)`
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`

function SectionCards() {
    return (
        <Section>
            <Stack sx={{width: '100%'}}>
                <Typography variant={"h2"} align={'center'}>FUNMAP</Typography>
                <Typography align={'center'}>WHEN MOON? WHEN LAMBO? WHEN BIGMAC?</Typography>
                <MyStack direction={'row'} py={5} spacing={1}>
                    <Card
                        title={<Typography>JOKE<br/>(Development)</Typography>}
                        select={false}
                        features={["DEVELOPMENT OF PROJECT","WHITEPAPER LAUNCH",
                            "WEBSITE LAUNCH",
                            "PRIVATE SALE (50 BNB)",
                            "DEPLOY SMART CONTRACT ON BSC",
                            "KYC+AUDIT",
                            "PRESALE MARKETING (PROMOS)",
                            "PRESALE AMAs",
                            "BUILDING TELEGRAM COMMUNITY",
                            "SWEEPWIDGET FOR WHITELIST PRESALE",
                            "PRESALE ON SPHYNX (300 BNB HC)",]}
                    />
                    <Card
                        title={<Typography>MEMES<br/>(Phase 1)</Typography>}
                        select={false}
                        features={["LAUNCH ON PANCAKESWAP",
                            "CMC LISTING",
                            "POOCOIN ADS/COINSNIPER ADS",
                            "TWITTER CAMPAIGN",
                            "Influencers Marketing",
                            "Asian Marketing",
                            "2000 HOLDERS",]}
                    />
                    <Card
                        title={<Typography>STANDUP COMEDY<br/>(Phase 2)</Typography>}
                        select={false}
                        features={["CG Listing/Crypto.com Tracker",
                            "DEXTOOL TRENDING",
                            "MEME/GIF CONTESTS",
                            "LUNARCRUSH (SOCIAL RANKS)", 
                            "BILLBOARD ADS",
                            "8000 HOLDERS",
                        ]}
                    />
                    <Card
                        title={<Typography>COMMUNITY<br/>(Phase 3)</Typography>}
                        select={false}
                        features={["Mid Tier CEX Listings",
                            "DEVELOPMENT OF GAMING BEGINS",
                            "YouTube Influencers",
                            "MEME/GIF CONTESTS",
                            "METAVERSE PROPERTY",
                            "PRESS RELEASES",       
                            "REVAMP WEBSITE",
                            "15000 HOLDERS",
                        ]}
                    />
                    <Card
                        title={<Typography>HOLD <br/> (Phase 4)</Typography>}
                        select={false}
                        features={["CATFUN SWAP",
                            "SATOSHISTREETBETS PARTNERSHIP",
                            "CATFUN MERCHSTORE/CATFUN GAME LAUNCH",
                            "TIER 1 CEX LISTINGS",
                            "CATFUN ASIA ADVERTISEMENTS",
                            "40000 HOLDERS",]}
                    />
                    {/*<Image src={Stage0} alt={"Stage0"} width={300} height={400}/>*/}
                    {/*<Image src={Stage1} alt={"Stage1"} width={300} height={450}/>*/}
                    {/*<Image src={Stage2} alt={"Stage2"} width={300} height={400}/>*/}
                    {/*<Image src={Stage3} alt={"Stage3"} width={300} height={400}/>*/}
                </MyStack>
            </Stack>
        </Section>
    );
}

export default SectionCards;
