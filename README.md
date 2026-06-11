# CollabForge Frontend

## About This

Ini adalah aplikasi Frontend untuk CollabForge, platform portofolio berbasis kontribusi nyata dalam proyek.

Frontend ini berfungsi sebagai antarmuka utama yang digunakan pengguna untuk berinteraksi dengan seluruh fitur platform, mulai dari autentikasi, manajemen profil, kolaborasi proyek, hingga pengelolaan portofolio otomatis.

CollabForge dirancang untuk membantu membangun portofolio yang lebih jujur, terukur, dan dapat diverifikasi berdasarkan aktivitas dan kontribusi pengguna di dalam proyek yang mereka kerjakan.

Platform ini menggabungkan beberapa konsep utama:

- Project Management
- Portfolio Automation
- Contribution Tracking
- Recruitment & Talent Discovery
- AI Assisted Project Workflow

Setiap task, kontribusi, dan aktivitas proyek dapat menjadi bagian dari portofolio pengguna secara otomatis, sehingga profil yang ditampilkan tidak hanya berdasarkan klaim, tetapi berdasarkan bukti kontribusi nyata.

Frontend ini dibangun dengan pendekatan SPA (Single Page Application) menggunakan Vue.js dan berkomunikasi dengan Backend melalui REST API.

<br />

## Tech Stack

| Category            | Technology                    |
| ------------------- | ----------------------------- |
| Framework           | Vue 3                         |
| Language            | JavaScript                    |
| Router              | Vue Router                    |
| State Management    | Pinia                         |
| HTTP Client         | Axios                         |
| Build Tool          | Vite                          |
| Authentication      | Access Token + Refresh Token  |
| Architecture        | Feature Based Structure       |
| API Style           | REST API                      |
| Styling             | CSS _(planned)_               |
| UI Component        | TBD _(planned)_               |
| AI Development Flow | AI Agent Assisted Development |

<br />

## Struktur Folder

```text
collabforge-frontend/
|
|__ public/
|
|__ src/
|   |
|   |__ api/                    # konfigurasi axios dan interceptor
|   |
|   |__ assets/                 # gambar, icon, dan asset statis
|   |
|   |__ components/             # komponen reusable
|   |
|   |__ router/                 # konfigurasi vue-router
|   |
|   |__ services/               # komunikasi dengan backend API
|   |
|   |__ stores/                 # state management menggunakan pinia
|   |
|   |__ views/                  # halaman aplikasi
|   |
|   |__ App.vue                 # root component
|   |
|   |__ main.js                 # entry point aplikasi
|
|__ .env
|
|__ package.json
|
|__ vite.config.js
```

<br />

## Current Features

### Authentication

- Register
- Login
- Logout
- Refresh Token Rotation
- Route Guard
- Protected Routes

### User Session

- Access Token Management
- Automatic Token Refresh
- Persistent Authentication

### Navigation

- Landing Page
- Login Page
- Register Page
- Dashboard Page

<br />

## Planned Features

### User Management

- User Profile
- Experience
- Education
- Skills
- Languages
- Certifications
- Profile Customization

### Social Features

- Follow User
- Following User
- Activity Feed
- User Search
- Public Profile

### Project Collaboration

- Organization Management
- Project Management
- Task Management
- Team Collaboration

### Portfolio Automation

- Auto Generated Portfolio
- Contribution History
- Portfolio Export
- Public Portfolio Page

### AI Features

- AI Contribution Analysis
- AI Portfolio Summary
- AI Project Assistant

<br />

## Backend Repository

Frontend ini berkomunikasi dengan CollabForge Backend melalui REST API.

Dokumentasi API dapat dilihat pada repository backend.

<br />

## Project Status

Project ini masih dalam tahap pengembangan aktif dan struktur aplikasi dapat berubah seiring bertambahnya fitur.
