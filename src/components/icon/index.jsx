import * as Svg from './svgs';

export default function Icon({ type, id }) {

	const Icon = Svg[type];
	if (!Icon) {
		return null;
	}
	return (
		<span className='keats-icon' id={id} >
			<Icon />
		</span>
	)
}