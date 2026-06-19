# AI Prompt Engineering Resources

A beautiful Next.js web application for teaching AI prompt engineering. This app provides students with easy access to course materials and a structured prompt template for creating effective AI prompts.

## Features

✨ **Course Materials Access**
- Direct link to Canva presentation with all course materials
- Beautiful, responsive design optimized for all devices

📋 **Prompt Engineering Template**
- Structured template for creating effective AI prompts
- Visual breakdown of each component
- One-click copy to clipboard functionality
- Best practices and tips for better prompts

🎨 **Modern UI**
- Clean, professional design
- Gradient backgrounds and card-based layout
- Hover effects and smooth transitions
- Mobile-responsive

## Getting Started

### Prerequisites
- Node.js 18+ installed on your machine
- npm, yarn, pnpm, or bun package manager

### Installation

1. Navigate to the project directory:
```bash
cd prompt-engineering-resources
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
prompt-engineering-resources/
├── app/
│   ├── page.tsx          # Main landing page with resources
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── public/               # Static assets
└── package.json          # Dependencies
```

## Customization

### Update Canva Link
To update the Canva presentation link, edit the `Link` component in `app/page.tsx`:
```tsx
<Link href="YOUR_NEW_CANVA_LINK" ...>
```

### Modify Prompt Template
To update the prompt template, edit the text in the `copyToClipboard` function and the display section in `app/page.tsx`.

## Deployment

### Deploy on Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy on Other Platforms
This Next.js app can be deployed on:
- Netlify
- Railway
- AWS Amplify
- Any platform supporting Node.js

## For Students

### Accessing Course Materials
1. Click on "Open Canva Presentation" to view the full course materials
2. Review the Prompt Engineering Template section to understand the structure
3. Use the "Copy Template to Clipboard" button to quickly copy the template

### Using the Prompt Template
The template has four key sections:
1. **Your Role**: Define what role the AI should play
2. **I Want to Achieve**: State your specific objective
3. **This Project is For**: Provide project details
4. **Context**: Share all relevant contextual information

Fill in each section to create effective prompts that get better results from AI!

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: SVG icons (inline)

## License

This project is created for educational purposes.

---

Made with ❤️ for AI Prompt Engineering students
