# EcoS AI Prompt-Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> A specialized web application that generates customized AI prompts for academic research feedback in the MA program East Asian Economy and Society.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Research Development Phases](#research-development-phases)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technical Details](#technical-details)
- [Contributing](#contributing)
- [Educational Context](#educational-context)
- [License](#license)

## Overview

The EcoS AI Prompt-Generator is an educational tool designed to help graduate students receive structured, program-specific feedback on their research projects. Rather than relying on generic AI interactions, this tool provides carefully crafted prompts that encode academic standards and methodological requirements specific to the East Asian Economy and Society program.

### Why This Tool Exists

- **Democratizes Access**: Provides 24/7 access to detailed academic feedback regardless of prior AI experience
- **Program-Specific**: Prompts are tailored to specific academic requirements and standards
- **Educational Enhancement**: Helps students prepare for meaningful consultations with professors
- **Quality Assurance**: Catches fundamental requirement issues early in the research process

## Features

### 🎯 **Multi-Phase Research Support**

- Supports 5 distinct research development phases
- Dynamic form generation based on selected phase
- Phase-specific validation and guidance

### 📝 **Intelligent Form Management**

- Real-time character counting with limits
- Dynamic stakeholder and issue management
- Input validation with error highlighting
- Multiple input modes (structured fields vs. text blocks)

### 🤖 **AI-Ready Prompt Generation**

- Compatible with ChatGPT, Claude, Gemini, and other LLMs
- Structured XML-style output for consistent AI parsing
- Copy-to-clipboard functionality
- Template-based prompt system

### 🎨 **User Experience**

- Responsive design with Tailwind CSS
- Comprehensive FAQ system
- Progressive disclosure of form sections
- Clear visual feedback and status messages

### 📋 **Academic Standards Integration**

- Built-in requirement checking
- Program-specific assessment criteria
- Structured feedback templates
- Professional formatting guidelines

## Research Development Phases

|Phase                             |Purpose                                       |Key Components                                                  |
|----------------------------------|----------------------------------------------|----------------------------------------------------------------|
|**1. Topic and Research Question**|Validate research question structure and scope|Geographic criteria, causality language, feasibility            |
|**2. Relevance Analysis**         |Assess stakeholder relevance arguments        |Stakeholder identification, evidence quality, RQ connection     |
|**3. Literature Review Structure**|Plan literature search strategy               |Central concept focus, abstraction level, planning perspective  |
|**4. Analytical Framework**       |Verify framework-literature alignment         |Literature grounding, measurement specification, data collection|
|**5. Formal Aspects**             |Check formatting and presentation standards   |Document structure, heading hierarchy, visual elements          |

## Installation

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server (for local development) or static hosting service

### Quick Start

1. **Clone the repository**
   
   ```bash
   git clone https://github.com/your-username/ecos-ai-prompt-generator.git
   cd ecos-ai-prompt-generator
   ```
1. **Serve the application**
   
   **Option A: Using Python**
   
   ```bash
   python -m http.server 8000
   ```
   
   **Option B: Using Node.js**
   
   ```bash
   npx serve .
   ```
   
   **Option C: Using Live Server (VS Code)**
- Install Live Server extension
- Right-click on `index.html` → “Open with Live Server”
1. **Access the application**
- Open your browser and navigate to `http://localhost:8000`

### Deployment

The application is a static site and can be deployed to any web hosting service:

- **GitHub Pages**: Push to a repository and enable GitHub Pages
- **Netlify**: Drag and drop the project folder or connect via Git
- **Vercel**: Import the repository for automatic deployment
- **Traditional hosting**: Upload files to any web server

## Usage

### Basic Workflow

1. **Select Research Phase**: Choose your current development phase from the dropdown
1. **Fill Required Fields**: Complete all required information for your selected phase
1. **Generate Prompt**: Click “Generate Prompt” to create your customized AI prompt
1. **Copy and Use**: Copy the generated prompt to your clipboard and use with any AI chatbot

### Phase-Specific Instructions

#### Topic and Research Question

- Select project type (Master’s thesis or Term paper)
- Enter your proposed title
- Provide your research question

#### Relevance Analysis

- Enter your research question
- Choose input method (structured fields or text paste)
- Add stakeholders with their interests and supporting evidence

#### Literature Review Structure

- Provide your research question
- Choose input method (structured fields or text paste)
- Define issues and their explanations/purposes

#### Analytical Framework

- Enter your research question
- Choose submission method (text entry or file upload)
- Provide literature review and analytical framework content

#### Formal Aspects

- Upload your document alongside the generated prompt
- No additional input required

### Best Practices

- **Start Early**: Use the tool during development, not as a last-minute check
- **Engage Critically**: Use AI feedback as a starting point for deeper reflection
- **Iterate**: Generate prompts multiple times as your work evolves
- **Consult Professors**: Use feedback to prepare for meaningful academic discussions

## Project Structure

```
ecos-ai-prompt-generator/
├── index.html                    # Main application file
├── prompts/
│   ├── rq.txt                   # Research question template (thesis)
│   ├── rq-term-paper.txt        # Research question template (term paper)
│   ├── relevance.txt            # Relevance analysis template
│   ├── lit-structure.txt        # Literature review structure template
│   ├── analytical-framework.txt # Analytical framework template
│   └── formal-aspects.txt       # Formal aspects template
├── README.md                    # Project documentation
└── LICENSE                     # License file
```

## Technical Details

### Built With

- **HTML5**: Semantic structure and accessibility
- **Vanilla JavaScript**: Dynamic functionality and form management
- **Tailwind CSS**: Responsive styling and design system
- **Template System**: Text-based prompt templates with variable substitution

### Key JavaScript Functions

- `showSection(key)`: Manages section visibility based on selected phase
- `generatePrompt()`: Validates input and generates customized prompts
- `buildStudentInput()`: Formats student data into structured XML output
- `addStakeholder()/removeStakeholder()`: Dynamic stakeholder management
- `addIssue()/removeIssue()`: Dynamic issue management

### Browser Compatibility

- Chrome/Chromium: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Edge: ✅ Full support
- Internet Explorer: ❌ Not supported

## Contributing

We welcome contributions to improve the EcoS AI Prompt-Generator! Here’s how you can help:

### Development Setup

1. Fork the repository
1. Create a feature branch (`git checkout -b feature/amazing-feature`)
1. Make your changes
1. Test thoroughly across different browsers
1. Commit your changes (`git commit -m 'Add amazing feature'`)
1. Push to the branch (`git push origin feature/amazing-feature`)
1. Open a Pull Request

### Contribution Guidelines

- **Code Style**: Follow existing JavaScript and HTML patterns
- **Testing**: Test across multiple browsers and devices
- **Documentation**: Update README.md for significant changes
- **Templates**: Be extremely careful when modifying prompt templates
- **Academic Accuracy**: Ensure changes align with program requirements

### Areas for Contribution

- 🐛 Bug fixes and error handling improvements
- 🎨 UI/UX enhancements and accessibility improvements
- 📱 Mobile responsiveness optimizations
- 🌍 Internationalization support
- 📊 Analytics and usage tracking
- 🔧 Performance optimizations

## Educational Context

### Learning Objectives

This tool helps students understand:

- Whether their work meets basic academic requirements
- How to structure research arguments effectively
- What constitutes appropriate evidence and reasoning
- How to prepare for productive professor consultations

### AI Integration Philosophy

The tool embodies a responsible approach to AI in education:

- **Enhancement, not replacement**: AI feedback supplements, doesn’t replace, human expertise
- **Educational transparency**: Students understand they’re using AI assistance
- **Critical thinking**: Encourages reflection rather than passive acceptance
- **Academic integrity**: Promotes original thinking within structured frameworks

### Important Limitations

- AI assessments are preliminary and probabilistic, not definitive
- Cannot replace human expertise and contextual understanding
- May show inconsistencies across multiple submissions
- Students should always consult professors for comprehensive evaluation

## License

This project is licensed under the MIT License - see the <LICENSE> file for details.

-----

**Developed for the MA Program East Asian Economy and Society**

*For questions, issues, or suggestions, please open an issue on GitHub or contact the program administration.*
