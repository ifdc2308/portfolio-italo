import { Box, Stack, Typography as Text } from '@mui/material';
import { GitHub, Instagram, Mail, LinkedIn } from '@mui/icons-material';


export const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
          <Stack direction="row" spacing={1} sx={{ paddingBlock: 2 }}>
            <GitHub sx={{ color: "#A1A1AA", cursor: "pointer" }} onClick={() => window.open('https://github.com/ifdc2308', '_blank')} />
            <LinkedIn sx={{ color: "#A1A1AA", cursor: "pointer" }} onClick={() => window.open('https://www.linkedin.com/in/%C3%ADtalo-d%C3%B3rea-b11625184/', '_blank')} />
            <Instagram sx={{ color: "#A1A1AA", cursor: "pointer" }} />
          </Stack>
          <Text sx={styles.desc}>
            <Mail sx={{ color: "#A1A1AA", pr: 2}}/>italoiddev@gmail.com
          </Text>
          <Text sx={styles.desc}>
            2024 © ítalo Dórea - Desenvolvimento Web
          </Text>
        </Box>
      </Box>

    </>
  );
}

const styles = {
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