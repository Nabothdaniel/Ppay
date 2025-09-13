# 💳 Ppay – VTU Utility Services Website

Ppay is a Virtual Top-Up (VTU) platform that provides **utility services** such as **Airtime, Data, Cable TV, Electricity Bills, and Wallet Funding**.  
This project is built with **React + TypeScript + Vite**, and enforces **strict ESLint rules** for a scalable, production-ready codebase.

---

## ✨ Features

- ⚡ **Airtime & Data Recharge** for all major networks
- 📺 **Cable TV Subscription** (DStv, GOtv, Startimes, etc.)
- 💡 **Electricity Bill Payments** for supported DISCOs
- 👛 **Wallet System** for instant transactions
- 🔐 **Secure Authentication** (JWT-based or OAuth)
- 📊 **Transaction History & Dashboard**
- 🌍 **Responsive UI** (mobile-first design)

---

## 🛠️ Tech Stack

- **Frontend**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (recommended) or CSS Modules
- **Linting**: ESLint with:
  - `@typescript-eslint/strictTypeChecked`
  - `eslint-plugin-react-x`
  - `eslint-plugin-react-dom`
  - `eslint-plugin-jsx-a11y`
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/), [Redux Toolkit](https://redux-toolkit.js.org/) or Context API
- **API Calls**: Axios / Fetch
- **Build Tool**: [Vite](https://vitejs.dev/)

---

## 📂 Project Structure

```plaintext
ppay-vtu/
 ├─ src/
 │   ├─ components/       # Reusable UI components
 │   ├─ features/         # Airtime, Data, Bills, Wallet
 │   ├─ hooks/            # Custom React hooks
 │   ├─ pages/            # Route-based pages (Home, Dashboard, Login)
 │   ├─ services/         # API utilities (axios/fetch wrappers)
 │   ├─ store/            # Global state (Zustand/Redux/Context)
 │   ├─ styles/           # Global styles / Tailwind config
 │   └─ App.tsx
 ├─ public/               # Static assets
 ├─ eslint.config.js      # ESLint configuration
 ├─ tsconfig.app.json     # TypeScript app config
 ├─ tsconfig.node.json    # TypeScript node config
 ├─ vite.config.ts        # Vite configuration
 ├─ package.json
 └─ README.md

 ```


