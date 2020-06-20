import React from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import {Button, Group, Header, Gradient, SimpleCell, InfoRow, CardScroll, Card, RichCell} from '@vkontakte/vkui';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {IOS, platform} from "@vkontakte/vkui";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import logo from "../img/logosmall.png";
import './logoheader.css';

const osName = platform();

const Offers = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		><img className="LogoHeader" src={logo} alt="RE-DO-ME"/></PanelHeader>

		<Group>
			<SimpleCell>
				<InfoRow header="Ваша цель:">
					Хочу сбрить усы!
				</InfoRow>
			</SimpleCell>
		</Group>
		<Group>
			<Header separator="hide" mode="secondary">Предложения мастеров</Header>

			<RichCell
				disabled
				multiline
				before={<Avatar size={72} mode="image" src={'https://sun9-53.userapi.com/c846321/v846321349/ebac6/nIWOZSW2OJA.jpg?ava=1'} />}
				text="Парикмахер-стилист"
				caption="Салон InStyle, 2 км от вас"
				after="500 ₽"
			>
				Елена Хаби
			</RichCell>
			<Group separator="hide" description="Предложения мастера">
				<CardScroll>
					<Card size="s">
						<div style={{ width: 64, height: 96 }} ><img scr={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZitBxt6O23feX2Wf-SLW86XRY1R-djC8soghKJEa2uNMe89Nhuw&s'} /></div>
					</Card>
					<Card size="s">
						<div style={{ width: 64, height: 96  }} ><img width={64} height ={96} scr={'https://sun9-63.userapi.com/yOEQYPHrNHjZEoanbqPb65HPl5iojmiLgLzfGA/W3geVMMt8TI.jpg'} /></div>
					</Card>
					<Card size="s">
						<div style={{ width: 64, height: 96  }} />
					</Card>
					<Card size="s">
						<div style={{ width: 64, height: 96  }} />
					</Card>
					<Card size="s">
						<div style={{ width: 64, height: 96  }} />
					</Card>
					<Card size="s">
						<div style={{ width: 64, height: 96  }} />
					</Card>
				</CardScroll>
				<Button size="xl">Записаться</Button>
			</Group>
		</Group>
		<Group>
			<RichCell
				disabled
				multiline
				before={<Avatar size={72} mode="image" src={'https://sun9-63.userapi.com/yOEQYPHrNHjZEoanbqPb65HPl5iojmiLgLzfGA/W3geVMMt8TI.jpg'} />}
				text="Барбер высшей категории"
				caption="Салон BarberShop, 100 м от вас"
				after="1 500 ₽"
				actions={
					<React.Fragment>
						<Button>Записаться</Button>
					</React.Fragment>
				}
			>
				Вася Вакуленко
			</RichCell>
			<Group separator="hide" description="Предложения мастера">
				<CardScroll>
					<Card size="s">
						<div style={{ width: 64, height: 96 }} />
					</Card>
					<Card size="s">
						<div style={{ width: 64, height: 96  }} />
					</Card>
					<Card size="s">
						<div style={{ width: 64, height: 96  }} />
					</Card>
					<Card size="s">
						<div style={{ width: 64, height: 96  }} />
					</Card>
				</CardScroll>
			</Group>
		</Group>
	</Panel>
);



Offers.propTypes = {
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

export default Offers;
