import { useTranslation } from "react-i18next";

export type Category = {
    id: number;
    name: string;
    svg: string;
};

export const useCategories = (): Category[] => {
    const { t } = useTranslation<'translation'>();

    return [
        { id: 1, name: t('type_1'), svg: '/assets/type_1.svg' },
        { id: 2, name: t('type_2'), svg: '/assets/type_2.svg' },
        { id: 3, name: t('type_3'), svg: '/assets/type_3.svg' },
        { id: 4, name: t('type_4'), svg: '/assets/type_4.svg' },
        { id: 5, name: t('type_5'), svg: '/assets/type_5.svg' },
        { id: 6, name: t('type_6'), svg: '/assets/type_6.svg' },
        { id: 7, name: t('type_7'), svg: '/assets/type_7.svg' },
        { id: 8, name: t('type_8'), svg: '/assets/type_8.svg' },
        { id: 9, name: t('type_9'), svg: '/assets/type_9.svg' },
        { id: 10, name: t('type_10'), svg: '/assets/type_10.svg' },
        { id: 11, name: t('type_11'), svg: '/assets/type_11.svg' },
        { id: 12, name: t('type_12'), svg: '/assets/type_12.svg' },
    ];
};
