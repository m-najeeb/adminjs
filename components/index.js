import { ComponentLoader } from 'adminjs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentLoader = new ComponentLoader();

const Components = {
    AvatarList: componentLoader.add('AvatarList', path.join(__dirname, 'AvatarList.jsx')),
    AvatarShow: componentLoader.add('AvatarShow', path.join(__dirname, 'AvatarShow.jsx')),
    AvatarEdit: componentLoader.add('AvatarEdit', path.join(__dirname, 'AvatarEdit.jsx')),
    HomeDashboard: componentLoader.add('HomeDashboard', path.join(__dirname, 'HomeDashboard.jsx')),
    // CustomHeader: componentLoader.override('ActionHeader', path.join(__dirname, 'CustomHeader.jsx')),
    // CustomTopBar: componentLoader.override('TopBar', path.join(__dirname, 'CustomTopBar.jsx')),
    CustomSidebarResourceSection: componentLoader.override('SidebarResourceSection', path.join(__dirname, 'CustomSidebarResourceSection.jsx')),
};

// Log to verify components are loaded
console.log('Loaded Components:', Components);

export { componentLoader, Components };