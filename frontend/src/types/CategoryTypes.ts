'use client';

import { useTranslation } from 'react-i18next';

export type Category = {
  id: number;
  name: string;
  svg: string;
  url: string;
};

export const useCategories = (): Category[] => {
  const { t } = useTranslation<'translation'>();

  return [
    {
      id: 1,
      name: t('type_1'),
      svg: '/assets/type_1.svg',
      url: 'Հեռուստացույց',
    },
    { id: 2, name: t('type_2'), svg: '/assets/type_2.svg', url: 'Օդորակիչներ' },
    {
      id: 7,
      name: t('type_3'),
      svg: '/assets/type_3.svg',
      url: 'Հեռախոսներ և աքսեսուարներ',
    },
    {
      id: 17,
      name: t('type_4'),
      svg: '/assets/type_4.svg',
      url: 'Սպասք լվացող մեքենաներ',
    },
    { id: 16, name: t('type_5'), svg: '/assets/type_5.svg', url: 'Գազօջախներ' },
    {
      id: 18,
      name: t('type_6'),
      svg: '/assets/type_6.svg',
      url: 'Մանր կենցաղային տեխնիկա',
    },
    {
      id: 50,
      name: t('type_7'),
      svg: '/assets/type_7.svg',
      url: 'Սառնարաններ և Սառցարաններ',
    },
    {
      id: 56,
      name: t('type_8'),
      svg: '/assets/type_8.svg',
      url: 'Լվացքի մեքենաներ և Չորանոցներ',
    },
    {
      id: 59,
      name: t('type_9'),
      svg: '/assets/type_9.svg',
      url: 'Ներկառուցվող կենցաղային տեխնիկա',
    },
    {
      id: 67,
      name: t('type_10'),
      svg: '/assets/type_10.svg',
      url: 'Տաքացման և Սառեցման համակարգեր',
    },
    {
      id: 75,
      name: t('type_11'),
      svg: '/assets/type_11.svg',
      url: 'Խնամքի պարագաներ',
    },
    {
      id: 86,
      name: t('type_12'),
      svg: '/assets/type_12.svg',
      url: 'Աուդիո-վիդեո սարքավորումներ',
    },
    {
      id: 89,
      name: t('type_13'),
      svg: '/assets/type_13.svg',
      url: 'Նոթբուքեր, Մոնիտորներ և Տեսախաղեր',
    },
    {
      id: 96,
      name: t('type_14'),
      svg: '/assets/type_14.svg',
      url: 'Աքսեսուարներ',
    },
  ];
};
