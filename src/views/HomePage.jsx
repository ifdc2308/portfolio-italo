import { Container, Box, Stack, Grid, Typography as Text, Avatar, Button } from '@mui/material';
import { GitHub, WhatsApp, Instagram } from '@mui/icons-material';
import profileImage from '../assets/profile_italo_dorea.jpg';

export const HomePage = () => {
  return (
    <>
      <Container maxWidth="lg" sx={styles.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
              <Avatar alt="italo_dorea" src={profileImage} sx={{ width: 100, height: 100 }} />
              <Stack spacing={0}>
                <Text sx={styles.subTitle}>Ítalo Dórea</Text>
                <Text sx={styles.title}>Desenvolvedor Front-end</Text>
              </Stack>
            <Stack direction="row" spacing={1} sx={{pt: 2}}>
            <GitHub sx={{ color: "#A1A1AA" }} />
            <Instagram sx={{ color: "#A1A1AA" }} />
            </Stack>
            <Text sx={styles.desc}>Me chamo Ítalo, tenho 24 anos e trabalho há 2 anos com desenvolvimento Web. Ao longo da minha jornada na programação, já tive experências com diversas tecnologias e times de desenvolvimento, como também rotinas e metodologias.</Text>
            <Button sx={{ color: "#A1A1AA", border: "1px solid #A1A1AA" }} variant="outlined" startIcon={<WhatsApp sx={{ color: "#25D366" }} />}>
              Entre em contato
            </Button>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Text>Aqui vai ter uma imagem de background</Text>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const styles = {
  container: {
    paddingBlock: 8,
  },
  title: {
    color: "#fff",
    fontWeight: 700,
    fontSize: 35,
  },
  subTitle: {
    color: "#fff",
    fontWeight: 500,
    fontSize: 30,
    pt: 1,
  },
  text: {
    paddingBlock: 5,
    color: "#fff",
    fontWeight: 400,
    fontSize: 22,
  },
  desc: {
    paddingBlock: 5,
    color: "#A1A1AA",
    fontWeight: 400,
    fontSize: 20,
    // textAlign: "justify",
  },
}