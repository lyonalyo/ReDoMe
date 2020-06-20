import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import PanelHeaderContent from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {Card, CellButton, Header, IOS, platform} from "@vkontakte/vkui";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Add from '@vkontakte/icons/dist/24/add';

import logo from "../img/logo.png";
import './logoheader.css';
import './AvatarCenter.css';
import CardGrid from "@vkontakte/vkui/dist/es6/components/CardGrid/CardGrid";

const osName = platform();

const YouLikeStar = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={go} data-to="clientform">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		><img className="LogoHeader" src={logo} alt="RE-DO-ME"/></PanelHeader>


		<Group>
			<Div>
				<CellButton before={<Icon24Add />}>Добавить фотографию</CellButton>
			</Div>
			{fetchedUser &&
			<Div className="AvatarCenter"><Avatar className="AvatarCenter" size={120} mode="image" src={fetchedUser.photo_200} /></Div>
				}

		</Group>
		<Group>
			<Header >На Вас похожи</Header>

			<Header mode="secondary">Анджелина Джоли (на 40%)</Header>
			<CardGrid>
				<Card size="m">
					<Div className="AvatarCenter" style={{width: 124, height: 124 }}><Avatar size={120} mode="image" src={'https://n1s1.starhit.ru/21/83/fb/2183fb3ae57e643d49ba3513112b174f/478x499_0_bea4a36021e27c7df4df7c5e919d33e5@478x499_0x0a330c9a_15273442111534066021.jpeg'} /></Div>
				</Card>
				<Card size="m">
					<Div style={{ width: 124, height: 124 }} > <Avatar size={120} mode="image" src={'https://n1s1.starhit.ru/21/83/fb/2183fb3ae57e643d49ba3513112b174f/478x499_0_bea4a36021e27c7df4df7c5e919d33e5@478x499_0x0a330c9a_15273442111534066021.jpeg'} />
					</Div>
				</Card>
			</CardGrid>
		</Group>
		<Group>
			<Header mode="secondary">Билли Айлиш (на 30%)</Header>
			<CardGrid>
				<Card size="m">
					<Div className="AvatarCenter" style={{width: 124, height: 124 }}><Avatar size={120} mode="image" src={'https://n1s1.starhit.ru/21/83/fb/2183fb3ae57e643d49ba3513112b174f/478x499_0_bea4a36021e27c7df4df7c5e919d33e5@478x499_0x0a330c9a_15273442111534066021.jpeg'} /></Div>
				</Card>
				<Card size="m">
					<Div style={{ width: 124, height: 124}} > <Avatar size={120} mode="image" src={'https://n1s1.starhit.ru/21/83/fb/2183fb3ae57e643d49ba3513112b174f/478x499_0_bea4a36021e27c7df4df7c5e919d33e5@478x499_0x0a330c9a_15273442111534066021.jpeg'} />
					</Div>
				</Card>
			</CardGrid>
		</Group>
	</Panel>
);

YouLikeStar.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default YouLikeStar;
