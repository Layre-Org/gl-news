"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
const news_schema_1 = require("./models/news.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let NewsService = class NewsService {
    constructor(newsModel) {
        this.newsModel = newsModel;
    }
    find(limit, offset) {
        return this.newsModel
            .find()
            .sort({ _id: -1 })
            .skip(offset)
            .limit(limit)
            .populate('author');
    }
    findOne(_id) {
        return this.newsModel.findOne({ _id }).populate('author');
    }
    create(body, author) {
        body['author'] = author;
        return this.newsModel.create(body);
    }
    update(_id, data) {
        return this.newsModel.findOneAndUpdate({ _id }, data).populate('author');
    }
    remove(_id) {
        return this.newsModel.findOneAndDelete({ _id }).populate('author');
    }
};
exports.NewsService = NewsService;
exports.NewsService = NewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(news_schema_1.News.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], NewsService);
//# sourceMappingURL=news.service.js.map