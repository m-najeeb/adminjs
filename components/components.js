import { ComponentLoader } from 'adminjs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentLoader = new ComponentLoader();

const Components = {
    AvatarList: componentLoader.add('AvatarList', path.join(__dirname, 'avatar-list.jsx')),
    AvatarShow: componentLoader.add('AvatarShow', path.join(__dirname, 'avatar-show.jsx')),
    AvatarEdit: componentLoader.add('AvatarEdit', path.join(__dirname, 'avatar-edit.jsx')),
    HomeDashboard: componentLoader.add('HomeDashboard', path.join(__dirname, 'dashboard.jsx')),
};

export { componentLoader, Components };
