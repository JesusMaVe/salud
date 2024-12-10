import './positioningGrid.css'

export default function PositioningGrid({ position, children }) {
	return (
		<div className='PosGrid__gCtn'>
			<div className='PosGrid__auxCtn' style={{justifySelf:`${position}`}}>
				{children}
			</div>
		</div>
	)
}
