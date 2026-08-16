# domsey.dev - Agent Guidelines

Welcome! This is the personal portfolio and homepage of D0ms3y (`domsey.dev`).
When AI agents (like Gemini) interact with this repository, they must adhere to the following rules, tech stack details, and coding guidelines.

## 🛠 Tech Stack
- **Bundler:** Parcel v2
- **Templating:** EJS
- **Styling:** TailwindCSS v4, SCSS, Bootstrap 5
- **Scripts:** Vanilla JS, jQuery
- **Icons & UI:** FontAwesome 7, Lightbox2

## 📁 Project Structure
All source code is located in the `src/` directory:
- `src/views/`: Contains `.ejs` templates. `index.ejs` is the main entrypoint.
- `src/scss/`: Custom SCSS stylesheets.
- `src/js/`: Client-side JavaScript.
- `src/img/` & `src/fonts/`: Static assets (images, fonts).

## 🚀 Commands
- **Development Server:** `npm start` (clears cache and starts Parcel dev server)
- **Production Build:** `npm run build` (builds optimized files to `dist/`)

## 📝 Coding Guidelines
1. **Styling:** 
   - The project uses a mix of Tailwind CSS, Bootstrap, and custom SCSS.
   - **Preference:** Prioritize **Tailwind CSS** utility classes for new components to keep the styling modern and maintainable.
   - If custom styling is unavoidable, add it to the appropriate file in `src/scss/`.
2. **Templating (EJS):**
   - Write semantic HTML5.
   - Keep EJS templates modular. Use EJS includes (`<%- include('partials/...') %>`) if views become too large.
3. **JavaScript:**
   - While jQuery is installed (likely for Bootstrap/Lightbox), prefer **Vanilla ES6+ JavaScript** for new interactive logic.
4. **Assets:**
   - Always reference images from `src/img/` so that the Parcel bundler can process and hash them correctly.

## 🤖 General Agent Instructions
- **Aesthetics Matter:** This is a personal portfolio. Any UI/UX changes should look modern, premium, and visually appealing. Do not output generic or unstyled HTML.
- **No Build Breakages:** If making changes to `package.json` or `.parcelrc`, ensure you test the build process.
- **Concise Commits:** When asked to write code or summaries, be direct and explain the "why" behind your choices.
