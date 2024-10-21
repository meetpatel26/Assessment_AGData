# Assessment_AGData
# Person Management App

## Description

This is a **Person Management** web application built using **Angular** and **ASP.NET Core**. The app allows users to add and view a list of persons with basic information such as name and address(with Google Place API). The project demonstrates how to integrate a front-end Angular application with a back-end ASP.NET Core API, leveraging **SOLID PRINCIPLE** and **Domain Driven Design (DDD)** principles.

## Technologies Used

- **Frontend**: Angular
- **Backend**: ASP.NET Core
- **Database**: Memory Storage
- **Other**: 
  - Proxy configuration for API requests during development
  - CORS enabled for communication between frontend and backend

## Features

- Add new persons with name and address
- View a list of all added persons
- Validation for required fields (name)
- Autocomplete address field from google maps api
- Responsive design using Bootstrap
- API integration with proxy setup

## Project Setup and Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (for running Angular app)
- [Angular CLI](https://angular.io/guide/setup-local) (for Angular commands)
- [.NET 6 SDK](https://dotnet.microsoft.com/download) (for ASP.NET Core backend)

### Clone the Repository

To get started, clone the repository from GitHub:

```bash
git clone https://github.com/yourusername/person-management-app.git
cd person-management-app
