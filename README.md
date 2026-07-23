# Infinyty Tech Slide Deck PDF Exports & Generation Utility

This repository contains the official client & investor presentation slide deck exports for **Infinyty Tech** (formerly *Infinity Analytics Consulting*), along with the automated export script.

## 📁 Repository Structure
- `infinyty-tech-deck-dark.pdf` - The exported slide deck in Dark Mode landscape format.
- `infinyty-tech-deck-light.pdf` - The exported slide deck in Light Mode landscape format.
- `export_pdf.js` - Automated generation script built using Playwright that hooks into the presentation server to render and output clean vectors.

## 🚀 Running the PDF Generator

To regenerate the PDF files from the local HTML presentation slide deck:

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Slide Server:**
   Make sure the presentation server is running on `http://localhost:3000/deck.html` (inside the website repo).

3. **Generate PDFs:**
   ```bash
   npm run export
   ```

The script will launch a headless browser, apply dark and light class toggles, and output the vector PDFs directly into your target directory.
