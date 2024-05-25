import { Container, Box, Grid, Typography as Text, Avatar, Divider } from '@mui/material';

export const HomePage = () => {
  return (
    <>
      <Container maxWidth="lg" sx={styles.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
          <Avatar alt="italo_dorea" src="../assets/profile_italo_dorea.jpg" />
            <Text>Ítalo Dórea</Text>
            <Text>Desenvolvedor Front-end</Text>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Text>Entrar em contato</Text>
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
  },
}