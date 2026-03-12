# Rare Mines Cleantech Pvt Ltd — Official Website

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) website for Rare Mines Cleantech Pvt Ltd — a clean technology company focused on sustainable Li-Ion battery recycling.

---

## 🎨 Brand Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Crimson | `#8B2035` | Primary — CTAs, headings |
| Royal Blue | `#2B5BA8` | Secondary — nav, accents |
| Emerald Green | `#3DAA7A` | Accent — eyebrows, dividers |

---

## 📁 Project Structure

```
raremines-cleantech-website/
├── client/                          # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── common/
│   │   │       ├── Navbar.jsx       # Responsive navigation
│   │   │       ├── Navbar.css
│   │   │       ├── Footer.jsx       # Footer with newsletter
│   │   │       └── Footer.css
│   │   ├── pages/
│   │   │   ├── Home.jsx             # Landing page (hero, stats, tech, partners)
│   │   │   ├── Home.css
│   │   │   ├── AboutUs.jsx          # Company history, values, timeline
│   │   │   ├── LiIonBattery.jsx     # Li-Ion technology overview
│   │   │   ├── Products.jsx         # Product catalog (Li, Co, Ni, Mn, etc.)
│   │   │   ├── BatteryRecycling.jsx # HHM™ process detail
│   │   │   ├── Blog.jsx             # Blog listing with filters
│   │   │   ├── Blog.css
│   │   │   ├── BlogPost.jsx         # Blog post detail + sidebar
│   │   │   ├── BlogPost.css
│   │   │   ├── OtherPages.jsx       # SDG Goals, Contact, 404
│   │   │   └── Pages.css            # Shared page styles
│   │   ├── styles/
│   │   │   └── global.css           # CSS variables, resets, utilities
│   │   ├── App.js                   # Router + layout
│   │   └── index.js                 # React entry point
│   └── package.json
│
├── server/                          # Node.js + Express backend
│   ├── models/
│   │   ├── Blog.js                  # Blog post model with slug + readtime
│   │   ├── Contact.js               # Contact inquiry model
│   │   └── Newsletter.js            # Newsletter subscriber model
│   ├── controllers/
│   │   ├── blogController.js        # CRUD + seed blogs
│   │   ├── contactController.js     # Submit/get contacts
│   │   └── newsletterController.js  # Subscribe/unsubscribe
│   ├── routes/
│   │   ├── blogRoutes.js
│   │   ├── contactRoutes.js
│   │   └── newsletterRoutes.js
│   ├── index.js                     # Express server entry point
│   ├── .env.example                 # Environment variables template
│   └── package.json
│
├── package.json                     # Root scripts (concurrently)
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or MongoDB Atlas)
- npm v9+

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd raremines-cleantech-website

# Install all dependencies
npm run install:all
```

### Environment Setup

```bash
cd server
cp .env.example .env
# Edit .env with your MongoDB URI and other settings
```

### Run Development

```bash
# From root — runs both client and server concurrently
npm run dev

# OR separately:
npm run server    # Express on :5000
npm run client    # React on :3000
```

### Seed Sample Blog Posts

After starting the server, visit:
```
http://localhost:5000/api/blogs/seed
```
This loads 6 pre-written blog posts into your database.

Or click "Load Sample Posts" on the Blog page.

---

## 📱 Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, climate stats, Li-Ion section, tech features, partners, awards, blog preview |
| `/about-us` | About Us | Mission, values, milestones timeline |
| `/li-ion-battery` | Li-Ion Battery | Technology overview, critical minerals |
| `/products` | Products | Full product catalog with specs |
| `/battery-recycling` | Battery Recycling | HHM™ process steps, advantages |
| `/sdg-goals` | SDG Goals | UN SDG alignment, impact metrics |
| `/blog` | Blog | Filtered post listing with pagination |
| `/blog/:slug` | Blog Post | Full article with sidebar |
| `/contact` | Contact | Inquiry form + contact info |

---

## 🔌 API Endpoints

### Blogs
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/blogs` | List published blogs (paginated, filterable) |
| GET | `/api/blogs/featured` | Latest 3 blogs |
| GET | `/api/blogs/:slug` | Single blog post |
| POST | `/api/blogs` | Create blog |
| PUT | `/api/blogs/:id` | Update blog |
| DELETE | `/api/blogs/:id` | Delete blog |
| GET | `/api/blogs/seed` | Seed sample blogs |

### Contact
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit inquiry |
| GET | `/api/contact` | List all inquiries (admin) |

### Newsletter
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/newsletter/subscribe` | Subscribe email |
| POST | `/api/newsletter/unsubscribe` | Unsubscribe email |

---

## 🛠 Tech Stack

**Frontend:** React 18, React Router v6, Axios, react-countup, react-intersection-observer
**Backend:** Node.js, Express.js, Mongoose, Helmet, CORS, express-rate-limit
**Database:** MongoDB
**Styling:** Custom CSS with CSS Variables (no framework dependency)
**Fonts:** Playfair Display + DM Sans + Space Mono (Google Fonts)

---

## 🔒 Security
- Helmet.js for HTTP headers
- Rate limiting (100 req/15min per IP)
- Input validation via express-validator
- CORS restricted to client origin
- Environment variable protection

---

## 📦 Production Build

```bash
# Build the React client
npm run build

# Serve with your preferred hosting (Vercel, Railway, EC2, etc.)
```

---

## 🏷 Logo & Brand
The logo (R hexagon — crimson fill, royal blue border) is referenced throughout the site via CSS clip-path hexagon shapes. Replace `/client/public/logo.png` with your actual logo file.

---

Built with ❤️ for Rare Mines Cleantech Pvt Ltd
