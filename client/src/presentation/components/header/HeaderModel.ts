import { useState } from "react";
import { Category } from "../../../model/categoryModel";
import { fetchSubcategories } from "../../../service/categoryService";
import {useTranslation} from "react-i18next";

export const useHeaderModel = () => {
    const { t } = useTranslation<'translation'>();

    const categories: Category[] = [
        { id: 1, name: t('type_1'), svg: '/assets/type_1.svg', url: 'Հեռուստացույց', parent_id: null },
        { id: 2, name: t('type_2'), svg: '/assets/type_2.svg', url: 'Օդորակիչներ', parent_id: null },
        { id: 7, name: t('type_3'), svg: '/assets/type_3.svg', url: 'Հեռախոսներ և աքսեսուարներ', parent_id: null },
        { id: 17, name: t('type_4'), svg: '/assets/type_4.svg', url: 'Սպասք լվացող մեքենաներ', parent_id: null },
        { id: 16, name: t('type_5'), svg: '/assets/type_5.svg', url: 'Գազօջախներ', parent_id: null },
        { id: 18, name: t('type_6'), svg: '/assets/type_6.svg', url: 'Մանր կենցաղային տեխնիկա', parent_id: null },
        { id: 50, name: t('type_7'), svg: '/assets/type_7.svg', url: 'Սառնարաններ և Սառցարաններ', parent_id: null },
        { id: 56, name: t('type_8'), svg: '/assets/type_8.svg', url: 'Լվացքի մեքենաներ և Չորանոցներ', parent_id: null },
        { id: 59, name: t('type_9'), svg: '/assets/type_9.svg', url: 'Ներկառուցվող կենցաղային տեխնիկա', parent_id: null },
        { id: 67, name: t('type_10'), svg: '/assets/type_10.svg', url: 'Տաքացման և Սառեցման համակարգեր', parent_id: null },
        { id: 75, name: t('type_11'), svg: '/assets/type_11.svg', url: 'Խնամքի պարագաներ', parent_id: null },
        { id: 86, name: t('type_12'), svg: '/assets/type_12.svg', url: 'Աուդիո-վիդեո սարքավորումներ', parent_id: null },
        { id: 89, name: t('type_13'), svg: '/assets/type_13.svg', url: 'Նոթբուքեր, Մոնիտորներ և Տեսախաղեր', parent_id: null },
        { id: 96, name: t('type_14'), svg: '/assets/type_14.svg', url: 'Աքսեսուարներ', parent_id: null },
    ];
    const [hoveredCategory, setHoveredCategory] = useState<Category | null>(null);
    const [subcategories, setSubcategories] = useState<Category[]>([]);

    const handleCategoryHover = async (category: Category) => {
        setHoveredCategory(category);
        const fetchedSubcategories = await fetchSubcategories(category.id);
        setSubcategories(fetchedSubcategories);
    };

    return { categories, subcategories, hoveredCategory, handleCategoryHover };
};
