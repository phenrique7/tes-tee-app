import * as React from 'react';
import {
  FilterCategory,
  Color,
  FilterColors,
  FilterRoot,
  FilterText,
  FilterSizes,
  Size,
} from './Filter.style';

const colors = [
  '#FFFFFF',
  '#333333',
  '#77A3FC',
  '#F59943',
  '#F25A5A',
  '#38E893',
  '#CE8BED',
  '#F0E04F',
];

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export default function Filter() {
  const [activeFilterColor, setActiveFilterColor] = React.useState(
    'joker',
  );
  const [activeFilterSize, setActiveFilterSize] = React.useState('XS');

  return (
    <FilterRoot>
      <FilterCategory>
        <FilterText>Colors</FilterText>
        <FilterColors>
          <Color
            tabIndex="0"
            role="button"
            joker
            active={activeFilterColor === 'joker'}
            onClick={() => {
              setActiveFilterColor('joker');
            }}
            onKeyDown={() => {
              setActiveFilterColor('joker');
            }}
          />
          {colors.map(color => (
            <Color
              tabIndex="0"
              key={color}
              color={color}
              active={activeFilterColor === color}
              role="button"
              onClick={() => {
                setActiveFilterColor(color);
              }}
              onKeyDown={() => {
                setActiveFilterColor(color);
              }}
            />
          ))}
        </FilterColors>
      </FilterCategory>
      <FilterCategory>
        <FilterText>Sizes</FilterText>
        <FilterSizes>
          {sizes.map(size => (
            <Size
              key={size}
              tabIndex="0"
              role="button"
              active={activeFilterSize === size}
              onClick={() => {
                setActiveFilterSize(size);
              }}
              onKeyDown={() => {
                setActiveFilterSize(size);
              }}
            >
              <span>{size}</span>
            </Size>
          ))}
        </FilterSizes>
      </FilterCategory>
    </FilterRoot>
  );
}
