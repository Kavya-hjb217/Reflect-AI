# 🌙 Reflect — Your Space to Reflect, Your Story to Tell  

Capture your thoughts, track your moods, and reflect on your journey in a **beautiful, secure space**.  
Reflect helps you organize journal entries into collections, filter them by name/date/type, and manage drafts effortlessly.

---

## 🚀 Live Demo  
👉 [https://reflect-ai-iota.vercel.app/](https://reflect-ai-iota.vercel.app/)

---

## 🖼️ Project Preview  

### 🏠 Landing Page  
![Landing Page](./assets/landing-preview.png)

### 📊 Dashboard  
![Dashboard](./assets/dashboard-preview.png)

---

## ⚙️ Tech Stack  

| Layer | Technology |
|-------|-------------|
| **Frontend** | Next.js (React 19) |
| **Styling** | Shadcn UI, Tailwind CSS |
| **Database** | PostgreSQL |
| **ORM** | Prisma |
| **Security** | ArcJet |
| **Deployment** | Vercel |
| **Language** | TypeScript |

---

## 🌟 Key Features  

- 🧠 **Journal Management** — Write, edit, and delete entries seamlessly.  
- 🗂️ **Collections** — Group entries into themed collections.  
- 🔍 **Smart Filters** — Search and filter entries by name, type, or date.  
- ✏️ **Draft Mode** — Save unfinished entries as drafts.  
- 📈 **Mood Analytics** — Visualize emotional trends over time.  
- 🛡️ **Shield Protection** — ArcJet integrated for bot and spam protection.  
- 🧭 **Custom Routes** — Includes personalized 404 and routing setup.  

---

## 🧱 Project Structure  

```bash
reflect/
├── app/
│   ├── (auth)/          # Login & Signup Pages
│   ├── (dashboard)/     # User Dashboard
│   ├── (journal)/       # Journal Creation & Editing
│   ├── api/             # API Routes
│   └── layout.tsx       # Root Layout Component
├── components/
│   ├── ui/              # Shadcn UI Components
│   ├── header/          # Header Component
│   └── hooks/           # Custom React Hooks
├── prisma/
│   └── schema.prisma    # Database Models
├── public/
│   └── assets/          # Images, Icons
└── README.md
