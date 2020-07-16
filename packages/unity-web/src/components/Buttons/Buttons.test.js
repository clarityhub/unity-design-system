import Button, { ButtonSet, ButtonGroup, ButtonGroupItem } from './index';

/**
 * @depreacted /Buttons is slated for removal in the next major release
 */
describe('Buttons', () => {
	it('provides backwards capabilities', () => {
		expect(typeof Button).toBe('function');
		expect(typeof ButtonSet).toBe('object');
		expect(typeof ButtonGroup).toBe('object');
		expect(typeof ButtonGroupItem).toBe('function');
	});
});
