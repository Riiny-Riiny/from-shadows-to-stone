# From Shadows to Stone

**Franklin College and the Legacy of Slavery**

A comprehensive research website documenting the relationship between Franklin College and the institution of slavery from 1787 to 1853. This project uncovers forgotten stories of enslaved individuals and institutional connections through archival research.

## 📋 Project Overview

This website presents research by **Frances Taylor** and **Arek Giir Riny** from Franklin & Marshall College's Reckoning with Lancaster Summer Project. The research examines the complex connections between Franklin College's trustees, students, and the institution of slavery in Pennsylvania.

### Key Findings
- **807 enslaved individuals** in Lancaster County in 1780
- **Multiple trustees** with documented connections to slavery
- **Specific enslaved individuals** identified: Esther, Loby, Ben, Isaac
- **Institutional links** between college leadership and slavery

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd from-shadows-to-stone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
from-shadows-to-stone/
├── public/
│   ├── images/                    # Historical portraits
│   │   ├── adam-reigart-sr.jpg
│   │   ├── william-hamilton.jpg
│   │   ├── jasper-yeates.jpg
│   │   └── edward-hand.jpg
│   ├── favicon.svg
│   └── manifest.json
├── src/
│   ├── app/                       # Next.js app router
│   │   ├── page.tsx              # Homepage
│   │   ├── about/page.tsx        # About page
│   │   ├── research/page.tsx     # Research content
│   │   ├── contact/page.tsx      # Contact form
│   │   └── layout.tsx            # Root layout
│   ├── components/                # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Section.tsx
│   │   ├── Accordion.tsx
│   │   ├── HistoricalHighlight.tsx
│   │   ├── ReferenceList.tsx
│   │   └── ProfileCard.tsx
│   └── data/                      # Research data
│       ├── full-research.md       # Complete research content
│       └── references.json        # Bibliography
├── tailwind.config.js
├── package.json
└── README.md
```

## 🎨 Features

### Core Pages
- **Homepage**: Overview and mission statement
- **Research**: Complete research findings with historical images
- **About**: Information about researchers and methodology
- **Contact**: Contact form and researcher information

### Key Components
- **Historical Images**: Portraits of key trustees (Adam Reigart Sr., William Hamilton, Jasper Yeates, Edward Hand)
- **Interactive Research**: Accordion-style research sections
- **References**: Dynamic bibliography from JSON data
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Semantic HTML and ARIA labels

### Technical Features
- **Next.js 15**: App router with TypeScript
- **Tailwind CSS**: Utility-first styling
- **Typography Plugin**: Beautiful prose formatting
- **SEO Optimized**: Meta tags and structured data
- **PWA Ready**: Web app manifest and icons

## 📊 Research Content

### Historical Figures Featured
- **Adam Reigart Sr.** (1739-1813) - Treasurer (1789-1813)
- **William Hamilton** (1787-1813) - Trustee, enslaved multiple individuals
- **Jasper Yeates** (1787-1817) - Attorney and judge
- **Edward Hand** (1787-1802) - Revolutionary War officer

### Enslaved Individuals Honored
- **Esther** - 14-year-old Black girl enslaved by William Hamilton
- **Loby** - 14-year-old boy enslaved by William Hamilton  
- **Ben** - 8-year-old boy enslaved by William Hamilton
- **Isaac** - 9-10 month old boy enslaved by Paul Zantzinger

## 🛠️ Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Adding New Images
1. Place image files in `public/images/`
2. Update the research page to include new portraits
3. Add biographical information and historical context

### Content Updates
- Research content: Edit `src/data/full-research.md`
- References: Update `src/data/references.json`
- Page content: Modify respective `.tsx` files

## 🎯 Research Methodology

### Archival Sources
- LancasterHistory archives
- Franklin & Marshall College archives
- Pennsylvania Gradual Emancipation Act records (1780)
- Marriage, baptismal, and burial records
- Family histories and tax records

### Cross-Referencing Approach
- Cross-listed trustee names with Rock Ford's enslaver database
- Verified connections through founding documents
- Documented specific enslaved individuals
- Traced student connections to trustee families

## 🤝 Collaboration

This project is part of the **Witness Stones Project** collaboration with Historic Rock Ford, aiming to:
- Commemorate overlooked individuals
- Create permanent memorials in Lancaster City
- Build community awareness and acceptance
- Confront institutional history with truth

## 📝 Contact Information

### Researchers
- **Frances Taylor** - Rising Junior at Franklin & Marshall College
  - Email: frances.taylor@fandm.edu
  - LinkedIn: [Frances Taylor](https://linkedin.com/in/frances-taylor-fandm)
  - Portfolio: [Research Portfolio](https://frances-taylor-research.com)

- **Arek Giir Riny** - Research Partner
  - Email: arek.giir.riny@fandm.edu
  - LinkedIn: [Arek Giir Riny](https://linkedin.com/in/arek-giir-riny)
  - Portfolio: [Academic Portfolio](https://arek-giir-riny-research.com)

### Project Information
- **Institution**: Franklin & Marshall College
- **Program**: Reckoning with Lancaster Summer Project
- **Collaboration**: Historic Rock Ford Witness Stones Project
- **Timeline**: 1787-1853 (Franklin College period)

## 📄 License

This project represents academic research and should be cited appropriately. All historical images are used for educational purposes.

## 🙏 Acknowledgments

- **Historic Rock Ford** for collaboration and archival access
- **LancasterHistory** for archival resources
- **Franklin & Marshall College** for institutional support
- **Witness Stones Project** for methodology and community engagement

---

*"Each of these individuals had a remarkable story to be remembered, not just as slaves, but also as individuals who made significant contributions to this community."*
