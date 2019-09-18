# Vue Energy

 ![version](https://img.shields.io/badge/version-1.0.0-blue.svg)  ![license](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/cristian-g/vue-energy.svg?maxAge=2592000)](https://github.com/cristian-g/vue-energy/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/cristian-g/vue-energy.svg?maxAge=2592000)](https://github.com/cristian-g/vue-energy/issues?q=is%3Aissue+is%3Aclosed)


**Vue.js website**

A small website using Vue.js that can read the prices.json file which will have the prices for the different time periods in each energy plan and can represent them to the user.

**Steps to run this project**
1. Clone or download this repo
2. Run ```npm install```
3. Run ```vue-cli-service serve``` (or ```npx vue-cli-service serve``` if you don't have the Vue CLI installed)

In case you need to build for production, use: ```vue-cli-service build```

## Use of existing codebase
Instead of starting a new project from scratch, my idea has been to imitate the fact of arriving at a new workplace and receiving a codebase which has been coded by others. In that way, I can test how good I am when dealing with existing projects in order to achieve the requested results by adding and modifying code. For that reason, I've used: Vue Argon Dashboard by Creative Tim.
You can see its product page here: https://www.creative-tim.com/product/argon-dashboard
It is licensed under MIT: https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

## Usage of SASS

I've used SASS with the SCSS syntax.
In this little project the main advantage is to have variables for the colors of the website. Check the file of variables here: https://github.com/cristian-g/vue-energy/blob/master/src/assets/scss/custom/_variables.scss
The colors that I've been using are trying to be similar to the ones used by the company:
- Color #e6007d is used as primary color for buttons and text on buttons.
- Background gradient uses #f06c17 and #ffba03

## Semantic HTML5

I've used two tags of ```<section>``` and ```<article>``` on both views, Welcome and Dashboard (https://github.com/cristian-g/vue-energy/blob/master/src/views/Welcome.vue and https://github.com/cristian-g/vue-energy/blob/master/src/views/Dashboard.vue) in order to avoid some ```<div>``` and ```<span>```, which tells nothing about its content. Further work regarding this project would include less quantity of ```<div>``` elements in favor of more semantic ones.

## Usage of graphics libraries like d3.js or chart.js

I've used [vue-chartjs](https://vue-chartjs.org/), which is a wrapper for Chart.js in Vue. It allows to easily create reusable chart components.

## Different UX/UI ideas

My proposal has been to show the different rates separately because showing them all together could cause confusion to the user:
<p align="center">
    <img align="center" alt="Variants" src="https://github.com/cristian-g/vue-energy/blob/master/demo.gif?raw=true">
</p>
See its implementation on https://github.com/cristian-g/vue-energy/blob/master/src/views/Dashboard.vue.

## Usage of well-known modern JS framework: Vue.js

This is the featured stack I've been using:
- Vue.js
- Vue router (to simply route between the two pages, Welcome and Dashboard)
- Chart.js
- Bootstrap components for Vue.js
- Axios (to get the JSON contents)

## Proper JS Object Orientation

This would be a to topic to improve regarding this project. I'm using the approach of splitting my code on different methods on each Vue component but I would like to use classes for the encapsulation of data models, like I did for a project using Angular and Typescript:
https://github.com/cristian-g/outgogo-app/tree/master/src/models

## Next work

These are two topics I would cover in case of improving this project:
- Code organization: instead of getting the JSON contents from the component code, I would use a different class, called a "service".
- I would like to add Typescript so that I could code using types.

An example of both points is also this project of mine: https://github.com/cristian-g/outgogo-app/tree/master/src/services
You can check the "services" folder: https://github.com/cristian-g/outgogo-app/tree/master/src/services

