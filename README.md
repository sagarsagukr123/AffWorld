# AffWorld - A React CRM Application

This is a complete web application built with React, demonstrating a full-featured Customer Relationship Management (CRM) system. It includes user authentication, a data-driven dashboard, and full CRUD (Create, Read, Update, Delete) functionality for product management.

**Live Demo:** [https://sagarsagukr123.github.io/AffWorld/](https://sagarsagukr123.github.io/AffWorld/)

## Features

-   **Login Page**: Secure user authentication with a clean, modern interface.
-   **Authentication**: Implements public and private routing to protect application content.
-   **Dashboard**: An interactive dashboard featuring a bar graph to visualize sales and revenue data.
-   **Product Management (CRUD)**: A complete module to manage products, allowing users to:
    -   **C**reate new products.
    -   **R**ead and view a list of all products.
    -   **U**pdate existing product details.
    -   **D**elete products from the system.
-   **Consistent UI/UX**: A uniform and polished design across all pages for a seamless user experience.
-   **State Management**: Centralized state management using Redux Toolkit.

## Tech Stack

-   **Frontend**: React.js
-   **State Management**: Redux & Redux Toolkit
-   **Routing**: React Router
-   **API Calls**: Axios
-   **Charting**: Recharts
-   **Build Tool**: Vite
-   **Deployment**: GitHub Pages

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (or [Yarn](https://yarnpkg.com/)) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sagarsagukr123/AffWorld.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd AffWorld
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Application Locally

To start the development server, run the following command:

```bash
npm run dev
```

This will start the application on `http://localhost:5173`.

## How to Use

1.  **Login**:
    -   Open the application in your browser.
    -   Use the following credentials to log in:
        -   **Username**: `emilys`
        -   **Password**: `emilyspass`

2.  **Navigate the Application**:
    -   After logging in, you will be directed to the **Dashboard**.
    -   Use the navigation bar at the top to switch between the **Dashboard** and the **Products** page.

3.  **Manage Products**:
    -   On the **Products** page, you can view all products.
    -   Click **"Add New Product"** to create a new one.
    -   Use the **"Edit"** and **"Delete"** buttons to manage existing products.

## Deployment

This project is configured for deployment to GitHub Pages. To deploy your own version, follow these steps:

1.  **Build the project:**
    ```bash
    npm run build
    ```
2.  **Deploy to GitHub Pages:**
    ```bash
    npm run deploy
    ```

Your site will be deployed to `https://<your-github-username>.github.io/AffWorld/`.
