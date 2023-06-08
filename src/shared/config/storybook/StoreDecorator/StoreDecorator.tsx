import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
// eslint-disable-next-line production-best-project-plugin/public-api-imports
import { loginReducer } from '@/features/AuthByUserName/model/slice/loginSlice';
// eslint-disable-next-line production-best-project-plugin/public-api-imports
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
// eslint-disable-next-line production-best-project-plugin/public-api-imports
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
// eslint-disable-next-line production-best-project-plugin/public-api-imports
import { addCommentFormReducer } from '@/features/addCommentForm/model/slices/addCommentFormSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
