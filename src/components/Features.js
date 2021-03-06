import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import '../modules/styles/features.sass'

const FeatureGrid = ({ gridItems }) => (
  <div className="features__grid">
    {gridItems.map(item => (
      <Card key={item.text} data={item} />
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
