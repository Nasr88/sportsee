import PropTypes from 'prop-types'

/**
 * Render a tooltip for Chart Average Sessions
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */
function CustomToolTipAverage({ active, payload }) {
	if (active && payload && payload.length) {
		return (
			<div className="tooltipAverage">
				<p>{payload[0].value + ' min'}</p>
			</div>
		)
	}
	return null
}


CustomToolTipAverage.propTypes = {
	/**
	 * Whether or not the tooltip is active
	 */
	active: PropTypes.bool,
	/**
	 * The payload of the tooltip
	 */
	payload: PropTypes.arrayOf(PropTypes.object),
}

export default CustomToolTipAverage