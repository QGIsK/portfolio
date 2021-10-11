"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PortfolioItem_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/PortfolioItem"));
class PortfolioController {
    async index() {
        const items = await PortfolioItem_1.default.query().select('*').orderBy('order', 'asc');
        return items;
    }
}
exports.default = PortfolioController;
//# sourceMappingURL=PortfolioController.js.map