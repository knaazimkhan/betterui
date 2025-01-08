# Better UI: Phase 1 - Foundation

## **Objective**
Set up the foundational architecture and tools necessary to kickstart the development of Better UI. This phase focuses on creating a robust base for the frontend, backend (if applicable), and overall project workflow.

---

## **1. Define the Development Environment**

### **Tech Stack**
- **Frontend**:
  - Next.js (v15) with the **App Router** for modern and scalable routing.
  - React for building reusable components.
  - Tailwind CSS for styling.

- **Utilities**:
  - Prettier for code formatting.
  - ESLint for linting JavaScript/TypeScript code.
  - Husky for Git hooks (e.g., pre-commit checks).

- **Package Manager**:
  - **pnpm** for faster and efficient dependency management.

- **Version Control**:
  - Git and GitHub for version control and collaboration.

- **Testing**:
  - Jest and React Testing Library for unit tests.
  - Cypress or Playwright for end-to-end testing.

### **Environment Setup**
1. Ensure Node.js 20 is installed.
2. Use the `create-next-app` CLI to initialize the project with Tailwind CSS and ESLint:
   ```bash
   pnpm create next-app ./ --typescript --tailwind --eslint --app --src-dir --turbopack
   ```
   This command sets up Next.js with the **App Router**, Tailwind CSS, and ESLint pre-configured.

3. Verify the project setup:
   ```bash
   pnpm dev
   ```
   Open the app in your browser at `http://localhost:3000` to confirm it is working.

4. Set up Prettier:
   - Ensure compatibility with ESLint by installing `eslint-config-prettier`.
   - Add a `.prettierrc` file with your desired formatting rules.

5. Configure GitHub repository:
   - Create a new repository and push the initialized project.
   - Add a `.gitignore` file for Node.js projects.

---

## **2. Build Core Project Structure**

### **Folder Structure**
- **`src/`**:
  - `app/`: Routing and page structure using the App Router.
  - `components/`: Reusable components.
  - `styles/`: Global and utility styles.
  - `utils/`: Helper functions.

- **`public/`**:
  - Static assets like images and icons.

### **Essential Pages**
1. **Landing Page** (`src/app/page.tsx`):
   - Showcase the project purpose and key features.
   - Include a call-to-action (CTA) for users to explore components.

2. **Documentation Home** (`src/app/docs/page.tsx`):
   - Overview of the documentation structure.
   - Links to setup guides and component categories.

3. **Component Showcase** (`src/app/components/page.tsx`):
   - List of available components with links to individual demos.

---

## **3. Establish Design System**

### **Design Tokens**
- **Colors**: Define a primary, secondary, and neutral palette in `tailwind.config.js`.
- **Typography**:
  - Fonts: Sans-serif as the primary font.
  - Sizes: Base font size of `16px`.
- **Spacing**:
  - Use consistent spacing increments (e.g., `4px`, `8px`, `16px`).

### **Reusable Styles**
- Create Tailwind CSS utility classes for buttons, forms, and containers.

---

## **4. Implement Version Control and CI/CD**

### **Git Workflow**
- Use feature branches for new additions.
- Main branches:
  - `main`: Production-ready code.
  - `dev`: In-progress features and testing.

### **CI/CD with GitHub Actions**
1. Set up a workflow for automated testing:
   ```yaml
   name: CI Pipeline
   on:
     push:
       branches:
         - main
   jobs:
     test:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '20'
         - run: pnpm install
         - run: pnpm test
   ```
2. Deploy to Vercel:
   - Connect the GitHub repository to Vercel.
   - Enable automatic deployments for `main` and preview deployments for `dev`.

---

## **5. Create Basic Components**

### **Initial Components**
1. **Button**:
   - Variants: Primary, Secondary, Outline.
   - Props: Size (`sm`, `md`, `lg`), Disabled state.

2. **Card**:
   - Props: Header, Body, Footer, Image.
   - Variants: Bordered, Shadowed.

3. **Input Field**:
   - Variants: Text, Email, Password.
   - Props: Placeholder, Disabled, Validation.

### **Testing Components**
- Write unit tests for each component.
- Verify responsiveness and accessibility compliance.

---

## **6. Document the Progress**
- Use a README file in the repository to track:
  - Project purpose.
  - Tech stack and setup instructions.
  - Current progress and next steps.

- Start drafting component documentation using MDX.

---

## **Next Steps**
1. Finalize and test the basic components.
2. Begin drafting detailed documentation for each component.
3. Plan for Phase 2: Building the component showcase and playground.

and follow the pattern of implementing, testing, documenting, and committing each component without asking for confirmation at each step.
Ok, we want to start working on our new projects that is outlined in @outline.md . There is an overall guide for the project @guide.md, project definition is in @project-definition.md, architecture is in @architecture.md and each phase is outliend. @phase-1.md @phase-2.md @phase-3.md @phase-4.md @phase-5.md . I am only working on @phase-1.md right now and i want to go to slowly step by setp through the process, checkinh with me often brfore proceeding. Also the root of the project should be our current betterui.
