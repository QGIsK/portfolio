"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const Mail_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Addons/Mail"));
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class ContactController {
    async store({ request, response }) {
        const contactRequestSchema = Validator_1.schema.create({
            time: Validator_1.schema.string({ trim: true }, [Validator_1.rules.minLength(2), Validator_1.rules.maxLength(25)]),
            from: Validator_1.schema.string({ trim: true }, [Validator_1.rules.minLength(3), Validator_1.rules.maxLength(50)]),
            email: Validator_1.schema.string({ trim: true }, [Validator_1.rules.email()]),
            text: Validator_1.schema.string({ trim: true }, [Validator_1.rules.minLength(25), Validator_1.rules.maxLength(500)]),
        });
        try {
            const payload = await request.validate({ schema: contactRequestSchema });
            await Mail_1.default.send((message) => {
                message
                    .from(Env_1.default.get('MAIL_FROM'))
                    .to(Env_1.default.get('MAIL_TO'))
                    .subject('Contact Request')
                    .priority('high')
                    .htmlView('emails/contact', { payload });
            });
            response.ok('');
        }
        catch (error) {
            console.log(error);
            response.badRequest(error.messages);
        }
    }
}
exports.default = ContactController;
//# sourceMappingURL=ContactController.js.map