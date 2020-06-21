import React from 'react';
import {Card} from "@vkontakte/vkui";


const CardSc = ({ data }) => (

		<Card size="s">
			<div style={{ width: 64, height: 96 }} ><img scr={data.url} /></div>
		</Card>
)

export default CardSc