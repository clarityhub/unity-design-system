import React from 'react';
import renderer, { act } from 'react-test-renderer';
import Tabs from './';

describe('<Tabs />', () => {
	it('renders a set of tabs', () => {
		const node = (
			<Tabs.Container>
				<Tabs.Tabs>
					<Tabs.Tab tab="table" title="Switch to Table View">
						<span style={{ verticalAlign: 'middle' }}>
							{' '}
                            Table
						</span>
					</Tabs.Tab>
					<Tabs.Tab tab="chart" title="Switch to Chart View">
						<span style={{ verticalAlign: 'middle' }}>
							{' '}
                            Charts
						</span>
					</Tabs.Tab>
				</Tabs.Tabs>
				<Tabs.TabContent for="table">
                    Table content
				</Tabs.TabContent>
				<Tabs.TabContent for="chart">
                    Chart content
				</Tabs.TabContent>
			</Tabs.Container>
		);

		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
    
	it('renders a different tab after click', () => {
		const node = (
			<Tabs.Container>
				<Tabs.Tabs>
					<Tabs.Tab tab="table" title="Switch to Table View">
						<span style={{ verticalAlign: 'middle' }}>
							{' '}
                            Table
						</span>
					</Tabs.Tab>
					<Tabs.Tab tab="chart" title="Switch to Chart View">
						<span style={{ verticalAlign: 'middle' }}>
							{' '}
                            Charts
						</span>
					</Tabs.Tab>
				</Tabs.Tabs>
				<Tabs.TabContent for="table">
                    Table content
				</Tabs.TabContent>
				<Tabs.TabContent for="chart">
                    Chart content
				</Tabs.TabContent>
			</Tabs.Container>
		);

		const component = renderer.create(node);

		act(component.root.findAllByType('button')[1].props.onClick);

		const tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});
});