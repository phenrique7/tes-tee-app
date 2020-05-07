import * as React from 'react';
import PropTypes from 'prop-types';
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
  { hex: '#FFFFFF', name: 'white' },
  { hex: '#333333', name: 'gray' },
  { hex: '#77A3FC', name: 'blue' },
  { hex: '#F59943', name: 'orange' },
  { hex: '#F25A5A', name: 'red' },
  { hex: '#38E893', name: 'green' },
  { hex: '#CE8BED', name: 'purple' },
  { hex: '#F0E04F', name: 'yellow' },
];

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export default function Filter({ filterColor, filterSize }) {
  const [activeFilterColor, setActiveFilterColor] = React.useState('all');
  const [activeFilterSize, setActiveFilterSize] = React.useState('all');

  return (
    <FilterRoot>
      <FilterCategory>
        <FilterText>Colors</FilterText>
        <FilterColors>
          <Color
            tabIndex="0"
            role="button"
            joker
            active={activeFilterColor === 'all'}
            onClick={() => {
              setActiveFilterColor('all');
              filterColor('all');
            }}
            onKeyDown={() => {
              setActiveFilterColor('all');
              filterColor('all');
            }}
          />
          {colors.map(color => (
            <Color
              tabIndex="0"
              key={color.name}
              color={color.hex}
              active={activeFilterColor === color.hex}
              role="button"
              onClick={() => {
                setActiveFilterColor(color.hex);
                filterColor(color.name);
              }}
              onKeyDown={() => {
                setActiveFilterColor(color.hex);
                filterColor(color.name);
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
                filterSize(size);
              }}
              onKeyDown={() => {
                setActiveFilterSize(size);
                filterSize(size);
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

Filter.propTypes = {
  filterColor: PropTypes.func.isRequired,
  filterSize: PropTypes.func.isRequired,
};
