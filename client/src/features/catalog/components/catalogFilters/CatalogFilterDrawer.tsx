import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import type { MouseEvent } from 'react';
import { sanitizeCssColor } from '@/shared/security/inputSanitizers';
import {
  DrawerActions,
  DrawerApplyButton,
  DrawerClearButton,
  DrawerCloseButton,
  DrawerContent,
  DrawerEmptyState,
  DrawerFilterGroup,
  DrawerFilterOption,
  DrawerFilterOptions,
  DrawerFilterSwatch,
  DrawerHeader,
  DrawerOverlay,
  DrawerPanel,
  DrawerTitle,
} from './CatalogFilters.styles';

type CatalogFilterKey = 'color' | 'size';

type CatalogFilterDrawerProps = {
  isOpen: boolean;
  isClosing: boolean;
  filters: Record<string, string[]>;
  availableColors: string[];
  availableSizes: string[];
  colorPaletteMap: Map<string, string>;
  onChangeDraftFilter: (filterType: CatalogFilterKey, value: string) => void;
  onApply: () => void;
  onClear: () => void;
  onClose: () => void;
};

function hasSelectedFilter(
  filters: Record<string, string[]>,
  key: string,
  value: string
) {
  return filters[key]?.includes(value) ?? false;
}

function CatalogFilterDrawer({
  isOpen,
  isClosing,
  filters,
  availableColors,
  availableSizes,
  colorPaletteMap,
  onChangeDraftFilter,
  onApply,
  onClear,
  onClose,
}: CatalogFilterDrawerProps) {
  const { t } = useTranslation<'translation'>();
  const hasFilters = availableColors.length > 0 || availableSizes.length > 0;

  if (!isOpen && !isClosing) {
    return null;
  }

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <DrawerOverlay $isClosing={isClosing} onClick={handleOverlayClick}>
      <DrawerPanel
        $isClosing={isClosing}
        role="dialog"
        aria-modal="true"
        aria-label={t('productsPage.filters')}
      >
        <DrawerHeader>
          <DrawerTitle>{t('productsPage.filters')}</DrawerTitle>
          <DrawerCloseButton onClick={onClose} aria-label={t('common.close')} />
        </DrawerHeader>

        <DrawerContent>
          {!hasFilters ? (
            <DrawerEmptyState>
              {t('productsPage.noFiltersAvailable')}
            </DrawerEmptyState>
          ) : null}

          {availableColors.length > 0 ? (
            <DrawerFilterGroup>
              <h3>{t('productsPage.color')}</h3>
              <DrawerFilterOptions>
                {availableColors.map(colorPalette => {
                  const colorLabel =
                    colorPaletteMap.get(colorPalette) ?? colorPalette;
                  const safeColorPalette = sanitizeCssColor(
                    colorPalette,
                    '#d8d2c8'
                  );

                  return (
                    <DrawerFilterOption key={colorPalette}>
                      <input
                        type="checkbox"
                        checked={hasSelectedFilter(
                          filters,
                          'color',
                          colorPalette
                        )}
                        onChange={() =>
                          onChangeDraftFilter('color', colorPalette)
                        }
                      />
                      <DrawerFilterSwatch $colorValue={safeColorPalette} />
                      <span>{colorLabel}</span>
                    </DrawerFilterOption>
                  );
                })}
              </DrawerFilterOptions>
            </DrawerFilterGroup>
          ) : null}

          {availableSizes.length > 0 ? (
            <DrawerFilterGroup>
              <h3>{t('productsPage.size')}</h3>
              <DrawerFilterOptions>
                {availableSizes.map(size => (
                  <DrawerFilterOption key={size}>
                    <input
                      type="checkbox"
                      checked={hasSelectedFilter(filters, 'size', size)}
                      onChange={() => onChangeDraftFilter('size', size)}
                    />
                    <span>{size}</span>
                  </DrawerFilterOption>
                ))}
              </DrawerFilterOptions>
            </DrawerFilterGroup>
          ) : null}
        </DrawerContent>

        <DrawerActions>
          <DrawerApplyButton type="button" onClick={onApply}>
            {t('productsPage.applyFilters')}
          </DrawerApplyButton>
          <DrawerClearButton type="button" onClick={onClear}>
            {t('productsPage.clearFilters')}
          </DrawerClearButton>
        </DrawerActions>
      </DrawerPanel>
    </DrawerOverlay>,
    document.body
  );
}

export default CatalogFilterDrawer;
export type { CatalogFilterDrawerProps, CatalogFilterKey };
