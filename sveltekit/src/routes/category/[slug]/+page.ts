export const prerender = true;

export const load = ({ params }) => {
	return {
		slug: params.slug
	};
};

