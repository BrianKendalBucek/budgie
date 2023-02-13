<a name="readme-top"></a>

# Budgie via Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<br />
<div align="center">
  <a>
    <img src="assets/budgie-icon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Budgie</h3>

  <p align="center">
    Your multiple-currency budgeting friend!!
    <p>Credit to: Gord Letkeman, Matt Davis, Bryce Haley, and Brian Bucek</p>
    <br />
    <a href="https://youtu.be/YZZ_-7BqRMs">View Demo</a>
  </p>
</div>




<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-frontend">About The Frontend</a></li>
    <li><a href="#about-the-backend">About The Backend</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#budgies-beauty">Budgies Beauty</a></li>
  </ol>
</details>


## About the Frontend

In a world with more digital nomads and expats than ever, budgeting in multiple currencies is a major challenge.

Budgie is a simple and intuitive monthly budgeting app, based on Psql, Express, React, and Node, to solve the multiple currency chaos.

Budgie displays a bright, visual representation of your expenditures using Apexcharts, with your total per day, by category and overall status.
This will help you absorb and really understand how your situation looks.

When you are using Budgie, you have total control over your budget in many different currencies.

Say you are looking to order a new guitar from Poland but want to know what it will cost in Canadian Dollars.
You start by using the slick bottom navigation to render the Currency Converter view, then you simply select Polish currency in the From menu, and Canadian dollars in the To menu.
Enter your amount, and click submit.
The app will calculate the amount based on the current exchange.

You can also view, create, and delete new expenses and categories on their respective pages to further manage your budget.
If that new guitar puts you over budget, as noted by the overall status bar turning red and the percentage being over 100%, you can delete the expense and category before your wife sees.

The charts on the main statistics page will update with the latest information.

You are able to download the graphs for future reference in multiple formats.

Budgie is flexible for both monthly expenses and short trips, ultimately just comparing your budget to your expenditures for any period of time.

Download your statistics, reset, and Budgie On! Simple!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## About the Backend

When building the API for Budgie we had to make lots of decisions. Given Budgie deals with money, a vital decision was how to handle user authentication. There are many options that facilitate authentication and offload liability from developers. However, this is LHL and we don’t shy away from a challenge! So our group decided to build our login and authentication routes by hand. As you can see in our flowchart we have an internal server process that greatly improves the user experience. Every server request made for user data must maintain a one-to-one relationship with a session otherwise, access to sensitive user data is denied. Now onto Bryce to talk about Budgie’s data handling. 

We use a postgreSQLdatabase to hold our data. We have separate tables for: currencies, users, user expenses, and user expense categories. It slightly deviates from a fully normalized database with, perhaps, some data replication and relations. This choice was made  IOT to facilitate more rapid deployment of features for Budgie. The aspect that gave our team the most complications was dealing with the currencies in such a way as to avoid unnecessary computations or passing data across app pages on the front end. As a quick vignette, if a user enters an expense we want to record the conversion to their “home” or “primary” currency at the date of entry in the expense table. Some readily available data from the front end  is sent to an api route gets the db to do a triple join across user and the currencies table twice to get the exchange rate with cross multiplying the values in the table. All data is stored with their rate relative to USD. The found exchange rate, along with the data sent from the front end is then inserted into the expenditures table. This seemingly simple cross multiplication operation took many meetings between team members to re confirm we were getting the right numbers to the right locations.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* PostgreSQL
* Node.js
* React.js
* Express.js
* ApexCharts
* Material UI
* Sass
* React Router
* Axios

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Getting Started

1. Clone the repos
   ```sh
   git clone https://github.com/BrianKendalBucek/budgie
   git clone https://github.com/BrianKendalBucek/budgie-api
   ```
2. Install NPM packages in each via two seperate terminal windows
   ```sh
   npm install
   ```
3. Run "npm start" in each terminal window, starting with "budgie-api, to auto start on localhost:3000"

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Budgies Beauty

![Day graphs](/assets/budgie1.png?raw=true "Daily expenditure chart")
![Category graphs](/assets/budgie2.png?raw=true "Category expenditure chart")
![Category list](/assets/budgie3.png?raw=true "Category list")
![Expense list](/assets/budgie4.png?raw=true "Expense list")
![Expense delete](/assets/budgie5.png?raw=true "Expense deletion")
![Currency converter](/assets/budgie6.png?raw=true "Currency converter")

<p align="right">(<a href="#readme-top">back to top</a>)</p>