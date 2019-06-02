"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const __1 = require("../");
const Service_1 = tslib_1.__importDefault(require("./Service"));
const DbService_1 = tslib_1.__importDefault(require("./DbService"));
const MethodInject_1 = require("../core/MethodInject");
const ParameterDecorate_1 = require("../core/ParameterDecorate");
let TestControl = class TestControl {
    constructor() {
        this.test = () => {
            console.log('control test method');
        };
        this.index.bind(this);
    }
    index(age, req, res) {
        console.log('index method');
        this.dbService.queryDb();
        res.status(200).send(this.testService.queryDb());
    }
    index2(id, age, req, res, next) {
        console.log('index method');
        this.dbService.queryDb();
        res.status(200).send(this.testService.queryDb());
    }
};
tslib_1.__decorate([
    __1.Autowired,
    tslib_1.__metadata("design:type", Service_1.default)
], TestControl.prototype, "testService", void 0);
tslib_1.__decorate([
    __1.Autowired,
    tslib_1.__metadata("design:type", DbService_1.default)
], TestControl.prototype, "dbService", void 0);
tslib_1.__decorate([
    MethodInject_1.Get('/index'),
    tslib_1.__param(0, ParameterDecorate_1.RequestParam('age')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], TestControl.prototype, "index", null);
tslib_1.__decorate([
    MethodInject_1.Get('/index2/:id'),
    tslib_1.__param(0, ParameterDecorate_1.PathVariable('id')),
    tslib_1.__param(1, ParameterDecorate_1.RequestParam('age')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Number, Object, Object, Function]),
    tslib_1.__metadata("design:returntype", void 0)
], TestControl.prototype, "index2", null);
TestControl = tslib_1.__decorate([
    __1.Controller('/test'),
    tslib_1.__metadata("design:paramtypes", [])
], TestControl);
exports.default = TestControl;
//# sourceMappingURL=Controller.js.map