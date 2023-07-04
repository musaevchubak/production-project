import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import MainIconDeprecated from '@/shared/static/icons/main-20-20.svg';
import AboutIconDeprecated from '@/shared/static/icons/about-20-20.svg';
import ProfileIconDeprecated from '@/shared/static/icons/profile-20-20.svg';
import ArticleIconDeprecated from '@/shared/static/icons/article-20-20.svg';
import { SideBarItemType } from '../types/sidebar';
import { toggleFeatures } from '@/shared/lib/features';
import MainIcon from '@/shared/static/icons/home.svg';
import ArticleIcon from '@/shared/static/icons/article.svg';
import AboutIcon from '@/shared/static/icons/Info.svg';
import ProfileIcon from '@/shared/static/icons/avatar.svg';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const /router';

export const useSidebarItems = () => {
    const userData = useSelector(getUserAuthData);
    const sidebarItemsList: SideBarItemType[] = [
        {
            path: getRouteMain(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                off: () => MainIconDeprecated,
                on: () => MainIcon,
            }),
            text: 'Главная',
        },
        {
            path: getRouteAbout(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                off: () => AboutIconDeprecated,
                on: () => AboutIcon,
            }),
            text: 'О сайте',
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => ProfileIconDeprecated,
                    on: () => ProfileIcon,
                }),
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => ArticleIconDeprecated,
                    on: () => ArticleIcon,
                }),
                text: 'Статьи',
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
};
