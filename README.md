This is my boiletplate of nextjs with typescript for futur project.

It have tailwind, session cookie, i18n, fontawersome, Prisma, bcryptjs, yup, moment, sass.

## Getting Started

Set ".env"

```
DATABASE_URL="postgresql://owner@localhost:5432/test"
SECRET_COOKIE_PASSWORD="123456"
COOKIE_NAME="cookies"
```

```
prisma generate && prisma db push
```

Than run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
