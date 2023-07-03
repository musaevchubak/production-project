import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import ProfilePage from './ProfilePage';
import { Theme } from '@/shared/const /theme';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        profile: {
            form: {
                userName: 'admin',
                age: 22,
                country: Country.Ukraine,
                lastName: 'hello',
                first: 'asd',
                city: 'asf',
                currency: Currency.USD,
                avatar: 'w7.pngwing.com/pngs/984/937/png-transparent-hacker-anonymous-anonymous-hacker-man-hacking-security-computer-dark-identity-spy-thumbnail.png',
            },
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                userName: 'admin',
                age: 22,
                country: Country.Ukraine,
                lastName: 'hello',
                first: 'asd',
                city: 'asf',
                currency: Currency.USD,
            },
        },
    }),
];
