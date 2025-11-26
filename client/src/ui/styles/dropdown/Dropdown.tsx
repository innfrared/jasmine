import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Container,
  Trigger,
  ValueText,
  PlaceholderText,
  Chevron,
  Menu,
  SearchInput,
  OptionRow,
  OptionIcon,
  NoResults,
  VisuallyHiddenLabel,
} from './Dropdown.styles';

export type DropdownOption = {
  value: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
};

type DropdownProps = {
  options: DropdownOption[];
  value?: string;
  onChange: (value: string | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  searchable?: boolean;
  width?: string;
  maxMenuHeight?: string;
  ariaLabel?: string;
  allowClear?: boolean;
  isScrolled?: boolean;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select…',
  disabled = false,
  searchable = false,
  width,
  maxMenuHeight,
  ariaLabel,
  allowClear = true,
  isScrolled = false,
}) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [highlight, setHighlight] = useState<number>(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selected = useMemo(
    () => options.find(o => o.value === value),
    [options, value]
  );

  const filtered = useMemo(() => {
    if (!searchable || !query.trim()) return options;
    const q = query.toLowerCase();
    return options.filter(
      o =>
        o.label.toLowerCase().includes(q) || o.value.toLowerCase().includes(q)
    );
  }, [options, query, searchable]);

  const firstEnabledIndex = useMemo(() => {
    return filtered.findIndex(o => !o.disabled);
  }, [filtered]);

  const openMenu = () => {
    if (disabled) return;
    setOpen(true);
    setHighlight(firstEnabledIndex);
  };
  const closeMenu = () => {
    setOpen(false);
    setQuery('');
    setHighlight(-1);
  };

  // Click outside to close
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) closeMenu();
    };
    const onScroll = (e: Event) => {
      if (!containerRef.current?.contains(e.target as Node)) closeMenu();
    };
    window.addEventListener('mousedown', onClick);
    window.addEventListener('scroll', onScroll, true);
    return () => {
      window.removeEventListener('mousedown', onClick);
      window.removeEventListener('scroll', onScroll, true);
    };
  }, [open]);

  const onKeyDownTrigger: React.KeyboardEventHandler = e => {
    if (disabled) return;
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!open) {
        openMenu();
      } else {
        moveHighlight(1);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!open) openMenu();
      else moveHighlight(-1);
    } else if (e.key === 'Escape') {
      if (open) {
        e.stopPropagation();
        closeMenu();
      } else if (allowClear && value) {
        onChange(undefined);
      }
    }
  };

  const moveHighlight = (delta: 1 | -1) => {
    if (!filtered.length) return;
    let i = highlight;
    for (let step = 0; step < filtered.length; step++) {
      i = (i + delta + filtered.length) % filtered.length;
      if (!filtered[i].disabled) {
        setHighlight(i);
        break;
      }
    }
  };

  const onKeyDownList: React.KeyboardEventHandler = e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      moveHighlight(1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      moveHighlight(-1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setHighlight(firstEnabledIndex);
    } else if (e.key === 'End') {
      e.preventDefault();
      const last = [...filtered].reverse().findIndex(o => !o.disabled);
      if (last !== -1) setHighlight(filtered.length - 1 - last);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlight >= 0 && !filtered[highlight]?.disabled) {
        onChange(filtered[highlight].value);
        closeMenu();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closeMenu();
    }
  };

  useEffect(() => {
    if (!open || highlight < 0) return;
    const el = listRef.current?.querySelector<HTMLElement>(
      `[data-index="${highlight}"]`
    );
    el?.scrollIntoView({ block: 'nearest' });
  }, [highlight, open]);

  const onSelect = (idx: number) => {
    const opt = filtered[idx];
    if (!opt || opt.disabled) return;
    onChange(opt.value);
    closeMenu();
  };

  return (
    <Container ref={containerRef} data-open={open} $width={width}>
      <VisuallyHiddenLabel id="dropdown-label">
        {ariaLabel || 'Dropdown'}
      </VisuallyHiddenLabel>

      <Trigger
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby="dropdown-label"
        onClick={() => (open ? closeMenu() : openMenu())}
        onKeyDown={onKeyDownTrigger}
        disabled={disabled}
        data-disabled={disabled || undefined}
        $isScrolled={isScrolled}
      >
        {selected ? (
          <ValueText $isScrolled={isScrolled}>{selected.label}</ValueText>
        ) : (
          <PlaceholderText $isScrolled={isScrolled}>
            {placeholder}
          </PlaceholderText>
        )}
        <Chevron $isScrolled={isScrolled} data-open={open} aria-hidden>
          ▾
        </Chevron>
      </Trigger>

      {open && (
        <Menu
          role="listbox"
          aria-activedescendant={
            highlight >= 0 ? `opt-${filtered[highlight]?.value}` : undefined
          }
          onKeyDown={onKeyDownList}
          tabIndex={-1}
          ref={listRef}
          $maxHeight={maxMenuHeight}
        >
          {searchable && (
            <SearchInput
              autoFocus
              placeholder="Search…"
              value={query}
              onChange={e => {
                setQuery(e.target.value);
                setHighlight(-1);
              }}
              onKeyDown={e => {
                if (e.key === 'ArrowDown') {
                  e.preventDefault();
                  setHighlight(firstEnabledIndex);
                }
              }}
            />
          )}

          {filtered.length === 0 ? (
            <NoResults>No results</NoResults>
          ) : (
            filtered.map((opt, i) => (
              <OptionRow
                as="li"
                role="option"
                id={`opt-${opt.value}`}
                key={opt.value}
                data-index={i}
                aria-selected={opt.value === value}
                data-highlighted={i === highlight || undefined}
                data-disabled={opt.disabled || undefined}
                onMouseEnter={() => !opt.disabled && setHighlight(i)}
                onClick={() => onSelect(i)}
              >
                {opt.icon && <OptionIcon>{opt.icon}</OptionIcon>}
                {opt.label}
              </OptionRow>
            ))
          )}
        </Menu>
      )}
    </Container>
  );
};

export default Dropdown;
