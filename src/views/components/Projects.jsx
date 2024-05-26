import { Grid, Typography as Text, Card, CardMedia, CardContent, Chip, Stack} from '@mui/material';
// import { GitHub, WhatsApp, Instagram } from '@mui/icons-material';
import images from '../../assets';

export const Projects = () => {
    return (
        <>
        <Text sx={styles.subTitle}>Projetos que criei ou participei</Text>
            <Grid container spacing={4} sx={styles.section}>
                <Grid item xs={12} sm={4}>
                    <Card sx={styles.cards}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="170"
                            image={images?.gestaotributaria}
                        />
                        <CardContent>
                            <Text sx={styles.text}>
                                Gestao Tributaria
                            </Text>
                            <Stack direction="row" spacing={2} sx={{paddingBlock: 1}}>
                                <Chip label="React.JS" size="small" sx={styles.chips}/>
                            </Stack>
                            <Text sx={styles.desc}>
                                Sistema de informação fiscal e módulos complementares na área tributária. Neste projeto usando React.js Atuo como Front-end criando telas, definições de UI / UX, manutenção do sistema e aplicação de novas funcionalidades.
                            </Text>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={styles.cards}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="170"
                            image={images?.exito1000}
                        />
                        <CardContent>
                            <Text sx={styles.text}>
                                Redação Exito 1000
                            </Text>
                            <Stack direction="row" spacing={2} sx={{paddingBlock: 1}}>
                                <Chip label="Wordpress" size="small" sx={styles.chips}/>
                            </Stack>
                            <Text sx={styles.desc}>
                                Site empresarial da plataforma de redações Exito 1000, atuando como front-end responsável pela desenvolvimento e manutenção das páginas, além de melhorias de UI / UX.
                            </Text>
                        </CardContent>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <Card sx={styles.cards}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="170"
                            image={images?.locmais}
                        />
                        <CardContent>
                            <Text sx={styles.text}>
                                Locmais
                            </Text>
                            <Stack direction="row" spacing={2} sx={{paddingBlock: 1}}>
                                <Chip label="Wordpress" size="small" sx={styles.chips}/>
                            </Stack>
                            <Text sx={styles.desc}>
                                Site institucional de empresa de locação de equipamentos, fui resposável por projetar o design e desenvolvedor o sites, suas páginas e lógica de cadastro de produtos.
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
        color: "#fff"
    },
    chips: {
        background: "#A1A1AA"
    },
    tags: {

    },
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
}