# Islamic Loan & Image Tools

A lightweight, dependency-free collection of Arabic (RTL) web tools built with plain HTML, CSS, and JavaScript on top of Bootstrap. No build step, no backend — every page is a static file you can open directly in a browser or host on any static server (GitHub Pages, Netlify, etc.).

## ✨ Features

| Tool | File | Description |
| --- | --- | --- |
| **Murabaha / Loan Calculator** | [`index.html`](index.html) | Calculates Islamic (Murabaha) financing: total profit, total amount, profit percentage, and monthly installment from the item value, down payment, annual rate, and term. |
| **Logo Stamp (Enhanced)** | [`spa.html`](spa.html) | Add a logo/watermark onto one or many images at once, with selectable size, position, and color. Auto-renders on selection and supports batch download. |
| **Logo Stamp (Classic)** | [`html5logostamp.html`](html5logostamp.html) | The original single-page logo stamping tool. |
| **Greeting Card Maker** | [`card.html`](card.html) | Write custom Arabic text onto a greeting card image using an HTML5 canvas. |
| **Random Lottery** | [`random-lottery.html`](random-lottery.html) | Simple random draw / lottery picker. |

All pages share a consistent Arabic look using the **Noto Kufi Arabic** Google Font and a unified RTL layout.

## 🚀 Getting Started

No installation or build tools are required.

### Open directly

Clone the repository and open any HTML file in your browser:

```bash
git clone https://github.com/Codejq/islamic-loan.git
cd islamic-loan
# then open index.html in your browser
```

### Run a local server (recommended)

Some browsers restrict local file access (e.g. reading images via canvas). Serving the folder avoids this:

```bash
# Python 3
python -m http.server 8000

# or Node.js
npx serve
```

Then visit <http://localhost:8000>.

## 🧮 Murabaha Calculator — How It Works

The calculator (in [`index.html`](index.html)) uses the following formulas:

```text
years              = months / 12
totalProfit        = (itemValue − downPayment) × (annualRate / 100) × years
totalWithProfit    = itemValue + totalProfit
monthlyInstallment = (itemValue + totalProfit − downPayment) / months
profitPercentage   = (totalProfit / itemValue) × 100
```

Results update live as you type — no submit button needed.

## 🖼️ Logo Stamp Tool — Usage

1. Open [`spa.html`](spa.html).
2. Choose one or more images via the file picker — they render to canvas **automatically**, no extra clicks needed.
3. Pick the logo **size**, **position**, and **color**.
4. Click **تحميل الصورة لجهازك** to download the stamped image(s), or **أبدأ من جديد** to reset.

## 🗂️ Project Structure

```text
islamic-loan/
├── index.html            # Murabaha / loan calculator (home)
├── spa.html              # Logo stamp tool (enhanced)
├── html5logostamp.html   # Logo stamp tool (classic)
├── card.html             # Greeting card maker
├── aziz.html             # Greeting card variant
├── random-lottery.html   # Random lottery picker
├── js/
│   └── script.js         # Logo stamping logic
├── images/               # Logos and assets
├── main.css              # Shared styles
└── LICENSE
```

## 🛠️ Tech Stack

- **HTML5** (Canvas API for image rendering)
- **Bootstrap 5** (RTL) for layout and components
- **jQuery** (slim) where needed
- **Noto Kufi Arabic** (Google Fonts)
- Vanilla JavaScript — no frameworks, no build pipeline

## 🌐 Localization

The interface is fully **Arabic** and **right-to-left (RTL)**.

## 📄 License

This project is licensed under the terms of the [LICENSE](LICENSE) file in this repository.

## 👤 Author

Maintained by **codejq** · <codejq@gmail.com>
