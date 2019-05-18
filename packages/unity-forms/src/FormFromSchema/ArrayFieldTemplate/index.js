import React from 'react';
import ArrowUpIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownIcon from '@material-ui/icons/ArrowDownward';
import RemoveIcon from '@material-ui/icons/Close';

import Card, { CardBody } from '@clarityhub/unity-web/lib/components/Card';
import InputGroup from '@clarityhub/unity-web/lib/forms/InputGroup';
import Button from '@clarityhub/unity-web/lib/components/Buttons';

function ArrayFieldTitle({ TitleField, idSchema, title, required }) {
	if (!title) {
		return null;
	}
	const id = `${idSchema.$id}__title`;
	return <TitleField id={id} title={title} required={required} />;
}

function ArrayFieldDescription({ DescriptionField, idSchema, description }) {
	if (!description) {
		return null;
	}
	const id = `${idSchema.$id}__description`;
	return <DescriptionField id={id} description={description} />;
}

export function ArrayFieldTemplate(props) {
	return (
		<div className={props.className} id={props.idSchema.$id}>
			<ArrayFieldTitle
				key={`array-field-title-${props.idSchema.$id}`}
				TitleField={props.TitleField}
				idSchema={props.idSchema}
				title={props.uiSchema["ui:title"] || props.title}
				required={props.required}
			/>

			{(props.uiSchema["ui:description"] || props.schema.description) && (
				<ArrayFieldDescription
					key={`array-field-description-${props.idSchema.$id}`}
					DescriptionField={props.DescriptionField}
					idSchema={props.idSchema}
					description={
						props.uiSchema["ui:description"] || props.schema.description
					}
				/>
			)}

			<Card
				className="row array-item-list"
				key={`array-item-list-${props.idSchema.$id}`}>
				<CardBody>

					{props.items && props.items.map(p => {

						return (
							<div key={p.index} className={p.className}>
								<div className={p.hasToolbar ? "col-xs-9" : "col-xs-12"}>
									{p.children}
								</div>

								{p.hasToolbar && (
									<div className="col-xs-3 array-item-toolbox">
										<InputGroup>
											{(p.hasMoveUp || p.hasMoveDown) && (
												<Button
													icon={<ArrowUpIcon />}
													className="array-item-move-up"
													tabIndex="-1"
													disabled={p.disabled || p.readonly || !p.hasMoveUp}
													onClick={p.onReorderClick(p.index, p.index - 1)}
												/>
											)}

											{(p.hasMoveUp || p.hasMoveDown) && (
												<Button
													icon={<ArrowDownIcon />}
													className="array-item-move-down"
													tabIndex="-1"
													disabled={
														p.disabled || p.readonly || !p.hasMoveDown
													}
													onClick={p.onReorderClick(p.index, p.index + 1)}
												/>
											)}

											{p.hasRemove && (
												<Button
													type="danger"
													icon={<RemoveIcon />}
													className="array-item-remove"
													tabIndex="-1"
													disabled={p.disabled || p.readonly}
													onClick={p.onDropIndexClick(p.index)}
												/>
											)}
										</InputGroup>
									</div>
								)}
							</div>
						);
					})}
				</CardBody>
			</Card>

			{props.canAdd && (
				<InputGroup>
					<Button
						className="array-item-add"
						onClick={props.onAddClick}
						disabled={props.disabled || props.readonly}
					>
						Add Another
					</Button>
				</InputGroup>
			)}
		</div>
	);
}