"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mime_types_1 = __importDefault(require("mime-types"));
const s3_sync_client_1 = __importDefault(require("s3-sync-client"));
const standalone_1 = require("@adonisjs/core/build/standalone");
class PublishAssets extends standalone_1.BaseCommand {
    getSyncClient() {
        return new s3_sync_client_1.default({
            credentials: {
                accessKeyId: this.application.env.get('S3_KEY'),
                secretAccessKey: this.application.env.get('S3_SECRET'),
            },
            region: this.application.env.get('S3_REGION'),
            endpoint: this.application.env.get('S3_ENDPOINT'),
        });
    }
    monitorTransfer() {
        const monitor = new s3_sync_client_1.default.TransferMonitor();
        monitor.on('progress', ({ count }) => {
            this.logger.logUpdate(`Uploading ${this.colors.yellow(count.current)} of ${this.colors.yellow(count.total)}`);
        });
        return monitor;
    }
    async run() {
        await this.application.setup();
        const client = this.getSyncClient();
        const monitor = this.monitorTransfer();
        this.logger.info(`Syncing assets to ${this.application.env.get('S3_ENDPOINT')}`);
        await client.sync(this.application.publicPath('assets'), `s3://${this.application.env.get('S3_BUCKET')}/assets`, {
            monitor,
            del: true,
            commandInput: {
                ACL: 'public-read',
                ContentType: (syncCommandInput) => mime_types_1.default.lookup(syncCommandInput.Key),
            },
        });
        this.logger.success('Sync completed');
    }
}
exports.default = PublishAssets;
PublishAssets.commandName = 'publish:assets';
PublishAssets.description = 'Publish assets to a remote s3 or digital ocean bucket';
PublishAssets.settings = {
    loadApp: false,
    stayAlive: false,
};
//# sourceMappingURL=PublishAssets.js.map