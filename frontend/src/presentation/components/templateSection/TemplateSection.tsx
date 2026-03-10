import React from 'react';
import Button from '../../../ui/styles/button/Button';
import CategoryCell from '../categoryCell/CategoryCell';
import {
  Section,
  HeaderRow,
  TitleBlock,
  TitleRow,
  TitleLine,
  Title,
  Description,
  CardsGrid,
  Card,
  SubcategoryGrid,
  type LayoutVariant,
} from './TemplateSection.styles';


type SubcategoryItem = {
  title: string;
  description?: string;
  imageUrl: string;
  onClick?: () => void;
};

type TemplateSectionProps = {
  title: string;
  description: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  cards?: React.ReactNode[];
  subcategoryItems?: SubcategoryItem[];
  layoutVariant?: LayoutVariant;
};

const TemplateSection: React.FC<TemplateSectionProps> = ({
  title,
  description,
  buttonLabel,
  onButtonClick,
  cards,
  subcategoryItems,
  layoutVariant,
}) => {
  return (
    <Section>
      <HeaderRow>
        <TitleBlock>
          <TitleRow>
            <TitleLine aria-hidden="true" />
            <Title>{title}</Title>
            <TitleLine aria-hidden="true" />
          </TitleRow>
          <Description>{description}</Description>
        </TitleBlock>
        {buttonLabel ? (
          <Button variant="link" onClick={onButtonClick}>
            {buttonLabel}
          </Button>
        ) : null}
      </HeaderRow>

        {/* <ListGrid height={100} width={100} >
          {cards}
          </List> */}
      {cards && cards.length > 0 ? (
        <CardsGrid $variant={layoutVariant}>
          {cards.map((card, index) => (
            <Card key={`card-${index}`}>{card}</Card>
          ))}
        </CardsGrid>
      ) : null}

      {subcategoryItems && subcategoryItems.length > 0 ? (
        <SubcategoryGrid>
          {subcategoryItems.slice(0, 4).map((item) => (
            <CategoryCell
              key={item.title}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              onClick={item.onClick}
            />
          ))}
        </SubcategoryGrid>
      ) : null}
    </Section>
  );
};

export default TemplateSection;
