# App Platform

A stunning, premium platform to showcase your web applications and games.

## 🚀 Quick Start

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Start Local Server**:
    ```bash
    npm run dev
    ```

## 🎮 How to Add Your Apps

You don't need to touch the code! Just edit `src/data/apps.json`.

1.  Open `src/data/apps.json`.
2.  Add a new entry to the list:
    ```json
    {
      "id": "unique-id",
      "title": "My New App",
      "description": "Description of the app.",
      "imageUrl": "https://link-to-image.com/image.jpg",
      "link": "https://my-app-url.com",
      "openIn": "new-tab" 
    }
    ```
    - Set `"openIn": "modal"` if you want it to open inside the platform (like a mini-game).
    - Set `"openIn": "new-tab"` if you want it to open in a new tab (like a standard website link).

### 📂 How to Upload Undeployed Apps (Local Files)

If you have a game or website that isn't on the internet yet:

1.  Copy your app's folder (containing `index.html`) into `public/apps/`.
    - Example: `public/apps/my-cool-game/`
2.  In `src/data/apps.json`, set the link to:
    ```json
    "link": "/apps/my-cool-game/index.html",
    "openIn": "modal"
    ```
3.  That's it! It will load instantly inside the platform.

## 🌐 Deployment

You can host this for free on **Netlify**, **Vercel**, or **GitHub Pages**.

### Netlify (Recommended)
1.  Drag and drop the `dist` folder (created after running `npm run build`) to Netlify Drop.
2.  Or connect your GitHub repository to Netlify for automatic updates.

## 🛠️ Customization

- **Colors**: Edit `tailwind.config.js` or `src/index.css`.
- **Icons**: We use [Lucide React](https://lucide.dev) icons.
