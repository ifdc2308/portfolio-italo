import {
  Grid,
  Typography as Text,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Stack,
} from "@mui/material";
// import { GitHub, WhatsApp, Instagram } from '@mui/icons-material';
import images from "../../assets";

export const Projects = () => {
  return (
    <>
      <Text sx={styles.subTitle}>Projetos que criei ou participei</Text>
      <Grid container spacing={4} sx={styles.section}>
        <Grid item xs={12} sm={4}>
          <Card
            sx={styles.cards}
            onClick={() =>
              window.open("https://gestaotributaria.com.br/", "_blank")
            }
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image={images?.gestaotributaria}
            />
            <CardContent>
              <Text sx={styles.text}>Gestão Tributária</Text>
              <Stack direction="row" spacing={2} sx={{ paddingBlock: 1 }}>
                <Chip label="React.JS" size="small" sx={styles.chips} />
              </Stack>
              <Text sx={styles.desc}>
                Software de pesquisa, módulo EFD-Reinf e complementares na área
                tributária. Atuo como front-end na aplicação de novas de
                funcionalidades, UI/UX e outros.
              </Text>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={styles.cards}
            onClick={() =>
              window.open("https://redacaoexito1000.com.br/", "_blank")
            }
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image={images?.exito1000}
            />
            <CardContent>
              <Text sx={styles.text}>Redação Exito 1000</Text>
              <Stack direction="row" spacing={2} sx={{ paddingBlock: 1 }}>
                <Chip label="Wordpress" size="small" sx={styles.chips} />
              </Stack>
              <Text sx={styles.desc}>
                Site da plataforma de redações Exito 1000, responsável pela
                desenvolvimento e manutenção das páginas, além de melhorias de
                UI/UX.
              </Text>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={styles.cards}
            onClick={() => window.open("https://dmadvocacia.com.br/", "_blank")}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image={images?.dmadv}
            />
            <CardContent>
              <Text sx={styles.text}>D&M Advocacia</Text>
              <Stack direction="row" spacing={2} sx={{ paddingBlock: 1 }}>
                <Chip label="HTML" size="small" sx={styles.chips} />
                <Chip label="CSS" size="small" sx={styles.chips} />
                <Chip label="Javascript" size="small" sx={styles.chips} />
              </Stack>
              <Text sx={styles.desc}>
                Site institucional para escritório especializado em Direito
                Tributário e Empresarial, estabelecido em Salvador.
              </Text>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={styles.cards}
            onClick={() =>
              window.open("https://cnpj-pesquisar.netlify.app/", "_blank")
            }
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image={images?.cnpjSearch}
            />
            <CardContent>
              <Text sx={styles.text}>Pesquisa CNPJ</Text>
              <Stack direction="row" spacing={2} sx={{ paddingBlock: 1 }}>
                <Chip label="TypeScript" size="small" sx={styles.chips} />
              </Stack>
              <Text sx={styles.desc}>
                Ferramenta de consulta de dados de empresas brasileiras, atavés
                do CNPJ. Todas as informações que você precisa sobre uma empresa
                em um só lugar.
              </Text>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          onClick={() =>
            window.open("https://ifdc2308.github.io/htmlConverter/", "_blank")
          }
        >
          <Card sx={styles.cards}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image={images?.htmlConverter}
            />
            <CardContent>
              <Text sx={styles.text}>Conversor HTML</Text>
              <Stack direction="row" spacing={2} sx={{ paddingBlock: 1 }}>
                <Chip label="HTML" size="small" sx={styles.chips} />
                <Chip label="Javascript" size="small" sx={styles.chips} />
              </Stack>
              <Text sx={styles.desc}>
                Mini projeto criado para auxiliar usuários que precisam saber o
                que determinado contéudo HTML, visualmente tratado, significa.
              </Text>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={styles.cards}
            onClick={() => window.open("https://a4locadora.com.br/", "_blank")}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="170"
              image={images?.a4locadora}
            />
            <CardContent>
              <Text sx={styles.text}>A4 locadora</Text>
              <Stack direction="row" spacing={2} sx={{ paddingBlock: 1 }}>
                <Chip label="Wordpress" size="small" sx={styles.chips} />
              </Stack>
              <Text sx={styles.desc}>
                landing page de vendas da empresa de A4 Locadora de motos, projeto
                de Design, landing page de conversão e reserva das motos.
              </Text>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

const styles = {
  section: {
    paddingBlock: 5,
  },
  cards: {
    background: "#262b32",
    maxWidth: 345,
    height: 400,
    color: "#fff",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.03)",
    },
  },
  chips: {
    background: "#A1A1AA",
  },
  tags: {},
  subTitle: {
    color: "#fff",
    fontWeight: 600,
    fontSize: 28,
    paddingTop: 5,
  },

  text: {
    color: "#fff",
    fontWeight: 400,
    fontSize: 22,
  },
  desc: {
    color: "#A1A1AA",
    fontWeight: 400,
    fontSize: 16,
  },
};
