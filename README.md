![newsweb](https://github.com/user-attachments/assets/b643d344-3c75-460b-908b-23403f2df46d)

# News Website

[![made-with-flutter](https://img.shields.io/badge/Made%20with-React-blue)](https://react.dev/) ![Release](https://img.shields.io/github/v/release/gopi2401/news-web) ![Downloads](https://img.shields.io/github/downloads/gopi2401/news-web/total) ![GitHub issues](https://img.shields.io/github/issues/gopi2401/news-web) ![visitors](https://visitor-badge.laobi.icu/badge?page_id=gopi2401.news-web)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/gopi2401/news-web) ![GitHub repo size](https://img.shields.io/github/repo-size/gopi2401/news-web?style=flat)

## Introduction

A simple news website built with React that fetches and displays real-time news headlines using the NewsAPI. This project demonstrates how to integrate external APIs, manage state, and navigate between different pages in a React application.

## Features

- 📰 Fetches top headlines from [NewsAPI](https://newsapi.org/).
- 🔍 Search for news articles by keyword.
- 📂 Filter news by categories (e.g., Technology, Sports, Business).
- 🖥 Fully responsive design for all device sizes.
- 🗞 Display detailed information for each news article.
- 🚀 Single Page Application (SPA) using React Router for seamless navigation.

## Demo

You can view a live demo of the project here: [Live Demo Link](https://gopi2401.github.io/news-web)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gopi2401/news-web.git
   cd news-web
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Get an API key from NewsAPI by signing up.
4. Create a .env file in the root of your project and add your API key:
   ```bash
   REACT_APP_API_KEY=your_api_key_here
   ```
5. Start the development server:
   ```bash
   npm start
   ```
6. Open your browser and go to http://localhost:3000/news-web to view the website.

## Dependencies

The project uses the following key dependencies:

| Dependency           | Description                                                                                                    | Version   |
| -------------------- | -------------------------------------------------------------------------------------------------------------- | --------- |
| **React**            | A JavaScript library for building user interfaces. [React Docs](https://reactjs.org/docs/getting-started.html) | `^18.3.1` |
| **React-DOM**        | Provides DOM-specific methods for React.                                                                       | `^18.3.1` |
| **React-Router-DOM** | Declarative routing for React applications.                                                                    | `^6.26.2` |
| **React-Scripts**    | Provides the scripts and configuration used by Create React App.                                               | `5.0.1`   |
| **Web-Vitals**       | Helps measure and report Core Web Vitals metrics.                                                              | `^2.1.4`  |

### DevDependencies

These are the development dependencies for the project:

| DevDependency   | Description                                            | Version   |
| --------------- | ------------------------------------------------------ | --------- |
| **ajv**         | A JSON schema validator for modern applications.       | `^7.2.4`  |
| **gh-pages**    | A package for easily deploying to GitHub Pages.        | `^6.1.1`  |
| **TailwindCSS** | A utility-first CSS framework for fast UI development. | `^3.4.13` |

## Usage

### Home Page

- Displays the latest top headlines from around the world.
- Provides an option to search for news based on user input.
- Click on any article to read more from the original source.

### Category Page

- Filter news by categories like Technology, Sports, Business, etc.
- Easily navigate between categories using the navigation bar.

### Search Page

- Allows users to search for news articles by entering a keyword.
- Displays a list of articles matching the search query.

## API Integration

This project uses the NewsAPI to fetch real-time news headlines. The API request is made in the following format:

```bash
https://newsapi.org/v2/top-headlines?country=us&apiKey=your_api_key
```

### API Endpoints

- Top Headlines: /v2/top-headlines?country=us
- Search News: /v2/everything?q=search_term
- Categories: /v2/top-headlines?category=category_name

## Folder Structure

```bash
src/
  ├── components/        # Reusable components like Navbar, NewsCard and etc.
  ├── pages/             # Page components like Home, Category, SearchResults
  ├── utils/             # Global data store like DataProvider
  ├── App.js             # Main app component with routing
  ├── index.css          # Global styles
  ├── index.js           # Entry point
  └── .env               # Environment variables (API Key)
```

## Contributing

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Make your changes and commit them (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/your-feature).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

### Key Sections:

1. **Project Overview**: Provides a brief introduction and features list.
2. **Installation**: Guides users through the steps to run the project locally.
3. **Dependencies**: The project uses the following key dependencies.
4. **API Integration**: Explains how the API is used in the project.
5. **Usage**: Describes the main functionalities of the application.
6. **Folder Structure**: Gives a quick overview of how the code is organized.
7. **Contributing**: Instructions for contributing to the project.
8. **License**: Specifies the license (MIT in this case).

You can adjust the sections based on additional features or unique elements in your project. Let me know if you'd like more customization or have specific sections you'd like to include!
