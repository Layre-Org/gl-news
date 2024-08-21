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
exports.NewsController = void 0;
const common_1 = require("@nestjs/common");
const news_service_1 = require("./news.service");
const create_news_dto_1 = require("./dto/create-news.dto");
const mongoose_1 = require("mongoose");
const update_news_dto_1 = require("./dto/update-news.dto");
let NewsController = class NewsController {
    constructor(newsService) {
        this.newsService = newsService;
    }
    async find(limit, offset) {
        try {
            if (limit) {
                limit = parseInt(limit);
            }
            if (offset) {
                offset = parseInt(offset);
            }
        }
        catch (err) {
            throw new common_1.BadRequestException('Limit and Offset must be valid integers');
        }
        return await this.newsService.find(limit, offset);
    }
    async findOne(id) {
        return this.newsService.findOne(id);
    }
    async create(body, req) {
        if (!req['isWriter']) {
            throw new common_1.UnauthorizedException('User must be a writer to post news');
        }
        const author = req['userId'].toString();
        return (await this.newsService.create(body, author)).populate('author');
    }
    async update(body, id, req) {
        const newsAuthor = this.newsService.findOne(id);
        if (!newsAuthor) {
            throw new common_1.BadRequestException("Couldn't find a document with the ID providen");
        }
        const newsAuthorId = (await newsAuthor).author['_id'];
        if (!newsAuthorId) {
            throw new common_1.UnauthorizedException("Couldn't verify the author's permission, try again");
        }
        if (req['userId'].toString() !== newsAuthorId.toString() &&
            req['isAdmin'] === false) {
            throw new common_1.UnauthorizedException('User must be the post author or admin to update the document');
        }
        const doc = await this.newsService.update(id, body);
        return {
            message: 'Data updated successfully',
            doc,
        };
    }
    async remove(id, req) {
        const newsAuthor = this.newsService.findOne(id);
        if (!newsAuthor) {
            throw new common_1.BadRequestException("Couldn't find a document with the ID providen");
        }
        const newsAuthorId = (await newsAuthor).author['_id'];
        if (!newsAuthorId) {
            throw new common_1.UnauthorizedException("Couldn't verify the author's permission, try again");
        }
        if (req['userId'].toString() !== newsAuthorId.toString() &&
            req['isAdmin'] === false) {
            throw new common_1.UnauthorizedException('User must be the post author or admin to delete the document');
        }
        const doc = await this.newsService.remove(id);
        return {
            message: 'Data deleted successfully',
            doc,
        };
    }
};
exports.NewsController = NewsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('limit')),
    __param(1, (0, common_1.Query)('offset')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "find", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_news_dto_1.CreateNewsDto, Object]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_news_dto_1.UpdateNewsDto, mongoose_1.Types.ObjectId, Object]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, Object]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "remove", null);
exports.NewsController = NewsController = __decorate([
    (0, common_1.Controller)('news'),
    __metadata("design:paramtypes", [news_service_1.NewsService])
], NewsController);
//# sourceMappingURL=news.controller.js.map