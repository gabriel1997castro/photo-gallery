# CLEVER CHALLENGE

## Why this repository is public

The original repository provided for the challenge already contains the Pexels API key in a public setting. Because my repository is a fork, I wasn't able to change its visibility.

If this were a real-world project, I would take the following precautions:

- Move the API key to a secure environment variable.
- Avoid committing it to the repository.
- Never share sensitive keys in the README or version control.

Since the original setup is already public, this repo remains public as well — but in a production environment, this would be handled securely.

## Tasks

- [x] Create a NextJs web app using Typescript
  - [x] Add favicon
- [x] Use npm or yarn
- [x] Create Sign in page
  - [x] Create input component
  - [x] Add forgot password
  - [x] Add sign in button
  - [x] Create logo component
  - [x] Double check styling
- [x] Create All photos page
  - [x] Add logo and all photos
  - [x] Create photo card
    - [x] add image
    - [x] make image background color to be the avg color
    - [x] Add photographer
    - [x] Add photographer url
    - [x] Add alt text
    - [x] add color text
  - [x] Double check styling
- [ ] Add users to review
- [x] Responsiveness
- [x] Font sizes and details

## Decisions

- Used NextJS because is an opportunity to learn
- The alt mostly of times has a big description, so I truncated and show a tooltip on hover. On mobile, used title for native alternatives
- Added a landing page that is something common in almost all the apps. Clicking View Gallery will redirect to the photos page, if not logged it will redirect you back to the signin.
- Clicking on the logo will redirect to the landing page.

---

## Environment Variables

Before running the app, create a `.env` file in the root of your project and add the following:

```env
NEXT_PUBLIC_PEXELS_API_KEY=your_key_here
NEXT_PUBLIC_PEXELS_ENDPOINT=your_endpoint_here
```

- Replace `your_key_here` with your actual Pexels API key.
- Replace `your_endpoint_here` with the Pexels API endpoint you wish to use (for example: `https://api.pexels.com/v1/search?query=nature&per_page=10`).

---

## Quick Start

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Add your environment variables to a .env.local file as described above.

3. Start the development server:

```bash
Copy
Edit
npm run dev
# or
yarn dev
```

4. Visit http://localhost:3000 in your browser.

## Test Sign In

This project uses a **mock sign-in** system with predefined users for demonstration purposes.
Authentication is handled on the frontend using a static list of users.

### **Test Users**

You can sign in using one of the following user accounts:

| Email                                         | Password    |
| --------------------------------------------- | ----------- |
| [alice@example.com](mailto:alice@example.com) | password123 |
| [bob@example.com](mailto:bob@example.com)     | password123 |

### **How it works**

- When you submit the sign-in form, your credentials are checked against the list of test users in the app.
- If the email and password match, you are logged in and redirected to the photos page.
- If the credentials do not match, an error message is shown.

> **Note:** No real user data is stored or transmitted. This is for challenge/demo purposes only.

---

## What would be needed for production readiness and deployment

To make this application production-ready and secure, the following improvements should be made:

1. **Secure API keys:**

   - Remove the Pexels API key from all documentation (`INSTRUCTIONS.md`, `README.md`) and from the source code.
   - Generate a new API key and store it securely using environment variables (`.env.local`), which should **never** be committed to version control.

2. **Implement real authentication:**

   - Replace the localStorage-based, mocked authentication with a secure authentication system using JWT tokens and a real user database (e.g., PostgreSQL).
   - Protect API routes and user data accordingly.

3. **User registration and profiles:**

   - Add a registration (sign up) page so users can create accounts.
   - Provide a profile page where users can update personal information and manage settings.

4. **Persist favorite photos, pagination and search bar:**

   - Store liked/favorite photos in a database table associated with the authenticated user, so favorites persist across devices and sessions.
   - Add pagination and show more than one page
   - Add a search bar to make possible to search images

5. **Deployment setup:**

   - Use [Vercel](https://vercel.com/) for frontend hosting and continuous deployment.
   - Use [Supabase](https://supabase.com/) or a managed PostgreSQL service for the database. Alternatively, use a self-hosted PostgreSQL instance on your server or cloud provider.

6. **Other production best practices:**

   - Implement monitoring, logging, and CI/CD workflows.
   - Review and optimize performance (lazy loading, caching, etc.).
   - Ensure accessibility (a11y) compliance and optimize for SEO where applicable.

---

**Note:**
The current repo is public only because the original challenge repo was already public with the API key exposed. In a real-world scenario, sensitive information would always be handled securely.

---
