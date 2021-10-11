"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class PortfolioItems extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'portfolio_items';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.boolean('shown').defaultTo(true);
            table.string('md_up').defaultTo('8');
            table.string('md_down').defaultTo('10');
            table.string('name').defaultTo('');
            table.string('about').defaultTo('Made with NodeJS And VueJS');
            table.string('image').defaultTo('https://cdn.demiann.dev/images/Placeholder.WebP');
            table.string('url').defaultTo('#');
            table.integer('order');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = PortfolioItems;
//# sourceMappingURL=1633957242897_portfolio_items.js.map