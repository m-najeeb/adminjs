import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AdminJS from 'adminjs';
import path from 'path';
import argon2 from 'argon2';
import passwordsFeature from '@adminjs/passwords';
import AdminJSExpress from '@adminjs/express';
import { Database, Resource } from '@adminjs/mongoose';
import { UserSchema } from './model/userModels.js';
import { ProductSchema } from './model/productModels.js';
import { fileURLToPath } from 'url';
import { Components, componentLoader } from './components/index.js';

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

AdminJS.registerAdapter({ Database, Resource });

const createAdminJS = () => {
    return new AdminJS({
        resources: [
            {
                resource: UserSchema,
                options: {
                    id: "Users",
                    navigation: {
                        name: null, // Standalone item
                        icon: "User",
                    },
                    properties: {
                        _id: {
                            isVisible: false,
                        },
                        user: {
                            isVisible: { list: true, edit: false, filter: false, show: false },
                            components: {
                                list: Components.AvatarList,
                            },
                        },
                        avatar: {
                            isVisible: { list: false, edit: true, filter: false, show: true },
                            components: {
                                edit: Components.AvatarEdit,
                                show: Components.AvatarShow,
                            },
                        },
                        name: {
                            isVisible: { list: false, edit: true, filter: true, show: true },
                        },
                        email: {
                            isVisible: { list: false, edit: true, filter: true, show: true },
                        },
                        password: {
                            isVisible: { list: false, edit: true, filter: false, show: false },
                        },
                    },
                    listProperties: ['user', 'phone'],
                },
                features: [
                    passwordsFeature({
                        componentLoader,
                        properties: {
                            encryptedPassword: 'password',
                            password: 'password',
                        },
                        hash: argon2.hash,
                    }),
                ],
            },
            {
                resource: ProductSchema,
                options: {
                    id: "Products",
                    navigation: {
                        name: null, // Standalone item
                        icon: "ShoppingCart",
                    },
                    properties: {
                        _id: {
                            isVisible: false,
                        },
                    },
                },
            },
        ],
        // pages: {
        //     'Dashboard': {
        //         component: Components.HomeDashboard,
        //         navigation: {
        //             name: null, // Standalone item
        //             icon: 'Grid',
        //         },
        //         href: ({ h }) => {
        //             return '/admin';
        //         },
        //     },
        // },
        branding: {
            companyName: 'Assort Tech',
            logo: '/logo.png',
            withMadeWithLove: false,
        },
        assets: {
            styles: ['/custom.css'],
        },
        dashboard: {
            component: Components.HomeDashboard,
        },
        componentLoader,
    });
};

const startServer = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('MongoDB connected');

        const app = express();

        app.use(express.static(path.join(__dirname, 'public')));

        const admin = createAdminJS();
        await admin.watch();
        const adminRouter = AdminJSExpress.buildRouter(admin);

        app.use(admin.options.rootPath, adminRouter);

        app.listen(PORT, () =>
            console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
        );
    } catch (error) {
        console.error('Failed to start server:', error);
    }
};

startServer();