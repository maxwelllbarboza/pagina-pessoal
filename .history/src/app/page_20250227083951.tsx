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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
            <Item>{index + 1}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
