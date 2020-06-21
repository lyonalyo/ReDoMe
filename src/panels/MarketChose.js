import React from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';

import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import {
	Button,
	Group,
	Header,
	Gradient,
	SimpleCell,
	InfoRow,
	CardScroll,
	Card,
	RichCell,
	Div,
	File, Textarea, FormLayout, Input, FormLayoutGroup
} from '@vkontakte/vkui';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {IOS, platform} from "@vkontakte/vkui";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28MessageOutline from '@vkontakte/icons/dist/28/message_outline';

import logo from "../img/logo.png";
import './logoheader.css';
import CardGrid from "@vkontakte/vkui/dist/es6/components/CardGrid/CardGrid";

const osName = platform();

const MarketChose = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		><img className="LogoHeader" src={logo} alt="RE-DO-ME"/></PanelHeader>

		<Group>
			<Header separator="hide" mode="secondary">Ваш клиент</Header>
				<SimpleCell before={<Avatar size={40} src={'https://sun1-99.userapi.com/TbZt2f5zjLR84J9f23JRSqbR3-GL2O6OQhaL_Q/04ICGL5RVKE.jpg?ava=1'} />}description="Хочу бороду, как у Райан Рейнольдс!" after={<Icon28MessageOutline />}>Василий Иванов</SimpleCell>
				<CardGrid>
					<Card size="m">
						<div style={{ width: 124, height: 124 }} />
					</Card>
					<Card size="m">
						<div style={{ width: 124, height: 124 }} />
					</Card>
				</CardGrid>
		</Group>
		<FormLayout>

			<Input top="Предложите стоимость" />

			<FormLayoutGroup top="Предложите дату и время">
				<Input type="date"  placeholder={Date()} />
				<Input type="time" placeholder={'10:00'} />
			</FormLayoutGroup>

			<Div>
				<Button size="xl" level="2" onClick={go} data-to="home">
					Отправить предложение
				</Button>
			</Div>
		</FormLayout>
	</Panel>
);



MarketChose.propTypes = {
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

export default MarketChose;
