import React from 'react';
import { CellButton, CellTitle, CellDescription } from './CategoryCell.styles';

type CategoryCellProps = {
  title: string;
  description?: string;
  imageUrl: string;
  onClick?: () => void;
};

const CategoryCell: React.FC<CategoryCellProps> = ({
  title,
  description,
  imageUrl,
  onClick,
}) => {
  return (
    <CellButton type="button" onClick={onClick} $imageUrl={imageUrl}>
      <CellTitle>{title}</CellTitle>
      {description ? <CellDescription>{description}</CellDescription> : null}
    </CellButton>
  );
};

export default CategoryCell;
