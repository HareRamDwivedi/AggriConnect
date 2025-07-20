# AgriConnect - Smart Farming Platform

AgriConnect is an AI-powered agriculture platform designed to empower Indian farmers with intelligent solutions for crop management, soil health analysis, and access to quality agricultural products. The platform integrates advanced AI, e-commerce, and analytics to make modern farming accessible, affordable, and effective.

---

## 🌱 Project Purpose

AgriConnect aims to revolutionize Indian agriculture by:

- **Providing personalized, AI-driven fertilizer recommendations** for optimal crop yield.
- **Offering an AI chatbot assistant** for 24/7 farming support—covering pest, disease, weather, and crop guidance.
- **Enabling access to premium agricultural products** (seeds, fertilizers, tools) from trusted suppliers.
- **Delivering actionable farm analytics** to track and improve yield.
- **Supporting Indian farming practices, climate, and economic realities** with affordable, simple solutions.

---

## 🚀 Key Features

### 1. **Soil Analysis & Fertilizer Recommendation**
- Upload soil images or lab reports, or manually enter soil data.
- AI analyzes soil health and recommends precise fertilizer types, ratios, and quantities.
- Guidance for best results (e.g., how to photograph soil, what data to include).

### 2. **AI Chatbot Assistant**
- 24/7 expert advice for Indian farmers.
- Support for crop management, pest/disease solutions, government schemes, and more.
- Simple, actionable, and affordable recommendations.

### 3. **E-Commerce Platform**
- Shop for top-quality seeds, fertilizers, and tools.
- Products from verified suppliers, tailored to crops and regions.

### 4. **Farm Analytics**
- Track inputs, monitor progress, and get insights to improve yield.

### 5. **Mobile-First & Multilingual**
- Responsive design for mobile access.
- Simple language and interface designed for Indian users.

---

## 🖥️ Demo

> **Get started instantly:**  
> Visit the deployed platform or run locally (see below).

---

## 🔧 Technologies Used

- **React** & **TypeScript** (frontend)
- **Next.js** for app structure and routing
- **Vite** for fast local development and builds
- **Tailwind CSS** for modern UI and responsive design
- **Lucide Icons** for visual cues
- **OpenAI API (GPT-4o)** for AI chatbot and recommendations
- **Custom Hooks & Components** for UI and user experience
- **ESLint** for code quality

---

## 📸 Fertilizer Recommendation Module

Users can input their soil data in three ways:

1. **Soil Image**  
   - Upload a clear, dry soil photo (in natural light, with a coin for scale).
2. **Soil Report**  
   - Upload recent lab reports (PDF preferred, all nutrient data included).
3. **Manual Entry**  
   - Enter crop, soil type, NPK values, pH, and organic matter manually.

**Personalized recommendations** are generated using AI models, suggesting:
- Fertilizer type (e.g., NPK 20-20-20 + Micronutrients)
- NPK ratio
- Quantity per hectare
- Application timing and tips

#### Tips for Better Results

- **Soil Image:** Natural light, dry soil, coin for scale, 6-8 inches distance.
- **Soil Report:** Recent (within 6 months), clear text, all parameters, PDF format.
- **Manual Input:** Use lab results, correct units, double-check accuracy.

---

## 🤖 AI Chatbot

- Expert assistant for Indian farmers
- Specialized in crop practices, soil health, pest/disease management, weather, market prices, government schemes
- Simple, practical, and cost-effective advice
- Prioritizes safety and environmental sustainability

---

## 🛒 E-Commerce Highlights

- Buy seeds, fertilizers, and tools—curated for Indian agriculture
- Trusted suppliers only
- Smart recommendations based on your soil and crops

---

## 📊 Analytics Dashboard

- Track your farming progress
- Visualize inputs, outputs, and yields
- Get actionable insights to improve productivity

---

## ⚙️ Getting Started

### 1. **Clone the Repository**
```bash
git clone https://github.com/HareRamDwivedi/AggriConnect.git
cd AggriConnect
```

### 2. **Install Dependencies**
```bash
npm install
# or
yarn install
```

### 3. **Run the Development Server**
```bash
npm run dev
# or
yarn dev
```
Visit `http://localhost:5173` or the port shown in your terminal.

### 4. **Build for Production**
```bash
npm run build
# or
yarn build
```

### 5. **Lint Code**
```bash
npm run lint
# or
yarn lint
```

---

## 📁 Project Structure

```
AggriConnect/
│
├── app/                       # Next.js app routes (fertilizer recommendation, API, layout)
├── components/                # Shared React components (hero section, UI, navbar)
├── src/                       # Main source (pages, hooks, styles)
├── public/                    # Static assets
├── tailwind.config.js         # Tailwind CSS config
├── tsconfig.json              # TypeScript config
└── README.md                  # Project documentation
```

---

## 📝 ESLint & Code Quality

- Project uses strict ESLint rules for TypeScript and React.
- Refer to `eslint.config.js` for advanced type-aware linting.
- [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) can be added for enhanced linting.

---

## 💡 Future Enhancements

- More regional languages support
- Integration with real market price APIs
- Community forums for farmers
- Weather alerts and advanced crop analytics

---

## 🙏 Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenAI GPT-4o](https://platform.openai.com/)
- Indian farming community inspiration

---

## 📬 Contact

For suggestions, issues, or collaboration:  
**Repo Owner:** [HareRamDwivedi](https://github.com/HareRamDwivedi)

---

*Empowering Indian farmers with technology for a sustainable future.*
