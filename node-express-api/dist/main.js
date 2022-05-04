"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const app_1 = require("./app");
const exeption_filter_1 = require("./errors/exeption.filter");
const logger_service_1 = require("./logger/logger.service");
const types_1 = require("./types");
const users_controller_1 = require("./users/users.controller");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const appContainer = new inversify_1.Container();
        appContainer.bind(types_1.TYPES.ILogger).to(logger_service_1.LoggerService);
        appContainer.bind(types_1.TYPES.ExeptionFilter).to(exeption_filter_1.ExeptionFilter);
        appContainer.bind(types_1.TYPES.UserController).to(users_controller_1.UserController);
        appContainer.bind(types_1.TYPES.Application).to(app_1.App);
        const app = appContainer.get(types_1.TYPES.Application);
        yield app.init();
    });
}
bootstrap();
