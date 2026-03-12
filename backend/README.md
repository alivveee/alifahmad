# Backend CMS Walkthrough

Backend ini dirancang dengan arsitektur modular yang skalabel menggunakan **Node.js, Express.js, Prisma, dan PostgreSQL**.

## Dependensi Utama

- **Express.js**: Web framework.
- **Prisma**: ORM untuk interaksi database.
- **Zod**: Validasi skema request data.
- **JWT & Bcrypt**: Autentikasi dan keamanan password.

## Cara Menjalankan

### 1. Konfigurasi Environment

Edit file `.env` di folder `backend/` dan sesuaikan dengan database PostgreSQL Anda:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/DATABASE_NAME?schema=public"
JWT_SECRET="rahasia_anda_disini"
PORT=5000
```

### 2. Instalasi & Migrasi Database

Jalankan perintah berikut di folder `backend/`:

```bash
npm install
npx prisma migrate dev --name init
npm run seed
```

_Default admin: username `admin`, password `admin123`_

### 3. Menjalankan Server

```bash
npm run dev
```

## Dokumentasi API

### Autentikasi

- **POST `/api/auth/login`**
  - Body: `{ "username": "admin", "password": "admin123" }`
  - Response: Menyertakan `token` JWT untuk akses route admin.

### Projects

- **GET `/api/projects`**: List semua project (Public).
- **POST `/api/projects`**: Tambah project (Admin).
  - Header: `Authorization: Bearer <TOKEN>`
  - Body: `{ "title": "...", "description": "...", "techStack": ["React"], "link": "..." }`
- **PUT `/api/projects/:id`**: Update project (Admin).
- **DELETE `/api/projects/:id`**: Hapus project (Admin).

### Experience, Skills, & Contacts

Memiliki pola endpoint yang serupa dengan Projects:

- `GET /api/experiences`, `GET /api/skills`, `GET /api/contacts` (Public).
- `POST`, `PUT`, `DELETE` (Admin dengan Token).

## Contoh Response

Semua API mengembalikan format JSON yang konsisten:

**Success:**

```json
{
  "success": true,
  "message": "Projects retrieved successfully",
  "data": [ ... ]
}
```

**Error (Validation):**

```json
{
  "success": false,
  "message": "Validation error",
  "errors": [ ... ]
}
```

**Error (Unauthorized):**

```json
{
  "success": false,
  "message": "Unauthorized: No token provided"
}
```
