# Terrano

Plataforma para conectar produtores que precisam de máquinas agrícolas a proprietários com equipamentos disponíveis para locação.

## Development

```bash
npm install
npm run db:up
npm run db:migrate
npm run dev
```

## Banco local

O banco local usa PostgreSQL via Docker.

```bash
npm run db:up       # sobe o Postgres
npm run db:migrate  # aplica as migrations locais
npm run db:studio   # abre o Prisma Studio
npm run db:down     # derruba o container
```

Connection string local:

```bash
postgresql://terrano:terrano_dev_password@localhost:5432/terrano?schema=public
```

## Production build

```bash
npm run build
npm run start
```
