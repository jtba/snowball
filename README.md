# Snowball Project

Destroy your debt by leveraging the snowball method. This application was created to better track your debt as you pay them down and help you keep track of rolling payments towards your next smallest debt.  

![screenshot](https://github.com/jtba/snowball/blob/master/docs/screenshot1.png)
![screenshot](https://github.com/jtba/snowball/blob/master/docs/screenshot2.png)

## Getting Started

This application is in the very early stages of development. The frontend is currently using AngularJS (1.x) with plans to convert this over to React.

### Prerequisites

* Webserver
* MongoDB
* NodeJS

### Installing

1. Pull the repo down
2. Configure the endpoint of your mongoDB instance in the /node/index.js
```javascript
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/snowball');
mongoose.Promise = Promise;
```
3. Start the node instance

## Authors

* **Jason Baldwin** - *Initial work* - [JTBA](https://github.com/jtba)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Thanks to all of the third party libraries that have brought this project here so far
