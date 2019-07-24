# easy-node-ioc

Use Typescript's decorator implement auto injection just like Spring MVC.

[![Version npm](https://img.shields.io/npm/v/winston.svg?style=flat-square)](https://www.npmjs.com/package/winston)[![npm Downloads](https://img.shields.io/npm/dm/winston.svg?style=flat-square)](https://npmcharts.com/compare/winston?minimal=true)

## Installation

```js
npm i easy-node-ioc --save
```

## Quick Start

Check out the [quick start example][quick-example] in `test`.

[quick-example]: https://github.com/chenkang084/easy-node-ioc/tree/master/src/test

## Usage

### 1.Create a Controller

```javascript
import { Controller} from 'easy-node-ioc';
@Controller('/test')
class TestControl {
    ...
}
```

### 2.Create a Service

```javascript
import { Service } from 'easy-node-ioc';
@Service('')
class TestService {
    ...
}
```

### 3.Inject Service

```javascript
import { Autowired,Controller } from 'easy-node-ioc';
@Controller('/test')
class TestControl {
    @Autowired
    testService: TestService;
    ...
}
```

### 4.Define Rest API:GET,POST,PUT,DELETE,PATCH

```javascript
import { Autowired,Controller,GET,RequestParam } from 'easy-node-ioc';
@Controller('/test')
class TestControl {
    @Autowired
    testService: TestService;
    @Get('/index')
    index(@RequestParam('age') age: number, req: Request, res: Response) {
        console.log('index method');
        this.dbService.queryDb();

        res.status(200).send(this.testService.queryDb());
    }
    ...
}
```

### 4.Define Start App

```javascript
import { Bootstrap, ComponentScan } from "../";
@ComponentScan(join(__dirname, "./Controller.ts"))
@Bootstrap
class App {
  constructor() {}

  app = express();

  main() {
    const server = http.createServer(this.app);

    server.listen(9001, function() {
      console.log("Example app listening at http://%s:%s");
    });
  }
}
```

## How to debug

if you use vscode , just follow `.vscode/launch.json` , select `Launch Test Case` .  
if you see `Example app has started.` in the console , then means test case start successfully .  
Try to call `http://localhost:9001/api/test/index` .
