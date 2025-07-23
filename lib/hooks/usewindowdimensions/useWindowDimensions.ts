import { useEffect, useState } from 'react';

type TypeUseWindowsDimensionsInitalValues = {
	sm?: number;
	md?: number;
	lg?: number;
};

const getDimensions = ({ sm = 576, md = 768, lg = 992 }: TypeUseWindowsDimensionsInitalValues) => {
	const { innerWidth: w, innerHeight: h } = window;
	const size = w < sm ? 'sm' : w < md ? 'md' : w < lg ? 'lg' : 'xl';

	return {
		width: w,
		height: h,
		size,
		isMobile: size === 'sm',
		isDesktop: w >= lg,
	};
};

export const useWindowDimensions = (props?: TypeUseWindowsDimensionsInitalValues) => {
	const [dimensions, setDimensions] = useState(getDimensions(props || {}));

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleResize = () => setDimensions(getDimensions(props || {}));

	return dimensions;
};
