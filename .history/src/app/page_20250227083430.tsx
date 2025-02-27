import { Container, Typography, Card, CardContent, CardMedia, Avatar, Box, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';

import { motion } from 'framer-motion';

const skills = ['Kotlin', 'Node.js', 'Python', 'React', 'Next.js', 'AWS', 'SQL'];

const projects = [
  { title: 'Sistema de Frete', description: 'Gerenciamento de transportes e pagamentos.', image: '/frete.png' },
  { title: 'Naval Battle Game', description: 'Jogo de batalha naval interativo.', image: '/naval.png' },
  { title: 'Sistema de Estoque', description: 'Gestão de bebidas e inventário.', image: '/estoque.png' }
];

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
    {/* Sobre Mim */}
    <Box display="flex" alignItems="center" gap={3}>
      <Avatar src="/maxwell.jpg" sx={{ width: 100, height: 100 }} />
      <Box>
        <Typography variant="h4" component="h1" fontWeight="bold">Maxwell</Typography>
        <Typography variant="h6">Desenvolvedor Backend | Kotlin, Node.js & AWS</Typography>
        <Box mt={1}>
          <IconButton href="https://github.com/maxwell" target="_blank"><GitHub /></IconButton>
          <IconButton href="https://linkedin.com/in/maxwell" target="_blank"><LinkedIn /></IconButton>
          <IconButton href="mailto:maxwell@email.com"><Email /></IconButton>
        </Box>
      </Box>
    </Box>

    {/* Tecnologias */}
    <Typography variant="h5" mt={5} fontWeight="bold">Tecnologias</Typography>
    
    <Grid container spacing={{ xs: 2}} columns={{ xs: 4, sm: 8, md: 12 }} >
      {skills.map((skill, index) => (
        <Grid  key={index} size={{ xs: 2, sm: 4, md: 4 }}>
            
              <Item variant="body1">{skill}</Item>
            
          
        </Grid>
      ))}
    </Grid>

    {/* Projetos */}
    <Typography variant="h5" mt={5} fontWeight="bold">Projetos</Typography>
    
    <Grid container spacing={3} mt={2}>
      
      {projects.map((project, index) => (
        <Grid  key={index}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card>
              <CardMedia component="img" height="140" image={project.image} alt={project.title} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{project.title}</Typography>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Container>
  );
}
