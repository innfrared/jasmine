import {
  ActiveFilterCount,
  FilterToolbarButton,
  FilterToolbarCurrentTitle,
  FilterToolbarInner,
  FilterToolbarRoot,
} from './CatalogFilters.styles';

type CatalogFilterToolbarProps = {
  onOpenFilters: () => void;
  isStickyActive: boolean;
  currentTitle: string;
  activeFilterCount?: number;
  label: string;
};

function FilterIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M4 7h16" />
      <path d="M7 12h10" />
      <path d="M10 17h4" />
    </svg>
  );
}

export default function CatalogFilterToolbar({
  onOpenFilters,
  isStickyActive,
  currentTitle,
  activeFilterCount = 0,
  label,
}: CatalogFilterToolbarProps) {
  return (
    <FilterToolbarRoot $isStickyActive={isStickyActive}>
      <FilterToolbarInner>
        <FilterToolbarButton type="button" onClick={onOpenFilters}>
          <FilterIcon />
          <span>{label}</span>
          {activeFilterCount > 0 ? (
            <ActiveFilterCount>{activeFilterCount}</ActiveFilterCount>
          ) : null}
        </FilterToolbarButton>

        {isStickyActive ? (
          <FilterToolbarCurrentTitle>{currentTitle}</FilterToolbarCurrentTitle>
        ) : null}
      </FilterToolbarInner>
    </FilterToolbarRoot>
  );
}

export type { CatalogFilterToolbarProps };
