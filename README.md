# DOT Check Ongkir App

## Overview
DOT Check Ongkir App is a web application that allows users to check shipping costs between different cities in Indonesia. Built with modern web technologies, this application provides a user-friendly interface for checking shipping rates through RajaOngkir's API.

## Features
- User authentication using Clerk
- Check shipping costs between cities in Indonesia
- Modern and responsive UI using Tailwind CSS
- Real-time shipping rate calculations
- Secure API integration with RajaOngkir

## Prerequisites
Before running this project, make sure you have:
- Node.js (version 20.x or later)
- npm (Node Package Manager)
- RajaOngkir API Key (register at [RajaOngkir](https://rajaongkir.com))
- Clerk Account for authentication (register at [Clerk](https://clerk.dev))

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd dot-check-ongkir-app
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Configure your `.env.local` with the following variables:
```env
# API RajaOngkir
NEXT_PUBLIC_API_URL=https://api.rajaongkir.com/starter
NEXT_PUBLIC_API_KEY=your_rajaongkir_api_key

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

## Running the Application

### Development Mode
```bash
npm run dev
```
The application will be available at `http://localhost:3000`

### Production Build
```bash
npm run build
npm run start
```

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## Tech Stack
- Next.js 15.0.4
- React 19
- TypeScript
- Tailwind CSS
- Clerk Authentication
- React Query
- Axios
- Radix UI Components
- ESLint & Prettier for code quality

## Project Structure
```
dot-check-ongkir-app/
├── src/              # Source code
├── public/           # Static files
├── components.json   # UI components configuration
├── .env.example     # Example environment variables
└── ...
```

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
