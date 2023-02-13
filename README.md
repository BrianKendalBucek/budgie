# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

************************************

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a>
    <img src="assets/budgie-icon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Budgie</h3>

  <p align="center">
    Your multiple-currency budgeting friend!!
    <br />
    <a href="https://youtu.be/1RLWWDqW-BI">View Demo</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-frontend">About The Frontend</a>
      <a href="#about-the-backend">About The Backend</a>

      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Frontend

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

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

## About The Backend

When building the API for Budgie we had to make lots of decisions. Given Budgie deals with money, a vital decision was how to handle user authentication. There are many options that facilitate authentication and offload liability from developers. However, this is LHL and we don’t shy away from a challenge! So our group decided to build our login and authentication routes by hand. As you can see in our flowchart we have an internal server process that greatly improves the user experience. Every server request made for user data must maintain a one-to-one relationship with a session otherwise, access to sensitive user data is denied. Now onto Bryce to talk about Budgie’s data handling. 

We use a postgreSQLdatabase to hold our data. We have separate tables for: currencies, users, user expenses, and user expense categories. It slightly deviates from a fully normalized database with, perhaps, some data replication and relations. This choice was made  IOT to facilitate more rapid deployment of features for Budgie. The aspect that gave our team the most complications was dealing with the currencies in such a way as to avoid unnecessary computations or passing data across app pages on the front end. As a quick vignette, if a user enters an expense we want to record the conversion to their “home” or “primary” currency at the date of entry in the expense table. Some readily available data from the front end  is sent to an api route gets the db to do a triple join across user and the currencies table twice to get the exchange rate with cross multiplying the values in the table. All data is stored with their rate relative to USD. The found exchange rate, along with the data sent from the front end is then inserted into the expenditures table. This seemingly simple cross multiplication operation took many meetings between team members to re confirm we were getting the right numbers to the right locations.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

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



<!-- GETTING STARTED -->
<!-- ## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps. -->
<!-- 
### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ``` -->

### Getting Started
<!-- 1. Get a free API Key at [https://example.com](https://example.com) -->
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
<!-- 4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ``` -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Budgies Beauty

<!-- Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources. -->

![Day graphs](/assets/budgie1.png?raw=true "Daily expenditure chart")
![Category graphs](/assets/budgie2.png?raw=true "Category expenditure chart")
![Category list](/assets/budgie3.png?raw=true "Category list")
![Expense list](/assets/budgie4.png?raw=true "Expense list")
![Expense delete](/assets/budgie5.png?raw=true "Expense deletion")
![Currency converter](/assets/budgie6.png?raw=true "Currency converter")

<!-- _For more examples, please refer to the [Documentation](https://example.com)_ -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->


<!-- 
<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p> --> -->



<!-- LICENSE -->
<!-- ## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->


<!-- 
<!-- CONTACT -->
<!-- ## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p> --> -->
