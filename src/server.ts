import { app } from './app'
import { env } from './env'

app
  .listen({
    host: '0.0.0.0', // Faz com que a aplicação seja acessivel pelo front-end quando usamos o fastify
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
