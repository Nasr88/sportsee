


import SidebarButton from '../sidebarButton/SidebarButton'

import yoga from '../../assets/images/yoga.svg'
import swimming from '../../assets/images/swimming.svg'
import biking from '../../assets/images/biking.svg'
import haltere from '../../assets/images/haltere.svg'


function Sidebar() {
	return (
		<aside className="sidebar">
			<div className="sidebar__buttons">
				<SidebarButton logo={yoga} />
				<SidebarButton logo={swimming} />
				<SidebarButton logo={biking} />
				<SidebarButton logo={haltere} />
			</div>
			<p className="sidebar__copyright">Copyright, SportSee 2020</p>
		</aside>
	)
}

export default Sidebar
