"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthController {
    async login({ auth, request, response }) {
        const email = request.input('email');
        const password = request.input('password');
        try {
            await auth.use('web').attempt(email, password, true);
            response.redirect('/dashboard');
        }
        catch {
            return response.badRequest('Invalid credentials');
        }
    }
    async logout({ auth, response }) {
        await auth.use('web').logout();
        response.redirect('/login');
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map