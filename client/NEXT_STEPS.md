# Next steps (React beginner)

## 1. Run the app

In a terminal:

```bash
cd client
npm run dev
```

Open the URL it shows (usually http://localhost:5173). You should see the Vite + React welcome page with a counter button.

---

## 2. How your app is wired

| File | What it does |
|------|----------------|
| `index.html` | Single HTML page. The `<div id="root">` is where React takes over. |
| `src/main.jsx` | Entry point. It loads React and mounts your `App` component into `#root`. |
| `src/App.jsx` | Your main component. This is what you see on the screen. |

So: **index.html** → **main.jsx** (mounts React) → **App.jsx** (your UI).

---

## 3. Try your first edit (see Hot Reload)

1. With `npm run dev` still running, open `src/App.jsx`.
2. Change the `<h1>` text, e.g. to `<h1>Hello, React!</h1>`.
3. Save the file. The browser should update **without** a full refresh. That’s Vite’s Hot Module Replacement (HMR).

---

## 4. Concepts you just saw in `App.jsx`

- **Components** – Functions that return JSX (the HTML-like syntax). `App` is a component.
- **`useState`** – Hook that adds state (e.g. `count`). When you call `setCount`, React re-renders and the screen updates.
- **JSX** – The mix of HTML-like tags and `{javascript}` inside. Example: `count is {count}`.

---

## 5. What to do next

- **Change the welcome page** – Edit `App.jsx` to look like your project (e.g. “EasyGrader” and a simple layout).
- **Add a new component** – Create `src/Components/Header.jsx`, export a function that returns some JSX, then use `<Header />` in `App.jsx`.
- **Add more pages** – Install React Router: `npm install react-router-dom`, then define routes in `App.jsx` (e.g. `/`, `/contact`, `/faq`) and create a component per page.

When you’re ready, the official [React docs](https://react.dev/learn) are the best place to go deeper.
