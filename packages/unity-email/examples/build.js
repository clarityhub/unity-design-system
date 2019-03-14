import fs from 'fs';
import path from 'path';
import newsletter from './newsletter';

const ROOT_PATH = path.resolve(path.join(__dirname, '..'));

if (!fs.existsSync(ROOT_PATH)) {
	fs.mkdirSync(ROOT_PATH);
}

fs.writeFileSync(path.join(ROOT_PATH, 'newsletter.html'), newsletter);
