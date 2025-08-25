**Dictionary App**

A simple and lightweight web-based dictionary application built using HTML, CSS, and JavaScript. It fetches real-time definitions using the free [Dictionary API](https://dictionaryapi.dev/).

**Features**
- Search any English word instantly  
- Displays:
  - Definition  
  - Part of speech  
  - Phonetics  
  - Example usage  
- Audio pronunciation (if available)  
- Clean, minimal, and responsive interface  

**How It Works**
1. Enter a word in the input field.  
2. The app fetches data from `https://api.dictionaryapi.dev/api/v2/entries/en/<word>`.  
3. Displays the result dynamically without reloading the page.  

**Technologies Used**
- **HTML5** – Structure of the app  
- **CSS3** – Styling and layout  
- **JavaScript (Fetch API)** – API integration and dynamic rendering  

**Installation**
1. Clone this repository:
   ```bash
   git clone https://github.com/<your-username>/<repository-name>.git
