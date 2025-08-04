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
    - [x] Add photographer
    - [x] Add photographer url
    - [x] Add alt text
    - [x] add color text
  - [x] Double check styling
- [ ] Add users to review
- [x] Responsiveness
- [ ] Font sizes and details

## Subtasks

## Decisions

- Used NextJS because is an opportunity to learn
- The alt mostly of times has a big description, so I truncated and show a tooltip on hover. On mobile, used title for native alternatives
- Added a landing page that is something common in almost all the apps. Clicking View Gallery will redirect to the photos page, if not logged it will redirect you back to the signin.
- Clicking on the logo will redirect to the landing page.

## How to login

1. Just try once and you will received an error
2. Then try again with the same password and it will work

It was implemented like this because we don't have a Register page

## What is needed to have this ready for deploy

1. Remove the api key from INSTRUCTIONS.MD or README.MD and creating a new on Pexels, then add it only to the env files that is not committed on git.
2. Move from localStorage mocked auth to a JWT auth.
3. Create a register page
4. Add a profile page where user could edit personal information
