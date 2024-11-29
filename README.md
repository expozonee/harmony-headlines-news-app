# Harmony Headlines News

**Harmony Headlines News** is a modern web application built with **React**, **TypeScript**, and **Vite**. It allows users to explore the latest news articles, read full stories, and interact with the content by adjusting the tone of the articles using a mood slider. The app fetches the latest news from an external API and allows users to modify the mood of each article, making it feel more **calm** or **aggressive**. This feature is powered by the **Google Gemini AI API**.

The mood slider is built using the **Material-UI (MUI)** library, providing an intuitive and responsive user experience.

## Features

- **Fetch Latest News**: Display the latest headlines fetched from an external news API.
- **Read Full Articles**: Clicking a headline takes the user to the full article.
- **Mood Slider**: A slider that allows users to change the tone of the article to either **calm** or **aggressive**.
- **Powered by Google Gemini AI**: The mood slider uses the Gemini AI API to process and adjust the sentiment of the article.

## Tech Stack

- **Frontend**:
  - **React** (with TypeScript)
  - **Vite** (for fast development and bundling)
  - **Material-UI (MUI)** (for the mood slider and UI components)
  - **CSS** (for styling)
- **External APIs**:
  - **News API**: Fetches the latest news articles.
  - **Google Gemini API**: Adjusts the tone of the articles based on the mood selected by the user.

## Installation

### Prerequisites

- **Node.js** (version 16 or later)
- **Yarn** or **npm** (for package management)
- **API keys** for external services:
  - A **News API key** (e.g., [NewsAPI](https://newsapi.org/), [MediaStack](https://mediastack.com/), etc.)
  - A **Google Gemini API key** (from Google Cloud)

### Steps

1. **Clone the repository**:

    ```bash
    git clone https://github.com/expozonee/harmony-headlines-news-app.git
    cd harmony-headlines-news-app
    ```

2. **Install dependencies**:

    Run the following command to install dependencies using npm or Yarn:

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up environment variables**:
    - Create a `.env` file in the root of the project and add your API keys:

      ```bash
      VITE_NEWS_API_KEY=your-news-api-key
      VITE_GEMINI_API_KEY=your-gemini-api-key
      ```

    - Note that the `VITE_` prefix is required by Vite for environment variables to be exposed to the client-side code.

4. **Start the development server**:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Open your browser and navigate to `http://localhost:5173` (or the port Vite provides).

## How It Works

1. **Fetching News**:
   - The app fetches the latest articles from an external news API using the API key provided in the `.env` file.
   
2. **Display Headlines**:
   - On the homepage, the latest headlines are displayed in a list.
   
3. **Read Full Articles**:
   - When a user clicks on a headline, they are taken to a page showing the full article.

4. **Mood Slider**:
   - The article page contains a **Mood Slider** that allows the user to modify the tone of the article.
     - **Calm**: The article's tone is softened and neutralized.
     - **Aggressive**: The article’s tone is enhanced to feel more intense.
   
5. **Tone Adjustment**:
   - When the slider is adjusted, the app sends the article content to the **Google Gemini AI API**, which processes the text and applies the appropriate tone.
   
6. **Material-UI (MUI) Slider**:
   - The mood slider is built using Material-UI (MUI) components, ensuring a sleek, responsive UI experience.

## API Integration

### News API
The app integrates with an external news API (e.g., **NewsAPI**, **MediaStack**, etc.) to fetch the latest headlines. You need to sign up for an API key and add it to your `.env` file.

### Google Gemini API
The **Google Gemini AI API** is used to modify the tone of the article based on user input. You’ll need to set up an API key through the [Google Cloud Console](https://console.cloud.google.com/). After enabling the Gemini API, add the key to your `.env` file.

## Acknowledgments

- **NewsAPI** (or your chosen news service) for providing access to the latest news articles.
- **Google Gemini AI** for enabling sentiment analysis and mood adjustments.
- **Material-UI** for providing the beautiful and customizable UI components.
- All the contributors who help improve the project!

---

## Try it Now!

Experience **Harmony Headlines News** and explore how you can adjust the tone of the latest news articles to match your mood. Whether you're in the mood for a calming read or a more intense perspective, the mood slider makes it easy to shift the tone of your news.

--- 
