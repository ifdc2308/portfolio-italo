import { Container, Stack, Grid, Typography as Text, Avatar, Button, Tooltip } from '@mui/material';
import { GitHub, WhatsApp, Instagram } from '@mui/icons-material';
import images from '../assets';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

export const HomePage = () => {
  return (
    <>
      <Container maxWidth="lg" sx={styles.container}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={7}>
            <Avatar alt="italo_dorea" src={images?.profileImage} sx={{ width: 110, height: 110 }} />
            <Stack spacing={0}>
              <Text sx={styles.subTitle}>Ítalo Dórea</Text>
              <Text sx={styles.title}>Desenvolvedor Front-end</Text>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ pt: 2 }}>
              <GitHub sx={{ color: "#A1A1AA", cursor: "pointer" }} onClick={() => window.open('https://github.com/ifdc2308', '_blank')} />
              <Instagram sx={{ color: "#A1A1AA", cursor: "pointer" }} />
            </Stack>
            <Text sx={styles.desc}>Me chamo Ítalo, tenho 24 anos e trabalho há 2 anos com desenvolvimento Web. Ao longo da minha jornada na programação, já tive experências com diversas tecnologias e times de desenvolvimento, como também rotinas e metodologias.</Text>
            <Button sx={{ color: "#fff", border: "1px solid #A1A1AA" }} variant="outlined" startIcon={<WhatsApp sx={{ color: "#25D366" }} />} onClick={() => window.open('https://api.whatsapp.com/send?phone=5571985018352&text=Ol%C3%A1%20%C3%ADtalo%2C%20preciso%20falar%20contigo%20sobre%20assuntos%20de%20desenvolvimento', '_blank')}>
              Converse comigo
            </Button>
          </Grid>
          <Grid item xs={12} sm={5} container alignItems="flex-end">
            <Grid item>
              <Text sx={styles.subTitle}>Tecnologias</Text>
              <Stack direction="row" spacing={1} sx={{ pt: 2 }}>
                <Tooltip title="React.js" placement="bottom">
                  <Avatar alt="reactjs" src={images?.reactLogo} sx={{ width: 45, height: 45 }} />
                </Tooltip>
                <Tooltip title="CSS" placement="bottom">
                  <Avatar alt="cssLogo" src={images?.cssLogo} sx={{ width: 45, height: 45 }} />
                </Tooltip>
                <Tooltip title="HTML" placement="bottom">
                  <Avatar alt="htmlLogo" src={images?.htmlLogo} sx={{ width: 45, height: 45 }} />
                </Tooltip>
                <Tooltip title="Javascript" placement="bottom">
                  <Avatar alt="jsLogo" src={images?.jsLogo} sx={{ width: 45, height: 45 }} />
                </Tooltip>
                <Tooltip title="Tailwind.css" placement="bottom">
                  <Avatar alt="tailwindLogo" src={images?.tailwindLogo} sx={{ width: 45, height: 45 }} />
                </Tooltip>
                <Tooltip title="Material UI" placement="bottom">
                  <Avatar alt="muiLogo" src={images?.muiLogo} sx={{ width: 45, height: 45 }} />
                </Tooltip>
                <Tooltip title="Figma" placement="bottom">
                  <Avatar alt="fiigma" src={images?.figmaLogo} sx={{ width: 45, height: 45 }} />
                </Tooltip>
                <Tooltip title="Wordpress" placement="bottom">
                  <Avatar alt="wordpressLogo" src={images?.wordpressLogo} sx={{ width: 45, height: 45 }} />
                </Tooltip>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Projects/>
        <Footer />
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
  },
  sections: {
    paddingBlock: 10,
  },
}