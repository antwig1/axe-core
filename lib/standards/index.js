import ariaAttrs from './aria-attrs';
import ariaRoles from './aria-roles';
import dpubRoles from './dpub-roles';
import htmlElms from './html-elms';
import { deepMerge } from '../core/utils';

const originals = {
	ariaAttrs,
	ariaRoles: {
		...ariaRoles,
		...dpubRoles
	},
	htmlElms
};
const standards = {
	...originals
};

export function configureStandards(config) {
	Object.keys(standards).forEach(propName => {
		if (config[propName]) {
			standards[propName] = deepMerge(standards[propName], config[propName]);
		}
	});
}

export function resetStandards() {
	Object.keys(standards).forEach(propName => {
		standards[propName] = originals[propName];
	});
}

export default standards;
