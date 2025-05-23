"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsModule = void 0;
const common_1 = require("@nestjs/common");
const news_controller_1 = require("./news.controller");
const news_service_1 = require("./news.service");
const news_schema_1 = require("./models/news.schema");
const mongoose_1 = require("@nestjs/mongoose");
const id_middleware_1 = require("../middlewares/id.middleware");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const user_module_1 = require("../user/user.module");
let NewsModule = class NewsModule {
    configure(consumer) {
        consumer.apply(id_middleware_1.IdMiddleware).forRoutes('news/:id');
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes('news', 'news/:id');
    }
};
exports.NewsModule = NewsModule;
exports.NewsModule = NewsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: news_schema_1.News.name, schema: news_schema_1.NewsSchema }]),
            user_module_1.UserModule,
        ],
        controllers: [news_controller_1.NewsController],
        providers: [news_service_1.NewsService],
    })
], NewsModule);
//# sourceMappingURL=news.module.js.map