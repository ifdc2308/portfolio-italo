import { Container, Box, Grid, Typography as Text, Avatar, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const HomePage = () => {
  return (
    <>
      <Container maxWidth="lg" sx={styles.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Avatar alt="italo_dorea" src="../assets/profile_italo_dorea.jpg" />
            <Text sx={styles.subTitle}>Ítalo Dórea</Text>
            <Text sx={styles.title}>Desenvolvedor Front-end</Text>
            <Text sx={styles.desc}>Olá descrição</Text>
            <Button sx={{color: "#A1A1AA", border: "1px solid #A1A1AA"}} variant="outlined" startIcon={<WhatsAppIcon sx={{color: "#25D366"}} />}>
              Entre em contato
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
           <Text>Aqui vai ter uma imagem de background</Text>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const styles = {
  container: {
    paddingBlock: 5,
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
  },
  text: {
    color: "#fff",
    fontWeight: 400,
    fontSize: 22,
  },
  desc: {
    color: "#A1A1AA",
    fontWeight: 400,
    fontSize: 20,
  },
}