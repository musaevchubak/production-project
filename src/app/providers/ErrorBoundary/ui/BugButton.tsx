import React, { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
// Компонент для тестирования ErrorBoundary
function BugButton() {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    const onThrow = () => {
        setError(true);
    };
    return (
        <Button
            onClick={onThrow}
        >
            {t('throw error')}

        </Button>

    );
}

export default BugButton;
